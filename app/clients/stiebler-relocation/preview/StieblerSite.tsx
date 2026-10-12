import {
  BadgeCheck,
  Building2,
  GraduationCap,
  Home,
  Landmark,
  Languages,
  Luggage,
  Mail,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  content,
  recommendations,
  type Lang,
  type Recommendation,
  type Service,
} from './content'
import { Disclosure, Reveal } from './Motion'

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
              className="hidden items-center gap-2 rounded-full bg-[#2E2D4D] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6B5BA8] sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
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
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr_1fr] md:py-28">
            <div className="flex max-w-xl flex-col gap-6">
              <Reveal className="md:hidden">
                <Portrait size="small" />
              </Reveal>
              <Reveal delay={0.1}>
                <Corners>
                  <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
                    {t.heroTitle}
                  </h1>
                </Corners>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="text-lg text-[#D9D6EA]">{t.heroLead}</p>
              </Reveal>
              <Reveal delay={0.4}>
                <ContactButtons lang={lang} />
              </Reveal>
            </div>
            <Reveal delay={0.3} className="hidden justify-self-end md:block">
              <Portrait size="large" />
            </Reveal>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[3fr_2fr]">
          <Reveal>
            <div className="flex flex-col gap-5 text-lg leading-relaxed">
              {t.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 flex items-start gap-4 rounded-xl border-l-4 border-[#6B5BA8] bg-white p-5 text-lg font-semibold text-[#2E2D4D] shadow-sm">
              <Users
                className="mt-1 h-6 w-6 shrink-0 text-[#6B5BA8]"
                aria-hidden
              />
              {t.maxClients}
            </p>
            <p className="mt-8 flex items-center gap-3 text-xl font-semibold text-[#6B5BA8]">
              <Sparkles className="h-5 w-5 shrink-0" aria-hidden />
              {t.introClosing}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Image
              src="/images/clients/stiebler/arrival.jpg"
              alt="Apartment keys with a Berlin bear keyring, a Berlin street map, coffee and neatly stacked documents"
              width={1000}
              height={1000}
              className="h-auto w-full rounded-2xl shadow-lg"
            />
          </Reveal>
        </section>

        <section id="services" className="scroll-mt-20 bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle>{t.servicesTitle}</SectionTitle>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {t.services.map((service, index) => (
                <Reveal key={service.title} delay={(index % 2) * 0.08}>
                  <ServiceCard service={service} icon={serviceIcons[index]} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 py-16">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 md:grid-cols-[1fr_2fr]">
            <Reveal>
              <Image
                src="/images/clients/stiebler/franziska.jpg"
                alt="Franziska Stiebler"
                width={719}
                height={834}
                className="h-auto w-full max-w-xs rounded-2xl shadow-lg"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <SectionTitle>{t.aboutTitle}</SectionTitle>
              <div className="mt-6 flex flex-col gap-4 leading-relaxed">
                {t.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
                {t.facts.map((fact, index) => {
                  const Icon = factIcons[index]
                  return (
                    <li
                      key={fact}
                      className="flex items-center gap-3 rounded-xl bg-white p-4 font-semibold text-[#2E2D4D] shadow-sm"
                    >
                      <Icon
                        className="h-5 w-5 shrink-0 text-[#6B5BA8]"
                        aria-hidden
                      />
                      {fact}
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          </div>
        </section>

        <section id="recommendations" className="scroll-mt-20 bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle>{t.recommendationsTitle}</SectionTitle>
            <div className="mt-10 columns-1 gap-4 md:columns-2 lg:columns-3">
              {recommendations.map((recommendation, index) => (
                <Reveal
                  key={recommendation.name}
                  delay={(index % 3) * 0.08}
                  className="mb-4 break-inside-avoid"
                >
                  <RecommendationCard
                    recommendation={recommendation}
                    readMore={t.readMore}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative scroll-mt-20 overflow-hidden bg-[#2E2D4D] py-20 text-white"
        >
          <Image
            src="/images/clients/stiebler/hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="opacity-15 object-cover"
          />
          <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6">
            <Portrait size="small" />
            <h2 className="text-3xl font-semibold">{t.contactTitle}</h2>
            <p className="text-[#D9D6EA]">{t.contactLead}</p>
            <ContactButtons lang={lang} isCentered />
            <div className="flex flex-col gap-1 text-sm text-[#D9D6EA]">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {email}
              </a>
              <a
                href={phoneUrl}
                className="inline-flex items-center justify-center gap-2 hover:text-white"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {phoneLabel}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="bg-[#1F1E36] px-4 pb-24 pt-6 text-center text-xs text-[#9C99B3] sm:pb-6">
        © {new Date().getFullYear()} Franziska Stiebler · {t.footerLegal}
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-20 flex gap-2 border-t border-[#E3E1EC] bg-white p-3 sm:hidden">
        <a
          href={whatsappUrl}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#2E2D4D] py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          {t.whatsapp}
        </a>
        <a
          href={phoneUrl}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#2E2D4D] py-3 text-sm font-semibold text-[#2E2D4D]"
        >
          <Phone className="h-4 w-4" aria-hidden />
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
  const outlined =
    'inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10'
  return (
    <div
      className={`flex flex-wrap gap-3 ${isCentered ? 'justify-center' : ''}`}
    >
      <a
        href={whatsappUrl}
        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2E2D4D] transition hover:-translate-y-0.5 hover:bg-[#E9E5F7]"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        {t.whatsapp}
      </a>
      <a href={phoneUrl} className={outlined}>
        <Phone className="h-4 w-4" aria-hidden />
        {t.call}
      </a>
      <a href={`mailto:${email}`} className={outlined}>
        <Mail className="h-4 w-4" aria-hidden />
        {t.email}
      </a>
    </div>
  )
}

function Portrait({ size }: { size: 'small' | 'large' }) {
  const sizeClassName =
    size === 'large' ? 'h-72 w-72 border-[6px]' : 'h-24 w-24 border-4'
  return (
    <div
      className={`${sizeClassName} relative overflow-hidden rounded-full border-white/20 shadow-2xl ring-1 ring-white/10`}
    >
      <Image
        src="/images/clients/stiebler/franziska.jpg"
        alt="Franziska Stiebler"
        fill
        sizes={size === 'large' ? '288px' : '96px'}
        className="object-cover object-top"
      />
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

function ServiceCard({
  service,
  icon: Icon,
}: {
  service: Service
  icon: LucideIcon
}) {
  return (
    <Disclosure
      className="rounded-xl border border-[#E3E1EC] bg-[#FBFAFD] p-5 transition-shadow duration-300 hover:shadow-md"
      openClassName="bg-white shadow-md"
      iconClassName="mt-2 text-[#6B5BA8]"
      header={
        <span className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EFEBF8] text-[#6B5BA8]">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
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
        </span>
      }
    >
      <div className="flex flex-col gap-3 pl-14 pt-4 text-sm leading-relaxed">
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
    </Disclosure>
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
    <figure className="rounded-xl border border-[#E3E1EC] bg-[#FBFAFD] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <blockquote className="text-[#2E2D4D]">
        <Quote className="mb-3 h-6 w-6 text-[#6B5BA8]" aria-hidden />
        <p className="font-medium leading-relaxed">{recommendation.quote}</p>
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 text-sm">
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2E2D4D] text-xs font-semibold text-white"
        >
          {getInitials(recommendation.name)}
        </span>
        <span>
          <span className="block font-semibold">{recommendation.name}</span>
          {details ? (
            <span className="block text-[#6E6C80]">{details}</span>
          ) : null}
        </span>
      </figcaption>
      {recommendation.text ? (
        <Disclosure
          className="mt-4 border-t border-[#E3E1EC] pt-3 text-sm"
          iconClassName="text-[#6B5BA8]"
          header={
            <span className="font-semibold text-[#6B5BA8]">{readMore}</span>
          }
        >
          <div className="flex flex-col gap-3 pt-3 leading-relaxed text-[#4A4860]">
            {recommendation.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Disclosure>
      ) : null}
    </figure>
  )
}

function getInitials(name: string) {
  return name
    .split(',')[0]
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

// Same order as the services in content.ts
const serviceIcons: LucideIcon[] = [
  Home,
  Landmark,
  Wallet,
  BadgeCheck,
  Languages,
  GraduationCap,
  Luggage,
]

const factIcons: LucideIcon[] = [Home, Users, Building2]

const email = 'contact@stiebler-relocation-berlin.de'
const phoneLabel = '+49 (0)178 – 567 34 97'
const phoneUrl = 'tel:+491785673497'
const whatsappUrl = 'https://wa.me/491785673497'

const languages: { lang: Lang; label: string; href: string }[] = [
  { lang: 'en', label: 'EN', href: '/clients/stiebler-relocation/preview' },
  { lang: 'de', label: 'DE', href: '/clients/stiebler-relocation/preview/de' },
]
