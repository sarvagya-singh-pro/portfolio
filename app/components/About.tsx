'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import DustyBlueRibbon from './ParticleBackground'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const springTransition = { duration: 1.1, ease: [0.16, 1, 0.3, 1] }

  return (
    <>
      <DustyBlueRibbon />

      <section id="about" className="py-60 px-6 bg-transparent relative overflow-hidden">
        <div ref={ref} className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Artifact */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={springTransition}
              className="lg:col-span-5"
            >
              <div className="relative group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-zinc-200/60 bg-white/30 backdrop-blur-xl shadow-2xl">
                  <img
                    src="/image.png" 
                    alt="Simulation in progress"
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  
                 

                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-3xl px-5 py-3 text-xs leading-tight text-zinc-600 shadow-inner">
                    National Children’s Science Congress 2024
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pure flowing personal story */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...springTransition, delay: 0.15 }}
                className="max-w-2xl"
              >
                <span className="text-[11px] font-bold tracking-[0.5em] text-[#8DA1B9] uppercase mb-6 block">
                  Delhi Public School, Bokaro • Class of 2026
                </span>

                <h3 className="text-5xl md:text-6xl font-light tracking-[-1px] text-black leading-none mb-10">
                  I’m Sarvagya.
                </h3>

                <div className="space-y-8 text-[21px] leading-tight text-zinc-600">
                  <p>
                    Growing up in Bokaro Steel City taught me early that real impact happens when ideas meet everyday constraints. 
                    I spend my time exploring how intelligent systems can solve problems that actually matter in the world around us.
                  </p>

                  <p>
                    At Delhi Public School Bokaro I keep my academics sharp while quietly building and testing ideas late into the night. 
                    Every project reminds me that the best solutions feel simple and reliable once they reach the people who need them.
                  </p>

                  <p>
                    I am drawn to the places where computer science meets real-world complexity. 
                    Whether I am refining models under tight hardware limits or designing systems that must work without perfect conditions, 
                    I focus on clarity, robustness, and genuine usefulness.
                  </p>

                  <p>
                    Companies that value thoughtful engineering and hands-on problem solving tend to notice the same pattern in my work. 
                    I bring the same quiet determination and curiosity to every team I join.
                  </p>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="mt-12 text-xl text-zinc-400 font-light"
                >
                  I am ready for the next challenge.
                </motion.p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}