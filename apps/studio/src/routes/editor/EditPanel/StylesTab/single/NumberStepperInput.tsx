import { useEditorEngine } from '@/components/Context';
import type { SingleStyle } from '@/lib/editor/styles/models';
import { parsedValueToString, stringToParsedValue } from '@/lib/editor/styles/numberUnit';
import { Icons } from '@onlook/ui/icons';
import { toast } from '@onlook/ui/use-toast';
import { observer } from 'mobx-react-lite';
import { type ChangeEvent, useEffect, useState } from 'react';

const NumberStepperInput = observer(
    ({
        elementStyle,
        onValueChange,
    }: {
        elementStyle: SingleStyle;
        onValueChange?: (key: string, value: string) => void;
    }) => {
        const editorEngine = useEditorEngine();
        const [numberValue, setNumberValue] = useState<string>('');
        const [prevNumberValue, setPrevNumberValue] = useState<string>('');

        useEffect(() => {
            const selectedStyle = editorEngine.style.selectedStyle;
            if (!selectedStyle) {
                return;
            }
            const newValue = elementStyle.getValue(selectedStyle.styles);
            const { numberVal } = stringToParsedValue(newValue, elementStyle.key === 'opacity');
            setNumberValue(numberVal);
        }, [editorEngine.style.selectedStyle]);

        const sendStyleUpdate = (newValue: string) => {
            editorEngine.style.update(elementStyle.key, newValue);
            onValueChange && onValueChange(elementStyle.key, newValue);
        };

        const handleNumberInputChange = (e: ChangeEvent<HTMLInputElement>) => {
            setNumberValue(e.currentTarget.value);

            const newNumber = e.currentTarget.value;
            const parsedNewNumber = Number.parseFloat(newNumber);
            const { min, max } = elementStyle.params || {};

            if (min !== undefined && parsedNewNumber < min) {
                toast({
                    title: `Invalid Input`,
                    description: `Value for ${elementStyle.displayName} cannot be less than ${min}`,
                    variant: 'destructive',
                });
                return;
            }

            if (max !== undefined && parsedNewNumber > max) {
                toast({
                    title: `Invalid Input`,
                    description: `Value for ${elementStyle.displayName} cannot be more than ${max}`,
                    variant: 'destructive',
                });
                return;
            }
        };

        const handleStepperClick = (direction: 'up' | 'down') => {
            const currentValue = Number.parseFloat(numberValue) || 0;
            const step = 1;
            const delta = direction === 'up' ? step : -step;
            const newNumber = currentValue + delta;
            const { min, max } = elementStyle.params || {};

            if (min !== undefined && newNumber < min) {
                toast({
                    title: 'Invalid Input',
                    description: `Value for ${elementStyle.displayName} cannot be less than ${min}.`,
                    variant: 'destructive',
                });
                return;
            }

            if (max !== undefined && newNumber > max) {
                toast({
                    title: 'Invalid Input',
                    description: `Value for ${elementStyle.displayName} cannot be greater than ${max}.`,
                    variant: 'destructive',
                });
                return;
            }

            const newValue = newNumber.toString();
            setNumberValue(newValue);
            sendStyleUpdate(newValue);
        };

        const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            if (e.currentTarget.value !== prevNumberValue) {
                const value = Number.parseFloat(numberValue).toString();
                sendStyleUpdate(value);
            }
            editorEngine.history.commitTransaction();
        };

        return (
            <div className="flex flex-row items-center justify-end text-xs w-32">
                <div className="flex flex-row items-center justify-between w-full">
                    <input
                        type="text"
                        placeholder="--"
                        value={numberValue}
                        onChange={handleNumberInputChange}
                        className="w-full p-[6px] px-2 border-none text-foreground-active bg-background-onlook/75 rounded text-start focus:outline-none focus:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        onFocus={() => {
                            setPrevNumberValue(numberValue);
                            editorEngine.history.startTransaction;
                        }}
                        onBlur={handleBlur}
                    />
                    <div className="flex flex-row items-center ml-1 bg-background-onlook/75 rounded h-[28px] overflow-clip">
                        <button
                            className="flex items-center justify-center h-full w-7 hover:bg-background-tertiary/50 text-foreground-onlook hover:text-foreground-active"
                            onClick={() => handleStepperClick('down')}
                            type="button"
                            aria-label="Decrease"
                        >
                            <span className="text-sm font-medium">−</span>
                        </button>
                        <div className="h-3 w-px bg-background-tertiary"></div>
                        <button
                            className="flex items-center justify-center h-full w-7 hover:bg-background-tertiary/50 text-foreground-onlook hover:text-foreground-active"
                            onClick={() => handleStepperClick('up')}
                            type="button"
                            aria-label="Increase"
                        >
                            <span className="text-sm font-medium">+</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    },
);

export default NumberStepperInput;
