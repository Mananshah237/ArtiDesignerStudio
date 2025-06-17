"use client"

import { useState } from "react"
import Image from "next/image"
import { creations } from "@/lib/creations-data"
import { X } from "lucide-react"

const displayNames: Record<string, string> = {
  bridal: "Bridal Lehengas",
  party: "Chaniya Choli",
  traditional: "Indo Western",
  casual: "Sarees",
}

export default function CollectionsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-serif text-brandNavy mb-12 text-center">
          Full Collection Gallery
        </h1>

        {Object.entries(creations).map(([category, items]) => (
          <div key={category} className="mb-20">
            <h2 className="text-2xl font-semibold text-brandNavy mb-6 capitalize">
              {displayNames[category] || category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedProduct(item)
                    setSelectedImage(0)
                  }}
                  className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition hover:shadow-xl group aspect-[3/4]"
                >
                  <Image
                    src={item.images[0] || "/placeholder.jpg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-sm px-3 py-2 backdrop-blur-sm">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="relative bg-white rounded-2xl p-6 w-full max-w-md h-[90vh] animate-fade-in flex flex-col">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
              >
                <X size={24} />
              </button>

              <div className="relative w-full flex-grow mb-6 overflow-hidden rounded-xl shadow-md">
                <Image
                  src={selectedProduct.images[selectedImage] || "/placeholder.jpg"}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex gap-3 justify-center flex-wrap">
                {selectedProduct.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative w-20 h-28 rounded-lg overflow-hidden border-2 cursor-pointer transition-transform hover:scale-105 ${
                      selectedImage === idx
                        ? "border-brandGold shadow-lg"
                        : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <Image
                      src={img || "/placeholder.jpg"}
                      alt={`Angle ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
