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
    role: 'General Manager, Crown World Mobility New Zealand',
  },
  {
    quote:
      'Wir schätzen die Zusammenarbeit mit Ihnen sehr und bekommen nur gute Rückmeldungen unserer Mitarbeiter über Ihre Betreuung.',
    name: 'Melanie Sy',
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
    heroTitle: 'Welcome to Berlin, one of Germany’s greatest cities!',
    heroLead:
      'I look forward to making your start as pleasant as possible from the very beginning.',
    intro: [
      'Gladly I will support you with all activities during your first weeks and months in the city – so that you can relax and devote yourself entirely to your actual tasks.',
      'Whether you are looking for appropriate accommodation or assisting you in matters as registering at the local authority for citizens’ affairs [Bürgeramt], opening a bank account, finding a suitable school or kindergarten for your children, applying for child benefits or state benefits during “parental leave” following the birth of a child – I will take care of you personally during the entire process.',
    ],
    maxClients:
      'In order to achieve the best possible results, I accept a maximum of three customers at the same time.',
    introClosing:
      'Let your Berlin experience be an adventure with as little stress as possible.',
    servicesTitle: 'My Relocation Services',
    services: [
      {
        title: 'Apartment/house search',
        intro: [
          'To find the “right home” means helping you find a place to live in a district that best suits your personal lifestyle, offering you the best possible standard of living within the financial limits you have set yourself.',
        ],
        listIntro: 'I will be glad to provide you with the following services:',
        items: [
          'compiling the documents that applicants for rental on the Berlin housing market are required to submit',
          'selecting real estate offers that are already on the market or will be listed soon (furnished as well as unfurnished apartments)',
          'accompanying you to apartment viewings (only on an individual basis, no mass viewings)',
          'supporting you in lease negotiations with your future landlord until the contract is ready to be signed',
          'translating the most important items of the rental contract into English or providing you with a summary',
          'accompanying you to the handover of the apartment, reviewing the handover protocol',
        ],
      },
      {
        title: 'Dealing with authorities',
        subtitle:
          'Contact with public and private service providers and insurance companies',
        listIntro:
          'This service includes advice, carrying out administrative measures and accompanying you to the government authorities as follows:',
        items: [
          'registration at the local citizens’ affairs authority [Bürgeramt] (incl. your dog if necessary)',
          'registration of your driving licence and motor vehicle',
          'change of income tax category',
          'application for child benefit',
          'formalities regarding parental leave',
          'application for a day-care voucher',
          'registration with the GEZ (office for media use fees)',
          'selection and conclusion of contracts for electricity/gas/mobile phone/TV/internet',
          'referral to insurance brokers who can advise you in English, e.g. for health insurance, personal liability and household insurance',
        ],
      },
      {
        title: 'Banking matters',
        intro: [
          'I will help you find a bank and make account arrangement that best suit your needs.',
          'I will also be happy to assist you in opening your account and stand by your side until your account is ready for smooth use in everyday life.',
        ],
      },
      {
        title: 'Application for residence permit and work visa',
        listIntro:
          'I am listed in the Business Immigration Service at the Berlin Authority for Citizenship and Regulatory Affairs (LEA)/Berlin. Therefore, I am authorized to',
        items: [
          'compile and submit all necessary documents for your approval procedure at the Business Immigration Service',
          'represent you during the entire approval process until you receive the final official documents',
          'accompany you to appointments at the Business Immigration Service',
        ],
      },
      {
        title: 'Language courses, knowledge of Germany and cultural training',
        intro: [
          'Would you like to learn German or improve your German language skills?',
        ],
        listIntro: 'I can arrange:',
        items: [
          'German lessons (individual or group courses) that suit your level and personal needs',
          'participation in a cultural training programme focussing on social behaviour in your new environment',
        ],
      },
      {
        title: 'School/pre-school search',
        intro: [
          'To find a school or kindergarten that fits your personal educational approach is a key factor for the integration of your child(ren) and family.',
        ],
        listIntro: 'I can support you with the following steps:',
        items: [
          'providing an overview of the range of schools/kindergartens in your neighbourhood or in general regarding international schools/kindergartens or schools with “welcome classes” (for children without German language skills)',
          'contacting the schools/kindergartens you consider for your children',
          'accompanying you to meetings at potential schools/kindergartens',
          'assisting you in the application process and formalities',
          '…and I will also accompany you if your child needs to be seen by a public health officer for a mandatory health test.',
        ],
      },
      {
        title: 'Leaving Berlin',
        intro: ['What a pity – you are leaving Berlin…'],
        listIntro: 'Things we should consider:',
        items: [
          'formulation of a lease cancellation letter to your landlord',
          'negotiation of the formalities in case of early termination of rental contract',
          'apartment handover meeting – I will accompany you and make sure that the handover protocol is correct',
          'checking the last settlement of operational costs',
          'cancellation of all utility contracts (electricity, gas, TV, telephone/WiFi)',
          'closing your bank account',
          'arranging of a mail forwarding order to your new destination',
          'cancellation of registration at the Office for Citizens’ Affairs (incl. motor vehicle and dog)',
        ],
      },
    ],
    aboutTitle: 'About me',
    about: [
      'Berlin has long been my favourite city in Germany. After more than 28 years here, I have got to know the different districts in their diversity and can advise you where it is best to live – depending on personal preferences and circumstances.',
      'Having lived in cities all over the world – New Delhi, Nairobi, Cologne, Vienna, Munich and Seattle – I know from personal experience what it is like to encounter new environments, people and cultural habits. I also know what it means for a family to face the additional challenge of integrating children into a foreign, previously unknown educational system and to find adequate ways for children to adapt socially and find new friends in their new environment.',
      'I have been working in the real estate field since 1998 – so I know the specifics of the Berlin rental market from both a tenant and a landlord perspective.',
      'So I am in a position to understand what an exciting but also particularly challenging situation you are currently facing. Let us tackle the challenges that your new phase of life offers together and create the best possible results – enabling you to feel at home in Berlin as soon as possible!',
    ],
    recommendationsTitle: 'Recommendations',
    readMore: 'Read the full recommendation',
    contactTitle: 'I look forward to meeting you!',
    contactLead: 'Write me a message on WhatsApp, call me or send an email.',
    whatsapp: 'WhatsApp',
    call: 'Call',
    email: 'Email',
    footerLegal: 'Impressum & Data Protection',
    previewNotice:
      'Preview of the new website with your 2026 text. Not live yet.',
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
