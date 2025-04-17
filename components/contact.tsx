"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { MapPin, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-[#4A3636] mb-4">Visit Us</h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="text-[#4A3636]/70 max-w-2xl mx-auto">
            We'd love to meet you in person. Visit our studio or get in touch with us to schedule a consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-none shadow-lg overflow-hidden h-full">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6768!2d72.1513!3d21.7679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ2JzA0LjQiTiA3MsKwMDknMDQuNyJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Arti Designer Studio Location"
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div className="mb-8">
              <h3 className="font-serif text-2xl text-[#4A3636] mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-[#FEC5E5] mt-1" />
                  <div>
                    <p className="text-[#4A3636] font-medium">Address</p>
                    <p className="text-[#4A3636]/70">Valentine Circle, Waghawadi Road, Bhavnagar, Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-[#FEC5E5] mt-1" />
                  <div>
                    <p className="text-[#4A3636] font-medium">Phone</p>
                    <p className="text-[#4A3636]/70">+91 98792 08560</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="h-5 w-5 text-[#FEC5E5] mt-1" />
                  <div>
                    <p className="text-[#4A3636] font-medium">Instagram</p>
                    <p className="text-[#4A3636]/70">@artidesignerstudio</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[#4A3636] mb-6">Send us a Message</h3>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="rounded-md border-[#FEC5E5]/30 focus-visible:ring-[#FEC5E5]"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Your Email"
                      type="email"
                      className="rounded-md border-[#FEC5E5]/30 focus-visible:ring-[#FEC5E5]"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="rounded-md border-[#FEC5E5]/30 focus-visible:ring-[#FEC5E5]"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[120px] rounded-md border-[#FEC5E5]/30 focus-visible:ring-[#FEC5E5]"
                  />
                </div>
                <Button className="rounded-full bg-[#FFDAB9] hover:bg-[#FFDAB9]/80 text-[#4A3636] px-8">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
