import type { ReactNode } from "react"

interface ComposerHeaderProps {
  children?: ReactNode
  title?: string
}

export function ComposerHeader({ children, title }: ComposerHeaderProps) {
  return (
    <div className="px-4 py-3 border-b border-border bg-muted/30">
      {children || <h3 className="font-semibold text-sm text-foreground">{title || "Edit Message"}</h3>}
    </div>
  )
}
