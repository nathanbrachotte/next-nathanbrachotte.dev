import Image from 'next/image'
import { H1 } from 'app/components/Typography'

export default function NotFound() {
  return (
    <>
      <H1>404 - You seriously messed up 👿</H1>
      Just kidding. But I don't know what you're looking for, sorry. Maybe ask
      the detective? Or the cat?
      <div className="flex w-full items-center justify-center pt-6 md:justify-start">
        <Image
          src={'/images/404.webp'}
          alt={'404'}
          height={500}
          width={500}
          className="rounded-lg object-cover"
        />
      </div>
    </>
  )
}
