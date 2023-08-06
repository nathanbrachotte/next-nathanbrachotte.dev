import clsx from 'clsx'

type Project = {
  name: string
  logo: string
  missions: string[]
  description: string
  tools: string[]
  projectUrl?: string
  repoUrl?: string
  appleStoreUrl?: string
  playStoreUrl?: string
}

const projects = [
  {
    name: 'Pantou-fle',
    missions: ['Branding', 'Design', 'Website development'],
    description:
      'Help french teachers and students access free and high-quality resources to learn French as a foreign language.',
    logo: '/images/projects/pantou-fle/logo.png',
    tools: [
      'Figma',
      'TypeScript',
      'Gastby',
      'Tailwind CSS',
      'Contentful',
      'GraphQL',
      'Tailwind',
      'Netlify',
    ],
  },
  {
    name: 'Klarna App',
    missions: ['Mobile', 'Web', 'Backend'],
    description:
      "Klarna's super-app serves people as a Banking app, Shopping app, and Wishlist app, all at once.",
    logo: '/images/projects/klarna/logo.svg',
    tools: [
      'React',
      'React Native',
      'Node.js',
      'Express.js',
      'AWS',
      'Storybook',
      'Figma',
      'Datadog',
      'Splunk',
    ],
    projectUrl: 'https://app.klarna.com/',
    appleStoreUrl:
      'https://apps.apple.com/de/app/klarna-shop-now-pay-later/id1115120118',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.myklarnamobile&hl=en&gl=US',
  },
  {
    name: 'nathanbrachotte.dev',
    missions: ['Design', 'Web'],
    description:
      'My first portfolio website. Built with Gatsby, Contentful, and Styled Component. They were cool at the time.',
    logo: '/images/projects/nathanbrachotte.dev/logo.png',
    tools: [
      'React',
      'Gastby',
      'GraphQL',
      'Contentful',
      'Styled Components',
      'Netlify',
    ],
    projectUrl: 'https://app.klarna.com/',
    repoUrl: 'https://github.com/nathanbrachotte/nathanbrachotte-dev',
  },
  {
    name: 'This website',
    missions: ['Design', 'Web'],
    description:
      'My current portfolio website. Built with Next.js, MDX, PlanetScale & Tailwind. Fully embrassing SSR, SSG & ISR',
    logo: '/images/projects/nathanbrachotte.dev/logo.png',
    tools: ['React', 'Next.js', 'MDX', 'PlanetScale', 'Tailwind', 'Vercel'],
    repoUrl: 'https://github.com/nathanbrachotte/next-nathanbrachotte.dev',
  },
  {
    name: 'Solis App',
    missions: ['Mobile'],
    description:
      'Solis App is a companion app to the Solis, an IoT device that provides Wi-Fi while traveling. It handles helping set up an account, set up the device, buy data, and much more!',
    logo: '/images/projects/solis/logo.png',
    tools: ['React Native', 'TypeScript'],
    projectUrl: 'https://soliswifi.co/',
    appleStoreUrl: 'https://apps.apple.com/de/app/solis-wifi/id1411394761',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.solisapp.solis&hl=en&gl=US',
  },
] satisfies Project[]

const Project = ({
  project: { name, description, logo },
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) => {
  const borderRadiant = [
    'from-gradient-purple via-transparent to-gradient-pink',
    'from-gradient-blue via-transparent to-gradient-cyan',
    'from-gradient-orange via-transparent to-gradient-yellow',
    'from-gradient-purple via-transparent to-gradient-orange',
  ]

  const animatedGradient = [
    'via-gradient-yellow',
    'via-gradient-orange',
    'via-gradient-cyan',
    'via-gradient-blue',
  ] as const

  // TODO: Add touch detection for animation to run on mobile - https://www.npmjs.com/package/react-touch
  return (
    <div className="group flex cursor-pointer flex-col justify-between">
      <div
        className={clsx(
          'relative mx-auto overflow-hidden rounded-lg bg-gradient-to-r p-[1px] transition-all duration-300 ease-in-out',
          borderRadiant[index % borderRadiant.length],
        )}
      >
        <div
          className={clsx(
            'visible absolute -bottom-96 -top-96 left-10 right-10',
            `bg-gradient-to-r from-transparent group-hover:visible group-hover:animate-spin-surround group-focus:visible ${
              animatedGradient[index % animatedGradient.length]
            } to-transparent`,
          )}
        />
        <div className="relative rounded-lg bg-slate-900 p-6">
          <div>
            <img src={logo} alt="" width={50} height={50} />
            <h2 className="mt-2 text-xl font-bold tracking-tighter">{name}</h2>
            <p className="font-md text-slate-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-bold tracking-tighter">
        A curated list of some of projects I've worked on in the past 👇
      </h1>
      <div className="grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Project key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
