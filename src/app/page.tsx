import { ForwardMessageDialog } from "@/components/forward-message-composer"
import { DMComposer } from "@/components/dm-composer"
import { ThreadReplyComposer } from "@/components/thread-reply-composer"
import { ChannelThreadComposer } from "@/components/channel-thread-composer"
import { EditMessageComposer } from "@/components/edit-message-composer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-4">Slack Composer Components</h1>
          <p className="text-muted-foreground mb-8">
            Demonstrating the composition pattern with 5 different Slack-style composer variants
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-3">1. DM Composer</h2>
              <p className="text-sm text-muted-foreground mb-3">Full toolbar with all attachment options</p>
              <DMComposer />
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">2. Thread Reply Composer</h2>
              <p className="text-sm text-muted-foreground mb-3">Reply with "Also send as DM" option</p>
              <ThreadReplyComposer />
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">3. Channel Thread Composer</h2>
              <p className="text-sm text-muted-foreground mb-3">Minimal toolbar for thread messages</p>
              <ChannelThreadComposer />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-3">4. Edit Message Composer</h2>
              <p className="text-sm text-muted-foreground mb-3">Edit existing message with Cancel/Save</p>
              <EditMessageComposer />
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">5. Forward Message Composer</h2>
              <p className="text-sm text-muted-foreground mb-3">Forward with original message context</p>
              <ForwardMessageDialog />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
