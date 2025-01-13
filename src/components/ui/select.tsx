import * as React from "react"
    import { ChevronDown } from "lucide-react"
    import { cn } from "@/lib/utils"

    const Select = React.forwardRef<
      HTMLSelectElement,
      React.SelectHTMLAttributes<HTMLSelectElement>
    >(({ className, ...props }, ref) => (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />
        <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
      </div>
    ))
    Select.displayName = "Select"

    const SelectTrigger = React.forwardRef<
      HTMLDivElement,
      React.HTMLAttributes<HTMLDivElement>
    >(({ className, children, ...props }, ref) => (
      <div
        ref={ref}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </div>
    ))
    SelectTrigger.displayName = "SelectTrigger"

    const SelectContent = React.forwardRef<
      HTMLDivElement,
      React.HTMLAttributes<HTMLDivElement>
    >(({ className, children, ...props }, ref) => (
      <div
        ref={ref}
        className={cn(
          "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
          className
        )}
        {...props}
      >
        {children}
      </div>
    ))
    SelectContent.displayName = "SelectContent"

    const SelectItem = React.forwardRef<
      HTMLDivElement,
      React.HTMLAttributes<HTMLDivElement>
    >(({ className, children, ...props }, ref) => (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </div>
    ))
    SelectItem.displayName = "SelectItem"

    const SelectValue = React.forwardRef<
      HTMLSpanElement,
      React.HTMLAttributes<HTMLSpanElement>
    >(({ className, children, ...props }, ref) => (
      <span
        ref={ref}
        className={cn("text-sm", className)}
        {...props}
      >
        {children}
      </span>
    ))
    SelectValue.displayName = "SelectValue"

    export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue }
