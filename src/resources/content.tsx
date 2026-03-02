import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Adrien",
  lastName: "Poindron",
  name: `Adrien Poindron`,
  role: "Physicist",
  avatar: "/images/avatar.jpg",
  email: "adrien.poindron@gmail.com",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["French", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MidnightBiscuit",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/adrien-poindron-618a11128/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Arxiv",
    icon: "arxiv",
    link: "https://arxiv.org/search/physics?searchtype=author&query=Poindron,+A",
    essential: true,
  },
  {
    name: "Orcid",
    icon: "orcid",
    link: "https://orcid.org/0009-0003-1895-438X",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I am Adrien, an experimental physicist, teacher, open source enthusiast.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an experimental physicist based in Montpellier, south of France. I like to tackle complex challenges, create effective and elegant solutions and transmit knowledge for the common good. My work ranges from learning new complex ideas to carrying out methodical experimental work.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Universität Basel",
        timeframe: "2023 - 2025",
        role: "Post-doctorate researcher",
        achievements: [
          <>
            Developped a hybrid system involving a trapped Ca<sup>+</sup> ion and a mechanically driven nano-wire. I 
          </>,
          <>
            Studied and characterised the Duffing-type dynamics followed by the laser-cooled trapped Ca<sup>+</sup> ion.
          </>,
          <>
            Modellised and designed a new trap assembly.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Aix-Marseille Université",
        timeframe: "2022 - 2023",
        role: "Research engineer",
        achievements: [
          <>
            Developed a prototype electrospray-type molecular source for a prototye high-mass single molecular ion detector.
          </>,
          <>
            Simulated the interaction of a flying molecular ion with the detector.
          </>,
        ],
        images: [],
      },
      {
        company: "Aix-Marseille Université",
        timeframe: "2018 - 2022",
        role: "PhD student",
        achievements: [
          <>
            Developed a prototype detector of single MegaDalton molecular ions based on large ensembles of Doppler-cooled and trapped Ca<sup>+</sup> ions.
          </>,
          <>
            Using molecular dynamics simulations I have established a numerical proof-of-concept, highlighting the main conditions leading to a detection event.
          </>,
        ],
        images: [],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Aix-Marseille Université",
        description: <>PhD in Physics and Material Sciences</>,
      },
      {
        name: "Aix-Marseille Université",
        description: <>Europhotonics international MSc</>,
      },
      {
        name: "Aix-Marseille Université",
        description: <>Sciences & Humanités BSc</>,
      },
      {
        name: "French Maritime Academy",
        description: <>1st class merchant navy officer</>,
      },
    ],
  },
  teaching: {
    display: true, // set to false to hide this section
    title: "Teaching",
    lectures: [
      {
        name: "Computer science",
        description: <></>,
      },
      {
        name: "Geometrical optics",
        description: <></>,
      },
      {
        name: "Newtonian physics",
        description: <></>,
      },
      {
        name: "Colors and photography",
        description: <></>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python programming",
        description: (
          <ul>
          <li>Data processing and analysis</li>
          <li>Numerical simulations</li>
          <li>Analytical studies</li>          
          <li>Instrumentation control and grahpical interface</li>
          </ul>
    ),
    //<>Minimisation of the assymetries and defects of electric potential using a Multi-Objective Optimisation tool (Pymoo).</>
        tags: [
          {
            name: "Python", // wxPython
            icon: "python",
          },
          {
            name: "PyQt", // wxPython
            icon: "",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "High-Performance Computation",
        description: (
          <ul>
            <li>Molecular dynamics simulations with an optimised Python solver or a parallelised Fortran routine.</li>
            <li>Modellisation and optimisation of a miniaturised particle trap with a FEM software through Python API (MPh)</li>
            <li>Execution on a remote HPC server (Slurm).</li>
          </ul>
        ),
        tags: [
          {
            name: "Slurm",
            icon: "",
          },
          {
            name: "OpenMP",
            icon: "",
          },
          {
            name: "Fortran",
            icon: "fortran",
          },
          {
            name: "Comsol",
            icon: "comsol",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Optics, laser systems and optical detection",
        description: (
          <>Operation of laser systems. Beam shaping and handling. Imaging.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Instrumentation, vacuum and ",
        description: (
          <>Complex instrumentation handling and control, vacuum systems, .</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const publications: Publications = {    
    display: true, // set to false to hide this section
    label: "Publications",
    title: `Publications`, // – ${person.name}
    description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, publications, gallery };
