import type { Config } from 'prettier'
import type { Linter } from 'eslint'

export type PrettierConfig = Config
export type ESLintConfig = Linter.Config

export const prettierConfig: PrettierConfig = {
  semi: false,
  singleQuote: true,
}

export const eslintConfig: ESLintConfig = {
  extends: '@shapeng1998',
}
