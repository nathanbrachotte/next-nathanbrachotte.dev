import clsx from 'clsx'
import { getSingleGradientColorPerIndex } from 'helpers/gradients'

const projects = [
  {
    name: 'Pantou-fle',
    missions: ['Branding', 'Design', 'Website development'],
    description:
      'Help french teachers and students access free and high-quality resources to learn French as a foreign language.',
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
    name: 'Pantou-fle',
    missions: ['Branding', 'Design', 'Website development'],
    description:
      'Help french teachers and students access free and high-quality resources to learn French as a foreign language.',
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
    name: 'Pantou-fle',
    missions: ['Branding', 'Design', 'Website development'],
    description:
      'Help french teachers and students access free and high-quality resources to learn French as a foreign language.',
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
]

const Project = ({
  project: { name, description },
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) => {
  const borderRadiant = [
    'from-gradient-purple via-transparent to-gradient-pink',
    'from-gradient-blue via-transparent to-gradient-cyan',
    'from-gradient-orange via-transparent to-gradient-yellow',
  ]

  const animatedGradient = [
    'via-gradient-yellow',
    'via-gradient-orange',
    'via-gradient-cyan',
  ] as const

  return (
    <div className="flex flex-col justify-between group">
      <div
        className={clsx(
          'relative mx-auto overflow-hidden rounded-lg p-[1px] transition-all duration-300 ease-in-out bg-gradient-to-r',
          borderRadiant[index],
        )}
      >
        <div
          className={clsx(
            'group-hover:animate-spin-surround visible absolute -top-96 -bottom-96 left-10 right-10 group-hover:visible',
            `bg-gradient-to-r from-transparent ${animatedGradient[index]} to-transparent`,
          )}
        />
        <div className="relative rounded-lg bg-black  p-6">
          <div>
            <img
              src="/images/projects/pantou-fle/logo.png"
              alt=""
              width={50}
              height={50}
            />
            <h2 className="font-bold text-xl tracking-tighter">{name}</h2>
            <p className="font-md text-slate-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        A curated list of some of projects I've worked on in the past 👇
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Project key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
