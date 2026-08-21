import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

type Capability = {
  number: string
  title: string
  description: string
  tags: string[]
  caseId: string
}

type EvidenceFrame = {
  step: string
  stage: string
  title: string
  description: string
  tool: string
  image: string
  alt: string
}

type ProcessStep = {
  title: string
  description: string
}

type Project = {
  id: string
  label: string
  title: string
  description: string
  outcome: string
  tags: string[]
  className: string
  focus: string
  process: ProcessStep[]
  proof: string[]
  evidence: EvidenceFrame[]
}

const capabilities: Capability[] = [
  {
    number: '01',
    title: 'Data platforms',
    description: 'Designing dependable source-to-report flows with traceable transformations, data quality checks, and documentation that supports the people operating them.',
    tags: ['Azure Data Factory', 'Python', 'SQL', 'Data quality'],
    caseId: 'data-platform',
  },
  {
    number: '02',
    title: 'Decision systems',
    description: 'Turning operational data into dashboards, semantic models, KPIs, and concise reporting that makes the next action obvious.',
    tags: ['Power BI', 'DAX', 'Excel', 'Business reporting'],
    caseId: 'operational-intelligence',
  },
  {
    number: '03',
    title: 'Workflow automation',
    description: 'Reducing manual process load with API integrations, automated data pulls, human-in-the-loop validation, and repeatable operating procedures.',
    tags: ['APIs', 'Power Automate', 'Google APIs', 'PowerShell'],
    caseId: 'ai-workflow-automation',
  },
  {
    number: '04',
    title: 'Applied AI',
    description: 'Building practical agent workflows with memory, evaluation, logging, and tool connections to structured data and APIs.',
    tags: ['Gemini', 'ADK', 'MCP', 'Function calling'],
    caseId: 'ai-workflow-automation',
  },
]

