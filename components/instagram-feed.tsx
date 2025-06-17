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
    <section className="py-16 bg-white" id="instagram">
      <div className="w-full max-w-screen-md mx-auto text-center px-4">
        <h2 className="font-serif text-3xl sm:text-4xl text-brandNavy mb-4">
          Follow Us on Instagram
        </h2>
        <div className="w-16 h-1 bg-brandGold mx-auto mb-6 rounded-full"></div>
        <p className="text-brandNavy/70 max-w-md mx-auto mb-10 text-sm sm:text-base">
          See our latest designs, real client moments, and behind-the-scenes at Arti Designer Studio.
        </p>

        {/* Feed with padding, max width, and shadow */}
        <div className="mx-auto max-w-md sm:max-w-lg rounded-xl overflow-hidden shadow-lg border border-gray-200 p-2 bg-white">
          <div
            className="elfsight-app-2072d837-3b47-4dfb-8bf2-69406d140006"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  )
}
