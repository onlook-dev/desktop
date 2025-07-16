import { cn } from '@onlook/ui/utils';
import { observer } from 'mobx-react-lite';
import { useEditorEngine } from '../Context';

enum Variant {
    INFO = 'info',
    WARNING = 'warning',
    SUCCESS = 'success',
}

export const AnnouncementBanner = observer(({ variant = Variant.INFO }: { variant?: Variant }) => {
    const MESSAGE = 'Onlook is moving to the web';
    const editorEngine = useEditorEngine();

    const getVariantStyles = () => {
        switch (variant) {
            case 'warning':
                return 'bg-amber-600 dark:bg-amber-700 text-amber-50';
            case 'success':
                return 'bg-green-600 dark:bg-green-700 text-green-50';
            default:
                return 'bg-blue-800 dark:bg-blue-800 text-blue-300';
        }
    };

    return (
        <div
            className={cn(
                'w-full h-full flex flex-row items-center justify-center transition-colors duration-300 ease-in-out',
                getVariantStyles(),
            )}
        >
            <div className="flex flex-row items-center gap-2 text-sm">
                <span className="flex-1">{MESSAGE}</span>
                <span className="text-blue-300">•</span>
                <button
                    onClick={() => {
                        editorEngine.isAnnouncementOpen = true;
                    }}
                    className="no-drag underline text-blue-300 hover:text-blue-400"
                >
                    Learn more
                </button>
            </div>
        </div>
    );
});
