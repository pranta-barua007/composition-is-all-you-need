"use client"

import { useRef, useState } from "react"
import { Composer } from "./composer"
import { Button } from "./ui/button"
import { Type } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface EditMessageComposerV2Props {
  initialMessage?: string
  userAvatar?: string
  userName?: string
  onCancel?: () => void
}

export function EditMessageComposer({
  initialMessage = "I should prep my React Universe talk",
  userAvatar,
  userName = "You",
  onCancel
}: EditMessageComposerV2Props) {
  const [state, setState] = useState({
    message: initialMessage,
    isSubmitting: false,
    showFormatting: true,
    showEmojis: false,
  })
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleSave = async () => {
    if (!state.message.trim()) return

    setState((prev) => ({ ...prev, isSubmitting: true }))
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setState((prev) => ({ ...prev, isSubmitting: false }))
  }

  const handleCancel = () => {
    setState((prev) => ({ ...prev, message: initialMessage }))
    onCancel && onCancel()
  }

  return (
    <Composer.Provider
      state={state}
      actions={{
        update: setState,
        submit: handleSave,
      }}
      meta={{ inputRef }}
    >
      <Composer.Frame>
        <Composer.Header>
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={userAvatar || "/placeholder.svg"} />
              <AvatarFallback className="text-xs">{userName.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
          </div>
          <Composer.TextFormat />
        </Composer.Header>

        <Composer.Input />

        <Composer.Footer>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Type className="h-4 w-4" />
            </Button>
            <Composer.Emojis />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleCancel}>
              Cancel
            </Button>
            <Button size="sm" onClick={handleSave} disabled={state.isSubmitting}>
              {state.isSubmitting ? "Saving..." : "Save"}
            </Button>
          </div>
        </Composer.Footer>
      </Composer.Frame>
    </Composer.Provider>
  )
}
