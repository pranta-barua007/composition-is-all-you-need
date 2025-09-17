import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

interface MessagePreviewProps {
  originalMessage?: string
  originalAuthor?: string
  originalAuthorAvatar?: string
}

export function MessagePreview({
  originalMessage = "I should prep my React Universe talk",
  originalAuthor = "fernando",
  originalAuthorAvatar,
}: MessagePreviewProps) {
  return (
    <Card className="p-3 bg-muted/50">
      <div className="flex items-start gap-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src={originalAuthorAvatar || "/placeholder.svg"} />
          <AvatarFallback className="text-xs">{originalAuthor.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-sm font-medium">{originalAuthor}</div>
          <div className="text-sm text-muted-foreground">{originalMessage}</div>
        </div>
      </div>
    </Card>
  )
}
