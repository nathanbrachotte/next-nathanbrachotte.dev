export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">my portfolio</h1>
      <p className="prose prose-neutral dark:prose-invert">
        This is your new portfolio.
      </p>
      <div className="h-10 w-10 bg-gradient-purple bg-gradient-to-tr from-transparent to-gradient-pink"></div>
      <div className="h-10 w-10 bg-gradient-orange bg-gradient-to-tr from-transparent to-gradient-yellow"></div>
      <div className="h-10 w-10 bg-gradient-blue bg-gradient-to-tr from-transparent to-gradient-cyan"></div>
    </section>
  )
}
