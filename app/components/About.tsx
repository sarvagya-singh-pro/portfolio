'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const story = [
  "I’m a first-year Computer Science student at the University of St Andrews. I grew up in Bokaro Steel City and went to Delhi Public School there, where most of my projects began with a practical problem and very little hardware to solve it with.",
  "I’m drawn to the place where machine learning meets constraints: a physics-informed surrogate for photon transport, a retrieval-augmented LLM with a safety-validation layer, and a livestock-health model small enough to run on a Cortex-M4 collar.",
  "At St Andrews I’m the Freshers’ Representative on the Computing Society committee and a member of the Formula Student AI team, writing perception and control software for an autonomous racing car.",
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const springTransition = { duration: 1.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

  return (
    <section id="about" className="py-60 px-6 bg-transparent relative overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={springTransition}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-zinc-200/60 bg-white/60 shadow-2xl">
                <Image
                  src="/image.png"
                  alt="Sarvagya Singh"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...springTransition, delay: 0.15 }}
              className="max-w-2xl"
            >
              <span className="text-[11px] font-bold tracking-[0.5em] text-[#8DA1B9] uppercase mb-6 block">
                University of St Andrews • BSc Computer Science
              </span>

              <h3 className="text-5xl md:text-6xl font-light tracking-[-1px] text-black leading-none mb-10">
                I’m Sarvagya.
              </h3>

              <div className="space-y-8 text-[21px] leading-tight text-zinc-600">
                {story.map((p) => <p key={p}>{p}</p>)}
              </div>

              <p className="mt-12 text-xl text-zinc-400 font-light">
                Class XII 93% · Class X 96.8% · SAT 1520 · Blaise Pascal Gold Medal, DPS Bokaro
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}