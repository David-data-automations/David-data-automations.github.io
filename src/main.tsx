import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

type Capability = {
  number: string
  title: string
  description: string
  tags: string[]
}

type Project = {
  label: string
  title: string
  description: string
  outcome: string
  tags: string[]
  className: string
}

const capabilities: Capability[] = [
  {
    number: '01',
    title: 'Data platforms',
    description: 'Designing dependable source-to-report flows with traceable transformations, data quality checks, and documentation that supports the people operating them.',
    tags: ['Azure Data Factory', 'Python', 'SQL', 'Data quality'],
  },
  {
    number: '02',
    title: 'Decision systems',
    description: 'Turning operational data into dashboards, semantic models, KPIs, and concise reporting that makes the next action obvious.',
    tags: ['Power BI', 'DAX', 'Excel', 'Business reporting'],
  },
  {
    number: '03',
    title: 'Workflow automation',
    description: 'Reducing manual process load with API integrations, automated data pulls, human-in-the-loop validation, and repeatable operating procedures.',
    tags: ['APIs', 'Power Automate', 'Google APIs', 'PowerShell'],
  },
  {
    number: '04',
    title: 'Applied AI',
    description: 'Building practical agent workflows with memory, evaluation, logging, and tool connections to structured data and APIs.',
    tags: ['Gemini', 'ADK', 'MCP', 'Function calling'],
  },
]

const projects: Project[] = [
  {
    label: 'Cloud data engineering',
    title: 'From source data to reporting-ready models',
    description: 'A monitored Medallion pipeline that ingests CRM and finance data, applies Bronze → Silver → Gold transformations, and makes validation visible at every stage.',
    outcome: 'Built around traceability, reconciliation, failure investigation, and durable handoff documentation.',
    tags: ['Azure', 'ETL / ELT', 'CI/CD'],
    className: 'project-card project-card--signal',
  },
  {
    label: 'Operational intelligence',
    title: 'KPI reporting that connects activity to action',
    description: 'Business-ready dashboards and semantic models that translate reporting needs into clear measures, filters, source validation, and decision context.',
    outcome: 'Designed to replace fragmented reporting with an accountable operating view.',
    tags: ['Power BI', 'Dashboards', 'DAX'],
    className: 'project-card project-card--orbit',
  },
  {
    label: 'AI workflow automation',
    title: 'Agents with controls, context, and connective tissue',
    description: 'Autonomous data-processing workflows orchestrated with Python, Gemini, and ADK, with memory, evaluation, logging, MCP, and function calling.',
    outcome: 'Focused on useful automation rather than opaque automation.',
    tags: ['AI agents', 'MCP', 'APIs'],
    className: 'project-card project-card--grid',
  },
  {
    label: 'Spatial & financial analysis',
    title: 'Location-aware market intelligence',
    description: 'Geospatial segmentation and reporting that combine ArcGIS, open-data APIs, and financial-analysis workflows to prioritize high-value opportunities.',
    outcome: 'Brings location, operational detail, and decision criteria into one analytical frame.',
    tags: ['ArcGIS', 'APIs', 'Analytics'],
    className: 'project-card project-card--terrain',
  },
]

function ArrowUpRight() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M9 6h9v9" /></svg>
}

function Mark() {
  return <span className="mark" aria-label="David O.">D<span>O</span></span>
}

function Artifact({ className }: { className: string }) {
  return (
    <div className={`artifact ${className}`} aria-hidden="true">
      <span className="artifact__beam" />
      <span className="artifact__dot artifact__dot--one" />
      <span className="artifact__dot artifact__dot--two" />
      <span className="artifact__dot artifact__dot--three" />
      <span className="artifact__line artifact__line--one" />
      <span className="artifact__line artifact__line--two" />
    </div>
  )
}