const projects: Project[] = [
  {
    id: 'data-platform',
    label: 'Cloud data engineering',
    title: 'From source data to reporting-ready models',
    description: 'A monitored Medallion pipeline that ingests CRM and finance data, applies Bronze → Silver → Gold transformations, and makes validation visible at every stage.',
    outcome: 'Built around traceability, reconciliation, failure investigation, and durable handoff documentation.',
    tags: ['Azure', 'ETL / ELT', 'CI/CD'],
    className: 'project-card project-card--signal',
    focus: 'A focused view of the operating path from source context to reporting-ready models.',
    process: [
      { title: 'Frame sources', description: 'Clarify the incoming systems, reporting questions, and operating constraints.' },
      { title: 'Transform deliberately', description: 'Prepare traceable transformation stages and durable data-model foundations.' },
      { title: 'Validate visibly', description: 'Make activity, monitoring, and failure investigation reviewable.' },
      { title: 'Carry forward', description: 'Document the handoff context that supports reporting and operations.' },
    ],
    proof: ['Traceability before convenience', 'Visible validation paths', 'Documented operating handoffs'],
    evidence: [
      {
        step: '01',
        stage: 'Build & monitor',
        title: 'Data-platform review environment',
        description: 'A sanitized platform view used to make pipeline activity and the operating surface visible during implementation review.',
        tool: 'Azure data platform',
        image: '/assets/portfolio/cloud-data-platform-redacted.png',
        alt: 'Sanitized Azure Data Factory portfolio demonstration environment with neutral labels and monitoring charts',
      },
    ],
  },
  {
    id: 'operational-intelligence',
    label: 'Operational intelligence',
    title: 'KPI reporting that connects activity to action',
    description: 'Business-ready dashboards and semantic models that translate reporting needs into clear measures, filters, source validation, and decision context.',
    outcome: 'Designed to replace fragmented reporting with an accountable operating view.',
    tags: ['Power BI', 'Dashboards', 'DAX'],
    className: 'project-card project-card--orbit',
    focus: 'A focused view of translating operating questions into an accountable reporting workflow.',
    process: [
      { title: 'Frame decisions', description: 'Translate recurring operating questions into reviewable fields, measures, and decision context.' },
      { title: 'Configure the model', description: 'Establish a managed workspace and a clear path from data to reporting.' },
      { title: 'Review before release', description: 'Check the reporting path and visible ownership before it becomes operational.' },
      { title: 'Make action legible', description: 'Present a concise operating view that helps the next decision become clear.' },
    ],
    proof: ['Clear ownership paths', 'Reviewable configuration', 'Decision-oriented context'],
    evidence: [
      {
        step: '01',
        stage: 'Configure',
        title: 'Operational workspace configuration',
        description: 'A sanitized configuration view illustrating how an analytics flow is managed before it supports reporting and operating review.',
        tool: 'Power Platform',
        image: '/assets/portfolio/operational-intelligence-redacted.png',
        alt: 'Sanitized Power Apps portfolio workspace with generic analytics flow labels',
      },
    ],
  },
  {
    id: 'ai-workflow-automation',
    label: 'AI workflow automation',
    title: 'Agents with controls, context, and connective tissue',
    description: 'Autonomous data-processing workflows orchestrated with Python, Gemini, and ADK, with memory, evaluation, logging, MCP, and function calling.',
    outcome: 'Focused on useful automation rather than opaque automation.',
    tags: ['AI agents', 'MCP', 'APIs'],
    className: 'project-card project-card--grid',
    focus: 'A focused view of controlled automation: trigger, orchestrate, review, and improve.',
    process: [
      { title: 'Trigger intentionally', description: 'Start repeatable work from a defined event or operating condition.' },
      { title: 'Orchestrate with context', description: 'Route work, connect tools, and retain a clear handoff path.' },
      { title: 'Review outcomes', description: 'Keep execution history visible so work can be checked and understood.' },
      { title: 'Improve the loop', description: 'Use observed run patterns to guide the next iteration.' },
    ],
    proof: ['Controlled handoffs', 'Visible execution history', 'Human review where it matters'],
    evidence: [
      {
        step: '01',
        stage: 'Build',
        title: 'Flow structure and completed run',
        description: 'A multi-step workflow paired with a completed run confirmation, showing the connection between designed logic and observable execution.',
        tool: 'Workflow automation',
        image: '/assets/portfolio/automation-flow-run.png',
        alt: 'Workflow automation diagram beside a completed flow-run confirmation',
      },
      {
        step: '02',
        stage: 'Review',
        title: 'Execution history for iterative review',
        description: 'A selected execution-history view used to review recurring flow behavior and support the next operational refinement.',
        tool: 'Execution monitoring',
        image: '/assets/portfolio/automation-execution-audit.png',
        alt: 'Workflow execution history with selected flow-run records',
      },
    ],
  },
  {
    id: 'spatial-financial-analysis',
    label: 'Spatial & financial analysis',
    title: 'Location-aware market intelligence',
    description: 'Geospatial segmentation and reporting that combine ArcGIS, open-data APIs, and financial-analysis workflows to prioritize high-value opportunities.',
    outcome: 'Brings location, operational detail, and decision criteria into one analytical frame.',
    tags: ['ArcGIS', 'APIs', 'Analytics'],
    className: 'project-card project-card--terrain',
    focus: 'A focused view of using imagery and monitored trends to add location context to analysis.',
    process: [
      { title: 'Observe context', description: 'Compare visual bands and reference context for geospatial interpretation.' },
      { title: 'Segment signals', description: 'Connect location-aware signals to analytical segments and decision criteria.' },
      { title: 'Monitor patterns', description: 'Review station-oriented movement and trends over time.' },
      { title: 'Prioritize deliberately', description: 'Use location and trend context to support opportunity evaluation.' },
    ],
    proof: ['Context-rich comparison', 'Trend-aware monitoring', 'Decision criteria made visible'],
    evidence: [
      {
        step: '01',
        stage: 'Observe',
        title: 'False-color comparison for interpretation',
        description: 'A selected imagery comparison used to make spectral variation easier to interpret alongside the reference view.',
        tool: 'Geospatial imagery',
        image: '/assets/portfolio/gis-false-color.png',
        alt: 'False-color imagery displayed beside a reference image for geospatial interpretation',
      },
      {
        step: '02',
        stage: 'Monitor',
        title: 'Elevation trend review',
        description: 'A time-series review of elevation measurements across monitored stations, used to keep movement patterns visible over time.',
        tool: 'Trend analysis',
        image: '/assets/portfolio/gis-elevation-trend.png',
        alt: 'Elevation measurements displayed over time across monitored stations',
      },
    ],
  },
]

function ArrowUpRight() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M9 6h9v9" /></svg>
}

function ArrowLeft() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m7-7-7 7 7 7" /></svg>
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

function Contact() {
  return (
    <section className="contact" id="contact" tabIndex={-1}>
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
  )
}

