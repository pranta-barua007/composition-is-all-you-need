"use client"

import type React from "react"
import { createContext, useContext, useState, useRef, type ReactNode } from "react"

interface ComposerState {
  message: string
  isSubmitting: boolean
  showFormatting: boolean
  showEmojis: boolean
  [key: string]: any // Allow additional state properties
}

interface ComposerContextType {
  state: ComposerState
  actions: {
    update: (updater: (current: ComposerState) => ComposerState) => void
    submit?: () => void
    [key: string]: any // Allow additional actions
  }
  meta: {
    inputRef: React.RefObject<HTMLTextAreaElement | null>
    [key: string]: any // Allow additional meta properties
  }
}

export const ComposerContext = createContext<ComposerContextType | undefined>(undefined)

export function useComposer() {
  const context = useContext(ComposerContext)
  if (!context) {
    throw new Error("useComposer must be used within a Composer.Provider")
  }
  return context
}

export const initialState: ComposerState = {
  message: "",
  isSubmitting: false,
  showFormatting: false,
  showEmojis: false,
}

interface ComposerProviderProps {
  children: ReactNode
  state?: ComposerState
  actions?: {
    update?: (updater: (current: ComposerState) => ComposerState) => void
    submit?: () => void
    [key: string]: any
  }
  meta?: {
    inputRef?: React.RefObject<HTMLTextAreaElement | null>
    [key: string]: any
  }
}

export function ComposerProvider({
  children,
  state: externalState,
  actions: externalActions = {},
  meta: externalMeta = {},
}: ComposerProviderProps) {
  const [internalState, setInternalState] = useState<ComposerState>(initialState)
  const internalInputRef = useRef<HTMLTextAreaElement>(null)

  const state = externalState || internalState
  const inputRef = externalMeta.inputRef || internalInputRef

  const defaultUpdate = (updater: (current: ComposerState) => ComposerState) => {
    if (externalActions.update) {
      externalActions.update(updater)
    } else {
      setInternalState((prev) => updater(prev))
    }
  }

  const defaultSubmit = () => {
    if (externalActions.submit) {
      externalActions.submit()
    } else {
      // Default submit behavior
      const message = state.message
      if (message?.trim()) {
        console.log("Submitting message:", message)
        defaultUpdate((current) => ({ ...current, message: "", isSubmitting: false }))
      }
    }
  }

  const actions = {
    update: defaultUpdate,
    submit: defaultSubmit,
    ...externalActions,
  }

  const meta = {
    inputRef,
    ...externalMeta,
  }

  return (
    <ComposerContext.Provider
      value={{
        state,
        actions,
        meta,
      }}
    >
      {children}
    </ComposerContext.Provider>
  )
}