function App() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero__noise" />
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="nav__brand" href="#top"><Mark /><span>David O.</span></a>
          <div className="nav__links">
            <a href="#work">Selected work</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#about">About</a>
          </div>
          <a className="nav__contact" href="mailto:davidolending@gmail.com">Start a conversation <ArrowUpRight /></a>
        </nav>

        <div className="hero__inner shell">
          <div className="eyebrow"><span className="status-dot" /> Available for data, automation & analytics projects</div>
          <h1>Build the <em>system</em><br />behind better decisions.</h1>
          <div className="hero__bottom">
            <p className="hero__intro">I create data systems that make complex operations more visible, more reliable, and easier to act on—across cloud pipelines, reporting, automation, and applied AI.</p>
            <a className="circle-link" href="#work" aria-label="Explore selected work"><ArrowUpRight /></a>
          </div>
        </div>
        <div className="hero__meter shell" aria-hidden="true"><span>DATA / SYSTEMS / AUTOMATION</span><span>01—04</span></div>
      </section>

      <section className="statement shell" id="about">
        <p className="section-kicker">A systems-first practice</p>
        <div className="statement__body">
          <h2>Good analysis is not a final slide. It is a <em>repeatable operating capability.</em></h2>
          <p>My work connects the layers between raw inputs and confident action: ingestion, transformation, validation, reporting, automation, and the documentation that lets a team trust what comes next.</p>
        </div>
      </section>

      <section className="work" id="work">
        <div className="shell work__heading">
          <p className="section-kicker">Selected work</p>
          <p>Four ways I turn operational complexity into clear, accountable systems.</p>
        </div>
        <div className="shell work__grid">
          {projects.map((project, index) => (
            <article className={project.className} key={project.title}>
              <div className="project-card__art"><Artifact className={`artifact--${index + 1}`} /></div>
              <div className="project-card__content">
                <div className="project-card__top"><span>{project.label}</span><span>0{index + 1}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-card__outcome">{project.outcome}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="shell evidence-strip" aria-label="Selected portfolio evidence">
          <figure>
            <img src="/assets/portfolio/automation-flow-run.png" alt="A successful Power Apps flow-run confirmation beside a multi-step automation workflow" />
            <figcaption><span>Automation proof</span>Completed multi-step workflow run</figcaption>
          </figure>
          <figure>
            <img src="/assets/portfolio/automation-execution-audit.png" alt="A 28-day workflow execution history with successful, cancelled, and successful test runs" />
            <figcaption><span>Operational proof</span>Execution history for a monitored flow</figcaption>
          </figure>
          <figure>
            <img src="/assets/portfolio/gis-false-color.png" alt="Side-by-side false-color and reference imagery used for geospatial interpretation" />
            <figcaption><span>Spatial analysis</span>False-color imagery compared with reference imagery</figcaption>
          </figure>
          <figure>
            <img src="/assets/portfolio/gis-elevation-trend.png" alt="Elevation measurements displayed over time for multiple monitored stations" />
            <figcaption><span>Monitoring</span>Time-series elevation review across stations</figcaption>
          </figure>
        </div>
        <p className="shell work__note">Portfolio evidence is curated from documented project work. Published artifacts exclude credentials, client-sensitive data, and operationally sensitive information.</p>
      </section>

      <section className="capabilities shell" id="capabilities">
        <div className="capabilities__heading">
          <p className="section-kicker">Capabilities</p>
          <h2>From a specific operational question to a system a team can use.</h2>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.number}>
              <span className="capability__number">{capability.number}</span>
              <div><h3>{capability.title}</h3><p>{capability.description}</p></div>
              <div className="capability__tags">{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="proof">
        <div className="shell proof__grid">
          <div className="proof__lead">
            <p className="section-kicker">Built on practical range</p>
            <h2>Cloud data engineering.<br />Operational analytics.<br /><em>Automated workflows.</em></h2>
          </div>
          <div className="proof__facts">
            <div><strong>Azure</strong><span>Data Factory · Medallion architecture · reliability checks</span></div>
            <div><strong>BI</strong><span>Power BI · semantic modeling · KPI reporting</span></div>
            <div><strong>Code</strong><span>Python · SQL · REST APIs · PowerShell · Git</span></div>
            <div><strong>Method</strong><span>Data quality · root-cause analysis · documentation</span></div>
          </div>
        </div>
      </section>

      <section className="resume shell">
        <p className="section-kicker">Education & credentials</p>
        <div className="resume__body">
          <h2>Data science, digital transformation, and delivery discipline.</h2>
          <div className="resume__items">
            <p><strong>B.S. Data Science</strong><br />Arizona State University</p>
            <p><strong>Microsoft credentials</strong><br />Azure Data Fundamentals (DP-900) · Power BI Data Analyst Associate (PL-300)</p>
            <p><strong>Additional foundations</strong><br />dbt · GitHub · ArcGIS/GIS · DevOps, Cloud & Agile</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="shell contact__inner">
          <p className="section-kicker">Let’s make the work more legible</p>
          <h2>Have an operational problem worth <em>untangling?</em></h2>
          <div className="contact__actions">
            <a className="button button--light" href="mailto:davidolending@gmail.com">davidolending@gmail.com <ArrowUpRight /></a>
            <a className="text-link" href="https://www.linkedin.com/in/davido-lending" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
            <a className="text-link" href="https://github.com/David-data-automations" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a href="#top"><Mark /></a>
        <span>© {new Date().getFullYear()} David O.</span>
        <span>Data systems & automation</span>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>,
)
