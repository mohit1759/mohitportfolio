"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, ArrowUp, Code2, Briefcase, Award, GraduationCap } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"

export default function AboutPage() {
  return (
    <div className=" bg-background relative overflow-hidden">
      <Header />
      <section className="relative py-6 md:py-12 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container w-[90%] mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-center md:text-left " data-aos="fade-right" data-aos-duration="800">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-blue-600">Hi, I'm <span className="text-purple-600">Mohit Soni</span></h1>
            <p className="py-2 md:py-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl">A passionate <span className="font-semibold text-blue-600">Full Stack Developer</span> specialized in building scalable, user-friendly, and dynamic web applications. I bring creative problem-solving, clean design, and robust development practices together.</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <Link href="https://github.com/mohit1759" target="_blank">
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white transition-all">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/mohitsoni01/" target="_blank">
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white transition-all">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/" target="_blank">
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white transition-all">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:mohitsoni93556555@gmail.com">
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white transition-all">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0" data-aos="fade-left" data-aos-duration="800">
            <img src="/mohit-profile-pic.jpeg" alt="Mohit Soni" className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-blue-200"/>
          </div>
        </div>
      </section>
      <section id="education" className="py-6 md:py-12 container w-[90%] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-12 text-center" data-aos="fade-up" data-aos-duration="700">Education
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <GraduationCap className="h-6 w-6" />,
              title: "Bachelor of Computer Applications (BCA)",
              place: "Kurukshetra University (2017 - 2021)"
            },
            {
              icon: <Award className="h-6 w-6" />,
              title: "Digital Marketing Course",
              place: "IT Training Classes, Gurugram (08/2022 - 02/2023)",
              note: "Specialization: SEO, SMO, Paid Ads"
            },
            {
              icon: <Code2 className="h-6 w-6" />,
              title: "Web Designing Course",
              place: "IT Training Classes, Gurugram (03/2023 - 03/2024)",
              note: "Specialization: Full Stack Development"
            }
          ].map((edu, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                         transform hover:scale-105 hover:shadow-2xl transition duration-300"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={i * 100 + ""}
            >
              <div className="flex items-center gap-3 mb-4 text-blue-600 font-semibold">
                <span className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
                  {edu.icon}
                </span>
                <h3 className="text-xl">{edu.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{edu.place}</p>
              {edu.note && <p className="text-gray-500 dark:text-gray-400 mt-2">{edu.note}</p>}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

function BackToTopButton() {
  return (
    <div className="fixed bottom-6 right-6 animate-bounce">
      <a
        href="#"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all"
      >
        <ArrowUp className="h-5 w-5" />
        <span className="sr-only">Back to top</span>
      </a>
    </div>
  )
}
