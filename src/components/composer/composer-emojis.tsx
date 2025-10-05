"use client"

import { useComposer } from "./composer-context"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Smile } from "lucide-react"
import dynamic from "next/dynamic"
import { useState } from "react"

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false })

export function ComposerEmojis() {
  const { state, actions, meta } = useComposer()
  const [isOpen, setIsOpen] = useState(false)
  
  const handleEmojiClick = (emojiData: any) => {
    const textarea = meta.inputRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const emoji = emojiData.emoji

    const newMessage = state.message.substring(0, start) + emoji + state.message.substring(end)

    actions.update((current) => ({ ...current, message: newMessage }))

    setTimeout(() => {
      const newCursorPos = start + emoji.length
      textarea.setSelectionRange(newCursorPos, newCursorPos)
      textarea.focus()
    }, 0)

    setIsOpen(false)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          <Smile className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          width={350}
          height={400}
          searchDisabled={false}
          skinTonesDisabled={false}
          previewConfig={{
            showPreview: false,
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
