import { parseNi, run } from '@antfu/ni'
import { writeFile } from 'fs/promises'
import path from 'path'
import type { ConfigProps } from './config'
import { configs } from './config'

const writeConfigFile = async ({ fileName, obj }: ConfigProps) => {
  const configFilePath = path.join(process.cwd(), fileName)
  const configFileString = JSON.stringify(obj, null, 2) + '\n'

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

  await Promise.all([run(parseNi, args), ...configs.map(writeConfigFile)])
}

main().catch(console.error)
