"use client"

import { useEffect } from "react"

export default function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.async = true
    script.setAttribute("data-elfsight-app-lazy", "")
    document.body.appendChild(script)
  }, [])

  return (
    <section className="py-20 bg-white" id="instagram">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-brandNavy mb-4">Follow Us on Instagram</h2>
        <div className="w-20 h-1 bg-brandGold mx-auto mb-6"></div>
        <p className="text-brandNavy/70 max-w-xl mx-auto mb-8">
          See our latest designs, real client moments, and behind-the-scenes from Arti Designer Studio.
        </p>

        <div className="w-full max-w-5xl mx-auto">
          {/* Elfsight Instagram Widget */}
          <div className="elfsight-app-2072d837-3b47-4dfb-8bf2-69406d140006" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  )
}
