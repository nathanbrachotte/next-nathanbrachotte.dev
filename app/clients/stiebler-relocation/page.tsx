import { H1, H2, H3 } from 'app/components/Typography'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

// Protected by Basic Auth in middleware.ts
export const metadata: Metadata = {
  title: 'Stiebler Relocation Website Plan',
  robots: { index: false, follow: false },
}

export default function StieblerRelocationPage() {
  return (
    <section className="flex flex-col gap-14">
      <header>
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 text-xs uppercase tracking-wider text-muted-foreground">
          <span>Website rebuild · Proposal</span>
          <span className="ml-auto normal-case tracking-normal">
            07 October 2026
          </span>
        </div>
        <H1 className="pb-4">Stiebler Relocation : Berlin</H1>
        <p className="text-lg text-muted-foreground">
          A new website for Franziska Stiebler-Liebenberg&apos;s relocation
          service, built so that expats moving to Berlin can find her on Google
          and get in touch easily.
        </p>
      </header>

      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-5">
        <H3 className="pb-1">Right now, Google is told not to show the site.</H3>
        <p className="text-muted-foreground">
          All six pages carry a <Code>noindex</Code> tag, which asks search
          engines to leave them out of results. Searching for the business name
          or the domain returns nothing. Today, only people who already have the
          link can find the site.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Eyebrow>Goal</Eyebrow>
        <p className="border-l-2 border-gradient-purple pl-4 text-xl font-semibold leading-snug">
          When someone plans a move to Berlin and searches for help, they find
          Franziska, trust her, and contact her.
        </p>
        <p className="text-muted-foreground">
          Most of her clients search before they arrive: from India, the US,
          Spain, Brazil. The site has to work for them in English first and in
          German for HR departments and local clients. It also has to show what
          the testimonials already say: personal care, a maximum of three
          clients at a time, and deep knowledge of the Berlin housing market and
          the Bürgeramt.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Eyebrow>Targets</Eyebrow>
        <H2>Measurable targets</H2>
        <ol className="flex flex-col overflow-hidden rounded-lg border border-border">
          {targets.map((target, index) => (
            <li
              key={target.metric}
              className="grid grid-cols-[2rem_1fr] gap-3 border-t border-border p-4 first:border-t-0"
            >
              <span className="tabular-nums text-muted-foreground">
                {index + 1}
              </span>
              <div className="flex min-w-0 flex-col gap-2">
                <span className="font-semibold">{target.metric}</span>
                <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      Today
                    </span>
                    <span
                      className={cn(
                        target.isTodayBad
                          ? 'text-red-400'
                          : 'text-muted-foreground',
                      )}
                    >
                      {target.today}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      Target
                    </span>
                    <span className="font-medium text-green-400">
                      {target.target}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-4">
        <Eyebrow>What to improve</Eyebrow>
        <H2>What I will fix, in priority order</H2>
        {fixGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-1 pt-2">
            <span className="text-xs uppercase tracking-wider text-gradient-purple">
              {group.label}
            </span>
            <ol className="flex flex-col">
              {group.fixes.map((fix) => (
                <li
                  key={fix.number}
                  className="grid grid-cols-[2rem_1fr] gap-3 border-b border-border py-4"
                >
                  <span className="pt-0.5 tabular-nums text-muted-foreground">
                    {fix.number}
                  </span>
                  <div className="flex min-w-0 flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <H3>{fix.title}</H3>
                      <PriorityBadge priority={fix.priority} />
                    </div>
                    <p className="text-muted-foreground">{fix.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <Eyebrow>Who does what</Eyebrow>
        <H2>Where I bring my expertise</H2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ResponsibilityCard title="I take care of" items={myTasks} />
          <ResponsibilityCard title="Franziska provides" items={clientTasks} />
        </div>
      </div>
    </section>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs uppercase tracking-wider text-muted-foreground">
      {children}
    </span>
  )
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-muted px-1.5 py-0.5 text-sm">{children}</code>
  )
}

function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <Badge variant="outline" className={priorityClassNames[priority]}>
      {priority}
    </Badge>
  )
}

function ResponsibilityCard({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-muted/20 p-5">
      <H3>{title}</H3>
      <ul className="flex list-disc flex-col gap-2 pl-5 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

const priorityClassNames: Record<Priority, string> = {
  Critical: 'border-red-500/30 bg-red-500/20 text-red-400',
  High: 'border-yellow-500/30 bg-yellow-500/20 text-yellow-400',
  Medium: 'border-blue-500/30 bg-blue-500/20 text-blue-400',
}

const targets: Target[] = [
  {
    metric: 'Pages Google can index',
    today: '0 of 6',
    target: 'All, within 2 weeks of launch',
    isTodayBad: true,
  },
  {
    metric: 'Google Business Profile',
    today: 'None',
    target: 'Live, 10+ reviews within 3 months',
    isTodayBad: true,
  },
  {
    metric: 'Search ranking, "relocation service Berlin" and similar',
    today: 'Not listed',
    target: 'First page within 6 months (goal, not a guarantee)',
    isTodayBad: true,
  },
  {
    metric: 'Mobile load time (largest image, LCP)',
    today: '3.1 s',
    target: 'Under 2.5 s',
  },
  {
    metric: 'Layout shift while loading (CLS)',
    today: '0.167',
    target: 'Under 0.1',
  },
  {
    metric: 'Ways to get in touch',
    today: 'Email and phone, address only in the Impressum',
    target: 'Contact form, WhatsApp, visible on every screen',
  },
  {
    metric: 'Inquiries',
    today: 'Not measured',
    target: 'Counted every month',
  },
]

const fixGroups: FixGroup[] = [
  {
    label: 'Get found',
    fixes: [
      {
        number: 1,
        title: 'Let Google index the site',
        priority: 'Critical',
        description:
          'Remove the noindex tag, publish an XML sitemap, register the site in Google Search Console and Bing, and request indexing.',
      },
      {
        number: 2,
        title: 'Separate English and German properly',
        priority: 'High',
        description:
          'Every page currently says it is German, including the English homepage, and the two versions are not linked for Google. Clean URLs (/ and /de/), correct language tags and hreflang make Google show English searchers the English page and German searchers the German one.',
      },
      {
        number: 3,
        title: 'Titles, descriptions and headings',
        priority: 'High',
        description:
          'No page has a description for Google\'s results, the English homepage has no main heading, and its title is half German. Each page gets a clear title, a description and a heading that say "relocation service in Berlin".',
      },
      {
        number: 4,
        title: 'Google Business Profile',
        priority: 'High',
        description:
          'For local searches and Google Maps, the profile matters more than the website. I set it up as a service-area business for Berlin and link it to the site. The ten testimonials on the site would count far more as Google reviews.',
      },
      {
        number: 5,
        title: 'Structured data',
        priority: 'High',
        description:
          'Code invisible to visitors that tells Google who she is, what she offers, where and in which languages. It helps Google and AI search tools describe the business correctly.',
      },
    ],
  },
  {
    label: 'Convince visitors',
    fixes: [
      {
        number: 6,
        title: 'Clear contact options',
        priority: 'High',
        description:
          'A short contact form, a WhatsApp button and the phone number, reachable from every section. Right now visitors have to scroll to the very bottom.',
      },
      {
        number: 7,
        title: 'How it works, and what it costs',
        priority: 'Medium',
        description:
          'A short section on the process (first call, document checklist, viewings, signing, Anmeldung) and price ranges or packages. These are the first questions expats ask.',
      },
      {
        number: 8,
        title: 'Frequently asked questions',
        priority: 'Medium',
        description:
          'Six to ten real questions, such as "How long does an apartment search in Berlin take?" or "Which documents do landlords ask for?". Google and ChatGPT often quote this kind of answer.',
      },
      {
        number: 9,
        title: 'Business name as real text, and a fresh layout',
        priority: 'Medium',
        description:
          'The name "Relocation : Berlin" only exists inside the header image, so Google can\'t read it. The new design keeps the Berlin street-map identity but puts the name, her photo and the testimonials where they work hardest.',
      },
    ],
  },
  {
    label: 'Speed and maintenance',
    fixes: [
      {
        number: 10,
        title: 'Faster on phones',
        priority: 'Medium',
        description:
          'Modern image formats (about 180 KB saved), no page jumping while it loads, and no heavy page-builder scripts. Most visitors come from a phone.',
      },
      {
        number: 11,
        title: 'Simpler, safer hosting',
        priority: 'Medium',
        description:
          'A fast static site instead of WordPress with the Divi page builder: no plugins to update, nothing to hack, low running costs. The email address on the domain keeps working.',
      },
      {
        number: 12,
        title: 'Up-to-date Impressum and privacy policy',
        priority: 'Medium',
        description:
          'The Impressum still cites the old TMG, which the DDG replaced in 2024, and links to the EU dispute platform, which closed in 2025. Both get updated, and the privacy policy is rewritten for the new setup.',
      },
    ],
  },
]

const myTasks = [
  'Design and build of the new site, English and German',
  'Technical SEO: indexing, sitemap, language setup, structured data, redirects from the old URLs',
  'Speed and mobile quality',
  'Contact form and WhatsApp link',
  'Google Search Console and Business Profile setup',
  'Domain, hosting and launch, without interrupting her email',
  'Simple, cookie-free visitor and inquiry statistics',
  'Rewriting titles, descriptions and FAQ answers for search',
]

const clientTasks = [
  'Her knowledge: answers to the FAQ, prices or packages',
  'Photos, or permission to reuse the current ones',
  'OK from past clients to keep their testimonials',
  'Asking happy clients for a Google review, with photos',
  'Access to the current domain and hosting account',
  'Feedback in two review rounds',
]

type Priority = 'Critical' | 'High' | 'Medium'

interface Target {
  metric: string
  today: string
  target: string
  isTodayBad?: boolean
}

interface Fix {
  number: number
  title: string
  priority: Priority
  description: string
}

interface FixGroup {
  label: string
  fixes: Fix[]
}
