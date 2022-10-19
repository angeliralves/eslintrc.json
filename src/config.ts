import type { Config } from 'prettier'
import type { Linter } from 'eslint'

type PrettierConfig = Config
type ESLintConfig = Linter.BaseConfig

type ConfigObj = PrettierConfig | ESLintConfig
type ConfigFileName = '.prettierrc' | '.eslintrc'

const prettierConfig: PrettierConfig = {
  semi: false,
  singleQuote: true,
}

const eslintConfig: ESLintConfig = {
  extends: '@shapeng1998',
}

export interface ConfigProps {
  fileName: ConfigFileName
  obj: ConfigObj
}

export const configs: ConfigProps[] = [
  {
    fileName: '.prettierrc',
    obj: prettierConfig,
  },
  {
    fileName: '.eslintrc',
    obj: eslintConfig,
  },
]
