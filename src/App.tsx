import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  ChevronRight,
  Cloud,
  Code2,
  Download,
  Github,
  Grid3X3,
  Linkedin,
  Mail,
  Menu,
  MonitorCog,
  MoveRight,
  Play,
  Server,
  ShieldCheck,
  Terminal,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';

const photoPath = '/assets/images/WhatsApp_Image_2026-10-13_at_6.22.52_PM.jpeg';
const resumePath = '/assets/documents/44524_resume_1791861665.pdf';

const skills = [
  { name: 'AWS', group: 'Cloud infrastructure', icon: Cloud, tone: 'gold' },
  { name: 'Kubernetes', group: 'Orchestration', icon: Grid3X3, tone: 'blue' },
  { name: 'Terraform', group: 'Infrastructure as code', icon: Code2, tone: 'orange' },
  { name: 'Docker', group: 'Containers', icon: Server, tone: 'blue' },
  { name: 'Jenkins', group: 'CI / CD', icon: Terminal, tone: 'gold' },
  { name: 'Prometheus', group: 'Observability', icon: MonitorCog, tone: 'orange' },
];

const projects = [
  {
    index: '01',
    title: 'Konexa',
    eyebrow: 'DEVOPS OPERATIONS PLATFORM',
    description: 'A Linux-based operations platform deployed on AWS EC2, designed around repeatable automation, observability, and resilient backup workflows.',
    stack: ['AWS EC2', 'Apache', 'Node.js', 'GitHub', 'S3', 'IAM'],
    accent: 'gold',
  },
  {
    index: '02',
    title: 'Kubernetes Lab',
    eyebrow: 'CONTAINER ORCHESTRATION',
    description: 'Hands-on cluster operations with workloads, ingress, configuration, scheduled jobs, storage, rolling updates, and troubleshooting in Kind.',
    stack: ['Kubernetes', 'Kind', 'Helm', 'Traefik', 'Docker'],
    accent: 'blue',
  },
  {
    index: '03',
    title: 'AWS Delivery Lab',
    eyebrow: 'CI / CD + OBSERVABILITY',
    description: 'Container delivery pipelines using CodePipeline and CodeBuild, with images in ECR and monitoring foundations through Prometheus and Grafana.',
    stack: ['CodePipeline', 'CodeBuild', 'ECR', 'ECS', 'EKS'],
    accent: 'orange',
  },
];

const timeline = [
  { date: '2025 — PRESENT', role: 'Executive, Mobile Device Support', company: 'Wellness Forever Medicare Pvt. Ltd.', detail: 'Administering enterprise Android device fleets, incident response, asset lifecycle operations, and runbook documentation.' },
  { date: '2022 — 2025', role: 'IT Support Engineer', company: 'Get IT Solution', detail: 'Resolved hardware, software, network, and enterprise asset incidents across client sites.' },
  { date: '2020', role: 'B.E. Civil Engineering', company: 'Anna University', detail: 'Built the foundation for a systems-focused career through engineering study and hands-on technical learning.' },
];

