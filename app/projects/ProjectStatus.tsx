import type { ReactNode } from 'react'
import {
  CrossCircledIcon,
  ShadowNoneIcon,
  UpdateIcon,
} from '@radix-ui/react-icons'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ProjectStatusProps {
  status: 'live' | 'wip' | 'abandoned' | 'stopped'
  className?: string
}

const statusConfig: Record<
  ProjectStatusProps['status'],
  { label: string; className: string; icon: ReactNode }
> = {
  live: {
    label: 'Live',
    className: 'bg-green-500/20 text-green-400 border-green-500/30',
    icon: <LiveIndicator />,
  },
  wip: {
    label: 'Work in Progress',
    className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    icon: <UpdateIcon className="h-3.5 w-3.5 flex-none" aria-hidden="true" />,
  },
  abandoned: {
    label: 'Abandoned',
    className: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    icon: (
      <CrossCircledIcon className="h-3.5 w-3.5 flex-none" aria-hidden="true" />
    ),
  },
  stopped: {
    label: 'Stopped',
    className: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    icon: (
      <ShadowNoneIcon className="h-3.5 w-3.5 flex-none" aria-hidden="true" />
    ),
  },
}

export function ProjectStatus({ status, className }: ProjectStatusProps) {
  const config = statusConfig[status]

  return (
    <Badge
      variant="outline"
      className={cn('rounded-full', config.className, className)}
    >
      <div className="flex items-center gap-1.5">
        {config.icon}
        {config.label}
      </div>
    </Badge>
  )
}

function LiveIndicator() {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-2.5 w-2.5 flex-none items-center justify-center"
    >
      <span className="h-2 w-2 rounded-full bg-green-400" />
      <span className="absolute left-0 top-0 h-2.5 w-2.5 animate-ping rounded-full bg-green-300 opacity-50" />
    </span>
  )
}
