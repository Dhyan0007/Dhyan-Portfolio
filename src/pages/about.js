import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/dhyanAbout.png";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import TransitionEffect from "@/components/TransitionEffect";



const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value ){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}



const about = () => {
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
     <main className='flex w-full flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"/>
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2  md:col-span-8">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>

                <p className="font-medium">Hello, I’m Dhyan A, a passionate and driven tech professional currently pursuing my 
                    Master’s in Computer Applications at Seshadripuram College, Tumakuru. My academic and professional experiences 
                    have shaped me into someone who thrives at the intersection of technology, creativity, and problem-solving.
</p>

<p className="my-4 font-medium">Over the years, I’ve worked on exciting projects like designing IoT-based fire alerting systems and streamlining dairy operations with database management. 
    These experiences taught me not only technical skills but also the importance of understanding real-world challenges.</p>

<p className="my-4 font-medium">I’ve honed my expertise in programming languages like C++, Python, and Java, along with web technologies such as HTML, CSS, and PHP. I also have a knack for data 
    analytics tools like Power BI and Tableau, enabling me to turn complex datasets into actionable insights.</p>


<p className="my-4 font-medium"> Beyond tech, I’m deeply involved in community service and leadership. From orchestrating events to volunteering with Youth for Seva, I’ve found immense value in 
    giving back and making a difference. In my free time, you’ll find me trekking, exploring new cultures, or indulging in strategy-based video games—activities that fuel my creativity and resilience.</p>    



<p className="font-medium"> I’m excited to connect, collaborate, and create solutions that inspire change. Let’s innovate together! </p>    
    
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
                    <Image src={profilePic} alt="" className="w-full h-auto rounded-2xl"  priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
                <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center  md:order-3">
                    <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl" >
                           <AnimatedNumbers value={17} />
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Years Of Education</h2>
                    </div>
                    
                    
           
            </div>
        </div>
        <Skills />
       
        <Education />
        <div className="my-32"> {/* Adds vertical spacing */}
    <Certifications />
        </div>
      
      </Layout>
     </main>
      </>
    )
}

export default about