"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          filter: "brightness(0.7)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />

      <div className="container mx-auto px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4">Arti Designer Studio</h1>
          <p className="font-serif text-xl md:text-2xl text-white/90 italic mb-8">Elegance Tailored Just for You</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full bg-[#FEC5E5] hover:bg-[#FEC5E5]/90 text-[#4A3636] px-8 py-6" size="lg">
              Explore Collections
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white text-white hover:bg-white/10 px-8 py-6"
              size="lg"
            >
              Book Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
