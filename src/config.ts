import type { Config } from 'prettier'
import type { Linter } from 'eslint'

type PrettierConfig = Config
type ESLintConfig = Linter.BaseConfig

type ConfigObjType = PrettierConfig | ESLintConfig
type ConfigFileNameType = '.prettierrc' | '.eslintrc'

const prettierConfig: PrettierConfig = {
  semi: false,
  singleQuote: true,
}

const eslintConfig: ESLintConfig = {
  extends: '@shapeng1998',
}

export interface ConfigProps {
  fileName: ConfigFileNameType
  obj: ConfigObjType
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
