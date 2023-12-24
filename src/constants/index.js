import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    zeta,
    veripark,
    dEngage,
    f3,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id:"Resume",
      title:"Resume",
      link:"https://www.linkedin.com/in/muhammad-jamshaid/overlay/1635505377471/single-media-viewer/?type=DOCUMENT&profileId=ACoAAAihYLYB4uzj9GQ7iwcpwwj8jrC67iNUJ80"
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Custom Software Development",
      icon: web,
    },
    {
      title: "Web & Desktop Application Development",
      icon: backend,
    },
    {
      title: "Mobile App Development",
      icon: backend,
    },
    {
      title: "Database Design and Optimization",
      icon: creator,
    },
    {
      title: "API Integration",
      icon: creator,
    },
    {
      title: "Software Testing and Quality Assurance",
      icon: creator,
    },
    {
      title: "Continuous Maintenance and Support",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },

  ];
  const points = [
    "Developing and maintaining web applications using React.js and other related technologies.",
    "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Participating in daily meetings.",
  ];
  const experiences = [
    {
      title: "Principal Software Engineer - .NET ",
      company_name: "Veripark",
      icon: veripark,
      iconBg: "#383E56",
      date: "Oct 2021 - Present",
      points: points,
    },
    {
      title: "Back End Developer -Lead",
      company_name: "D•engage",
      icon: dEngage,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Oct 2021",
      points: points,
    },
    {
      title: "Software Engineer",
      company_name: "F3 Technologies Inc",
      icon: f3,
      iconBg: "#383E56",
      date: "Jul 2014 - Jan 2021",
      points: points,
    },
    {
      title: "Software Engineer",
      company_name: "Zeta Technologies",
      icon: zeta,
      iconBg: "#E6DEDD",
      date: "Jan 2014 - Jun 2014",
      points: points,
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "What a great experience working with Muhammad Jamshaid! He was very prompt and went above and beyond the help needed and expectations to solve a problem we ran into on my end. Highly recommend him for anyone needing a smart developer!",
      name: "Tyler Fredrickson",
      designation: "CEO",
      company: "SevenX",
      image: "https://www.upwork.com/profile-portraits/c1dQhXNWRdzYUtEQcZ5NbRVJQCrx-R66Hon8hluIYsrYICFzhAjQKvf6MuZtABp_cs",
    },
    {
      testimonial:
      "Jamshaid delivers good work and is very patient when briefing on the requirement for the work. He will give good feedback or workaround if it is needed. Provided us with ample of support even after completion of the project. I would love to work with him again if I have a project in the range of his expertise. He is highly recommended, really appreciated the good work well done. Thank you Jamshaid.",
      name: "Umer Suqaf",
      designation: "COO",
      company: "",
      image: "",
    },
    {
      testimonial:
      "Muhammad Jamshaid is extremely hardworking and talented programmer. He managed to fix critical problems in our complex code. Jamshiad was very honest to put his time & efforts to complete his work. We will definitely hire him again and recommend it to others. Thank you so much Jamshaid.",
      name: "Hui Shi Tan",
      designation: "CTO",
      company: "The Adventus Consultants Pte Ltd",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "CRM Application",
      description:
        "Web-based platform that allows users to search and manage data from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "ASP.NET Core",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "",
    },
    {
      name: "Bright Caster",
      description:
        "We are proud to bring you the smartest toolset every school dreams of. With native Apps for Teachers & Parents to Smart TV Apps for school administration and parents, BrightCaster makes time for you to spend time with your children, while it takes care of the redundant & tedious tasks for you.",
        tags: [
          {
            name: "ASP.NET Core",
            color: "blue-text-gradient",
          },
          {
            name: "SQL",
            color: "green-text-gradient",
          },
          {
            name: "Bootstrap",
            color: "pink-text-gradient",
          },
        ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Truck Tracking Web Application",
      description:
        "A comprehensive tracking web application that allows owner to track the vehical.",
        tags: [
          {
            name: "ASP.NET Core",
            color: "blue-text-gradient",
          },
          {
            name: "SQL",
            color: "green-text-gradient",
          },
          {
            name: "Bootstrap",
            color: "pink-text-gradient",
          },
          {
            name: "Google Maps",
            color: "pink-text-gradient",
          },
        ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };