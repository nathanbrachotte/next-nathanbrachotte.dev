// Text from Franziska's "Webpage Relocation Text 2026" and "2026 Recommendations"
// documents, with her requested changes applied.

export type Lang = 'en' | 'de'

export interface Service {
  title: string
  subtitle?: string
  intro?: string[]
  listIntro?: string
  items?: string[]
  outro?: string
}

export interface Recommendation {
  quote: string
  name: string
  role?: string
  origin?: string
  avatar: string
  text?: string[]
}

export interface SiteContent {
  nav: {
    services: string
    about: string
    recommendations: string
    contact: string
  }
  heroTitle: string
  heroLead: string
  intro: string[]
  introClosing: string
  maxClients: string
  servicesTitle: string
  services: Service[]
  aboutTitle: string
  about: string[]
  facts: string[]
  recommendationsTitle: string
  readMore: string
  contactTitle: string
  contactLead: string
  whatsapp: string
  call: string
  email: string
  footerLegal: string
  previewNotice: string
}

export const recommendations: Recommendation[] = [
  {
    quote:
      'You are doing an awesome job, thank you (in my last I don’t know how many European services – you far outshine…)',
    name: 'Sharon Brandt',
    avatar: '/images/clients/stiebler/avatars/1.jpg',
    role: 'General Manager, Crown World Mobility New Zealand',
  },
  {
    quote:
      'Wir schätzen die Zusammenarbeit mit Ihnen sehr und bekommen nur gute Rückmeldungen unserer Mitarbeiter über Ihre Betreuung.',
    name: 'Melanie Sy',
    avatar: '/images/clients/stiebler/avatars/2.jpg',
    role: 'Human Resources, Fincompare',
    text: [
      'Wir schätzen die Zusammenarbeit mit Ihnen sehr und bekommen nur gute Rückmeldungen unserer Mitarbeiter über Ihre Betreuung.',
      'Das hilft uns sehr, weil sich alle gut bei Ihnen aufgehoben fühlen und wir uns ebenfalls darauf verlassen können, dass Sie alles gut im Blick und im Griff haben. Dies ist nicht selbstverständlich, daher möchte ich mich hier noch einmal ausdrücklich für Ihr Engagement bedanken.',
    ],
  },
  {
    quote:
      'As late repatriates (Spätaussiedler) our case involved documents that not every official is familiar with, but she took the time to understand everything, scheduled all our appointments, and personally accompanied us.',
    name: 'Mariia Zelenova, Stanislav Kirillov',
    avatar: '/images/clients/stiebler/avatars/3.jpg',
    origin: 'relocating from Kazakhstan',
    text: [
      'Franziska was an incredible support to our family throughout our relocation process in Berlin.',
      'As late repatriates (Spätaussiedler) our case involved documents that not every official is familiar with, but she took the time to understand everything, scheduled all our appointments, and personally accompanied us, which was especially valuable as we were managing the move with a young child. She also helped us find a kindergarten for our son and later assisted us in securing an apartment.',
      'We truly appreciated her professionalism, care and dedication, and we were very happy to work with her.',
    ],
  },
  {
    quote: 'She is a meticulous and consummate professional.',
    name: 'Lukas Stephan',
    avatar: '/images/clients/stiebler/avatars/4.jpg',
    role: 'Lead Security Engineer',
    origin: 'from USA, relocating from UK',
    text: [
      'She worked quickly and effectively to secure opportunities for me. She was very flexible even as my own preferences changed.',
      'Franziska familiarized me with the finer points of living in Germany (e.g. the prevalence of personal liability insurance, tax considerations) and provided me with professional contacts who could help me along the way.',
      'Overall, I cannot recommend Franziska enough. She is just a lovely person to be around, as well as a meticulous and consummate professional, and anyone who is relocating to Germany would be lucky to have her handling their move!',
    ],
  },
  {
    quote: 'She was extremely helpful and pleasant.',
    name: 'Nataliia Androsova',
    avatar: '/images/clients/stiebler/avatars/5.jpg',
    role: 'Software Engineer',
    origin: 'relocating from Ukraine',
    text: [
      'I kindly would like to confirm that Ms. Stiebler-Liebenberg has provided excellent relocation service during my move from Kalush (Ukraine) to Berlin (Germany). She was extremely helpful, pleasant, easy to communicate and work with, reliable and understanding.',
      'She is a great professional when it comes to efficiently settle someone in. She arranged and kept track of all appointments for getting legally required documents for me and my spouse and was always there to accompany us. She has understood my personal needs and took over the home search, arranged house viewings and contracting a perfect apartment and additionally required services/utilities (internet, electricity, etc.).',
      'She has excellent network and I have absolutely no hesitation while recommending Ms. Stiebler-Liebenberg to anyone in need of administrative services about relocation.',
    ],
  },
  {
    quote: 'Franziska´s knowledge was amazing.',
    name: 'Tomer Turbovich',
    avatar: '/images/clients/stiebler/avatars/6.jpg',
    origin: 'from Israel, relocating from Thailand',
    text: [
      'I would highly recommend Franziska as a relocation agent for Berlin.',
      'I moved to Berlin in April 2021. Franziska was the relocation agent that my company assigned to me. Two months before I arrived to Berlin, Franziska called me and explained about what should I expect during the whole relocation process. The information she gave me helped me to better prepare to the move, organize all the required documents before my arrival and ease the bureaucracy. When I arrived to Berlin, my registration documents was completed within 5 days as Franziska took care of all the process (without me going to the registration office!).',
      'When I started looking for an apartment, Franziska´s knowledge was amazing. She explained to me about the Berlin rental market, the different areas in Berlin (and which areas to avoid), what I should be aware of when looking for an apartment in Berlin, what I should expect to be the rental cost ranges and how will the process be. Even though it was a lockdown period in Berlin, Franziska, using her many connections, managed to arrange for me many viewings, joined me to all of them and negotiate the lease condition for the apartment I chose. Franziska also joined me to the handover meeting, ensuring everything is in place and helped me set the electricity bills.',
      'Franziska helped me to have a much smoother start in Berlin, not only by taking care of all the bureaucracy part quickly and independently, but also by providing me the confidence that I have a professional to consult with and ensuring I am not missing any step. Franziska handled any question I had with a lot of patience and always with a smile.',
      'I would highly recommend anyone who is looking for an A class relocation services in Berlin to work with Franziska.',
    ],
  },
  {
    quote:
      'Franziska …. was there for us at every step of the way and it is thanks to her that we are living in the house that we wanted the most.',
    name: 'Burçin Guçlu',
    avatar: '/images/clients/stiebler/avatars/7.jpg',
    origin: 'from Turkey, relocating from Spain',
    text: [
      'We had the pleasure to work with Mrs. Franziska Stiebler-Liebenberg in the summer of 2020, when the pandemic made many things even more difficult. My husband was not in Berlin since long while I was relocating from Barcelona.',
      'She debriefed us about neighborhoods and price ranges and assured that the home search would start at the right time. When we described our interests, she understood very well what we were looking for and she even developed a feeling for our dream house. She prepared our application packages and she knew by heart the most asked documents. We were so excited to bind the first house that got us accepted, but she made sure that more houses accepted us as tenants so that we were the ones choosing among the alternatives.',
      'She was there for us during home search, visits, exchange of mails, signing the contract, and even during the paperwork concerning electricity and town hall registration. Overall, Mrs. Franziska Stiebler-Liebenberg was there for us at every step of the way and it is thanks to her that we are living in the house that we wanted the most. We could not have asked for a more professional, dedicated, as well as cheerful and super-friendly person!',
    ],
  },
  {
    quote:
      'I finally have an apartment that I like after 3 long years in Berlin… She will fight for you and with you throughout the process.',
    name: 'Ritwick Mukherjee',
    avatar: '/images/clients/stiebler/avatars/8.jpg',
    origin: 'from India, relocating within Berlin',
    text: [
      'Thanks to Ms. Franziska, I finally have an apartment that I like in Berlin after 3 long years. I can totally recommend her services to anyone looking to relocate in Berlin. Her services allowed me to focus on my new job and helped me avoid spending hours on ImmoScout.',
      'Franziska was very professional and meticulous in her approach. She was very well aware of my work commitments and made sure to schedule the viewings during lunch hours or after office hours without me having to ask her to do so. This demonstrates her attention to details and how much care she takes in dealing with her clients.',
      'Besides her obvious capabilities in arranging the relocation, what amazed me is the personal touch she put into it. Right from advising me on the documentation to advising me how to best take care of the parquet floors or how to avoid kalk damage in the dishwasher, she was always eager to help. She will fight for you and with you throughout the process.',
      'Furthermore, Franziska made sure she set the right expectations regarding the housing market in Germany in the very first meeting itself. This helped me evaluate the options better and have realistic expectations.',
      'As far as communications go, Franziska is fluent in English and I had no trouble communicating with her. She is very prompt with responding to emails/messages on phone/WhatsApp.',
    ],
  },
]

