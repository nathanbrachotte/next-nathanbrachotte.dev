import Image from 'next/image'

export function ProjectLogo({
  image,
  title,
}: {
  image: string
  title: string
}) {
  return (
    <div className="relative h-12 w-12">
      <Image
        src={image}
        alt={title + "'s logo"}
        fill
        sizes="50px"
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  )
}
