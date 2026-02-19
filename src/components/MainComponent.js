"use client";
import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import Image from "next/image";
import ProfileImage from "../assets/profile.jpg";
import DmiImage from "../assets/project/dmi.png";
import fineoteric from "../assets/project/fenioteric.png";
import bluediamond from "../assets/project/bluediamond.png";
import pyramidHealthcare from "../assets/project/pyramid.png";
import shoonya from "../assets/project/shoonya.png";
import Twotonholding from "../assets/project/twotonholding.png";
import ivogue from "../assets/project/ivogue.png";
import backgrondImage from "../assets/bg.jpg";
import developerGif from "../assets/Developer.gif";
import MyLottieComponent from "./MyLottieComponent";

const MainComponent = () => {
  const [isProjectDetails, setProjectDetails] = useState(null);
  const closePopup = () => {
    setProjectDetails(null);
  };
  if (isProjectDetails) {
    return <ProjectDetails data={isProjectDetails} closePopup={closePopup} />;
  }

  const ProjectTag = ({ keys, data }) => {
    return (
      <div
        className="group bg-background-light dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all cursor-pointer"
        onClick={() => setProjectDetails(data)}
        key={keys ?? data.title}
      >
        <div className="h-48 overflow-hidden">
          <Image
            alt="SaaS Platform"
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500`}
            style={{
              backgroundImage: `url(${backgrondImage.src})`,
            }}
            data-alt="User interface of a task management app"
            src={data.image}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{data.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
            {`${data.description.slice(0, 100)}...`}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {data.technology.length > 5
              ? [
                  ...data.technology.slice(0, 5),
                  `+ ${data.technology.length - 5}`,
                ].map((tech) => {
                  return (
                    <span
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full"
                      key={`${tech}_frst`}
                    >
                      {tech}
                    </span>
                  );
                })
              : data.technology.slice(0, 5).map((tech, index) => {
                  return (
                    <span
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full"
                      key={`${tech}_${index}`}
                    >
                      {tech}
                    </span>
                  );
                })}
          </div>
          <button className="text-sm font-bold flex items-center gap-2 group/btn cursor-pointer">
            View Project Details
            <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    );
  };

  const projectData = [
    {
      title: "Diligent Market Intelligence - DMI",
      subTitle: "",
      description:
        "DMI is a leading provider of listed company information, including activist investing, proxy voting and corporate governance. The web app provides expert insights and intelligent analysis to shareholders and investors. The web application has separate modules for analyzing data about the company, investors, and peoples",
      technology: [
        "React JS",
        "Node JS",
        "Express JS",
        "D3.JS",
        "MS SQL",
        "Redux JS",
        "Puppeteer",
        "Ag-gird",
        "Gridstack.js",
        "AWS",
      ],
      responsibility: [
        "Designed and implemented a dynamic and intuitive user interface using React.js.",
        "Utilized state management with Redux for efficient data flow and a responsive user experience.",
        "Integrated reusable UI components to enhance maintainability and scalability.",
        "Implemented Ag-Grid to efficiently manage and display large sets of data, enabling users to navigate, sort, and filter information seamlessly.",
        "Customized Ag-Grid features to suit project requirements, such as implementing custom cell renderers and sorting functionalities",
        "Utilized D3.js to create visually compelling charts and graphs, translating complex datasets into intuitive and interactive visualizations.",
        "Implemented dynamic chart updates based on user interactions, allowing users to drill down into specific data points for deeper analysis.",
        "Built a robust backend server using Node.js and Express, providing RESTful APIs for seamless communication between the frontend and backend.",
        "Implemented authentication and authorization mechanisms using JWT (JSON Web Tokens) to ensure secure user access and data protection.",
        "Implemented Puppeteer, a headless browser automation library, to programmatically navigate web pages and capture content for PDF generation",
        "Implemented techniques to handle asynchronous content loading and maintain consistency between webbased views and the generated PDFs.",
      ],
      timeline: "3.5 Years",
      role: "Full Stack Developer",
      image: DmiImage,
      team_size: "10+",
      url: "https://one.insightia.com/",
    },
    {
      title: "Fineoteric - OneFlo",
      subTitle: "",
      description:
        "Fineoteric Finance is a new-age financial services platform that leverages technology and data-science to make loans quick and easy. The app has multiple load products like Home loans, Loan against Property, Machinery Loan, Unsecured Business loans, Personal Loans, Construction loan, Working Capital including O/D & CC, Credit Cards & Mutual Fund.The App is divided into several modules like products, lenders, leads, and connectors",
      responsibility: [
        "Developed a responsive and aesthetically pleasing user interface using Ant Design, ensuring a consistent and modern design language throughout the application.",
        "Utilized Ant Design components for layout, navigation, and interactive elements, enhancing the overall user experience",
        "Implemented form rendering and submission processes using Form.io APIs, ensuring seamless data collection and storage.",
        "Enabled users to create complex and dynamic forms with conditional logic, validation rules, and dynamic form sections using the capabilities provided by Form.io.",
      ],
      technology: ["React JS", "Redux JS", "Form.io", "Redux JS", "Ant design"],
      timeline: "2 Year",
      role: "Frontend Developer",
      image: fineoteric,
      team_size: "6",
      url: "https://oneflo.in/",
    },
    {
      title: "Two Ton Holding - Tenant Portal",
      subTitle: "",
      description:
        "a web-based reporting platform for TwoTon Holdings that allows users to upload raw Excel data sheets and automatically generate predefined Excel reports with built-in formulas and calculated data. The system processes uploaded row-level data, applies structured business rules and calculations, and produces formatted report modules. Users can compare multiple generated reports, download them, and edit the files directly in live Excel through OneDrive integration.",
      responsibility: [
        "Designed and developed the complete frontend and backend architecture of the reporting platform as a Full Stack Developer.",
        "Built dynamic and responsive user interfaces using React.js, including page development, component structuring, and client-side routing.",
        "Developed secure and scalable REST APIs in the backend to handle user inputs, file uploads, and report processing workflows.",
        "Implemented BullMQ with Redis to manage background job queues, enabling efficient processing of multiple users’ Excel report generation requests concurrently.",
        "Engineered a structured Excel processing workflow to read uploaded raw data sheets, transform data, and generate predefined report templates with calculated outputs.",
        "Integrated LibreOffice for server-side execution of Excel files to ensure accurate formula recalculation and automated data updates.",
        "Integrated Microsoft Graph APIs to upload generated reports to OneDrive and provide users with secure, live-editable Excel links.",
        "Implemented a synchronization mechanism to download updated files after live editing and store the latest version securely on the server.",
        "Developed an internal report comparison module allowing users to compare multiple generated reports within the platform.",
        "Ensured performance optimization, error handling, and smooth end-to-end workflow for report generation and collaboration.",
      ],
      technology: [
        "React JS",
        "Node JS",
        "Express JS",
        "Excel JS",
        "Postgres SQL",
        "Libre Office",
        "Socket IO",
        "Microsoft APIs",
      ],
      timeline: "4 Months",
      role: "Full Stack Developer",
      image: Twotonholding,
      team_size: "1",
      url: "https://twotonholdings.com/",
    },

    {
      title: "Shoonya",
      subTitle: "",
      description:
        "Shoonya by Finvasia, a financial trading platform that enables users to open online brokerage accounts and trade stocks, mutual funds, derivatives, and other investment products with zero-commission brokerage services. The site helps investors explore trading features, download the app, and access tools for making informed investment decisions.",
      responsibility: [
        "Developed new UI components and complete screens in Next.js based on Figma designs and functional documentation.",
        "Built fully responsive layouts ensuring seamless experience across desktop, tablet, and mobile devices.",
        "Implemented smooth and interactive animations using Framer Motion to enhance user engagement and visual appeal.",
        "Managed application state efficiently using Zustand for centralized and scalable state management.",
        "Integrated Sanity CMS to enable dynamic content management and real-time content updates.",
        "Connected frontend with backend services by integrating APIs to fetch live stock data and company-related financial information.",
        "Ensured performance optimization, clean component architecture, and maintainable code structure.",
      ],
      technology: [
        "Next JS",
        "Tailwind CSS",
        "Material UI",
        "Framer Motion",
        "Zustand",
        "Nest JS",
        "Sanity CMS",
      ],
      timeline: "3 Months",
      role: "Frontend Developer",
      image: shoonya,
      team_size: "5",
      url: "https://shoonya.com/",
    },
    {
      title: "Bluediamond Voyage",
      subTitle: "",
      description:
        "Built a professional travel website for Blue Diamond Voyage, a travel agency offering domestic and international tour packages. The website allows users to explore destinations, view holiday packages, and contact the agency for customized trip planning and bookings.",
      responsibility: [
        "Developed responsive UI screens and reusable components using React.js.",
        "Built the website with fully dynamic content, allowing text, images, links, and travel package details to be managed from the backend.",
        "Created an Admin Panel for adding, editing, and managing all dynamic data shown on the site.",
        "Developed REST APIs in the backend to handle data operations such as creating, updating, and fetching travel information.",
        "Integrated PostgreSQL database to store and manage all application data securely.",
        "Integrated Google Calendar APIs to enable users to schedule sessions and generate Google Meet links.",
        "Implemented functionality for users to select dates and times for meet sessions, automatically generating and storing meeting links in Google Calendar.",
        "Ensured seamless end-to-end flow between frontend, backend, and third-party integrations.",
      ],
      technology: [
        "React JS",
        "Node JS",
        "Express JS",
        "Postgres SQL",
        "Goolge APIs",
      ],
      timeline: "4 Months",
      role: "Full Stack Developer",
      image: bluediamond,
      team_size: "2",
      url: "https://bluediamondvoyage.com/",
    },
    {
      title: "Pyramid Healthcare",
      subTitle: "",
      description:
        "Developed a corporate website for Pyramid Healthcare, a company specializing in aesthetic and cosmetic medical equipment. The platform showcases advanced beauty and healthcare machines, provides detailed product information, and enables clinics and wellness centers to connect for inquiries and purchases.",
      responsibility: [
        "Developed responsive user-facing pages and reusable components using React.js.",
        "Converted the entire website into a fully dynamic platform, including text, images, links, and button labels managed through the backend.",
        "Implemented centralized state management using Redux for efficient data handling across the application.",
        "Integrated REST APIs to fetch and display dynamic content on the frontend.",
        "Added smooth and engaging animations using GSAP to enhance user experience.",
        "Built a comprehensive Admin Panel for managing all website content dynamically from the client side.",
        "Used Ant Design (AntD) in the admin panel for structured forms, validations, and UI components.",
        "Developed secure REST APIs in Node.js to handle content creation, updates, and data operations.",
        "Integrated MySQL as the database to store and manage all dynamic website data.",
        "Ensured clean architecture, optimized performance, and scalable code structure for long-term maintainability.",
      ],
      technology: [
        "React JS",
        "Redux JS",
        "Node JS",
        "Express JS",
        "MYSQL",
        "GSAP",
      ],
      timeline: "6 Months",
      role: "Full Stack Developer",
      image: pyramidHealthcare,
      team_size: "2",
      url: "https://www.pyramidhealthcare.in/",
    },
    {
      title: "IVogue",
      subTitle: "",
      description:
        "IVogue is a modern e-commerce platform designed to sell mobile covers online. The website allows users to browse products, view detailed product information, add items to cart, place orders securely, and complete payments online. It includes a complete admin management system for handling products, categories, orders, and customers.",
      responsibility: [
        "Developed a complete e-commerce platform for selling mobile covers using Next.js (Frontend), React.js (Admin Panel), and Node.js (Backend).",
        "Built responsive user interfaces including product listing, product details, cart, checkout, authentication, and order confirmation pages.",
        "Created reusable components and implemented dynamic routing with SEO optimization.",
        "Integrated REST APIs to manage products, user data, cart operations, and order processing.",
        "Developed a fully functional Admin Panel to manage products, categories, inventory, pricing, images, users, and order statuses.",
        "Built secure REST APIs in Node.js to handle authentication, product management, cart logic, and order workflows.",
        "Integrated MongoDB to store and manage products, users, categories, orders, and payment records.",
        "Implemented Stripe payment gateway for secure online payments and transaction handling.",
        "Designed complete order lifecycle management including payment confirmation, order tracking, and status updates.",
        "Implemented role-based access control (Admin/User), input validation, error handling, and backend security best practices.",
        "Ensured performance optimization, scalability, and clean architecture for long-term maintainability.",
      ],
      technology: [
        "React JS",
        "Redux jS",
        "Next JS",
        "Node JS",
        "Express JS",
        "Mongodb DB",
        "Stripe",
      ],
      timeline: "3 Months",
      role: "Full Stack Developer",
      image: ivogue,
      team_size: "3",
      url: false,
    },
    // ivogue
  ];

  const skills = [
    { name: "JavaScript (ES6+)", icon: "code" },
    { name: "React JS", icon: "web" },
    { name: "Next JS", icon: "language" },
    { name: "Node JS", icon: "dns" },
    { name: "Express JS", icon: "settings" },
    { name: "Redux", icon: "sync" },
    { name: "MongoDB", icon: "storage" },
    { name: "MySQL", icon: "database" },
    { name: "PostgreSQL", icon: "database" },
    { name: "REST API", icon: "api" },
    { name: "AWS", icon: "cloud" },
    { name: "Docker", icon: "inventory_2" },
    { name: "VS Code", icon: "terminal" },
    { name: "Git", icon: "merge_type" },
    { name: "Agile Methodology", icon: "groups" },
  ];

  const experienceData = [
    "Designed and developed complete frontend architectures using React.js and Next.js, creating reusable components, responsive layouts, and optimized routing structures.",
    "Built robust backend systems using Node.js and Express.js, developing secure and scalable RESTful APIs.",
    "Implemented advanced data visualization solutions using D3.js and Ag-Grid, handling large datasets with filtering, sorting, and drill-down capabilities.",
    "Developed dynamic, CMS-driven websites and admin panels enabling non-technical users to manage content efficiently.",
    "Engineered complex Excel automation workflows, including data processing, background job handling (BullMQ + Redis), file generation, and formula recalculation using LibreOffice.",
    "Integrated multiple third-party services including Microsoft Graph APIs, Google Calendar APIs, Stripe, Sanity CMS, and AWS services.",
    "Implemented secure authentication and authorization using JWT and role-based access control.",
    "Designed and optimized database structures using MySQL, PostgreSQL, MongoDB, and MS SQL.",
    "Built full-scale e-commerce systems including cart management, order lifecycle, payment integration, and admin dashboards.",
    "Ensured performance optimization, clean architecture, error handling, and scalable application design across all projects.",
    "Collaborated with cross-functional teams (designers, backend teams, QA) and independently handled complete project ownership in multiple engagements.",
  ];

  return (
    <main>
      {/* <!-- Hero Section --> */}
      <section className="relative bg-background  overflow-hidden pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              Full Stack <span className="text-primary">Developer</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
              I design and develop scalable, high-performance web applications
              that help businesses grow. Experienced in Agile development, team
              leadership, and delivering end-to-end digital solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer"
              >
                Hire Me
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
              <a
                href="#projects"
                className="bg-background dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:text-slate-600 transition-colors cursor-pointer"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary rounded-3xl rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
              <Image
                alt="Professional Headshot"
                className="relative rounded-3xl w-80 h-96 object-cover shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
                data-alt="Professional portrait of a developer smiling"
                src={ProfileImage}
              />
              {/* <img
                alt="Professional Headshot"
                className="relative rounded-3xl w-80 h-96 object-cover shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
                data-alt="Professional portrait of a developer smiling"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZuYgpvVO4dzbRjKjiAXKEJdwYyNGHzoV3qWNvWUyXhy8lCAawDX1kqF5IJPT3HRAVzvoTJUo1ZJD9csQLez9WX8PR45peIz8mxfSjZURjRngrDSN4lvsRRlxukO0cRL7GrHOVS_aSlDoFXTnzFvGs1dDl-eqlF2XHKGyzAgSAhpxErHb8Ou9_w79O7X9ejBxGYXPEbBAeYavJN5hQPXpTn-1HqzPKxEg90y8mCIfC308qpAGFmYYNgMoBE_FHx26ah9LazmQSUxSX"
              /> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Me Section --> */}
      <section className="py-24 bg-background-light dark:bg-slate-900/50" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2">
              {/* <Image
                alt="Workspace Setup"
                className="rounded-2xl shadow-xl w-full aspect-video object-contain"
                data-alt="Modern workspace with laptop and coffee"
                src={developerGif}
              /> */}
              <MyLottieComponent />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-12 h-1 bg-primary rounded-full"></span>
                My Story
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  I am a passionate Full Stack Developer with over 5 years of
                  professional experience in designing, developing, and
                  deploying web applications. Since June 2021, I have been
                  working at Aegis Software, where I have successfully delivered
                  multiple client-based and product-based solutions.
                </p>
                <p>
                  I work closely with project managers and clients following
                  Agile methodology, ensuring timely delivery and high-quality
                  standards. I have handled projects independently, led
                  development teams, and contributed to building scalable and
                  maintainable architectures.
                </p>
                <p>
                  I strongly believe in clean code, performance optimization,
                  and building technology that solves real-world business
                  problems.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">
                  Education
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      school
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        MCA
                      </p>
                      <p className="text-sm">
                        Saurashtra University, 2019 - 2021
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      school
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        BCA
                      </p>
                      <p className="text-sm">
                        Saurashtra University, 2016 - 2019
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Experience Section --> */}
      <section
        className="py-24 bg-background dark:bg-background-dark"
        id="experience"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <p className="text-slate-600 dark:text-slate-400">
              A journey through my professional milestones
            </p>
          </div>
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0 space-y-12">
            {/* <!-- Item 1 --> */}
            <div className="relative pl-10">
              <div className="absolute -left-[11px] top-0 size-5 rounded-full bg-primary border-4 border-white dark:border-background-dark"></div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                <span className="text-primary font-bold text-sm tracking-widest uppercase">
                  2021 - Present
                </span>
                <h3 className="text-xl font-bold mt-2">z
                  Senior Full Stack Developer
                </h3>
                <p className="text-slate-500 font-medium mb-4">
                  Aegis Software.
                </p>
                <ul className="list-disc list-outside pl-5 text-slate-600 dark:text-slate-400 space-y-3 text-sm leading-relaxed">
                  {experienceData.map((items) => {
                    return <li key={items}>{items}</li>;
                  })}
                  {/* <li>
                    Collaborated with project managers and clients in
                    Agile/Scrum environments.
                  </li> */}
                </ul>
              </div>
            </div>
            {/* <!-- Item 2 --> */}
            {/* <div className="relative pl-10">
              <div className="absolute -left-[11px] top-0 size-5 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-background-dark"></div>
              <div className="bg-background dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                <span className="text-slate-400 font-bold text-sm tracking-widest uppercase">
                  2018 - 2021
                </span>
                <h3 className="text-xl font-bold mt-2">Frontend Developer</h3>
                <p className="text-slate-500 font-medium mb-4">
                  Creative Digital Agency
                </p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 text-sm leading-relaxed">
                  <li>
                    Developed over 20 responsive websites for diverse clients
                    using React and Tailwind CSS.
                  </li>
                  <li>
                    Collaborated closely with designers to ensure high-fidelity
                    UI implementation.
                  </li>
                  <li>
                    Reduced page load times by 50% using modern web optimization
                    techniques.
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!-- Projects Section --> */}
      <section className="py-24 bg-background-light dark:bg-slate-900/50" id="projects">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Hand-picked selection of my recent work
              </p>
            </div>
            <a className="text-primary font-bold hover:underline" href="#">
              {/* View All Projects */}
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Project 1 --> */}
            {/*  */}
            {projectData.map((item) => {
              return (
                <div key={item.title}>
                  <ProjectTag keys={item.title} data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <!-- Skills Section --> */}
      <section
        className="py-24 bg-background dark:bg-background-dark"
        id="skills"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tech Stack &amp; Skills</h2>
            <p className="text-slate-600 dark:text-slate-400">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* <!-- Skill Box 1 --> */}
            {skills.map((skill) => {
              return (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:shadow-md transition-shadow"
                >
                  <span className="material-symbols-outlined text-4xl text-primary">
                    {skill.icon}
                  </span>
                  <span className="font-semibold text-sm">{skill.name}</span>
                </div>
              );
            })}
            {/* <div className="bg-background dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary">
                data_object
              </span>
              <span className="font-semibold text-sm">React</span>
            </div>
            <div className="bg-background dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary">
                dns
              </span>
              <span className="font-semibold text-sm">Node.js</span>
            </div>
            <div className="bg-background dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary">
                terminal
              </span>
              <span className="font-semibold text-sm">TypeScript</span>
            </div>
            <div className="bg-background dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary">
                css
              </span>
              <span className="font-semibold text-sm">Tailwind</span>
            </div>
            <div className="bg-background dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary">
                database
              </span>
              <span className="font-semibold text-sm">PostgreSQL</span>
            </div>
            <div className="bg-background dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary">
                cloud
              </span>
              <span className="font-semibold text-sm">AWS</span>
            </div>
            <div className="bg-background dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary">
                grid_view
              </span>
              <span className="font-semibold text-sm">Next.js</span>
            </div>
            <div className="bg-background dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary">
                brush
              </span>
              <span className="font-semibold text-sm">Figma</span>
            </div>
            <div className="bg-background dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary">
                api
              </span>
              <span className="font-semibold text-sm">GraphQL</span>
            </div>
            <div className="bg-background dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary">
                architecture
              </span>
              <span className="font-semibold text-sm">Docker</span>
            </div>
            <div className="bg-background dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary">
                psychology
              </span>
              <span className="font-semibold text-sm">PyTorch</span>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!-- Contact Section --> */}
      <section className="py-24 bg-background-light dark:bg-slate-900/50" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">Lets Talk!</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
                I am currently open to new opportunities and collaborations. If
                you have a project in mind or just want to say hi, feel free to
                reach out.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Email</p>
                    <p className="font-bold">jigar.ranpura99@gmail.com</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mobile</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Mobile No.
                    </p>
                    <p className="font-bold">+91 8238169110</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">share</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      LinkedIn
                    </p>
                    <p className="font-bold">
                      <a href="https://in.linkedin.com/in/jeegar-ranpura">
                        Jeegar Ranpura
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Location
                    </p>
                    <p
                      className="font-bold"
                      data-location="San Francisco, California"
                    >
                      Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="Jeegar Ranpura"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="Jeegar@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Subject
                  </label>
                  <input
                    className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Inquiry about project"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                    placeholder="How can I help you?"
                    rows="5"
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  Send Message
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainComponent;
