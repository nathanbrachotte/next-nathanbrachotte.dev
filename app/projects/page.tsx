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
]

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        A curated list of some of projects I've worked on in the past 👇
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <h2 className="font-bold text-xl mb-4 tracking-tighter">
            <a
              href="https://www.npmjs.com/package/next-navigation"
              target="_blank"
              rel="noopener noreferrer"
            >
              next-navigation
            </a>
          </h2>
          <p className="mb-4">
            A tiny, zero-dependency, framework-agnostic library for managing
            navigation state in your Next.js apps.
          </p>
          <p className="mb-4">
            <a
              href="https://www.npmjs.com/package/next-navigation"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
