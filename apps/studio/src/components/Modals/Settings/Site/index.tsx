import { useEditorEngine, useProjectsManager } from '@/components/Context';
import { useMetadataForm } from '@/hooks/useMetadataForm';
import { DefaultSettings, type ImageContentData, type PageMetadata } from '@onlook/models';
import { MainChannels } from '@onlook/models/constants';
import { invokeMainChannel } from '@/lib/utils';
import { toast } from '@onlook/ui/use-toast';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { MetadataForm } from './MetadataForm';

export const SiteTab = observer(() => {
    const editorEngine = useEditorEngine();
    const projectsManager = useProjectsManager();
    const project = projectsManager.project;
    const siteSetting = project?.metadata;
    const baseUrl = project?.domains?.custom?.url ?? project?.domains?.base?.url ?? project?.url;

    const {
        title,
        description,
        isDirty,
        uploadedImage,
        handleTitleChange,
        handleDescriptionChange,
        handleImageSelect,
        handleDiscard,
        setIsDirty,
    } = useMetadataForm({
        initialMetadata: siteSetting ?? undefined,
    });

    const [uploadedFavicon, setUploadedFavicon] = useState<File | null>(null);

    const handleFaviconSelect = (file: File) => {
        setUploadedFavicon(file);
        setIsDirty(true);
    };

    const handleSave = async () => {
        if (!project) {
            return;
        }
        try {
            const updatedMetadata: PageMetadata = {
                ...siteSetting,
                title,
                description,
            };

            if (!siteSetting?.metadataBase) {
                const url = baseUrl?.startsWith('http') ? baseUrl : `https://${baseUrl}`;
                if (url) {
                    updatedMetadata.metadataBase = new URL(url);
                }
            }

            if (uploadedFavicon) {
                // Delete old favicon if it exists
                if (siteSetting?.icons?.icon) {
                    const oldFavicon = editorEngine.image.assets.find(
                        (image) => image.fileName === 'favicon.ico',
                    );
                    if (oldFavicon) {
                        try {
                            await invokeMainChannel(MainChannels.DELETE_IMAGE_FROM_PROJECT, {
                                projectFolder: project.folderPath,
                                image: oldFavicon,
                            });
                        } catch (error) {
                            console.warn('Failed to delete old favicon:', error);
                        }
                    }
                }

                const buffer = await uploadedFavicon.arrayBuffer();
                const base64String = btoa(
                    new Uint8Array(buffer).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        '',
                    ),
                );

                const image: ImageContentData = {
                    content: base64String,
                    fileName: 'favicon.ico',
                    mimeType: 'image/x-icon',
                };

                await invokeMainChannel(MainChannels.SAVE_IMAGE_TO_PROJECT, {
                    projectFolder: project.folderPath,
                    image,
                });

                updatedMetadata.icons = {
                    icon: '/favicon.ico',
                };
            }
            if (uploadedImage) {
                await editorEngine.image.upload(uploadedImage);
                const imagePath = `/${DefaultSettings.IMAGE_FOLDER.replace(/^public\//, '')}/${uploadedImage.name}`;
                updatedMetadata.openGraph = {
                    ...updatedMetadata.openGraph,
                    title: title,
                    description: description,
                    url: baseUrl || '',
                    siteName: title,
                    images: [
                        {
                            url: imagePath,
                            width: 1200,
                            height: 630,
                            alt: title,
                        },
                    ],
                    type: 'website',
                };
            }

            projectsManager.updatePartialProject({
                ...project,
                metadata: updatedMetadata,
            });

            await editorEngine.pages.updateMetadataPage('/', updatedMetadata);
            await editorEngine.image.scanImages();

            setUploadedFavicon(null);
            setIsDirty(false);
            toast({
                title: 'Success',
                description: 'Site metadata has been updated successfully.',
            });
        } catch (error) {
            console.error('Failed to update metadata:', error);
            toast({
                title: 'Error',
                description: 'Failed to update site metadata. Please try again.',
                variant: 'destructive',
            });
        }
    };

    return (
        <div className="text-sm">
            <div className="flex flex-col gap-2 p-6">
                <h2 className="text-lg">Site Settings</h2>
            </div>
            <MetadataForm
                title={title}
                description={description}
                isDirty={isDirty}
                projectUrl={baseUrl}
                onTitleChange={handleTitleChange}
                onDescriptionChange={handleDescriptionChange}
                onImageSelect={handleImageSelect}
                onFaviconSelect={handleFaviconSelect}
                onDiscard={handleDiscard}
                onSave={handleSave}
                showFavicon={true}
                currentMetadata={siteSetting ?? undefined}
            />
        </div>
    );
});
