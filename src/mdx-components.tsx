import type { MDXComponents } from 'mdx/types'

import ArchitectureDiagram from './components/doc/ArchitectureDiagram'
import Callout from './components/doc/Callout'
import { Card, CardGrid } from './components/doc/CardGrid'
import DocLead from './components/doc/DocLead'
import DocSection from './components/doc/DocSection'
import FlowDiagram from './components/doc/FlowDiagram'
import Placeholder from './components/doc/Placeholder'
import SmartLink from './components/doc/SmartLink'
import SpecTable from './components/doc/SpecTable'
import { Timeline, TimelineItem } from './components/doc/Timeline'

/**
 * Everything here is available inside every .mdx file without an import,
 * which keeps content files free of boilerplate.
 */
export const mdxComponents: MDXComponents = {
  a: SmartLink,
  ArchitectureDiagram,
  Callout,
  Card,
  CardGrid,
  DocLead,
  DocSection,
  FlowDiagram,
  Placeholder,
  SpecTable,
  Timeline,
  TimelineItem,
}