function Footer() {
  return <footer className="footer shell"><a href="#top"><Mark /></a><span>© {new Date().getFullYear()} David O.</span><span>Data systems & automation</span></footer>
}

function CaseStudy({ project, onBack, onNext, onNavigate, onOpenProfile }: { project: Project; onBack: () => void; onNext: () => void; onNavigate: (sectionId: string) => void; onOpenProfile: () => void }) {
  return (
    <main className="case-study" id="top">
      <section className="case-study__hero">
        <nav className="nav shell" aria-label="Case-study navigation">
          <button className="nav__brand nav__brand--button" onClick={onBack} aria-label="Return to the portfolio home page"><Mark /><span>David O.</span></button>
          <div className="nav__links"><button onClick={() => onNavigate('work')}>Selected work</button><button onClick={() => onNavigate('capabilities')}>Capabilities</button><button onClick={onOpenProfile}>About</button></div>
          <button className="nav__contact nav__contact--button" onClick={() => onNavigate('contact')}>Start a conversation <ArrowUpRight /></button>
        </nav>
        <div className="shell case-study__intro">
          <button className="back-link" onClick={onBack}><ArrowLeft /> Back to Work Gallery</button>
          <p className="eyebrow">UI-03-CARD-{projects.indexOf(project) + 1 < 10 ? `0${projects.indexOf(project) + 1}` : projects.indexOf(project) + 1} / {project.label}</p>
          <h1>{project.title}</h1>
          <p className="case-study__summary">{project.focus}</p>
          <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
      </section>

      <section className="case-system shell" aria-labelledby="system-map-heading">
        <div className="case-section-heading"><p className="section-kicker">System map</p><h2 id="system-map-heading">How the work moves from context to action.</h2></div>
        <div className="process-map">
          {project.process.map((step, index) => <article className="process-step" key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}
        </div>
      </section>

      <section className="case-proof">
        <div className="shell case-proof__grid">
          <div><p className="section-kicker">Qualitative proof</p><h2>Built for a process people can <em>follow, review, and use.</em></h2></div>
          <div className="case-proof__facts">{project.proof.map((proof, index) => <article key={proof}><span>0{index + 1}</span><p>{proof}</p></article>)}</div>
        </div>
      </section>

      <section className="execution shell" aria-labelledby="execution-heading">
        <div className="execution__heading"><p className="section-kicker">Execution evidence timeline</p><h2 id="execution-heading">Scroll through how the work was carried out.</h2><p>Selected screenshots are sanitized and curated for public portfolio use. They show the working process—not client records, credentials, or confidential context.</p></div>
        <div className="timeline">
          {project.evidence.map((frame) => <article className="timeline-card" key={`${frame.step}-${frame.title}`}>
            <div className="timeline-card__rail"><span>{frame.step}</span><div /></div>
            <div className="timeline-card__content">
              <div className="timeline-card__copy"><p className="section-kicker">{frame.stage}</p><h3>{frame.title}</h3><p>{frame.description}</p><span className="timeline-card__tool">{frame.tool}</span></div>
              <figure><img src={frame.image} alt={frame.alt} /><figcaption>Selected and sanitized portfolio evidence</figcaption></figure>
            </div>
          </article>)}
        </div>
      </section>

      <section className="next-case"><div className="shell next-case__inner"><div><p className="section-kicker">Continue the exploration</p><h2>See another way the work becomes <em>operationally useful.</em></h2></div><button className="button button--dark" onClick={onNext}>Open next case <ArrowUpRight /></button></div></section>
      <Contact />
      <Footer />
    </main>
  )
}

function AboutProfile({ onBack, onNavigate, onOpenProject }: { onBack: () => void; onNavigate: (sectionId: string) => void; onOpenProject: (id: string) => void }) {
  const path = [
    { period: '2019–2020', title: 'Data operations & quality', copy: 'Built a foundation in data validation, tracking, and audit-ready records that support reliable downstream reporting.' },
    { period: '2021–2025', title: 'Credit risk & decision support', copy: 'Applied reporting, analytical models, data operations, and location-aware analysis to decision-support workflows.' },
    { period: '2025–present', title: 'Data systems & automation', copy: 'Building cloud pipelines, data quality controls, automation, reporting, and applied AI workflows.' },
  ]
  const credentials = [
    { label: 'B.S. Data Science', detail: 'Arizona State University' },
    { label: 'Azure Data Fundamentals', detail: 'DP-900' },
    { label: 'Power BI Data Analyst', detail: 'PL-300' },
    { label: 'Thunderbird', detail: 'Data Analytics & Digital Transformation' },
  ]

  return (
    <main className="profile-page" id="top">
      <section className="profile-focus">
        <nav className="nav shell" aria-label="Profile navigation">
          <button className="nav__brand nav__brand--button" onClick={onBack} aria-label="Return to the portfolio overview"><Mark /><span>David O.</span></button>
          <div className="nav__links"><button onClick={() => onNavigate('work')}>Selected work</button><button onClick={() => onNavigate('capabilities')}>Capabilities</button><button className="profile-nav__active" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-current="page">About</button></div>
          <button className="nav__contact nav__contact--button" onClick={() => onNavigate('contact')}>Start a conversation <ArrowUpRight /></button>
        </nav>
        <div className="shell profile__focus-layout">
          <aside className="profile__identity">
            <img className="profile__portrait" src="/assets/portfolio/david-ortiz-profile.jpg" alt="Portrait of David Ortiz" />
            <p className="section-kicker">Data systems & automation</p>
            <h1>David Ortiz</h1>
          </aside>
          <div className="profile__focus-summary"><p className="section-kicker">About</p><h2>I build dependable data systems that improve how teams <em>operate and decide.</em></h2><p>My focus is data quality, reporting, automation, and applied AI—connecting the working layers between raw inputs and a reliable next step.</p><div className="profile__links" aria-label="Professional profile links"><span>Los Angeles, CA</span><a href="https://www.linkedin.com/in/davido-lending" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a><a href="https://github.com/David-data-automations" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a><button onClick={() => onNavigate('contact')}>Start a conversation <ArrowUpRight /></button></div></div>
        </div>
      </section>
      <section className="profile-path"><div className="shell"><div className="profile-section-heading"><p className="section-kicker">Professional path</p><h2>Practical systems work built around <em>clarity and follow-through.</em></h2></div><div className="profile__timeline" aria-label="Professional path">{path.map((stage) => <article key={stage.period}><span className="profile__node" aria-hidden="true" /><p className="profile__period">{stage.period}</p><div><h3>{stage.title}</h3><p>{stage.copy}</p></div></article>)}</div></div></section>
      <section className="profile-credentials"><div className="shell"><div className="profile-section-heading"><p className="section-kicker">Education & credentials</p><h2>Formal foundations, applied <em>with care.</em></h2></div><div className="profile__credential-grid">{credentials.map((credential, index) => <article key={credential.label}><span>0{index + 1}</span><h3>{credential.label}</h3><p>{credential.detail}</p></article>)}</div></div></section>
      <section className="profile-capabilities shell"><div className="profile-section-heading"><p className="section-kicker">Working capabilities</p><h2>How I turn operational questions into <em>systems teams can use.</em></h2></div><div className="profile__capability-grid">{capabilities.map((capability) => <button key={capability.number} onClick={() => onOpenProject(capability.caseId)}><span>{capability.number}</span><strong>{capability.title}</strong><ArrowUpRight /></button>)}</div><button className="profile__explore" onClick={() => onNavigate('work')}>Explore selected work <ArrowUpRight /></button></section>
      <Contact />
      <Footer />
    </main>
  )
}

function App() {
  const projectById = useMemo(() => new Map(projects.map((project) => [project.id, project])), [])
  const readCaseHash = () => window.location.hash.startsWith('#case/') ? window.location.hash.replace('#case/', '') : ''
  const readProfileHash = () => window.location.hash === '#profile/david-ortiz'
  const [activeProjectId, setActiveProjectId] = useState(() => projectById.has(readCaseHash()) ? readCaseHash() : '')
  const [activeProfile, setActiveProfile] = useState(() => readProfileHash())
  const activeProject = activeProjectId ? projectById.get(activeProjectId) : undefined

  useEffect(() => {
    const onHashChange = () => {
      const nextId = readCaseHash()
      if (projectById.has(nextId)) {
        setActiveProfile(false)
        setActiveProjectId(nextId)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (readProfileHash()) {
        setActiveProjectId('')
        setActiveProfile(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [projectById])

  const navigateToSection = (sectionId: string) => {
    const scroll = () => {
      const target = document.getElementById(sectionId)
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      target?.focus({ preventScroll: true })
    }
    history.pushState('', document.title, `${window.location.pathname}${window.location.search}#${sectionId}`)
    if (activeProjectId || activeProfile) {
      setActiveProjectId('')
      setActiveProfile(false)
      window.setTimeout(scroll, 0)
    } else {
      scroll()
    }
  }

  const openProject = (id: string) => { window.location.hash = `case/${id}` }
  const openProfile = () => { window.location.hash = 'profile/david-ortiz' }
  const returnToGallery = () => navigateToSection('work')
  const returnToAbout = () => navigateToSection('about')
  const openNext = () => {
    const currentIndex = projects.findIndex((project) => project.id === activeProjectId)
    openProject(projects[(currentIndex + 1) % projects.length].id)
  }

  if (activeProject) return <CaseStudy project={activeProject} onBack={returnToGallery} onNext={openNext} onNavigate={navigateToSection} onOpenProfile={openProfile} />
  if (activeProfile) return <AboutProfile onBack={returnToAbout} onNavigate={navigateToSection} onOpenProject={openProject} />

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero__geoint-map" aria-hidden="true"><svg viewBox="0 0 930 590" focusable="false"><defs><linearGradient id="heroGeointScan" x1="0" x2="1"><stop offset="0" stopColor="#e7c489" stopOpacity="0" /><stop offset=".48" stopColor="#f4d490" stopOpacity=".72" /><stop offset=".52" stopColor="#f4d490" stopOpacity=".08" /><stop offset="1" stopColor="#e7c489" stopOpacity="0" /></linearGradient><radialGradient id="heroGeointSuit"><stop offset="0" stopColor="#e7c489" stopOpacity=".42" /><stop offset=".38" stopColor="#69dbc8" stopOpacity=".2" /><stop offset="1" stopColor="#69dbc8" stopOpacity="0" /></radialGradient></defs><path className="geoint-base" d="M82 81 767 33 885 207 750 508 183 541 47 341Z" /><g className="geoint-layers"><path className="geoint-parcel" d="M112 267 292 214 358 318 236 401 87 358Z" /><path className="geoint-parcel" d="M304 214 509 172 585 276 455 365 358 318Z" /><path className="geoint-parcel" d="M509 172 746 130 823 247 673 341 585 276Z" /><path className="geoint-parcel" d="M237 401 358 318 455 365 418 497 212 496Z" /><path className="geoint-parcel" d="M455 365 585 276 673 341 649 484 418 497Z" /><path className="geoint-contour" d="M65 398C166 311 231 490 350 396S512 247 643 354 790 426 888 337" /><path className="geoint-contour" d="M84 436C191 347 273 523 392 428S558 281 694 389 798 450 872 400" /><path className="geoint-contour" d="M112 475C218 393 312 549 434 462S604 333 726 426 792 462 850 446" /></g><g className="geoint-cells"><rect x="141" y="152" width="44" height="35" /><rect x="190" y="152" width="44" height="35" /><rect x="239" y="152" width="44" height="35" /><rect x="288" y="152" width="44" height="35" /><rect x="337" y="152" width="44" height="35" /><rect x="386" y="152" width="44" height="35" /><rect x="435" y="152" width="44" height="35" /><rect x="484" y="152" width="44" height="35" /><rect x="533" y="152" width="44" height="35" /><rect x="582" y="152" width="44" height="35" /><rect x="631" y="152" width="44" height="35" /></g><rect className="geoint-scan" x="-130" y="70" width="360" height="440" transform="rotate(-12 0 0)" fill="url(#heroGeointScan)" /><path className="geoint-change" d="m486 222 69-32 46 42-14 71-68 18-43-45Z" /><rect className="geoint-search" x="142" y="132" width="585" height="328" /><circle className="geoint-suit" cx="627" cy="283" r="89" fill="url(#heroGeointSuit)" /><circle className="geoint-suit-ring" cx="627" cy="283" r="45" /><circle className="geoint-suit-ring geoint-suit-ring--outer" cx="627" cy="283" r="69" /><path className="geoint-terrain" d="M260 405c89-73 186 74 286-12s148-115 262-6" /><path className="geoint-terrain" d="M240 428c104-75 214 71 323-13s132-97 262 5" /><ellipse className="geoint-cost" cx="538" cy="316" rx="54" ry="43" /><path className="geoint-route" d="M185 433c137-51 225-12 318-42s42-25 81-44 52-53 148-137" /><circle className="geoint-node" cx="627" cy="283" r="8" /><g className="geoint-decision"><circle cx="627" cy="283" r="15" /><path d="M648 250h143v52H648z" /><text x="661" y="271">REVIEW ZONE</text><text x="661" y="289">CONTEXT + CHANGE</text></g></svg></div>
        <div className="hero__noise" />
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="nav__brand" href="#top"><Mark /><span>David O.</span></a>
          <div className="nav__links"><button onClick={() => navigateToSection('work')}>Selected work</button><button onClick={() => navigateToSection('capabilities')}>Capabilities</button><button onClick={openProfile}>About</button></div>
          <button className="nav__contact nav__contact--button" onClick={() => navigateToSection('contact')}>Start a conversation <ArrowUpRight /></button>
        </nav>
        <div className="hero__inner shell"><div className="eyebrow"><span className="status-dot" /> Available for data, automation & analytics projects</div><h1>Build the <em>system</em><br />behind better decisions.</h1><div className="hero__bottom"><p className="hero__intro">I create data systems that make complex operations more visible, more reliable, and easier to act on—across cloud pipelines, reporting, automation, and applied AI.</p><button className="circle-link" onClick={() => navigateToSection('work')} aria-label="Explore selected work"><ArrowUpRight /></button></div></div>
        <div className="hero__meter shell" aria-hidden="true"><span>DATA / SYSTEMS / AUTOMATION</span><span>01—04</span></div>
      </section>

      <section className="statement shell" id="about" tabIndex={-1}><p className="section-kicker">A systems-first practice</p><div className="statement__body"><h2>Good analysis is not a final slide. It is a <em>repeatable operating capability.</em></h2><p>My work connects the layers between raw inputs and confident action: ingestion, transformation, validation, reporting, automation, and the documentation that lets a team trust what comes next.</p></div></section>

      <section className="work" id="work" tabIndex={-1}>
        <div className="shell work__heading"><p className="section-kicker">Selected work</p><p>Four ways I turn operational complexity into clear, accountable systems.</p></div>
        <div className="shell work__grid">{projects.map((project, index) => <article className={project.className} key={project.title}><div className="project-card__art"><Artifact className={`artifact--${index + 1}`} /></div><div className="project-card__content"><div className="project-card__top"><span>{project.label}</span><span>0{index + 1}</span></div><h3>{project.title}</h3><p>{project.description}</p><p className="project-card__outcome">{project.outcome}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><button className="project-card__link" onClick={() => openProject(project.id)}>Drill into case study <ArrowUpRight /></button></div></article>)}</div>
        <div className="shell evidence-strip" aria-label="Selected portfolio evidence"><figure><img src="/assets/portfolio/automation-flow-run.png" alt="A successful Power Apps flow-run confirmation beside a multi-step automation workflow" /><figcaption><span>Automation proof</span>Completed multi-step workflow run</figcaption></figure><figure><img src="/assets/portfolio/automation-execution-audit.png" alt="A 28-day workflow execution history with successful, cancelled, and successful test runs" /><figcaption><span>Operational proof</span>Execution history for a monitored flow</figcaption></figure><figure><img src="/assets/portfolio/gis-false-color.png" alt="Side-by-side false-color and reference imagery used for geospatial interpretation" /><figcaption><span>Spatial analysis</span>False-color imagery compared with reference imagery</figcaption></figure><figure><img src="/assets/portfolio/gis-elevation-trend.png" alt="Elevation measurements displayed over time for multiple monitored stations" /><figcaption><span>Monitoring</span>Time-series elevation review across stations</figcaption></figure></div>
        <p className="shell work__note">Open any case study to follow the process and review selected execution evidence. Published artifacts exclude credentials, client-sensitive data, and operationally sensitive information.</p>
      </section>

      <section className="capabilities shell" id="capabilities" tabIndex={-1}><div className="capabilities__heading"><p className="section-kicker">Capabilities</p><h2>From a specific operational question to a system a team can use.</h2></div><div className="capability-list">{capabilities.map((capability) => <article className="capability" key={capability.number}><span className="capability__number">{capability.number}</span><div><h3>{capability.title}</h3><p>{capability.description}</p></div><div className="capability__tags">{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}<button className="capability__case-action" onClick={() => openProject(capability.caseId)} aria-label={`View the related case study for ${capability.title}`}>View related case <ArrowUpRight /></button></div></article>)}</div></section>

      <Contact />
      <Footer />
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
