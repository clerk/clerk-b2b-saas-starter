import { cn } from "@/lib/utils"
export function TypographyH1({ children, className, ...props }: { children: React.ReactNode, className?: string } & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn("scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance", className)} {...props}>
      {children}
    </h1>
  )
}
export function TypographyH2({ children, className, ...props }: { children: React.ReactNode, className?: string } & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)} {...props}>
      {children}
    </h2>
  )
}


export function TypographyLead({ children, className, ...props }: { children: React.ReactNode, className?: string } & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-muted-foreground text-xl", className)} {...props}>
      {children}
    </p>
  )
}
