export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

// 1. "Crafting digital experiences with precision and creativity."
// 2. "Empowering brands through cutting-edge front-end solutions."
// 3. "Passionate about turning ideas into interactive realities."
// 4. "Exploring the art of code and the science of design."
// 5. "Driven by curiosity, inspired by innovation."
// 6. "Building intuitive user experiences, one pixel at a time."
// 7. "Where creativity meets functionality—my code tells the story."

export const gridItems = [
  {
    id: 1,
    title: "Passionate about turning ideas into interactive realities",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/hero-1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "A globe of endless possibilities—interactivity knows no borders",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Driven by curiosity, inspired by innovation",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Where creativity meets functionality—my code tells the story",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "DevOverflow",
    des: "DevOverflow App is a Next.js-based web application designed to optimize development workflows.",
    // img: "/p1.svg",
    img: "/Devflow.png",
    iconLists: [
      "/re.svg",
      "/nextjs.svg",
      "/tail.svg",
      "/ts.svg",
      "/shadcn.png",
      "/mongodb.png",
      "/prismjs.png",
      "/clerk.jpg",
    ],
    link: "https://stack-overflow-app-vendettas-projects-17472a6f.vercel.app/",
  },
  // {
  //   id: 2,
  //   title: "Yoom - Video Conferencing App",
  //   des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
  //   img: "/p2.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  //   link: "/ui.yoom.com",
  // },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    des: "With specialized knowledge of React, I have mastered the art of building highly interactive and scalable front-end applications. I am skilled in creating reusable components, managing application state effectively, and implementing modern design principles to deliver exceptional user experiences. My experience includes utilizing React's ecosystem, such as hooks, context API, and routing, to develop modular and maintainable code. I thrive in collaborative environments, ensuring seamless integration with back-end services and optimizing application performance.",
    name: "React",
    img: "/re.svg",
  },
  {
    des: "I have advanced expertise in Next.js, leveraging its powerful capabilities to build robust, server-side rendered applications and optimize web performance. My experience includes integrating APIs, implementing dynamic routing, and utilizing static site generation to create high-quality web experiences. I am skilled at managing both front-end and back-end functionalities seamlessly within the Next.js framework, ensuring efficiency, scalability, and ease of maintenance. My approach focuses on delivering cutting-edge solutions that align with the latest trends in modern web development.",
    name: "Nextjs",
    img: "/nextjs.svg",
  },
  {
    des: "I am proficient in using Tailwind CSS to design visually appealing and responsive user interfaces efficiently. With a deep understanding of its utility-first approach, I excel in creating custom, scalable designs by leveraging prebuilt classes and configurations. My skills include optimizing component styling, managing theming, and ensuring consistency across projects. I bring speed and flexibility to front-end development by combining Tailwind CSS with modern frameworks and tools, streamlining the process and enhancing performance.",
    name: "Tailwindcss",
    img: "/tail.svg",
  },
  {
    des: "I am highly skilled in Git version control, enabling me to manage and track changes in code efficiently across projects of all sizes. My experience includes branching and merging strategies, resolving conflicts, and maintaining a clean and organized repository history. Additionally, I am proficient in GitHub for collaborative development, including managing pull requests, reviewing code, and utilizing GitHub Actions for CI/CD workflows. I excel in fostering team collaboration by leveraging Git and GitHub to streamline development processes and ensure project consistency.",
    name: "Git/Github",
    img: "/github.svg",
  },
  {
    des: "I have advanced proficiency in TypeScript, utilizing its strong typing and object-oriented features to enhance code reliability and maintainability. My expertise includes designing scalable applications, implementing type-safe APIs, and leveraging TypeScript's rich type system to catch errors early in the development process. I am skilled in integrating TypeScript seamlessly with modern JavaScript frameworks and libraries, ensuring robust, efficient, and high-quality application development.",
    name: "Typescript",
    img: "/ts.svg",
  },
  {
    des: "I have extensive experience working with the Material-UI library, leveraging its robust and customizable React components to create sleek, modern, and responsive user interfaces. My proficiency includes utilizing Material-UI's theming capabilities to maintain brand consistency, optimizing components for accessibility, and integrating them seamlessly with back-end systems. With a deep understanding of Material-UI's features, such as grid systems, typography, and state management tools, I deliver efficient and visually compelling designs tailored to meet project requirements.",
    name: "Material UI",
    img: "/mui.png",
    imgClass: "rounded-full",
  },
  {
    des: "I am highly skilled in utilizing React Hook Form to build efficient, user-friendly forms with minimal code and enhanced performance. My expertise includes managing complex form state, implementing validation rules, and integrating forms seamlessly with various APIs and back-end services. I excel in using React Hook Form's features, such as custom hooks and controlled/uncontrolled inputs, to deliver streamlined solutions tailored to project requirements. My approach ensures forms are scalable, accessible, and optimized for both development speed and user experience.",
    name: "React hook form",
    img: "/reacthookform.png",
  },
  {
    des: "I have comprehensive experience in utilizing Redux and Redux Toolkit to manage complex application state efficiently and effectively. My expertise includes structuring scalable state management solutions, designing feature-rich reducers, and implementing middleware for asynchronous data flow. With Redux Toolkit, I specialize in leveraging its simplified API, such as createSlice and createAsyncThunk, to streamline state management and improve developer productivity. I excel in integrating Redux with modern front-end frameworks, ensuring robust and maintainable applications while enhancing performance and user experience.",
    name: "Redux/Redux toolkit",
    img: "/redux.svg",
  },
  {
    des: "I have a strong command of MongoDB, utilizing its flexibility and scalability to design and manage efficient NoSQL databases. My skills include creating and optimizing schemas, performing complex queries, and implementing effective indexing strategies to enhance database performance. I am experienced in integrating MongoDB with various back-end technologies and deploying databases in cloud environments for scalable and secure applications. By leveraging MongoDB's powerful aggregation framework, I ensure data handling and analysis is robust and tailored to meet project requirements.",
    name: "MongoDB",
    img: "/mongodb.svg",
  },
  {
    des: "With a deep understanding of JavaScript, I excel in crafting dynamic, responsive, and user-friendly web applications. My expertise includes developing seamless front-end interfaces, integrating powerful back-end functionality, and optimizing code for performance and scalability. I am adept at leveraging modern JavaScript frameworks and libraries, writing clean, maintainable code, and implementing innovative solutions to complex problems.",
    name: "Javascript",
    img: "/javascript.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Javascript",
    img: "/javascript.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "React",
    img: "/re.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Nextjs",
    img: "/nextjs.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Tailwindcss",
    img: "/tail.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Typescript",
    img: "/ts.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "Mongodb",
    img: "/mongodb.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 7,
    name: "Git/Github",
    img: "/github.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 8,
    name: "React hook form",
    img: "/reacthookform.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 7,
    name: "Redux/Redux toolkit",
    img: "/redux.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Front-end developer , Nextra",
    desc: "Front-end developer for 'AIBox' and 'Roobin' projects, utilizing Next.js and MUI to create seamless user experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    // https://nextaibox.com/
  },
  {
    id: 2,
    title: "Front-end developer , samina accounting app",
    desc: "Utilized React and TypeScript to modernize the user interface while seamlessly integrating backend APIs. Focused on improving functionality, ensuring accuracy in computations.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    // https://saminasoft.ir/fa 
  },
  {
    id: 3,
    title: "Self-employed developer",
    desc: "Experienced self-employed developer with a strong background in creating, optimizing, and maintaining software solutions tailored to client needs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    // https://github.com/alirezasalimian98
  },
  {
    id: 2,
    img: "/link.svg",
    // https://www.linkedin.com/in/alireza-salimian-3311592a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
  },
  // {
  //   id: 3,
  //   img: "/link.svg",
  // },
];
