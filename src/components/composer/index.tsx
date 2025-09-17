import { ComposerProvider } from "./composer-context"
import { ComposerFrame } from "./composer-frame"
import { ComposerHeader } from "./composer-header"
import { ComposerInput } from "./composer-input"
import { ComposerFooter } from "./composer-footer"
import { ComposerSubmit } from "./composer-submit"
import { ComposerTextFormat } from "./composer-text-format"
import { ComposerEmojis } from "./composer-emojis"
import { ComposerContext } from "./composer-context"
import { initialState } from "./composer-context"

export const Composer = {
  Provider: ComposerProvider,
  Frame: ComposerFrame,
  Header: ComposerHeader,
  Input: ComposerInput,
  Footer: ComposerFooter,
  Submit: ComposerSubmit,
  TextFormat: ComposerTextFormat,
  Emojis: ComposerEmojis,
  Context: ComposerContext,
  initialState
}
