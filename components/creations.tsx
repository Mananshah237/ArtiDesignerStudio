"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { id: "bridal", name: "Bridal Wear" },
  { id: "party", name: "Party Wear" },
  { id: "traditional", name: "Traditional" },
  { id: "casual", name: "Casual Ethnic" },
]

const creations = {
  bridal: [
    { id: 1, image: "/placeholder.svg?height=600&width=400", name: "Royal Bridal Lehenga" },
    { id: 2, image: "/placeholder.svg?height=600&width=400", name: "Embroidered Wedding Saree" },
    { id: 3, image: "/placeholder.svg?height=600&width=400", name: "Designer Bridal Gown" },
    { id: 4, image: "/placeholder.svg?height=600&width=400", name: "Traditional Wedding Ensemble" },
  ],
  party: [
    { id: 1, image: "/placeholder.svg?height=600&width=400", name: "Sequin Party Saree" },
    { id: 2, image: "/placeholder.svg?height=600&width=400", name: "Cocktail Anarkali" },
    { id: 3, image: "/placeholder.svg?height=600&width=400", name: "Evening Gown" },
    { id: 4, image: "/placeholder.svg?height=600&width=400", name: "Designer Party Wear" },
  ],
  traditional: [
    { id: 1, image: "/placeholder.svg?height=600&width=400", name: "Banarasi Silk Saree" },
    { id: 2, image: "/placeholder.svg?height=600&width=400", name: "Gujarati Traditional Chaniya Choli" },
    { id: 3, image: "/placeholder.svg?height=600&width=400", name: "Embroidered Salwar Suit" },
    { id: 4, image: "/placeholder.svg?height=600&width=400", name: "Handloom Cotton Saree" },
  ],
  casual: [
    { id: 1, image: "/placeholder.svg?height=600&width=400", name: "Printed Kurti" },
    { id: 2, image: "/placeholder.svg?height=600&width=400", name: "Casual Palazzo Set" },
    { id: 3, image: "/placeholder.svg?height=600&width=400", name: "Daily Wear Saree" },
    { id: 4, image: "/placeholder.svg?height=600&width=400", name: "Comfortable Ethnic Set" },
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
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-brandRed data-[state=active]:text-brandNavy rounded-full border border-brandRed/30"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(creations).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {creations[category].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-lg"
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded-lg">
                      <img
                        src={item.image || "/placeholder.svg"}
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
