import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ComposerFrameProps {
  children: ReactNode
  className?: string
}

export function ComposerFrame({ children, className }: ComposerFrameProps) {
  return <div className={cn("bg-card border border-border rounded-lg shadow-sm", className)}>{children}</div>
}
