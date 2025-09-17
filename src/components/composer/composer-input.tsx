"use client"

import { useComposer } from "./composer-context"
import { cn } from "@/lib/utils"

interface ComposerInputProps {
  placeholder?: string
  className?: string
}

export function ComposerInput({ placeholder = "Type a message...", className }: ComposerInputProps) {
  const { state, actions, meta } = useComposer()

  const handleFormatting = (type: "bold" | "italic" | "code") => {
    const textarea = meta.inputRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = (state as any).message.substring(start, end)

    let formattedText = selectedText
    let wrapper = ""

    switch (type) {
      case "bold":
        wrapper = "**"
        break
      case "italic":
        wrapper = "*"
        break
      case "code":
        wrapper = "`"
        break
    }

    if (selectedText.startsWith(wrapper) && selectedText.endsWith(wrapper)) {
      formattedText = selectedText.slice(wrapper.length, -wrapper.length)
    } else {
      formattedText = `${wrapper}${selectedText}${wrapper}`
    }

    const newMessage =
      (state as any).message.substring(0, start) + formattedText + (state as any).message.substring(end)

    actions.update((current) => ({ ...current, message: newMessage }))

    setTimeout(() => {
      const newCursorPos = start + formattedText.length
      textarea.setSelectionRange(newCursorPos, newCursorPos)
      textarea.focus()
    }, 0)
  }

  return (
    <div className={cn("p-4", className)}>
      <textarea
        ref={meta.inputRef}
        value={(state as any).message || ""}
        onChange={(e) => actions.update((current) => ({ ...current, message: e.target.value }))}
        placeholder={placeholder}
        className="w-full min-h-[80px] resize-none bg-transparent border-0 outline-none text-foreground"
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            actions.submit?.()
          }
          if (e.metaKey || e.ctrlKey) {
            if (e.key === "b") {
              e.preventDefault()
              handleFormatting("bold")
            } else if (e.key === "i") {
              e.preventDefault()
              handleFormatting("italic")
            }
          }
        }}
      />
    </div>
  )
}
