"use client"
import{delay, motion,useScroll} from 'framer-motion'
import { useState,useEffect } from 'react'
import { Center, SimpleGrid } from '@mantine/core'
import styles from './page.module.css'
import Image from 'next/image'
import Sarvagya from './sarvagya.png'
import News18 from './news18.png'
import Current from './currentBokaro.png'
import '@mantine/core/styles.css';
import { Card } from '@mantine/core'
import MouseFollower from '@/components/mousetracker'
const page = () => {
  const { scrollYProgress } = useScroll();
  const [displayText, setDisplayText] = useState("WEB DEVELOPER . WEB DESIGNER . FRONT END  ENGINEER . BACK END ENGINEER . FULL STACK ENGINEER . DEVOPS . AI ENGINEER . APP DEVELOPER .");
  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      
      transition: {
        
        type: "spring",
        bounce: 0.4,
        duration: 2.75,
        delay:1,
      }
    }
  };
  
  
  return (
    <>
    <MouseFollower/>
    <div>
   
       <motion.div 
        className={styles.progressBar} style={{ scaleX: scrollYProgress }} />  
   
   
    <div className={styles.landing}>
   
      <Image className={styles.me} unselectable="on" src={Sarvagya}  width={500}
      height={500}
      alt="Picture of the author"></Image>
      <motion.h1  className={styles.banner}  style={{
        whiteSpace:'nowrap',
        overflow: "hidden", // Hide overflow
      }}
      animate={{
        x: ["10%", "-100%"], // Animation values for x property
        
      }}
      transition={{
        
        repeat: Infinity, // Repeat the animation indefinitely
       // Animation duration in seconds
       duration: 55, // Animation duration
        ease: "linear", // Linear easing function for continuous movement
      }}
      >{displayText}</motion.h1>
      
    </div>
    <div className={styles.info}>
    <motion.div
      className={styles.cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      
      viewport={{ once: true }}
    >
      <h1 className={styles.name} >Sarvagya Singh</h1>
      <h2>Hello! I am sarvagya singh  student from bokaro and makes better websites than sarthak</h2>
    
       <motion.div className={styles.card} variants={cardVariants}>
        <h1 >Who Am I?</h1>
         </motion.div>
      </motion.div>
    </div>
    <div className={styles.projects}>
    <h1>Projects</h1>
    <Center>
      <SimpleGrid
      
      cols={{ base: 1, sm: 2, lg: 3 }}
      spacing={{ base: 10, sm: 'xl',lg:'md',xl:'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
     <div className={styles.projectcard}>
      <h2>Nandani</h2>
     </div>
     
     <div className={styles.projectcard}>
      <h2>Education India</h2>
     </div>
     
     <div className={styles.projectcard}>
      <h2>DPSBK</h2>
     </div>

     <div className={styles.projectcard}>
      <h2>Flexflix</h2>
     </div>
     <div className={styles.projectcard}>
      <h2>Inter DPS</h2>
     </div>
     
     <div className={styles.projectcard}>
      <h2>HAVK</h2>
     </div>
     
    
    </SimpleGrid>
    </Center>
    </div>
    </div>
    </>
  );
}

export default page;