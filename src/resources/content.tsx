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
  display: false,
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
  headline: <>Investigating new frontiers in experimental physics</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">2026</strong>{" "}
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
            Development of an experimental hybrid platform combining a trapped Ca<sup>+</sup> ion and a mechanically driven nanowire.
          </>,
          <>
            Study of ion–mechanical coupling to control the ion’s motional phase, oscillation amplitude, and effective trapping potential.
          </>,
          <>
            Investigation of applications such as compensation of contact potentials and tuning of trap stiffness.
          </>,
          <>Exploration of coupling schemes for quantum-regime applications, including state readout and preparation of non-classical motional states.</>,
          <>Design of a new trap assembly.</>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-03/P1080305.JPG",
            alt: "Current trap assembly",
            width: 16,
            height: 9,
          },
           {
            src: "/images/projects/project-03/Trap7.png",
            alt: "FEM simulation of the trap assembly",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-03/trapperspective_2.png",
            alt: "Rendering of the trap assembly",
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
            Adapted a commercial electrospray ionisation (ESI) source to integrate it with a custom ion-trap experimental setup.
          </>,
          <>
            Investigated fluid flow inside the inlet capillary to improve transmission of molecular ions into the trapping region.
          </>,
          <>
            Optimised the pulse sequence controlling the molecular ion source to enhance the stability and intensity of the ion beam.
          </>,
          <>
            Contributed to the development of a prototype system for the generation and injection of molecular ion beams.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          
        ],
      },
      {
        company: "Aix-Marseille Université",
        timeframe: "2018 - 2022",
        role: "PhD student",
        achievements: [
          <>
            Designed and built an experimental setup to detect ultra-massive molecular ions using a Doppler-cooled trapped Ca<sup>+</sup> ion cloud.
          </>,
          <>
            Developed molecular dynamics simulations to identify the physical conditions required for successful detection through Coulomb interaction and RF heating.
          </>,
          <>
            Investigated the competition between radio-frequency heating and Doppler cooling, demonstrating both low-temperature and high-temperature equilibrium regimes.
          </>,
          <>Implemented the first prototype of an electrospray ionisation source coupled to an electrode array to guide molecular ions into the ion trap.</>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-02/Molecular_source.png",
            alt: "Molecular source",
            width: 16,
            height: 12,
          },
          {
            src: "/images/projects/project-01/bender_trj_30_100amu_200eV_Va180V_alt.png",
            alt: "Charged particle trajectory in the bender",
            width: 16,
            height: 12,
          },
           {
            src: "/images/projects/project-01/cloud_before_inje.png",
            alt: "Cloud before injection",
            width: 16,
            height: 12,
          },
        ],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        institution: "Aix-Marseille Université",
        diploma: <a href="https://www.theses.fr/2022AIXM0087">PhD in Physics and Material Sciences</a>,
        timeframe: "2018 - 2022",
        description: <>I have developed an experimental device for the detection of MegaDalton molecular ions by a Doppler-cooled trapped Ca+ ion ensemble.
Using molecular dynamics simulations I have identified the two essential conditions to meet for a successful detection: the initial coulombic interaction between the molecular ion and the assembly must be
strong enough (mK → K) so the radio-frequency heating can further
increase the ensemble temperature (K → kK) [1]. Radio-frequency
heating was further investigated to understand its competition with
Doppler cooling, enabling both low and high thermodynamic equilibria to be demonstrated [2]. The first implementation of an electrospray ionisation source and an array of electrode in a prototype was
successfully set to guide small molecular ions through the trap.</>,
      },
      {
        institution: "Aix-Marseille Université",
        diploma: <>Europhotonics international MSc</>,
        timeframe: "2017 - 2018",
        description: <>International masters's degree in Optics, Photonics and Instrumentation.</>,
      },
      {
        institution: "Aix-Marseille Université",
        diploma: <>Physics MSc</>,
        timeframe: "2016 - 2017",
        description: <>Fundamental physics with lectures in Quantum
  Mechanics, Statistical Physics, Atomic and
  Spectroscopic Physics, Solid States Physics.
  Additionnal lectures : Dynamical Systems, Signal
  Processing, Biology-Physics.</>,
      },
      {
        institution: "Aix-Marseille Université",
        diploma: <>Sciences & Humanités BSc</>,
        timeframe: "2013 - 2016",
        description: <>Transdisciplinary lectures in various fields of science and humanities : Mathematics, Physics, History of Sciences, Philosophy, Sociology and Biology. Specialised in Physics during the third year : Special Relativity, Cosmology, Statistical and Quantum Mechanics.</>,
      },
      {
        institution: "French Maritime Academy",
        diploma: <>1st class merchant navy officer diploma</>,
        timeframe: "2010 - 2013",
        description: <>Trained as a multi-skilled officer (deck and engine) for unlimited navigation on merchant ships. Preparatory course: Advanced naval military training. Navigated on a gas tanker (BW Nantes) accross the Panama canal, a passenger Ferry (Jean Nicoli) accross Mediterranean sea.</>,
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
        title: "Ion trapping and laser cooling",
        description: (
          <ul>
          <li>Trapping of ions in linear traps</li>
          <li>Doppler cooling</li>
          </ul>
    ),
    //<>Minimisation of the assymetries and defects of electric potential using a Multi-Objective Optimisation tool (Pymoo).</>
        tags: [ ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Optics, laser systems, detection and imaging",
        description: (
          <ul>
          <li>Operation of laser systems.</li>
          <li>Beam shaping and handling.</li>
          <li>Fluorescence detection and imaging of single ions.</li>
          </ul>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [ {
            src: "/images/projects/skills/lasers_3.JPG",
            alt: "Laser systems",
            width: 16,
            height: 9, //9
          },],
      },
      {
        title: "Instrumentation and vacuum systems",
        description: (
          <ul>
          <li>Design and assembly of complex experimental setups.</li>
          <li>Vacuum systems handling and maintenance.</li>
          </ul>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
      {
        title: "Programming",
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
            name: "Fortran", // wxPython
            icon: "fortran",
          },
          {
            name: "PyQt", // wxPython
            icon: "",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/skills/python_all.png",
            alt: "Python program and some examples",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Scientific computing",
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
            name: "Comsol",
            icon: "comsol",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
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
