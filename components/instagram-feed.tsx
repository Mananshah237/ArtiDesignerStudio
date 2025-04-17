"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const instagramPosts = [
  { id: 1, image: "/placeholder.svg?height=400&width=400" },
  { id: 2, image: "/placeholder.svg?height=400&width=400" },
  { id: 3, image: "/placeholder.svg?height=400&width=400" },
  { id: 4, image: "/placeholder.svg?height=400&width=400" },
  { id: 5, image: "/placeholder.svg?height=400&width=400" },
  { id: 6, image: "/placeholder.svg?height=400&width=400" },
]

export default function InstagramFeed() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-[#FFFFF0]/50" id="instagram">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-[#4A3636] mb-4">Follow Us on Instagram</h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="text-[#4A3636]/70 max-w-2xl mx-auto">
            Stay updated with our latest designs and collections by following us on Instagram.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white h-8 w-8" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="rounded-full border-[#FEC5E5] text-[#4A3636] hover:bg-[#FEC5E5]/10"
            asChild
          >
            <a href="https://www.instagram.com/artidesignerstudio" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4 mr-2" />
              @artidesignerstudio
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
