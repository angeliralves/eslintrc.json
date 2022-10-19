import { writeFile } from 'node:fs/promises'
import { parseNi, run } from '@antfu/ni'
import path from 'node:path'
import { configs } from './config'
import type { ConfigProps } from './config'

const writeConfigFile = async ({ fileName, obj }: ConfigProps) => {
  const configFilePath = path.join(process.cwd(), fileName)
  const configFileContent = JSON.stringify(obj, null, 2) + '\n'

  await writeFile(configFilePath, configFileContent)
}

async function main() {
  const args = [
    '-D',
    'prettier',
    'eslint',
    'typescript',
    '@shapeng1998/eslint-config',
  ]

  await Promise.all([run(parseNi, args), ...configs.map(writeConfigFile)])
}

main().catch(console.error)
