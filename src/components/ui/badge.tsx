import * as React from "react"
    import { cn } from "@/lib/utils"

    const badgeVariants = {
      default: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      destructive: "bg-destructive text-destructive-foreground",
      warning: "bg-yellow-500 text-yellow-900",
      outline: "text-foreground"
    }

    const Badge = React.forwardRef<
      HTMLDivElement,
      React.HTMLAttributes<HTMLDivElement> & { variant?: keyof typeof badgeVariants }
    >(({ className, variant = "default", ...props }, ref) => (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          badgeVariants[variant],
          className
        )}
        {...props}
      />
    ))
    Badge.displayName = "Badge"

    export { Badge }