function App() {
  const [introOpen, setIntroOpen] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => setMouse({ x: (event.clientX / window.innerWidth - 0.5) * 2, y: (event.clientY / window.innerHeight - 0.5) * 2 });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    document.body.style.overflow = introOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [introOpen]);

  const closeIntro = () => setIntroOpen(false);

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Essakimuthu Konar home"><span className="brand-mark">EK</span><span>ESSAKIMUTHU KONAR</span></a>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#profile" onClick={() => setMenuOpen(false)}>Profile</a>
          <a href="#arsenal" onClick={() => setMenuOpen(false)}>Arsenal</a>
          <a href="#missions" onClick={() => setMenuOpen(false)}>Missions</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="topbar-actions">
          <a className="resume-link" href={resumePath} download>Resume <Download size={14} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero" id="profile">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="hero-copy reveal-up">
            <p className="eyebrow"><span className="signal-dot" /> SYSTEM ONLINE / PROFILE 001</p>
            <h1>Build.<br /><em>Automate.</em><br />Scale.</h1>
            <p className="hero-lede">Junior DevOps Engineer building dependable cloud systems, deployment workflows, and the operational clarity teams need to move faster.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#missions">Explore profile <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href={resumePath} download>Download resume <Download size={16} /></a>
            </div>
            <div className="hero-meta"><span>BASED IN MUMBAI, INDIA</span><span>AVAILABLE FOR THE NEXT MISSION</span></div>
          </div>
          <div className="hero-portrait-wrap" style={{ transform: `translate(${mouse.x * -8}px, ${mouse.y * -5}px)` }}>
            <div className="portrait-frame" />
            <div className="portrait-glow" />
            <img className="hero-portrait" src={photoPath} alt="Essakimuthu Konar seated on a Royal Enfield motorcycle" />
            <div className="portrait-label label-top">REAL WORLD / FIELD OPS</div>
            <div className="portrait-label label-bottom">ESSAKIMUTHU KONAR <span>· 2026</span></div>
          </div>
          <div className="hero-side-note">SCROLL TO<br />ENTER THE SYSTEM <ArrowDown size={15} /></div>
          <div className="hero-index">01 <span>/ 05</span></div>
        </section>

        <section className="intro-strip" id="arsenal">
          <div><p className="eyebrow">01 / THE OPERATOR</p><h2>Infrastructure is<br /><span>a creative act.</span></h2></div>
          <div className="intro-statement"><p>From production support to cloud engineering, I design systems that stay calm under pressure. My work lives at the intersection of automation, observability, and practical problem-solving.</p><a href="#timeline" className="text-link">Read the origin story <MoveRight size={17} /></a></div>
        </section>

        <section className="arsenal-section content-section">
          <div className="section-heading"><div><p className="eyebrow">02 / TECHNICAL ARSENAL</p><h2>The systems<br /><span>behind the scenes.</span></h2></div><p className="section-note">A hands-on toolkit for taking infrastructure from first commit to healthy signal.</p></div>
          <div className="skill-grid">{skills.map(({ name, group, icon: Icon, tone }, index) => <div className={`skill-card tone-${tone}`} key={name}><div className="skill-number">0{index + 1}</div><Icon size={25} strokeWidth={1.5} /><h3>{name}</h3><p>{group}</p><span className="skill-line" /></div>)}</div>
          <div className="skills-footer"><span>ALSO IN THE TOOLKIT</span><p>Linux / Git / GitHub / Bash / Ansible / Apache / Nginx / Grafana / Jenkins / AWS CLI</p></div>
        </section>

        <section className="missions-section content-section" id="missions">
          <div className="section-heading missions-heading"><div><p className="eyebrow">03 / SELECTED MISSIONS</p><h2>Proof of<br /><span>deployment.</span></h2></div><div className="mission-controls"><button onClick={() => setActiveProject((activeProject + projects.length - 1) % projects.length)} aria-label="Previous mission"><ChevronRight size={20} className="rotate-left" /></button><span>0{activeProject + 1} / 0{projects.length}</span><button onClick={() => setActiveProject((activeProject + 1) % projects.length)} aria-label="Next mission"><ChevronRight size={20} /></button></div></div>
          <div className="mission-stage"><div className={`mission-visual visual-${projects[activeProject].accent}`}><div className="visual-scan" /><div className="visual-grid" /><span className="visual-index">{projects[activeProject].index}</span><div className="visual-terminal"><span>root@konar:~$</span><br />deploy --reliable<br /><b>status: operational</b></div><div className="visual-orbit" /></div><div className="mission-info"><p className="eyebrow">{projects[activeProject].eyebrow}</p><h3>{projects[activeProject].title}</h3><p>{projects[activeProject].description}</p><div className="stack-list">{projects[activeProject].stack.map((item) => <span key={item}>{item}</span>)}</div><a href="#contact" className="text-link">Discuss this mission <ArrowUpRight size={16} /></a></div></div>
        </section>

        <section className="timeline-section content-section" id="timeline">
          <div className="section-heading"><div><p className="eyebrow">04 / EXPERIENCE LOG</p><h2>Always learning.<br /><span>Always shipping.</span></h2></div><p className="section-note">A career built through real operations, increasingly close to the infrastructure layer.</p></div>
          <div className="timeline">{timeline.map((item, index) => <div className="timeline-item" key={item.role}><div className="timeline-marker">0{index + 1}</div><div className="timeline-date">{item.date}</div><div className="timeline-copy"><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.detail}</p></div></div>)}</div>
        </section>

        <section className="contact-section content-section" id="contact">
          <div className="contact-glow" /><div className="contact-copy"><p className="eyebrow">05 / OPEN CHANNEL</p><h2>Have a system<br /><span>worth building?</span></h2><p>Let’s talk about cloud infrastructure, operations, or the next problem that needs a calm, automated solution.</p><a className="button button-primary" href="mailto:muthukonar394@gmail.com">Initiate transmission <Mail size={17} /></a></div>
          <div className="contact-card"><p>DIRECT LINE</p><a href="mailto:muthukonar394@gmail.com">muthukonar394@gmail.com</a><div className="contact-links"><a href="mailto:muthukonar394@gmail.com" aria-label="Email"><Mail size={17} /></a><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a></div><span className="contact-status"><ShieldCheck size={15} /> OPEN TO OPPORTUNITY</span></div>
        </section>
      </main>

      <footer className="footer"><span>© 2026 ESSAKIMUTHU KONAR</span><span>ENGINEERING THE FUTURE / AUTOMATING WHAT'S NEXT</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>BACK TO TOP <ArrowUp size={14} /></button></footer>

      {introOpen && <div className="intro-overlay"><div className="intro-backdrop" /><div className="intro-particles" aria-hidden="true">{Array.from({ length: 18 }).map((_, index) => <i key={index} style={{ '--i': index } as React.CSSProperties} />)}</div><div className="intro-content"><p className="intro-kicker"><span className="signal-dot" /> A NEW OPERATOR HAS ENTERED THE SYSTEM</p><div className="intro-portrait"><img src={photoPath} alt="" /></div><p className="intro-role">JUNIOR DEVOPS ENGINEER / CLOUD ENGINEER</p><h2>ESSAKIMUTHU<br /><span>KONAR</span></h2><p className="intro-tagline">Engineering the future.<br />Automating what’s next.</p><button className="enter-button" onClick={closeIntro}><span><Play size={14} fill="currentColor" /> ENTER THE EXPERIENCE</span><ChevronRight size={18} /></button></div><div className="intro-footer"><span>MISSION 001 / BUILD · AUTOMATE · SCALE</span><button onClick={closeIntro}>SKIP INTRO <ArrowUpRight size={14} /></button><button className="sound-toggle" onClick={() => setSoundOn(!soundOn)} aria-label={soundOn ? 'Mute sound' : 'Enable sound'}>{soundOn ? <Volume2 size={15} /> : <VolumeX size={15} />} {soundOn ? 'SOUND ON' : 'SOUND OFF'}</button></div></div>}
    </div>
  );
}

export default App;
