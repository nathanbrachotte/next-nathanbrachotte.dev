import clsx from 'clsx'
import Link from 'next/link'

interface ToolFilterProps {
  tools: { name: string; count: number }[]
  selectedTool?: string
}

// Badge keys that don't read well as-is
const toolLabels: Record<string, string> = {
  Next: 'Next.js',
  ReactNative: 'React Native',
  Postgre: 'PostgreSQL',
  Node: 'Node.js',
  Tailwind: 'Tailwind CSS',
  StyledComponents: 'Styled Components',
  Trpc: 'tRPC',
}

export function getToolLabel(tool: string) {
  return toolLabels[tool] ?? tool
}

export function ToolFilter({ tools, selectedTool }: ToolFilterProps) {
  return (
    <nav
      aria-label="Filter projects by tool"
      className="mt-6 flex flex-wrap gap-2"
    >
      <FilterChip href="/projects" isSelected={selectedTool == null}>
        All
      </FilterChip>
      {tools.map(({ name, count }) => (
        <FilterChip
          key={name}
          href={`/projects?tool=${encodeURIComponent(name)}`}
          isSelected={selectedTool === name}
        >
          {getToolLabel(name)}
          <span className="ml-1 text-slate-400">{count}</span>
        </FilterChip>
      ))}
    </nav>
  )
}

function FilterChip({
  href,
  isSelected,
  children,
}: {
  href: string
  isSelected: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      scroll={false}
      prefetch={false}
      aria-current={isSelected ? 'page' : undefined}
      className={clsx(
        'inline-flex items-center rounded border p-1 px-2 text-sm leading-4 no-underline transition-all',
        isSelected
          ? 'border-gradient-purple bg-slate-700 text-purple-300'
          : 'border-slate-700 bg-slate-800 text-slate-100 hover:border-gradient-purple hover:text-purple-300',
      )}
    >
      {children}
    </Link>
  )
}
