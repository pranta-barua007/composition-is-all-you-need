"use client"

import { use } from "react"
import { Button } from "@/components/ui/button"
import { Composer } from "@/components/composer"

export function SaveDraftButton() {
  const context = use(Composer.Context)
  if (!context) throw new Error("SaveDraftButton must be used within a Composer.Provider")

  const { state } = context

  const handleSaveDraft = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    console.log("Draft saved!")
  }

  return (
    <Button variant="outline" size="sm" onClick={handleSaveDraft} disabled={state.isSubmitting}>
      Save Draft
    </Button>
  )
}
