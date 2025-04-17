"use client"

import { useRef, useState } from "react"
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
  {
    id: 4,
    name: "Kavita Joshi",
    role: "Mother of the Bride",
    content:
      "For my daughter's wedding, I wanted something elegant yet comfortable. Arti Designer Studio delivered beyond my expectations with a beautiful saree that made me feel special.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-[#FEC5E5]/10" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-[#4A3636] mb-4">Customer Love</h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="text-[#4A3636]/70 max-w-2xl mx-auto">
            Hear what our customers have to say about their experience with Arti Designer Studio.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <Quote className="h-12 w-12 text-[#FFD700] mb-6" />
              <p className="text-lg md:text-xl text-[#4A3636]/80 italic mb-8 max-w-3xl">
                "{testimonials[currentIndex].content}"
              </p>
              <Avatar className="h-16 w-16 mb-4">
                <AvatarImage
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                />
                <AvatarFallback>{testimonials[currentIndex].name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="font-serif text-xl text-[#4A3636]">{testimonials[currentIndex].name}</h3>
              <p className="text-[#4A3636]/70">{testimonials[currentIndex].role}</p>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#FFD700] w-6" : "bg-[#FFD700]/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border-[#FEC5E5] text-[#4A3636] hover:bg-[#FEC5E5]/10 hidden md:flex"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border-[#FEC5E5] text-[#4A3636] hover:bg-[#FEC5E5]/10 hidden md:flex"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
