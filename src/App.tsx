import 'lenis/dist/lenis.css'

import './index.css'
import './styles/site.css'
import './styles/docs.css'

import { Analytics } from '@vercel/analytics/react'
import { Route, Routes, useLocation } from 'react-router-dom'

import ArrStackDoc from '../content/services/arr-stack.mdx'
import JellyfinDoc from '../content/services/jellyfin.mdx'
import ProxmoxDoc from '../content/infrastructure/proxmox.mdx'
import StoryDoc from '../content/story.mdx'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollManager from './components/ScrollManager'
import { useReveal } from './hooks/useReveal'
import Contact from './pages/Contact'
import DocPage from './pages/DocPage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  const { pathname } = useLocation()

  // Re-arms the scroll reveal observer for whichever page just mounted.
  useReveal(pathname)

  return (
    <>
      <div className="page-noise" aria-hidden="true" />
      <ScrollManager />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<DocPage slug="/story" content={StoryDoc} />} />
        <Route
          path="/infrastructure/proxmox"
          element={<DocPage slug="/infrastructure/proxmox" content={ProxmoxDoc} />}
        />
        <Route
          path="/services/jellyfin"
          element={<DocPage slug="/services/jellyfin" content={JellyfinDoc} />}
        />
        <Route
          path="/services/arr-stack"
          element={<DocPage slug="/services/arr-stack" content={ArrStackDoc} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <Analytics />
    </>
  )
}

export default App
