import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">Hey there 👋</h1>
      <p className="prose prose-neutral dark:prose-invert">
        I'm Nathan (
        <Link
          href={'https://github.com/nathanbrachotte'}
          className="text-blue-500 dark:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          @N8
        </Link>
        ), a Full Stack Software Engineer specializing in React & React Native.
      </p>
      <Image
        alt="A photo of me"
        src={'/images/avatar.png'}
        className="w-40 h-40 rounded-full bg-gradient-pink bg-gradient-to-tr from-transparent to-gradient-purple flex-grow-0"
        width={1024}
        height={1024}
      />
      <p>
        My main focus is to consistently deliver the best value to my clients
        while delivering high-quality, scalable software. I'm now working as a
        Freelance, helping people & companies turn their ideas into mobile apps
        and websites with delightful UI & UX.
      </p>
      <div className="h-10 w-10 bg-gradient-to-tr bg-gradient-purple from-transparent to-gradient-pink"></div>
      <div className="h-10 w-10 bg-gradient-to-tr bg-gradient-orange from-transparent to-gradient-yellow"></div>
      <div className="h-10 w-10 bg-gradient-to-tr bg-gradient-blue from-transparent to-gradient-cyan"></div>
    </section>
  )
}
