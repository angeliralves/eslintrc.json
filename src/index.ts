import { parseNi, run } from '@antfu/ni'
import { writeFile } from 'fs/promises'
import path from 'path'
import type { Config } from 'prettier'
import type { Linter } from 'eslint'

const writePrettierConfigFile = async () => {
  const prettierConfig: Config = {
    semi: false,
    singleQuote: true,
  }
  const prettierConfigFile = path.join(process.cwd(), '.prettierrc')
  await writeFile(
    prettierConfigFile,
    JSON.stringify(prettierConfig, null, 2) + '\n'
  )
}

const writeEslintConfigFile = async () => {
  const eslintConfig: Linter.Config = {
    extends: '@shapeng1998',
  }
  const eslintConfigFile = path.join(process.cwd(), '.eslintrc')
  await writeFile(
    eslintConfigFile,
    JSON.stringify(eslintConfig, null, 2) + '\n'
  )
}

async function main() {
  await Promise.all([writePrettierConfigFile(), writeEslintConfigFile()])

  const args = [
    '-D',
    'prettier',
    'eslint',
    'typescript',
    '@shapeng1998/eslint-config',
  ]
  await run(parseNi, args)
}

main().catch(console.error)
