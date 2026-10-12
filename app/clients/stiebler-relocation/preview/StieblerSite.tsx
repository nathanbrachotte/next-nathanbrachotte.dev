import Image from 'next/image'
import Link from 'next/link'
import {
  content,
  recommendations,
  type Lang,
  type Recommendation,
  type Service,
} from './content'

// Preview of Franziska's new website, shown to her before the rebuild
export function StieblerSite({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <div className="min-h-screen bg-[#F6F5F9] font-sans text-[#2B2A3D] antialiased">
      <div className="bg-[#6B5BA8] px-4 py-2 text-center text-xs text-white">
        {t.previewNotice}
      </div>

      <header className="sticky top-0 z-20 border-b border-[#E3E1EC] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-tight text-[#2E2D4D]">
              Relocation : Berlin
            </span>
            <span className="text-xs text-[#6E6C80]">Franziska Stiebler</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[#4A4860] md:flex">
            <a href="#services" className="hover:text-[#6B5BA8]">
              {t.nav.services}
            </a>
            <a href="#about" className="hover:text-[#6B5BA8]">
              {t.nav.about}
            </a>
            <a href="#recommendations" className="hover:text-[#6B5BA8]">
              {t.nav.recommendations}
            </a>
            <a href="#contact" className="hover:text-[#6B5BA8]">
              {t.nav.contact}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitch lang={lang} />
            <a
              href={whatsappUrl}
              className="hidden rounded-full bg-[#2E2D4D] px-4 py-2 text-sm font-semibold text-white hover:bg-[#6B5BA8] sm:inline-block"
            >
              {t.whatsapp}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[#1E2147] text-white">
          <Image
            src="/images/clients/stiebler/hero.jpg"
            alt="Illustrated Berlin at dusk: street map, Spree river, Oberbaum bridge, TV tower and Brandenburg Gate"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right opacity-40 md:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E2147] via-[#1E2147]/80 to-transparent" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-32">
            <div className="flex max-w-xl flex-col gap-6">
              <Corners>
                <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
                  {t.heroTitle}
                </h1>
              </Corners>
              <p className="text-lg text-[#D9D6EA]">{t.heroLead}</p>
              <ContactButtons lang={lang} />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[3fr_2fr]">
          <div>
            <div className="flex flex-col gap-5 text-lg leading-relaxed">
              {t.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 rounded-xl border-l-4 border-[#6B5BA8] bg-white p-5 text-lg font-semibold text-[#2E2D4D] shadow-sm">
              {t.maxClients}
            </p>
            <p className="mt-8 text-xl font-semibold text-[#6B5BA8]">
              {t.introClosing}
            </p>
          </div>
          <Image
            src="/images/clients/stiebler/arrival.jpg"
            alt="Apartment keys with a Berlin bear keyring, a Berlin street map, coffee and neatly stacked documents"
            width={1000}
            height={1000}
            className="h-auto w-full rounded-2xl shadow-lg"
          />
        </section>

        <section id="services" className="scroll-mt-20 bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle>{t.servicesTitle}</SectionTitle>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {t.services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 py-16">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 md:grid-cols-[1fr_2fr]">
            <Image
              src="/images/clients/stiebler/franziska.jpg"
              alt="Franziska Stiebler"
              width={719}
              height={834}
              className="h-auto w-full max-w-xs rounded-2xl shadow-lg"
            />
            <div>
              <SectionTitle>{t.aboutTitle}</SectionTitle>
              <div className="mt-6 flex flex-col gap-4 leading-relaxed">
                {t.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="recommendations" className="scroll-mt-20 bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle>{t.recommendationsTitle}</SectionTitle>
            <div className="mt-10 columns-1 gap-4 md:columns-2 lg:columns-3">
              {recommendations.map((recommendation) => (
                <RecommendationCard
                  key={recommendation.name}
                  recommendation={recommendation}
                  readMore={t.readMore}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative scroll-mt-20 overflow-hidden bg-[#2E2D4D] py-20 text-white"
        >
          <Image
            src="/images/clients/stiebler/map-left.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-10 grayscale"
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6">
            <h2 className="text-3xl font-semibold">{t.contactTitle}</h2>
            <p className="text-[#D9D6EA]">{t.contactLead}</p>
            <ContactButtons lang={lang} isCentered />
            <div className="flex flex-col gap-1 text-sm text-[#D9D6EA]">
              <a href={`mailto:${email}`} className="hover:text-white">
                {email}
              </a>
              <a href={phoneUrl} className="hover:text-white">
                {phoneLabel}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1F1E36] px-4 pb-24 pt-6 text-center text-xs text-[#9C99B3] sm:pb-6">
        © {new Date().getFullYear()} Franziska Stiebler · {t.footerLegal}
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-20 flex gap-2 border-t border-[#E3E1EC] bg-white p-3 sm:hidden">
        <a
          href={whatsappUrl}
          className="flex-1 rounded-full bg-[#2E2D4D] py-3 text-center text-sm font-semibold text-white"
        >
          {t.whatsapp}
        </a>
        <a
          href={phoneUrl}
          className="flex-1 rounded-full border border-[#2E2D4D] py-3 text-center text-sm font-semibold text-[#2E2D4D]"
        >
          {t.call}
        </a>
      </div>
    </div>
  )
}

function LanguageSwitch({ lang }: { lang: Lang }) {
  return (
    <div className="flex overflow-hidden rounded-full border border-[#D6D3E3] text-xs font-semibold">
      {languages.map((language) => (
        <Link
          key={language.lang}
          href={language.href}
          className={
            language.lang === lang
              ? 'bg-[#2E2D4D] px-3 py-1.5 text-white'
              : 'px-3 py-1.5 text-[#4A4860] hover:text-[#6B5BA8]'
          }
        >
          {language.label}
        </Link>
      ))}
    </div>
  )
}

function ContactButtons({
  lang,
  isCentered,
}: {
  lang: Lang
  isCentered?: boolean
}) {
  const t = content[lang]
  return (
    <div
      className={`flex flex-wrap gap-3 ${isCentered ? 'justify-center' : ''}`}
    >
      <a
        href={whatsappUrl}
        className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2E2D4D] hover:bg-[#E9E5F7]"
      >
        {t.whatsapp}
      </a>
      <a
        href={phoneUrl}
        className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
      >
        {t.call}
      </a>
      <a
        href={`mailto:${email}`}
        className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
      >
        {t.email}
      </a>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold text-[#2E2D4D] sm:text-3xl">
      {children}
      <span className="mt-3 block h-1 w-12 rounded-full bg-[#6B5BA8]" />
    </h2>
  )
}

// Rounded bracket corners from the current "Relocation : Berlin" logo
function Corners({ children }: { children: React.ReactNode }) {
  const corner = 'absolute h-6 w-6 border-white/70'
  return (
    <div className="relative px-6 py-5">
      <span
        className={`${corner} left-0 top-0 rounded-tl-xl border-l-2 border-t-2`}
      />
      <span
        className={`${corner} right-0 top-0 rounded-tr-xl border-r-2 border-t-2`}
      />
      <span
        className={`${corner} bottom-0 left-0 rounded-bl-xl border-b-2 border-l-2`}
      />
      <span
        className={`${corner} bottom-0 right-0 rounded-br-xl border-b-2 border-r-2`}
      />
      {children}
    </div>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <details className="group rounded-xl border border-[#E3E1EC] bg-[#FBFAFD] p-5 open:bg-white open:shadow-md">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <span>
          <span className="block font-semibold text-[#2E2D4D]">
            {service.title}
          </span>
          {service.subtitle ? (
            <span className="mt-1 block text-sm text-[#6E6C80]">
              {service.subtitle}
            </span>
          ) : null}
        </span>
        <span className="mt-0.5 text-xl leading-none text-[#6B5BA8] transition group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed">
        {service.intro?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {service.listIntro ? <p>{service.listIntro}</p> : null}
        {service.items ? (
          <ul className="flex list-disc flex-col gap-1.5 pl-5 marker:text-[#6B5BA8]">
            {service.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {service.outro ? <p>{service.outro}</p> : null}
      </div>
    </details>
  )
}

function RecommendationCard({
  recommendation,
  readMore,
}: {
  recommendation: Recommendation
  readMore: string
}) {
  const details = [recommendation.role, recommendation.origin]
    .filter(Boolean)
    .join(' · ')
  return (
    <figure className="mb-4 break-inside-avoid rounded-xl border border-[#E3E1EC] bg-[#FBFAFD] p-6">
      <blockquote className="text-[#2E2D4D]">
        <span className="block text-3xl leading-none text-[#6B5BA8]">“</span>
        <p className="font-medium leading-relaxed">{recommendation.quote}</p>
      </blockquote>
      <figcaption className="mt-4 text-sm">
        <span className="block font-semibold">{recommendation.name}</span>
        {details ? (
          <span className="block text-[#6E6C80]">{details}</span>
        ) : null}
      </figcaption>
      {recommendation.text ? (
        <details className="mt-4 text-sm">
          <summary className="cursor-pointer font-semibold text-[#6B5BA8]">
            {readMore}
          </summary>
          <div className="mt-3 flex flex-col gap-3 leading-relaxed text-[#4A4860]">
            {recommendation.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>
      ) : null}
    </figure>
  )
}

const email = 'contact@stiebler-relocation-berlin.de'
const phoneLabel = '+49 (0)178 – 567 34 97'
const phoneUrl = 'tel:+491785673497'
const whatsappUrl = 'https://wa.me/491785673497'

const languages: { lang: Lang; label: string; href: string }[] = [
  { lang: 'en', label: 'EN', href: '/clients/stiebler-relocation/preview' },
  { lang: 'de', label: 'DE', href: '/clients/stiebler-relocation/preview/de' },
]
