"use client"

import { useComposer } from "./composer-context"
import { Button } from "@/components/ui/button"
import { Bold, Italic, Code } from "lucide-react"

export function ComposerTextFormat() {
  const { state, actions, meta } = useComposer()

  const applyFormatting = (type: "bold" | "italic" | "code") => {
    const textarea = meta.inputRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = state.message.substring(start, end)

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

    const newMessage = state.message.substring(0, start) + formattedText + state.message.substring(end)

    actions.update((current) => ({ ...current, message: newMessage }))

    setTimeout(() => {
      const newCursorPos = start + formattedText.length
      textarea.setSelectionRange(newCursorPos, newCursorPos)
      textarea.focus()
    }, 0)
  }

  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost" size="sm" onClick={() => applyFormatting("bold")} title="Bold (Cmd+B)">
        <Bold className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="sm" onClick={() => applyFormatting("italic")} title="Italic (Cmd+I)">
        <Italic className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="sm" onClick={() => applyFormatting("code")} title="Code">
        <Code className="w-4 h-4" />
      </Button>
    </div>
  )
}
