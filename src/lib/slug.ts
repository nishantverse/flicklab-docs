/** Turns a section heading into a stable, URL-safe anchor id. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/['’"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
