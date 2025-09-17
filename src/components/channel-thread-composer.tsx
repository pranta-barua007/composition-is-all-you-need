"use client"

import { useRef, useState } from "react"
import { Composer } from "./composer"
import { Button } from "./ui/button"
import { Type, AtSign } from "lucide-react"

export function ChannelThreadComposer() {
  const [state, setState] = useState({
    message: "",
    isSubmitting: false,
    showFormatting: true,
    showEmojis: false,
  })
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleSend = async () => {
    if (!state.message.trim()) return

    setState((prev) => ({ ...prev, isSubmitting: true }))
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setState((prev) => ({ ...prev, message: "", isSubmitting: false }))
  }

  return (
    <Composer.Provider
      state={state}
      actions={{
        update: setState,
        submit: handleSend,
      }}
      meta={{ inputRef }}
    >
      <Composer.Frame>
        <Composer.Header>
          <Composer.TextFormat />
        </Composer.Header>

        <Composer.Input placeholder="Add a message, if you'd like." />

        <Composer.Footer>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Type className="h-4 w-4" />
            </Button>
            <Composer.Emojis />
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <AtSign className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-1">
            <Composer.Submit />
          </div>
        </Composer.Footer>
      </Composer.Frame>
    </Composer.Provider>
  )
}
