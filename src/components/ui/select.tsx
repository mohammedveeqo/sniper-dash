import * as React from "react"
    import { ChevronDown } from "lucide-react"
    import { cn } from "@/lib/utils"

    const Select = React.forwardRef<
      HTMLSelectElement,
      React.SelectHTMLAttributes<HTMLSelectElement>
    >(({ className, children, ...props }, ref) => (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
      </div>
    ))
    Select.displayName = "Select"

    const SelectOption = React.forwardRef<
      HTMLOptionElement,
      React.OptionHTMLAttributes<HTMLOptionElement>
    >(({ className, children, ...props }, ref) => (
      <option
        ref={ref}
        className={cn(
          "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </option>
    ))
    SelectOption.displayName = "SelectOption"

    export { Select, SelectOption }
