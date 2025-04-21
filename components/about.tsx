"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-brandGold/10" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-brandNavy mb-6">Our Legacy of Elegance</h2>
            <div className="w-20 h-1 bg-brandGold mb-6"></div>
            <p className="text-brandNavy/80 mb-4">
              For over 53 years, Arti Designer Studio has been a cornerstone of fashion excellence in Bhavnagar,
              Gujarat. Our journey began with a passion for creating exquisite ethnic wear that celebrates the beauty of
              Indian craftsmanship.
            </p>
            <p className="text-brandNavy/80 mb-4">
              Founded in 1970, our studio has evolved with changing fashion trends while maintaining our commitment to
              quality, authenticity, and customer satisfaction. We take pride in introducing new fashion trends at
              competitive rates, making luxury accessible to all.
            </p>
            <p className="text-brandNavy/80">
              Today, Arti Designer Studio stands as a testament to our dedication to the art of fashion, offering a
              curated collection of sarees, lehengas, kurtis, and bespoke tailoring services that blend traditional
              aesthetics with contemporary designs.
            </p>
          </motion.div>

          <motion.div
            className="lg:w-1/2 rounded-lg overflow-hidden shadow-xl"
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Arti Designer Studio Storefront"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
