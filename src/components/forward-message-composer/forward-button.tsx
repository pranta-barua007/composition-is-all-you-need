"use client"

import { use } from "react"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { Composer } from "@/components/composer"

export function ForwardButton() {
  const context = use(Composer.Context)
  if (!context) throw new Error("ForwardButton must be used within a Composer.Provider")

  const { state, actions } = context;

  return (
    <Button size="sm" onClick={() => actions.submit && actions.submit()} disabled={state.isSubmitting}>
      <Send className="mr-2 h-4 w-4" />
      {context.state.isSubmitting ? "Forwarding..." : "Forward"}
    </Button>
  )
}
