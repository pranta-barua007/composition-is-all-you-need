"use client"

import { Composer } from "@/components/composer"

export function ForwardMessageComposer() {
    return (
        <Composer.Frame>
            <Composer.Header title="Forward Message">
                <Composer.TextFormat />
            </Composer.Header>
            <Composer.Input placeholder="Add a message, if you'd like." />
            <Composer.Footer>
                <div className="flex items-center gap-1">
                    <Composer.Emojis />
                </div>
                <div /> {/* Spacer - actions will be outside */}
            </Composer.Footer>
        </Composer.Frame>
    )
}
