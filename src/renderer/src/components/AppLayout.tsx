import { cn } from "@renderer/utils"
import { ComponentProps, forwardRef } from "react"

export function RootLayout({ className, children, ...args }: ComponentProps<"main">) {
    return (
        <main className={cn('flex flex-row h-screen', className)} {...args}>
            {children}
        </main>
    )
}

export function SideBar({ className, children, ...args }: ComponentProps<"aside">) {
    return (
        <aside className={cn('w-[250px] h-[100vh+10px] overflow-auto', className)} {...args}>
            {children}
        </aside>
    )
}


export const Content = forwardRef<HTMLDivElement, ComponentProps<"div">>(
    ({ className, children, ...args }, ref) => {
        return (
            <div ref={ref} className={cn('flex-1 overflow-auto', className)} {...args}>
                {children}
            </div>
        );
    }
);
Content.displayName = 'Content'