import type { Metadata } from 'next'
import Link from 'next/link'

// Protected by Basic Auth in middleware.ts
export const metadata: Metadata = {
  title: 'Impressum & Datenschutz – Stiebler Relocation Berlin',
  robots: { index: false, follow: false },
}

// Her 2026 Impressum text with the legal updates applied: real VAT ID,
// DDG instead of TMG, and no EU dispute platform (closed in 2025)
export default function StieblerImpressumPage() {
  return (
    <div className="min-h-screen bg-[#F6F5F9] px-4 py-12 font-sans text-[#2B2A3D] antialiased sm:px-6">
      <article className="mx-auto flex max-w-3xl flex-col gap-10 rounded-2xl bg-white p-6 shadow-sm sm:p-10">
        <Link
          href="/clients/stiebler-relocation/preview"
          className="text-sm font-semibold text-[#6B5BA8] hover:underline"
        >
          ← Relocation : Berlin
        </Link>

        <header>
          <h1 className="text-3xl font-semibold text-[#2E2D4D]">
            Impressum &amp; Datenschutz
          </h1>
          <p className="mt-1 text-[#6E6C80]">Imprint &amp; Data Protection</p>
        </header>

        <Section title="Impressum" subtitle="Imprint">
          <p>
            <strong>Stiebler Relocation Berlin</strong>
            <br />
            Franziska Stiebler-Liebenberg
            <br />
            Ebereschenallee 39
            <br />
            14050 Berlin
            <br />
            Deutschland / Germany
          </p>
          <p>
            Telefon / Phone: +49 (0)178 567 34 97
            <br />
            E-Mail: contact@stiebler-relocation-berlin.de
          </p>
          <p>
            Geschäftsführung / Managing Director: Franziska Stiebler-Liebenberg
            <br />
            USt-IdNr. / VAT ID: DE351842023
          </p>
        </Section>

        <Section
          title="Haftung für Inhalte"
          subtitle="Liability for the content of this website"
        >
          <p>
            Die Inhalte dieser Website wurden von mir mit größter Sorgfalt
            erstellt. Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 DDG für
            eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Für Inhalte Dritter übernehme ich keine Haftung.
            Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen,
            bitte ich Sie, mich umgehend zu kontaktieren.
          </p>
          <p className="text-[#6E6C80]">
            The content of this website was created with great care. As a
            service provider, I am responsible for my own content on these pages
            under general law, in accordance with Section 7 (1) DDG. I accept no
            liability for content provided by third parties. If you notice
            problematic or illegal content, please contact me immediately.
          </p>
        </Section>

        <Section title="Urheberrecht" subtitle="Copyright notice">
          <p>
            Alle Inhalte dieser Website (Bilder, Fotos, Texte) unterliegen dem
            Urheberrecht. Bitte fragen Sie mich, bevor Sie Inhalte dieser
            Website verbreiten oder vervielfältigen. Vielen Dank!
          </p>
          <p className="text-[#6E6C80]">
            All content on this website (images, photos, texts) is protected by
            copyright. Please ask me before distributing or reproducing any of
            it. Thank you!
          </p>
        </Section>

        <Section title="Bildnachweise" subtitle="Photo credits">
          <p>Franziska Stiebler</p>
        </Section>

        <Section title="Datenschutzerklärung" subtitle="Privacy policy">
          <p className="rounded-xl border-l-4 border-[#6B5BA8] bg-[#F6F5F9] p-4 text-sm">
            Entwurf: Die Datenschutzerklärung wird für die neue Website
            überarbeitet (Hosting, cookiefreie Besucherstatistik, keine
            Tracking-Cookies, kein Cookie-Banner nötig).
            <br />
            <span className="text-[#6E6C80]">
              Draft: the privacy policy will be rewritten for the new website
              (hosting, cookie-free visitor statistics, no tracking cookies, no
              cookie banner needed).
            </span>
          </p>
        </Section>

        <p className="text-sm text-[#6E6C80]">Stand / Status: Oktober 2026</p>
      </article>
    </div>
  )
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-3 leading-relaxed">
      <h2 className="text-xl font-semibold text-[#2E2D4D]">
        {title}
        <span className="ml-2 text-base font-normal text-[#6E6C80]">
          {subtitle}
        </span>
      </h2>
      {children}
    </section>
  )
}
