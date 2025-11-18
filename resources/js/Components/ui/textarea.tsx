import { forwardRef, useId } from "react"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    id?: any
    label?: string;
    error?: string;
    className?: string;
    placeholder: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({className = "", placeholder, label, error, id, ...props}, ref) => {
    const internalId = useId();
    const inputId = id ?? internalId;
    return (
        <div className="space-y-2">
        {label && (
            <label
                htmlFor={inputId}
                className="text-sm font-medium"
            >
                {label}
            </label>
        )}
        <textarea
            id={inputId}
            ref={ref}
            {...props}
            className={`flex h-20 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed
            placeholder:text-gray-400 bg-background disabled:opacity-50 md:text-sm ${className}`}
            placeholder={placeholder}
            >
            </textarea>
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>

    
        )
    }
)

export default Textarea;