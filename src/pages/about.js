import { useState, useEffect, useRef } from 'react';
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import profilePic from "../../public/images/profile/dhyanAbout.png";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
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

const About = () => {
    return (
        <>
            <Head>
                <title>Dhyan | About Page</title>
                <meta name="description" content="Dhyan Portfolio" />
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
                        text="Passion Fuels Purpose!"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biography
                            </h2>
                            <div className="text-justify space-y-4">
                                <p className="font-medium">
                                    Hello, I’m Dhyan A, a passionate and driven tech professional who has recently completed a Master's in Computer Applications at Seshadripuram College, Tumakuru. My journey is defined by a deep interest in creating innovative, user-centric technologies that blend creativity with practical problem-solving.
                                </p>

                                <p className="font-medium">
                                    I have hands-on experience developing a diverse range of projects, from an AI-powered assistant with NLP and voice recognition to an IoT-based fire alerting system. These endeavors have sharpened my technical skills in programming languages like C++, Python, and Java, as well as web technologies such as HTML, CSS, and PHP. I also enjoy transforming complex data into clear insights using tools like Power BI and Tableau.
                                </p>

                                <p className="font-medium">
                                    Beyond my technical pursuits, I have a strong record of leadership and community engagement. I have orchestrated academic events, spearheaded community service initiatives with Youth for Seva, and been part of the core team for Bangalore’s major marathon events. These experiences have honed my abilities in team collaboration, effective communication, and project management.

                                </p>

                                <p className="font-medium">
                                    In my free time, I fuel my creativity and strategic thinking through trekking, exploring new cultures, and playing strategy-based video games. I am now eager to apply my comprehensive skill set to contribute to impactful projects and drive organizational success. Let's connect and innovate together!

                                </p>

                            </div>
                        </div>

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image
                                src={profilePic}
                                alt="Dhyan's Profile Picture"
                                className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={17} />
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Years Of Education
                                </h2>
                            </div>
                        </div>
                    </div>

                    <Skills />
                    <Education />
                    <div className="my-32">
                        <Certifications />
                    </div>
                </Layout>
                <ScrollToTopButton />
            </main>
        </>
    );
};

export default About;