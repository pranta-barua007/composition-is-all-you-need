"use client"

import { useComposer } from "./composer-context"
import { cn } from "@/lib/utils"

interface ComposerInputProps {
  placeholder?: string
  className?: string
}

export function ComposerInput({ placeholder = "Type a message...", className }: ComposerInputProps) {
  const { state, actions, meta } = useComposer()

  return (
    <div className={cn("p-4", className)}>
      <textarea
        ref={meta.inputRef}
        value={state.message || ""}
        onChange={(e) => actions.update((current) => ({ ...current, message: e.target.value }))}
        placeholder={placeholder}
        className="w-full min-h-[80px] resize-none bg-transparent border-0 outline-none text-foreground"
      />
    </div>
  )
}
