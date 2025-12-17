import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const EducationItem = ({ type, time, place, info, grade }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-start justify-between md:w-[90%]">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
                className="w-full bg-light/10 dark:bg-dark/10 p-6 rounded-xl backdrop-blur-sm border border-solid border-light/20 dark:border-dark/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
                <div className="flex flex-col w-full gap-2">
                    <div className="flex justify-between items-center w-full">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primaryDark bg-clip-text text-transparent sm:text-xl">
                            {type}
                        </h3>
                        <span className="text-sm font-semibold text-primary dark:text-primaryDark px-3 py-1 bg-light/50 dark:bg-dark/50 rounded-full">
                            {time}
                        </span>
                    </div>
                    <span className="text-lg font-medium text-dark dark:text-light">
                        {place}
                    </span>
                    {grade && (
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm font-medium text-dark/75 dark:text-light/75">Grade:</span>
                            <span className="text-sm font-bold text-primary dark:text-primaryDark">{grade}</span>
                        </div>
                    )}
                    {info && (
                        <p className="font-medium w-full mt-3 text-dark/80 dark:text-light/80 md:text-sm">
                            {info}
                        </p>
                    )}
                </div>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "center start"]
    });

    return (
        <section className="my-64 relative">
            <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
                <div className="absolute top-1/2 left-1/2 w-[80%] h-[80%] rounded-full bg-primary/30 dark:bg-primaryDark/30 filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primaryDark">
                    Education
                </span>
            </h2> 
            
            <div ref={ref} className="w-[80%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div 
                    style={{ scaleY: scrollYProgress }} 
                    className="absolute left-9 top-0 w-[4px] h-full bg-gradient-to-b from-primary to-primaryDark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]" 
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <EducationItem 
                        type="Master of Computer Applications"
                        time="2025"                  
                        place="Seshadripuram College, Tumakuru"
                        info="Specialized in Advanced Web Development, AI/ML, and Data Structures. Active participant in research projects and tech symposiums."
                        grade="7.8 CGPA"
                    />
                    <EducationItem 
                        type="Bachelor of Computer Applications"
                        time="2023"                  
                        place="Seshadripuram College, Tumakuru"
                        info="Focused on foundational computer science concepts, web technologies, and software development methodologies."
                        grade="6.8 CGPA"
                    />
                    <EducationItem 
                        type="Higher Secondary (PUC)"
                        time="2020"                  
                        place="Mahesh PU College, Tumakuru"
                        
                    />
                    <EducationItem 
                        type="Secondary School (SSLC)"
                        time="2016"                  
                        place="Sri Chaitanya Techno School, Tumakuru"
                       
                    />
                </ul>
            </div>
        </section>
    );
};


export default Education;