export const content: Record<Lang, SiteContent> = {
  en: {
    nav: {
      services: 'Services',
      about: 'About me',
      recommendations: 'Recommendations',
      contact: 'Contact',
    },
    heroTitle: 'Welcome to Berlin, Germany’s greatest city',
    heroLead:
      'Moving to a new city is a big step. I make your start in Berlin as smooth and pleasant as possible, from day one.',
    intro: [
      'During your first weeks and months, I take care of the practical side of arriving, so you can focus on your new job and your family.',
      'Finding a home, registering at the Bürgeramt, opening a bank account, choosing a school or kindergarten, applying for child benefit or parental allowance: I guide you personally through every step.',
    ],
    maxClients:
      'To give every client my full attention, I work with no more than three clients at a time.',
    introClosing:
      'Let your move to Berlin be an adventure, not a source of stress.',
    servicesTitle: 'My relocation services',
    services: [
      {
        title: 'Apartment and house search',
        intro: [
          'The right home is in a neighbourhood that suits your lifestyle, and offers the best possible quality within the budget you set.',
        ],
        listIntro: 'I help you with:',
        items: [
          'preparing the documents Berlin landlords ask applicants for',
          'selecting listings, including ones that are not public yet (furnished and unfurnished)',
          'private viewings together with you, never crowded group viewings',
          'negotiating the lease with your future landlord until it is ready to sign',
          'translating or summarising the key points of the rental contract in English',
          'the handover of the apartment, including a check of the handover report',
        ],
      },
      {
        title: 'Dealing with authorities',
        subtitle: 'Public offices, service providers and insurance',
        listIntro:
          'I advise you, handle the paperwork, and come with you to appointments for:',
        items: [
          'registering your address at the Bürgeramt (including your dog, if needed)',
          'transferring your driving licence and registering your car',
          'changing your tax class',
          'applying for child benefit (Kindergeld)',
          'parental leave formalities',
          'applying for a daycare voucher (Kita-Gutschein)',
          'registering for the broadcasting fee (Rundfunkbeitrag, formerly GEZ)',
          'choosing and signing up for electricity, gas, mobile, TV and internet',
          'introductions to English-speaking insurance brokers for health, personal liability and household insurance',
        ],
      },
      {
        title: 'Banking',
        intro: [
          'Together we find the bank and account that best fit your needs. I can come with you to open the account and stay by your side until everything works smoothly in daily life.',
        ],
      },
      {
        title: 'Residence permit and work visa',
        listIntro:
          'I am registered with the Business Immigration Service of the Berlin immigration office (LEA). This means I can:',
        items: [
          'prepare and submit all documents for your application',
          'represent you throughout the process, until you hold your official documents',
          'accompany you to your appointments at the Business Immigration Service',
        ],
      },
      {
        title: 'German lessons and cultural training',
        intro: [
          'Want to learn German or improve the German you already speak?',
        ],
        listIntro: 'I can arrange:',
        items: [
          'German lessons, one-to-one or in a group, matched to your level and goals',
          'cultural training that explains everyday life and social customs in Germany',
        ],
      },
      {
        title: 'School and kindergarten search',
        intro: [
          'Finding a school or kindergarten that matches your approach to education is key to helping your children, and your whole family, settle in.',
        ],
        listIntro: 'I support you by:',
        items: [
          'giving you an overview of schools and kindergartens near your home, international options, and schools with welcome classes for children who do not speak German yet',
          'contacting the schools and kindergartens you are interested in',
          'coming with you to introductory meetings',
          'helping with applications and paperwork',
          'accompanying you to the mandatory school health check with the public health officer',
        ],
      },
      {
        title: 'Leaving Berlin',
        intro: ['Sad to see you go! Here is what we take care of:'],
        items: [
          'writing the notice letter to your landlord',
          'negotiating terms if you need to end your lease early',
          'the handover of the apartment, including a check of the handover report',
          'reviewing your final utility cost statement',
          'cancelling all utility contracts (electricity, gas, TV, phone and internet)',
          'closing your bank account',
          'setting up mail forwarding to your new address',
          'deregistering at the Bürgeramt (including car and dog)',
        ],
      },
    ],
    aboutTitle: 'About me',
    about: [
      'Berlin has long been my favourite city in Germany. I have lived here for more than 28 years, I know each district and its character, and I can tell you where you will feel most at home.',
      'I have also lived in New Delhi, Nairobi, Cologne, Vienna, Munich and Seattle. I know from experience what it means to arrive somewhere new, with new people and new customs, and how much harder it is with children who need to find their place in a new school and make new friends.',
      'I have worked in real estate since 1998, so I know the Berlin rental market from both sides: tenant and landlord.',
      'I understand how exciting, and how demanding, your move can be. Let’s take on this new chapter together, so you feel at home in Berlin as soon as possible.',
    ],
    facts: [
      '28+ years in Berlin',
      'Max. 3 clients at a time',
      'Real estate since 1998',
    ],
    recommendationsTitle: 'What my clients say',
    readMore: 'Read the full recommendation',
    contactTitle: 'I look forward to meeting you!',
    contactLead:
      'Send me a message on WhatsApp, give me a call, or write an email.',
    whatsapp: 'WhatsApp',
    call: 'Call',
    email: 'Email',
    footerLegal: 'Impressum & Data Protection',
    previewNotice: 'Preview of your new website. Not live yet.',
  },
  de: {
    nav: {
      services: 'Leistungen',
      about: 'Über mich',
      recommendations: 'Kundenstimmen',
      contact: 'Kontakt',
    },
    heroTitle: 'Herzlich willkommen in Berlin, dieser großartigen Stadt!',
    heroLead:
      'Ich freue mich darauf, Ihnen den Start von Beginn an so angenehm wie möglich zu gestalten.',
    intro: [
      'Bei allen Aktivitäten der ersten Wochen und Monate unterstütze ich Sie gerne – damit Sie sich in Ruhe Ihren eigentlichen Aufgaben widmen können.',
      'Ob bei Wohnungs- oder Haussuche, Anmeldung im Bürgeramt, Eröffnung eines Bankkontos, Schul- und Kindergartensuche oder der Beantragung staatlicher Leistungen – ich betreue Sie immer persönlich während des gesamten Prozesses.',
    ],
    maxClients:
      'Um optimale Ergebnisse zu erzielen, akzeptiere ich dabei maximal drei Kundenaufträge gleichzeitig.',
    introClosing:
      'Machen Sie Ihr Berlin-Erlebnis zu einem entspannten Abenteuer!',
    servicesTitle: 'Meine Relocation Services',
    services: [
      {
        title: 'Wohnungs-/Haussuche',
        intro: [
          'Die „passende Wohnung“ für Sie, das bedeutet für mich, in dem Bezirk, der Ihrem persönlichen Lebensstil am besten entspricht, ein Zuhause zu finden, welches in dem preislichen Rahmen, den Sie gesetzt haben, einen bestmöglichen Ausstattungsstandard bietet.',
        ],
        listIntro: 'Ich unterstütze Sie bei der',
        items: [
          'Zusammenstellung der Dokumente, die auf dem Berliner Wohnungsmarkt von Mietbewerbern verlangt werden',
          'Auswahl von Immobilienangeboten, die bereits auf dem Markt sind oder erst demnächst gelistet werden (möblierte sowie unmöblierte Wohnungen)',
          'Begleitung zu den Wohnungsbesichtigungen (nur individuelle Termine, keine Teilnahme an Massen-Besichtigungen)',
          'Moderation der Mietvertragsverhandlungen mit Ihrem zukünftigen Vermieter bis zur Unterschriftsreife',
          'Übersetzung/Zusammenfassung der wichtigsten Punkte des Mietvertragstextes ins Englische',
          'Begleitung zur Wohnungsübergabe, Prüfung des Übergabeprotokolls',
        ],
      },
      {
        title: 'Behördengänge',
        subtitle:
          'Kontakt zu öffentlichen und privatwirtschaftlichen Dienstleistern und Versicherungen',
        listIntro:
          'Dieser Service beinhaltet die Beratung, Erledigung oder persönliche Begleitung bei',
        items: [
          'Anmeldung/Ummeldung im Bürgeramt (inkl. Ihres Hundes, wenn notwendig)',
          'Führerschein- und KFZ-Ummeldung',
          'Steuerklassenwechsel',
          'Beantragung Kindergeld',
          'Formalitäten rund um die Elternzeit',
          'Beantragung Kita-Gutschein',
          'Anmeldung bei der GEZ (= Gebühreneinzugszentrale) für Mediennutzung',
          'Auswahl und Abschluss eines Elektrizitäts-/Gas-/Festnetz-/TV-/Internet-Vertrages',
          'Vermittlung zu Versicherungsmaklern, die Sie auf Englisch beraten, beispielsweise Krankenversicherungen, Privathaftpflicht- und Hausratversicherungen',
        ],
      },
      {
        title: 'Bankangelegenheiten',
        intro: [
          'Gemeinsam finden wir das Geldinstitut und die Kontoausgestaltung, die am besten zu Ihren Erfordernissen passt. Gerne begleite ich Sie auch bei der Eröffnung Ihres Kontos und stehe an Ihrer Seite, bis Ihr Konto reibungslos im Alltag einsetzbar ist.',
        ],
      },
      {
        title: 'Beantragung Aufenthaltsgenehmigung und Arbeitsvisum',
        listIntro:
          'Ich bin im Business Immigration Service beim Landesamt für Bürger- und Ordnungsangelegenheiten (LEA)/Berlin gelistet. Somit bin ich berechtigt',
        items: [
          'alle erforderlichen Unterlagen für Ihr Genehmigungsverfahren beim Business Immigration Service zusammenzustellen und einzureichen',
          'Sie während des gesamten Genehmigungsverfahrens zu vertreten bis zur Aushändigung der offiziellen Dokumente',
          'Sie bei den Terminen im Business Immigration Service zu begleiten',
        ],
      },
      {
        title: 'Sprachkurse, Landeskunde und Kulturtraining',
        intro: [
          'Sie möchten Deutsch lernen oder Ihre Deutschkenntnisse verbessern?',
        ],
        listIntro: 'Ich vermittele',
        items: [
          'Deutschunterricht (als Einzel- oder Gruppenkurs), der zu Ihrem sprachlichen Niveau und persönlichen Bedürfnissen passt',
          'Teilnahme an einem Kulturtraining, das die alltäglichen Umgangsformen in Deutschland erklärt',
        ],
      },
      {
        title: 'Schul-/Kindergartensuche',
        intro: [
          'Besonders wichtig für Ihr(e) Kind(er) und die Familie ist das Finden einer Schule oder eines Kindergartens, passend zu Ihren persönlichen Erziehungs- und Bildungsidealen.',
        ],
        listIntro: 'Ich unterstütze Sie bei diesen Schritten:',
        items: [
          'Überblick vermitteln über das Angebot an Schulen/Kindergärten in Ihrem Wohnumfeld bzw. generell hinsichtlich internationaler Schul-/Kindergartenangebote oder Schulen mit Willkommensklassen (für Kinder ohne Deutschkenntnisse)',
          'Kontakt aufnehmen mit den von Ihnen favorisierten Schulen/Kindergärten',
          'Begleitung zu den Kennenlern-Terminen',
          'Hilfe beim Bewerben um Schul-/Kindergartenplätze',
        ],
        outro:
          '…und ich begleite Sie auch, wenn Ihr Kind zur obligatorischen Eingangsschuluntersuchung beim Amtsarzt vorstellig werden muss.',
      },
      {
        title: 'Wegzug aus Berlin',
        intro: ['Schade – Sie ziehen aus Berlin weg…'],
        listIntro: 'Hieran müssen wir denken:',
        items: [
          'Formulierung des Kündigungsschreibens an Ihren Vermieter',
          'Verhandlung der Kündigungsformalitäten bei vorzeitiger Vertragsbeendigung',
          'Wohnungsübergabemeeting – ich begleite Sie und prüfe die Formalitäten des Wohnungsübergabeprotokolls',
          'Überprüfen der letzten Betriebskostenabrechnung',
          'Abmeldung sämtlicher Versorgerverträge (Strom, Gas, TV, Telefon/WiFi)',
          'Auflösung Ihres Bankkontos',
          'Aktivierung eines Postnachsendeauftrages',
          'Abmeldung/Ummeldung beim Bürgeramt (inkl. Auto und Hund)',
        ],
      },
    ],
    aboutTitle: 'Über mich',
    about: [
      'Berlin ist meine Lieblingsstadt in Deutschland. Nach mehr als 28 Jahren kenne ich die verschiedenen Bezirke und weiß, wo es sich – je nach den persönlichen Wünschen und Gegebenheiten – am besten leben lässt.',
      'Ich habe in Städten in der ganzen Welt gelebt – in Neu-Delhi, Nairobi, Köln, Wien, München und Seattle – und weiß damit aus eigener Erfahrung, wie es ist, neuen Umgebungen, Menschen und kulturellen Gepflogenheiten zu begegnen. Auch als Familie, mit der zusätzlichen Herausforderung, Kinder in ein fremdsprachliches Schul- und Freizeitumfeld zu integrieren.',
      'Im Bereich Immobilien bin ich seit 1998 tätig – und kenne somit die spezifischen Besonderheiten des Berliner Mietmarkts sowohl aus Mieter- als auch aus Vermieterperspektive.',
      'Ich kann also gut nachempfinden, in welcher aufregenden, aber manchmal auch besonders anspruchsvollen Situation Sie sich gerade befinden. Lassen Sie uns die Herausforderungen, die Ihre neue Lebensphase bietet, gemeinsam angehen und zum bestmöglichen Ergebnis führen – damit Sie sich in Berlin schnell zuhause fühlen!',
    ],
    facts: [
      '28+ Jahre in Berlin',
      'Max. 3 Kunden gleichzeitig',
      'Immobilien seit 1998',
    ],
    recommendationsTitle: 'Das sagen meine Kunden und Kundinnen',
    readMore: 'Ganze Empfehlung lesen',
    contactTitle: 'Ich freue mich auf Sie!',
    contactLead:
      'Schreiben Sie mir auf WhatsApp, rufen Sie mich an oder senden Sie eine E-Mail.',
    whatsapp: 'WhatsApp',
    call: 'Anrufen',
    email: 'E-Mail',
    footerLegal: 'Impressum & Datenschutz',
    previewNotice:
      'Vorschau der neuen Website mit Ihren Texten 2026. Noch nicht online.',
  },
}
