import { forwardRef, useId } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: any
    label?: string;
    error?: string;
    className?: string;
    placeholder: string;
    type: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({className = "", placeholder, label, error, id, type, ...props}, ref) => {
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
        <input
            id={inputId}
            ref={ref}
            {...props}
            type={type}
            className={`flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed
            placeholder:text-gray-400 bg-background disabled:opacity-50 md:text-sm ${className}`}
            placeholder={placeholder}
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>

    
        )
    }
)

Input.displayName = "Input";
export default Input;