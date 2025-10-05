"use client"

import type React from "react"

import { useComposer } from "./composer-context"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

interface ComposerSubmitProps {
  children?: React.ReactNode
}

export function ComposerSubmit({ children }: ComposerSubmitProps) {
  const { state, actions } = useComposer()

  return (
    <Button
      onClick={actions.submit}
      disabled={!state.message?.trim() || state.isSubmitting}
      size="sm"
      className="ml-auto"
    >
      {children || (
        <>
          <Send className="w-4 h-4 mr-1" />
          Send
        </>
      )}
    </Button>
  )
}
