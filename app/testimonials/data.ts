import { TESTIMONIAL_TYPE } from 'app/constants'

export interface Testimonial {
  name: string
  position: string
  paragraphs: string[]
  testimonialLink: string
  pic?: string
  authorLink: string
  type: TESTIMONIAL_TYPE
}

export const testimonials = [
  {
    name: 'Sebastiaan Debrouwere',
    paragraphs: [
      'Nathan joined our team at Genie as one of the first engineers. He played an instrumental role in laying the technical foundations of building our software, and our engineering culture. In the year we worked together he consistently delivered high quality work at a rapid pace, exhibited tremendous ownership and pragmatism.',
      'What I particularly liked about working with Nathan was his drive to deliver impact beyond just what we needed to code. There are countless examples, but the three that stand out are:',
      '- his work, together with our designer, on shaping our component library and declarative front-end',
      '- his deep involvement in hiring and recruiting, leveraging his expertise to select individuals who fit our culture and the skills demanded',
      '- his challenges and thinking on user centricity in product design.',
      "Nathan would be an invaluable asset to any team, and I couldn't recommend him enough.",
    ],
    testimonialLink: 'https://www.linkedin.com/in/nathan-brachotte/',
    pic: '/images/testimonials/seb.webp',
    authorLink: 'https://www.linkedin.com/in/sdebrouwere',
    position: 'CEO at Genie',
    type: 'clients',
  },
  {
    name: 'Lucas Michot',
    position: 'Head of Engineering at Genie',
    paragraphs: [
      `As Nathan's lead at Genie, I am thrilled to recommend him as an exceptional Senior Developer. Nathan's deep expertise in various engineering fields, alongside his remarkable problem-solving skills, were instrumental to our team's success in delivering high-quality projects.`,
      `In addition to his technical experience, Nathan consistently demonstrated excellent communication skills and a collaborative spirit. His mentorship and guidance have been invaluable to our team, especially to junior developers and other peers, fostering a positive and productive work environment.`,
      `Nathan is a highly skilled Senior Developer and a genuine team player. I wholeheartedly endorse him for any software development role he chooses to pursue in the future.`,
    ],
    testimonialLink: 'https://www.linkedin.com/in/nathan-brachotte/',
    pic: '/images/testimonials/lucas.webp',
    authorLink: 'https://www.linkedin.com/in/lucasmichot',
    type: 'leads',
  },
  {
    name: 'Gerald Kropitz',
    position: 'Co-Founder & CTO at MEMBER',
    paragraphs: [
      "I had the pleasure of working closely with Nathan during his time as freelancer at MEMBER and his contributions to MEMBER's mobile application had a big impact immediately.",
      'I can therefore highly recommend Nathan for any software development or freelancing opportunity. He is not only a talented engineer but also a reliable and collaborative team member who consistently exceeds expectations. I am confident that he will continue to excel in all his future endeavors.',
    ],
    testimonialLink: 'https://www.linkedin.com/in/nathan-brachotte/',
    pic: '/images/testimonials/gerald.webp',
    authorLink: 'https://www.linkedin.com/in/gkropitz/',
    type: 'clients',
  },
  {
    name: 'Jimin Park',
    position: 'Team Lead at Genie',
    paragraphs: [
      'I highly recommend Nathan for any software development position.',
      "During our time at a start-up where we built the codebase from scratch, Nathan proved himself to be a proactive problem-solver who quickly tackled complex tasks. He's an excellent communicator with a good grasp of best software practices. Nathan's positive attitude and dedication to team culture also made him a valuable asset to our team.",
    ],
    testimonialLink: 'https://www.linkedin.com/in/nathan-brachotte/',
    pic: '/images/testimonials/jimin.webp',
    authorLink: 'https://www.linkedin.com/in/jimin-park-51470110/',
    type: 'leads',
  },
  {
    name: 'Vitali Yazvinski',
    position: 'Senior Software Engineer at Genie',
    paragraphs: [
      'I had a chance to work with Nathan for about half a year. Nathan is a great colleague to work with.',
      "He has awesome skills in web and for me there were plenty of things to learn from him, especially in organizing ideas and brainstorming them. In addition, it's easy and it's a fun to work with him, which I believe is very important too.",
      'I would not hesitate to hire him if you want to build a team with healthy relationships in it and build an exceptional product.',
    ],
    testimonialLink: 'https://www.linkedin.com/in/nathan-brachotte/',
    pic: '/images/testimonials/vitali.webp',
    authorLink: 'https://www.linkedin.com/in/vitaliyazvinski',
    type: 'colleagues',
  },
  {
    name: 'Roney Castro',
    position: 'Product Manager at Klarna GmbH',
    paragraphs: [
      'I had the pleasure of working with Nathan for almost one year. He always demonstrated a significant ability to think about the entire user journey beyond the "happy path", proposing solutions and ensuring that the end user experience will always be consistent and optimal.',
      'This is also reflected on his behavior as a team member, where he was always very active discussing and proposing solutions and engaging other engineers and designers with the goal of providing the best possible experience for the users.',
    ],
    testimonialLink: 'https://www.linkedin.com/in/nathan-brachotte/',
    pic: '/images/testimonials/roney.webp',
    authorLink: 'https://www.linkedin.com/in/roneycastro',
    type: 'leads',
  },
  {
    name: 'Varun Pal',
    position: 'Associate Engineering Manager at Klarna GmbH',
    paragraphs: [
      'Nathan and I worked in Klarna for 1.5 years. Nathan is a unique engineer who makes everything better for the end customer. He goes beyond the task requirements and adds customer wow features like Accessibility, animations and an improved UX. He continuously aligns with designers and improves the designs so that end users get the best experience. Nathan is very thorough in his work and holds discussions with stakeholders, documents everything properly and presents his work to a wider audience through engaging demos. I was very lucky to have Nathan in my team and I wish him the best for his future.',
    ],
    testimonialLink: 'https://www.linkedin.com/in/nathan-brachotte/',
    pic: '/images/testimonials/varun.webp',
    authorLink: 'https://www.linkedin.com/in/palvarun',
    type: 'leads',
  },
  {
    name: 'Erik Waterloo',
    position: 'Head of Software at colorfy GmbH',
    paragraphs: [
      `Nathan was the first hire I made when I took over the software team at colorfy
and I got the chance to work with him starting from an internship in February
of 2018. At the time he was joining a small team of 3 developers and took over
a challenging and important IoT project as a React Native developer. His deep
care and feeling of responsibility for his work paired with him being an
excellent team player enabled him to deliver critical contributions right from
the start.`,
      `In the end of 2018 he finished his studies of Software and System Engineering
with High Honours and became an even more important member of the team
in his new role of a full time React Native developer. Nathan is a quick learner
and during the growth of the team to 7 members right now he never stopped
being vocal about his ideas on processes and more importantly was also
candid when we were deriving from our standards.`,
      `It was a pleasure being a part of his development from an intern to an
intermediate developer. Nathan is constantly learning new technologies and
frameworks within the React Native world but is also working on other
technologies in his spare time which shows his commitment to software
development in general.`,
    ],
    testimonialLink: 'https://www.linkedin.com/in/nathan-brachotte/',
    pic: '/images/testimonials/erik.webp',
    authorLink: 'https://www.linkedin.com/in/erik-waterloo',
    type: 'leads',
  },
  {
    name: 'Olfa Karoui',
    position: 'Mobile Developer Intern at colorfy GmbH',
    paragraphs: [
      'I worked with Nathan when I joined Colorfy GmbH as an intern.',
      "He was very supportive and helped me get onboarded on one of the company's most important projects. He always made sure to share his experience with me and guide me in the right direction. Working with him was a huge learning experience, he was a great part of my professional growth. At such a young age, he's already a great mentor.",
      'I am very thankful that I got the chance to work closely with him. ',
    ],
    testimonialLink: 'https://www.linkedin.com/in/nathan-brachotte/',
    authorLink: 'https://www.linkedin.com/in/olfakaroui',
    type: 'colleagues',
  },
  {
    name: 'Hemang Pandya',
    position: 'Lead Mobile Developer at colorfy GmbH',
    paragraphs: [
      'Nathan is one of the most dedicated and driven professionals I have worked with.',
      'He will always go that extra mile to look after and deliver for his clients whilst spending as much time in the office as he needs to finish the job and meet his targets. He is always a very good communicator, also when the pressure is rising, calling for clear communication about goals, responsibility, performance, expectations and feedback for every member involved in the project he’s managing. No matter how tense a meeting, Nathan made sure everyone left with a smile.',
      "I couldn't recommend Nathan any higher in a professional environment and consider him to be top of my value add list.",
    ],
    testimonialLink: 'https://www.linkedin.com/in/nathan-brachotte/',
    pic: '/images/testimonials/hemang.webp',
    authorLink: 'https://www.linkedin.com/in/hemang-t-pandya',
    type: 'leads',
  },
] satisfies Testimonial[]

export const clientTestimonials = testimonials.filter((testimonial) => {
  return testimonial.type === TESTIMONIAL_TYPE.CLIENT
})
export const leadTestimonials = testimonials.filter((testimonial) => {
  return testimonial.type === TESTIMONIAL_TYPE.LEAD
})
export const colleagueTestimonials = testimonials.filter((testimonial) => {
  return testimonial.type === TESTIMONIAL_TYPE.COLLEAGUE
})
