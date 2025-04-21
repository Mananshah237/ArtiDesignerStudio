"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Bride",
    content:
      "Arti Designer Studio created my dream wedding lehenga. The attention to detail and craftsmanship was exceptional. I received countless compliments on my special day!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Meera Patel",
    role: "Regular Customer",
    content:
      "I've been shopping at Arti Designer Studio for over 10 years. Their collection is always up-to-date with the latest trends, and the quality is consistently excellent.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Anjali Desai",
    role: "Fashion Enthusiast",
    content:
      "The custom tailoring service at Arti Designer Studio is unmatched. They transformed my ideas into a stunning outfit that fits perfectly and looks exactly how I envisioned.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // ⏱️ Auto-rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000) // 4 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-brandRed/10" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-brandNavy mb-4">Customer Love</h2>
          <div className="w-20 h-1 bg-brandGold mx-auto mb-6"></div>
          <p className="text-brandNavy/70 max-w-2xl mx-auto">
            Hear what our customers have to say about their experience with Arti Designer Studio.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <Quote className="h-12 w-12 text-brandGold mb-6" />
            <p className="text-lg md:text-xl text-brandNavy/80 italic mb-8 max-w-3xl">
              "{testimonials[currentIndex].content}"
            </p>
            <Avatar className="h-16 w-16 mb-4">
              <AvatarImage
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
              />
              <AvatarFallback>{testimonials[currentIndex].name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="font-serif text-xl text-brandNavy">{testimonials[currentIndex].name}</h3>
            <p className="text-brandNavy/70">{testimonials[currentIndex].role}</p>
          </motion.div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-brandGold w-6" : "bg-brandGold/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
