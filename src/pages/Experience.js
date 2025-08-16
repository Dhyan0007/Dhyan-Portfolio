import { useState, useEffect } from 'react';
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const ExperienceItem = ({ role, company, duration, description, skills }) => {
  return (
    <motion.div 
      className="relative pl-6 pb-8 border-l-2 border-primary dark:border-primaryDark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute w-4 h-4 rounded-full bg-primary dark:bg-primaryDark -left-[9px] top-1"></div>
      <h3 className="text-2xl font-bold dark:text-light">{role}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
        <span className="text-lg font-semibold text-dark/75 dark:text-light/75">{company}</span>
        <span className="hidden sm:block">•</span>
        <span className="text-dark/75 dark:text-light/75">{duration}</span>
      </div>
      <p className="my-2 font-medium text-dark dark:text-light text-justify">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-dark text-light dark:bg-light dark:text-dark"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

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

const Experience = () => {
  const experiences = [
    {
      role: "HPC & AI Intern",
      company: "Aikshetra Tech Solutions Private Limited",
      duration: "July 2025 - Present",
      description: "working on high-performance computing, AI research, and hands-on projects involving system performance, optimization, and automation.",
      skills: ["HPC", "AI/ML", "Python", "Linux & Shell Scripting", "AWS", "Networking "]
    },
    {
      role: "Bussiness Development Intern",
      company: "Intellipaat Software Solutions Pvt. Ltd.",
      duration: "Sep 2023 - Nov 2023",
      description: "where I contributed to lead generation, client engagement, and supporting sales strategies to drive business growth.",
      skills: ["CRM tools", "Client Engagement", "Sales & Negotiation", "Market Research", "Presentation & Pitching"]
    },

  ];

  return (
    <>
      <Head>
        <title>Dhyan | Experience Page</title>
        <meta name="description" content="Dhyan's professional experience" />
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link rel="icon" href="/images/favicon/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/images/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light relative">
        <Layout className="pt-16">
          <AnimatedText
            text="Professional Experience"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          
          <div className="w-full px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8">
            <div className="flex flex-col gap-8">
              {experiences.map((exp, index) => (
                <ExperienceItem key={index} {...exp} />
              ))}
            </div>
          </div>
        </Layout>
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default Experience;