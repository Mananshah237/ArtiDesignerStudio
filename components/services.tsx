"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Scissors, Ruler, PenTool, ShoppingBag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Scissors className="h-10 w-10 text-[#FEC5E5]" />,
    title: "Custom Tailoring",
    description: "Get perfectly fitted garments tailored to your measurements and style preferences.",
  },
  {
    icon: <Ruler className="h-10 w-10 text-[#FEC5E5]" />,
    title: "Alterations",
    description: "Professional alteration services to ensure your outfits fit flawlessly.",
  },
  {
    icon: <PenTool className="h-10 w-10 text-[#FEC5E5]" />,
    title: "Bridal Design",
    description: "Bespoke bridal wear designed to make your special day even more memorable.",
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-[#FEC5E5]" />,
    title: "Ready-to-Wear",
    description: "Explore our collection of ready-to-wear ethnic outfits for every occasion.",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-[#FFFFF0]/50" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-[#4A3636] mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="text-[#4A3636]/70 max-w-2xl mx-auto">
            From custom tailoring to ready-to-wear collections, we offer a range of services to meet your fashion needs
            with precision and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-white">
                <CardHeader className="pb-2">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-serif text-[#4A3636]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#4A3636]/70">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
