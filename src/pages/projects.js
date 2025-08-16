import { useState, useEffect } from 'react';
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/ATOM.png";
import project2 from "../../public/images/projects/IoT.png";
import project3 from "../../public/images/projects/Milk.png";
import project4 from "../../public/images/projects/CAC.png";
import project5 from "../../public/images/projects/resume.jpg";
import project6 from "../../public/images/projects/Student.png";
import project7 from "../../public/images/projects/color.jpeg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primaryDark dark:from-primaryDark dark:to-primary flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out shadow-lg z-50 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            } hover:scale-110 hover:shadow-xl active:scale-95 group`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <div className="relative">
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[18px] border-l-transparent border-r-transparent border-b-light dark:border-b-dark transform -translate-y-0.5 transition-all duration-300 group-hover:-translate-y-1"></div>
                <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 blur-[2px] transition-opacity duration-300"></div>
            </div>
        </button>
    );
};

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm text-justify">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10"> <GithubIcon /></Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">Visit Project</Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm text-justify">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">Visit</Link>
          <Link href={github} target="_blank" className="w-8 md:w-6"> <GithubIcon /></Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Dhyan | Projects Page</title>
        <meta name="description" content="Dhyan Portfolio" />
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link rel="icon" href="/images/favicon/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/images/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light relative">
        <Layout className="pt-16">
          <AnimatedText text="Where Ideas Meet Reality!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Atom AI Assistant"
                img={project1}
                summary="ATOM is a voice-activated AI assistant inspired by futuristic systems like those in Real Steel and the Marvel Universe. Built with PyQt5, it integrates speech recognition, NLP, and automation to handle tasks like app control, web searches, and real-time query responses through a sleek, sci-fi-inspired GUI. Designed for adaptability, ATOM offers a customizable, privacy-conscious alternative to commercial assistants, combining functionality with a dynamic personality."
                link="https://github.com/Dhyan0007/ATOM-AI-Assistant"
                github="https://github.com/Dhyan0007"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="IoT On Fire Alerting System"
                img={project2}
                summary="This system leverages IoT technology to provide early fire detection and real-time alerts without the need for internet connectivity. Utilizing an Arduino Uno, SIM900A GSM module, and fire sensors, it sends SMS and automated calls to designated responders when a fire is detected. Designed for affordability and reliability, the system is suitable for remote areas and varied settings like homes, offices, warehouses, and agricultural zones. Its standalone, GSM-based approach ensures rapid response, reducing fire-related damage and enhancing safety. Expandable with additional sensors, it offers a scalable, low-maintenance solution for modern fire alerting needs."
                link="https://github.com/Dhyan0007/IOT-on-Fire-Alerting-System"
                github="https://github.com/Dhyan0007"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Milk Dairy Management"
                img={project3}
                summary="This project is a comprehensive web-based platform designed to streamline the operations of milk distributors and dairy managers. It enables efficient tracking of daily transactions, including supplier and buyer details, purchases, sales, and feed management. Built for scalability, the system empowers administrators to control multiple dairies, prevent overproduction, and maintain seamless dairy reports. Developed as a pilot for a new milk distribution center, the platform supports future expansion and customization for various distributors. By simplifying operations, it aims to modernize and encourage growth in the dairy industry."
                link="https://github.com/Dhyan0007/Milk-Dairy-Management"
                github="https://github.com/Dhyan0007"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Catch A Copy"
                img={project4}
                summary="This project addresses inefficiencies in traditional printing services by introducing a remote, online printing system tailored to academic and business needs. Designed for speed and convenience, the system enables users to submit documents for printing remotely, reducing time costs. It optimizes printer operations by batching similar print jobs, lowering operational time and costs. Additionally, the system records detailed data, including document overviews, user profiles, and overall printing trends, providing valuable insights for market prediction and analysis. This solution modernizes print services, ensuring efficiency, scalability, and enhanced user experience."
                link="https://github.com/Dhyan0007/CAC"
                github="https://github.com/Dhyan0007"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Resume Builder"
                img={project5}
                summary="This app provides an intuitive platform for candidates to create professional resumes seamlessly. Users can input all necessary details, such as personal information, education, skills, experience, and projects, through a user-friendly React interface. The app dynamically generates a polished resume using pre-designed templates, allowing real-time previews. Once complete, the resume is ready for download as a high-quality PDF. Designed for efficiency and customization, the app simplifies the resume creation process for students, professionals, and job seekers."
                link="https://github.com/Dhyan0007/Resume-Builder"
                github="https://github.com/Dhyan0007"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Student Record System"
                img={project6}
                summary="A robust and secure web-based application built with Django to manage student records efficiently. This system enables administrators to add, delete, and modify student details, including personal information, academic records, and contact details. Featuring a secure login for administrators, it ensures data privacy and restricted access. Designed for scalability, the system is ideal for colleges and educational institutions to streamline student data management while maintaining accuracy and security."
                link="https://github.com/Dhyan0007/Student-Record-System-Django"
                github="https://github.com/Dhyan0007"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Color Detection"
                img={project7}
                summary="This project simplifies color identification by recognizing the name of a color based on mouse clicks. With over 16 million possible RGB color combinations, remembering color names is challenging. This tool identifies the exact color of a clicked pixel and displays its name, providing an intuitive way to explore and match colors. It's ideal for designers, developers, and anyone working with digital visuals."
                link="https://github.com/Dhyan0007/Color-Detection"
                github="https://github.com/Dhyan0007"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default Projects;