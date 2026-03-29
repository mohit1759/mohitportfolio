  "use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="">
      <div className="container mx-auto py-3 md:py-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-blue-600">
              Full Stack Developer
              <span className="block w-auto h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 p-2">
              Hi, I'm Mohit Soni, an aspiring Full Stack Developer with a passion for building robust, scalable, and user-friendly web applications. I thrive on creating dynamic and responsive solutions and am seeking opportunities to leverage my expertise and grow within the web development industry.
            </p>
          </div>
          <div className="flex space-x-4" data-aos="fade-up" data-aos-delay="300">
            <Link href="https://github.com/mohit1759" target="_blank">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/mohitsoni01/" target="_blank">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="/" target="_blank">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:mohitsoni93556555@gmail.com">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
