"use client"

import { useState } from "react"
import { Composer } from "@/components/composer"

interface ForwardMessageProviderProps {
  children: React.ReactNode
}

function useForwardMessage() {
  return async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Message forwarded!")
  }
}

export function ForwardMessageProvider({ children }: ForwardMessageProviderProps) {
    const [state, setState] = useState(Composer.initialState);
    const forwardMessage = useForwardMessage();
    
    return (
        <Composer.Provider
            state={state}
            actions={{
                update: setState,
                submit: forwardMessage,
            }}
        >
            {children}
        </Composer.Provider>
    )
}