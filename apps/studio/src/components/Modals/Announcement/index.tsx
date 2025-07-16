import { useEditorEngine } from '@/components/Context';
import { Button } from '@onlook/ui/button';
import { Icons } from '@onlook/ui/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';

export const AnnouncementModal = observer(() => {
    const editorEngine = useEditorEngine();

    return (
        <AnimatePresence>
            {editorEngine.isAnnouncementOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                        onClick={() => (editorEngine.isAnnouncementOpen = false)}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
                    >
                        <div className="bg-background border rounded-lg shadow-lg p-0 pointer-events-auto w-[480px]">
                            <div className="flex flex-row items-center justify-between p-4 border-b">
                                <h2 className="text-lg font-semibold">
                                    Onlook has moved to the Web
                                </h2>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => (editorEngine.isAnnouncementOpen = false)}
                                >
                                    <Icons.CrossL className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="p-6 text-sm">
                                <p>
                                    {
                                        "It's faster, easier, and has more tools for designing in code."
                                    }
                                </p>
                                <div className="bg-blue-900/20 border-blue-500/20 border rounded-lg p-4 mt-4">
                                    <h3 className="font-semibold text-white">Get 1 Month Free</h3>
                                    <p className="text-gray-400 mt-1">
                                        If you already have Onlook Pro, you get 1 free month on the
                                        Tier 1 plan. Just sign up for Onlook Web using the same
                                        email.
                                    </p>
                                    <Button
                                        className="mt-4 w-full"
                                        onClick={() => window.open('https://onlook.app', '_blank')}
                                    >
                                        Start designing in Onlook Web
                                        <Icons.ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                                <p className="text-xs text-center mt-4 text-gray-500">
                                    The desktop app will be sunset after August 31. Thanks for all
                                    of your feedback!
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
});
