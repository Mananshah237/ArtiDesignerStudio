"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { id: "bridal", name: "Bridal Lehengas" },
  { id: "party", name: "Chaniya Choli" },
  { id: "traditional", name: "Indo Western" },
  { id: "casual", name: "Sarees" },
]

const creations = {
  bridal: [
    { id: 1, image: "/smeet/bridal_lehengas/img1.jpg", name: "Royal Bridal Lehenga" },
    { id: 2, image: "/smeet/bridal_lehengas/img2.jpg", name: "Crimson Embroidered Ensemble" },
    { id: 3, image: "/smeet/bridal_lehengas/img3.jpg", name: "Zari & Kundan Set" },
    { id: 4, image: "/smeet/bridal_lehengas/img4.jpg", name: "Maroon Velvet Bridal" },
    { id: 5, image: "/smeet/bridal_lehengas/img5.jpg", name: "Mirror Work Lehenga" },
    { id: 6, image: "/smeet/bridal_lehengas/img6.jpg", name: "Velvet Panelled Bridal" },
    { id: 7, image: "/smeet/bridal_lehengas/img7.jpg", name: "Peach Zardozi Lehenga" },
    { id: 8, image: "/smeet/bridal_lehengas/img8.jpg", name: "Gold-Red Traditional Set" },
  ],
  party: [
    { id: 1, image: "/smeet/chaniya_choli/IMG_101.jpg", name: "Classic Ghagra Choli" },
    { id: 2, image: "/smeet/chaniya_choli/img102.jpg", name: "Vibrant Mirror Chaniya" },
    { id: 3, image: "/smeet/chaniya_choli/img103.jpg", name: "Festive Red Choli" },
  ],
  traditional: [
    { id: 1, image: "/smeet/indo_western/img201.jpg", name: "Modern Fusion Kurti Set" },
    { id: 2, image: "/smeet/indo_western/img202.jpg", name: "Silk Indo-Western Dress" },
    { id: 3, image: "/smeet/indo_western/img203.jpg", name: "Embroidered Fusion Look" },
    { id: 4, image: "/smeet/indo_western/img204.jpg", name: "Layered Indo Gown" },
    { id: 5, image: "/smeet/indo_western/img205.jpg", name: "Chic Designer Fusion" },
  ],
  casual: [
    { id: 1, image: "/smeet/sarees/img301.jpg", name: "Elegant Printed Saree" },
    { id: 2, image: "/smeet/sarees/img302.jpg", name: "Casual Daily Wear" },
    { id: 3, image: "/smeet/sarees/img303.jpg", name: "Minimalist Cotton Saree" },
    { id: 4, image: "/smeet/sarees/img304.jpg", name: "Simple Festive Saree" },
    { id: 5, image: "/smeet/sarees/img305.jpg", name: "Lightweight Georgette Saree" },
    { id: 6, image: "/smeet/sarees/img306.jpg", name: "Pastel Printed Saree" },
    { id: 7, image: "/smeet/sarees/img307.jpg", name: "Bold Blue Casual Saree" },
    { id: 8, image: "/smeet/sarees/img308.jpg", name: "Everyday Yellow Saree" },
    { id: 9, image: "/smeet/sarees/img309.jpg", name: "Elegant Linen Saree" },
    { id: 10, image: "/smeet/sarees/img310.jpg", name: "Warm Toned Saree" },
  ],
}

export default function Creations() {
  const [activeCategory, setActiveCategory] = useState("bridal")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-white" id="creations">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-brandNavy mb-4">Our Creations</h2>
          <div className="w-20 h-1 bg-brandGold mx-auto mb-6"></div>
          <p className="text-brandNavy/70 max-w-2xl mx-auto">
            Discover our exquisite collection of handcrafted ethnic wear, designed to celebrate the beauty of Indian
            craftsmanship and contemporary fashion sensibilities.
          </p>
        </motion.div>

        <Tabs defaultValue="bridal" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="min-w-[140px] text-center data-[state=active]:bg-brandRed data-[state=active]:text-brandNavy rounded-full border border-brandRed/30"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(creations).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {creations[category].slice(0,4).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-lg"
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h3 className="text-white font-medium">{item.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button asChild className="rounded-full bg-brandGold hover:bg-brandGold/80 text-brandNavy px-8">
            <a href="/collections">View All Collections</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
