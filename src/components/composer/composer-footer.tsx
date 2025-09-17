import type { ReactNode } from "react"

interface ComposerFooterProps {
  children: ReactNode
}

export function ComposerFooter({ children }: ComposerFooterProps) {
  return (
    <div className="px-4 py-3 border-t border-border bg-muted/20 flex items-center justify-between gap-2">
      {children}
    </div>
  )
}
