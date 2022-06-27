import { parseNi, run } from '@antfu/ni'
import { writeFile } from 'fs/promises'
import path from 'path'
import { eslintConfig, prettierConfig } from './config'
import type { ESLintConfig, PrettierConfig } from './config'

const writeConfigFile = async (
  configObj: PrettierConfig | ESLintConfig,
  configFileName: string
) => {
  const configFilePath = path.join(process.cwd(), configFileName)
  const configFileString = JSON.stringify(configObj, null, 2) + '\n'

  await writeFile(configFilePath, configFileString)
}

async function main() {
  const args = [
    '-D',
    'prettier',
    'eslint',
    'typescript',
    '@shapeng1998/eslint-config',
  ]

  await Promise.all([
    run(parseNi, args),
    writeConfigFile(prettierConfig, '.prettierrc'),
    writeConfigFile(eslintConfig, '.eslintrc'),
  ])
}

main().catch(console.error)
