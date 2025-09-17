"use client"

import { useRef, useState } from "react"
import { Composer } from "./composer"
import { Button } from "./ui/button"
import { ChevronDown, Plus, Type, AtSign, Paperclip, Mic, Hash } from "lucide-react"
import { Checkbox } from "./ui/checkbox"

export function ThreadReplyComposer() {
  const [state, setState] = useState({
    message: "",
    isSubmitting: false,
    showFormatting: true,
    showEmojis: false,
  })
  const [alsoSendAsDM, setAlsoSendAsDM] = useState(false)
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

        <Composer.Input placeholder="Reply..." />

        <div className="px-3 py-2 border-t">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="also-send-dm"
              checked={alsoSendAsDM}
              onCheckedChange={(checked) => setAlsoSendAsDM(!!checked)}
            />
            <label htmlFor="also-send-dm" className="text-sm text-muted-foreground">
              Also send as direct message
            </label>
          </div>
        </div>

        <Composer.Footer>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Type className="h-4 w-4" />
            </Button>
            <Composer.Emojis />
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <AtSign className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Mic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Hash className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-1">
            <Composer.Submit />
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </Composer.Footer>
      </Composer.Frame>
    </Composer.Provider>
  )
}
