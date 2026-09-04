import { projects, type Project } from '../data/site'
import SiteLink from './SiteLink'

const ProjectBody = ({ project }: { project: Project }) => (
  <>
    <span className="project-mark" aria-hidden="true">
      {project.mark}
    </span>
    <small>{project.category}</small>
    <h3>{project.title}</h3>
    <p>{project.copy}</p>
    <footer>{project.meta}</footer>
  </>
)

/** Linked only when the project has somewhere real to go. */
const ProjectCard = ({ project }: { project: Project }) =>
  project.href ? (
    <SiteLink to={project.href} className="project is-link">
      <ProjectBody project={project} />
    </SiteLink>
  ) : (
    <article className="project">
      <ProjectBody project={project} />
    </article>
  )

const Projects = () => (
  <section className="projects container reveal" id="projects">
    <div className="section-kicker">Infrastructure</div>
    <div className="section-heading">
      <h2>Active Projects.</h2>
      <p>Things I&apos;m building, running, breaking, fixing, and documenting.</p>
    </div>
    <div className="project-grid">
      {projects.map(project => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </div>
  </section>
)

export default Projects
