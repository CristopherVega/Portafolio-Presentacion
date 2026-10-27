import SideRays from './components/SideRays';
import PillNav from './components/PillNav';
import ProfileCard from './components/ProfileCard';
import ShinyText from './components/ShinyText';
import SplitText from './components/SplitText';
import BorderGlow from './components/BorderGlow';
import FlipCard from './components/FlipCard';
import logo from './components/image.png';
import { FaReact, FaJava, FaDatabase, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

const tecnologias = [
  { name: 'React', icon: <FaReact color="#61DAFB" />, detail: 'Interfaces de mi portafolio y de REPO-Cenfo, con Vite y react-router.' },
  { name: 'Java', icon: <FaJava color="#f89820" />, detail: 'POO, arquitectura por capas, DAO y excepciones personalizadas.' },
  { name: 'SQL', icon: <FaDatabase color="#a78bfa" />, detail: 'Bases de datos en SQL Server para mis proyectos académicos.' },
  { name: 'Git', icon: <FaGitAlt color="#F05032" />, detail: 'Control de versiones y repositorios públicos en GitHub.' },
  { name: 'Node.js', icon: <FaNodeJs color="#68A063" />, detail: 'Backend con Express, JWT y subida de archivos.' },
];
const contactos = [
  { label: 'GitHub', icon: <FaGithub />, href: 'https://github.com/CristopherVega' },
  { label: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/cristopher-eduardo-gutierrez-vega-550417446/' },
  { label: 'Correo', icon: <FaEnvelope />, href: 'mailto:crisvega0911@gmail.com' },
];

const proyectos = [
  {
    nombre: 'REPO-Cenfo',
    descripcion: 'Repositorio académico: investigaciones, producción y usuarios por rol.',
    tecnologias: 'React · Express · SQL Server · JWT · ORM',
    url: 'https://github.com/CristopherVega/REPO-Cenfo',
  },
  {
    nombre: 'Portafolio-POO',
    descripcion: 'Reproductor de música en Java: canciones, álbumes y playlists con audio .wav.',
    tecnologias: 'Java · POO · Arquitectura por capas · SQL · Javax Sound',
    url: 'https://github.com/CristopherVega/Portafolio-POO',
  },
  {
    nombre: 'Sistema de Subastas',
    descripcion: 'Subastas en Java con roles de coleccionista, vendedor y moderador, ofertas y validaciones.',
    tecnologias: 'Java · POO · Excepciones personalizadas · DAO · SQL',
    url: 'https://github.com/CristopherVega/Proyecto-Progrmacion-Orientada-a-Objetos',
  },
  {
    nombre: 'Wendy Soda',
    descripcion: 'Sistema web para el control de cobros y consumos en una soda.',
    tecnologias: 'React · Express · SQL Server · Vercel · ORM',
    url: 'https://github.com/CristopherVega/Wendy-s-Soda',
  },
];

function Titulo({ children }) {
  return <SplitText text={children} className="text-3xl font-bold" />;
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-black text-white">
      {/* Fondo */}
      <div className="fixed inset-0">
        <SideRays />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center gap-24 px-6 pb-24">
        {/* Nav sticky */}
        <div className="sticky top-6 z-50 flex w-full justify-center">
          <PillNav items={navItems} activeHref="#inicio" />
        </div>

        {/* Inicio */}
        <section
          id="inicio"
          className="mt-10 flex w-full max-w-5xl scroll-mt-32 flex-col items-center gap-10"
        >
          <Titulo>¿Quién soy?</Titulo>

          <div className="flex w-full flex-col items-center justify-center gap-12 md:flex-row">
            <ProfileCard
              name="Cristopher"
              title="Software Engineering Student"
              handle="cgutierrezv09"
              onContactClick={() =>
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
              }
              contactText='Contacto'
              avatarUrl={logo}
            />

            <div className="flex max-w-xl flex-col gap-4 text-center">
              <SplitText text="Hola, soy Cristopher Vega" className="text-4xl font-bold" />
              <ShinyText text="Desarrollador full-stack en formación" className="text-xl" />
              <p className="text-gray-300">
                Cursando el segundo año de la universidad en CENFOTEC, con conocimientos en
                varias tecnologías, arquitecturas y metodologías.
              </p>
            </div>
          </div>
        </section>

        {/* Tecnologías */}
        <section id="tecnologias" className="flex w-full scroll-mt-32 flex-col items-center gap-8">
          <Titulo>Tecnologías</Titulo>
          <div className="flex flex-wrap justify-center gap-8">
            {tecnologias.map((t) => (
              <FlipCard
                key={t.name}
                width={190}
                height={250}
                radius={20}
                background="#18181b"
                front={
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                    <span className="text-6xl">{t.icon}</span>
                    <span className="text-xl font-semibold">{t.name}</span>
                  </div>
                }
                back={
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-5 text-center">
                    <span className="text-lg font-bold">{t.name}</span>
                    <span className="text-sm leading-snug text-gray-300">{t.detail}</span>
                  </div>
                }
              />
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="flex w-full scroll-mt-32 flex-col items-center gap-8">
          <Titulo>Proyectos</Titulo>
          <div className="flex flex-wrap justify-center gap-8">
            {proyectos.map((p) => (
              <BorderGlow key={p.nombre}>
                <div className="flex max-w-sm flex-col items-center gap-3 p-8 text-center">
                  <h3 className="text-2xl font-bold">{p.nombre}</h3>
                  <p className="text-sm text-gray-300">{p.descripcion}</p>
                  <p className="text-xs text-gray-400">{p.tecnologias}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black no-underline"
                  >
                    Ver en GitHub
                  </a>
                </div>
              </BorderGlow>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="flex w-full scroll-mt-32 flex-col items-center gap-8">
          <Titulo>Contacto</Titulo>
          <BorderGlow>
            <div className="flex flex-col items-center gap-6 p-8 text-center">
              <p className="max-w-sm text-sm text-gray-300">
                ¿Tienes un proyecto o quieres conversar? Escríbeme.
              </p>
              <div className="flex gap-4">
                {contactos.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={c.label}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl text-black transition-transform hover:scale-110"
                  >
                    {c.icon}
                  </a>
                ))}
              </div>
            </div>
          </BorderGlow>
        </section>
      </div>
    </div>
  );
}

export default App;