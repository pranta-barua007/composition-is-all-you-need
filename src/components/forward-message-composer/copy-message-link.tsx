"use client"

import { Button } from "@/components/ui/button"

export function CopyMessageLink() {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleCopyLink}>
      Copy Link
    </Button>
  )
}
