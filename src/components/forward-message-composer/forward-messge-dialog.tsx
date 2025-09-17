import { ForwardMessageProvider } from "./forward-message-provider"
import { ForwardMessageComposer } from "./forward-message-composer"
import { MessagePreview } from "./message-preview"
import { CopyMessageLink } from "./copy-message-link"
import { SaveDraftButton } from "./save-draft-button"
import { ForwardButton } from "./forward-button"

export function ForwardMessageDialog() {
  return (
    <ForwardMessageProvider>
      <div className="space-y-4">
        {/* Composer input area */}
        <ForwardMessageComposer />

        {/* Message preview - outside composer but inside provider */}
        <MessagePreview />
        
        {/* Actions - outside composer but can access context */}
        <div className="flex items-center justify-between pt-2 border-t">
          <CopyMessageLink />
          <div className="flex items-center gap-2">
            <SaveDraftButton />
            <ForwardButton />
          </div>
        </div>
      </div>
    </ForwardMessageProvider>
  )
}
