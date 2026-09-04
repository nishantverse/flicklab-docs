#!/usr/bin/env node
/**
 * Compiles MDX content files and reports syntax errors.
 * Read-only and safe to run concurrently, unlike a full `npm run build`.
 *
 *   node scripts/check-mdx.mjs                 # every file under content/
 *   node scripts/check-mdx.mjs content/story.mdx
 */
import { readdir, readFile } from 'node:fs/promises'
import { join, relative } from 'node:path'
import process from 'node:process'
import { compile } from '@mdx-js/mdx'

const ROOT = process.cwd()

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(entry => {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) return walk(full)
      return entry.name.endsWith('.mdx') ? [full] : []
    }),
  )
  return files.flat()
}

const args = process.argv.slice(2)
const targets = args.length ? args : await walk(join(ROOT, 'content'))

let failed = 0

for (const file of targets) {
  const label = relative(ROOT, file)
  try {
    const source = await readFile(file, 'utf8')
    await compile(source, { providerImportSource: '@mdx-js/react' })
    console.log(`ok    ${label}`)
  } catch (error) {
    failed += 1
    const place = error.line ? ` (line ${error.line}:${error.column ?? '?'})` : ''
    console.error(`FAIL  ${label}${place}\n      ${error.message}`)
  }
}

if (failed) {
  console.error(`\n${failed} file(s) failed to compile.`)
  process.exit(1)
}

console.log(`\n${targets.length} file(s) compiled cleanly.`)
