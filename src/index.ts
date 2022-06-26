import { parseNi, run } from '@antfu/ni'
import { writeFile } from 'fs/promises'
import path from 'path'
import type { Config } from 'prettier'

async function main() {
  const prettierConfig: Config = {
    semi: false,
    singleQuote: true,
  }
  const file = path.join(process.cwd(), '.prettierrc')
  await writeFile(file, JSON.stringify(prettierConfig, null, 2))

  const args = ['-D', 'prettier', 'eslint', '@shapeng1998/eslint-config']
  await run(parseNi, args)
}

main().catch(console.error)
