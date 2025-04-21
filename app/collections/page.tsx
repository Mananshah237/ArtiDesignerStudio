import Image from "next/image"

const images = [
  "/images/collection1.jpg",
  "/images/collection2.jpg",
  "/images/collection3.jpg",
  "/images/collection4.jpg",
  "/images/collection5.jpg",
  "/images/collection6.jpg",
]

export default function CollectionsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-serif text-brandNavy mb-8 text-center">
          Full Collection Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md">
              <Image
                src={src}
                alt={`Collection ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
