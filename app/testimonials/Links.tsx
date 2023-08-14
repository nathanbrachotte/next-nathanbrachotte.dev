import clsx from 'clsx'
import { ArrowUpRight } from 'icons/ArrowUpRight'
import Link from 'next/link'

export const SeeOriginalButton = ({
  testimonialLink,
}: {
  testimonialLink: string
}) => {
  //! FIXME:Button isn't displayed on tablets, add device detection (https://github.com/duskload/react-device-detect)
  return (
    <div
      className={clsx(
        'opacity-1 translate-x-0 sm:mt-0 sm:translate-x-4 sm:opacity-0',
        'transition duration-300 ease-out',
        'group-hover/testimonials:translate-x-0 group-hover/testimonials:scale-100 group-hover/testimonials:opacity-100',
      )}
    >
      <Link
        href={testimonialLink}
        className={clsx(
          'flex flex-row items-center justify-center transition-all',
          'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
          'bg-gradient-to-r from-gradient-blue to-gradient-cyan',
          'animate-text-gradient-background',
          // TODO: Make shadow-neon work
          'hover:shadow-lg',
          'no-underline',
          'hover:scale-105',
          'active:scale-95',
        )}
      >
        <span className="transition-all">See original</span>
        <ArrowUpRight className={clsx('ml-2 h-4 w-4 stroke-slate-100')} />
      </Link>
    </div>
  )
}

export const SeeOriginalLink = ({
  testimonialLink,
}: {
  testimonialLink: string
}) => {
  return (
    <Link
      href={testimonialLink}
      className={clsx(
        'flex flex-row items-center justify-center',
        'bg-gradient-to-r from-gradient-blue to-gradient-cyan bg-clip-text text-transparent',
        'transition-shadow hover:shadow-lg',
        'active:scale-95',
      )}
    >
      <span className="transition-all">See original</span>
      <ArrowUpRight className={clsx('ml-2 h-4 w-4 stroke-gradient-cyan')} />
    </Link>
  )
}
