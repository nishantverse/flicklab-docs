import { MDXProvider } from '@mdx-js/react'
import type { MDXContent } from 'mdx/types'
import DocLayout from '../components/doc/DocLayout'
import { getDoc } from '../data/docs'
import { mdxComponents } from '../mdx-components'

type DocPageProps = {
  /** Registry key, e.g. "/infrastructure/proxmox". */
  slug: string
  content: MDXContent
}

/** Renders one MDX document inside the shared documentation shell. */
const DocPage = ({ slug, content: Content }: DocPageProps) => (
  <main className="doc-main">
    <MDXProvider components={mdxComponents}>
      <DocLayout meta={getDoc(slug)}>
        <Content />
      </DocLayout>
    </MDXProvider>
  </main>
)

export default DocPage
