const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sebastian D. Engelstajn',
  role: 'Full Stack Web Developer',
  description:
  "I am a passionate learner who believes that continuous training and practice are essential to evolve as a developer. My journey in web development started at Henry's full-stack web development bootcamp, where I built a solid foundation in web development. With a background in economic sciences and a particular interest in finance, I am keenly aware of the changes taking place in the financial industry and aspire to contribute to its development. I prioritize teamwork and respect in all my collaborations, believing that the best solutions are built collaboratively. I am constantly evolving and committed to growth as a developer.",
  resume: 'https://docs.google.com/document/d/e/2PACX-1vSgqWMbEcUn7oi-WBx4vf79kIZGXqABiZ65PaKH2XKMcotsx1aFHiCY37IJLtCx_onQUEY7O84JBQKe/pub',
  social: {
    linkedin: "https://www.linkedin.com/in/sebaengelstajn/?locale=en_US",
    github: "https://github.com/lordW1lly",
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'ThePerritos App',
    description:
      'Informative app about dogs breeds. Includes the possibilities of filtering dogs by differents criteria such as Temperament, Weight, Name, etc. Also offers the chance of creating a custom breed.',
    stack: ['Bootstrap', 'Javascript', 'React.JS', 'Redux', 'Express.JS', 'PostgreSQL', 'Node.JS'],
    sourceCode: 'https://github.com/lordW1lly/Dogs-PI',
    livePreview: 'https://perritosapp-front.vercel.app/',
  },
  {
    name: 'Henry-Diamonds',
    description:
      "Creation of an e-commerce site for an entrepreneurship dedicated to the design, production and sale of jewelry items made with semi-precious stones. For the development of the same, a comprehensive process was carried out, covering the assembly of the databases, their corresponding relationships, and then integrating it into both the Back and Front-end development. Not only the technical skills were necessary, the dedication, dedication and teamwork were key for the development to be achieved successfully.",
    stack: ['SASS', 'Javascript', 'React.JS', 'Redux', 'Express.JS', 'PostgreSQL', 'Node.JS', 'Material UI', 'Auth0'],
    sourceCode: 'https://frontend-pf-g1.vercel.app/',
    livePreview: 'https://github.com',
  },
  /* {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  }, */
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'Node.JS',
  'PostgreSQL',
  'Bootstrap',
  "C#",
  ".NET",
  "ASP",
  "SQLServer",
  "VueJS",
  "Azure",
  "AWS"





]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sebastianengelstajn@gmail.com',
}

export { header, about, projects, skills, contact }
