import { useEditorEngine } from '@/components/Context';
import type { FrameSettings } from '@onlook/models/projects';
import { Button } from '@onlook/ui/button';
import { Icons } from '@onlook/ui/icons/index';
import { Separator } from '@onlook/ui/separator';
import DeviceSettings from './DeviceSettings';
import FrameDimensions from './FrameDimensions';

const WindowSettings = ({
    setIsOpen,
    settings,
}: {
    setIsOpen: (isOpen: boolean) => void;
    settings: FrameSettings;
}) => {
    const editorEngine = useEditorEngine();

    return (
        <div className="flex flex-col w-[248px] min-w-[248px] h-full">
            <div className="flex flex-col gap-3 px-0.5 py-0.5">
                <div className="flex flex-row gap-1">
                    <Button
                        variant={'outline'}
                        className="h-fit py-2 px-2.5 text-foreground-tertiary w-full items-center"
                        onClick={() => editorEngine.duplicateWindow(settings.id)}
                    >
                        <Icons.Copy className="mr-2" />
                        <span className="text-xs">Duplicate</span>
                    </Button>
                    <Button
                        variant={'outline'}
                        className="h-fit py-2 px-2.5 text-foreground-tertiary w-full items-center"
                        disabled={!editorEngine.canDeleteWindow()}
                        onClick={() => editorEngine.deleteWindow(settings.id)}
                    >
                        <Icons.Trash className="mr-2" />
                        <span className="text-xs">Delete</span>
                    </Button>
                </div>
                <Separator />
                <FrameDimensions settings={settings} />
                <Separator />
                <DeviceSettings settings={settings} />
            </div>
        </div>
    );
};

export default WindowSettings;
