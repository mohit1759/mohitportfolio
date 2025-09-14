"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, ArrowUp, Code2, Briefcase, Award, GraduationCap } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPage() {
  return (
    <div className=" bg-background relative overflow-hidden">
      <header className="container sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container grid grid-cols-1 md:grid-cols-3 items-center px-4 md:px-8">
          <Link className="p-4 flex items-center space-x-2" href="/">
            <img src="/mohit-profile-pic.jpeg"alt="Mohit Soni Profile Picture"className="w-10 h-10 rounded-full object-cover"/>
            <span className="font-bold text-xl text-blue-600">MOHIT SONI</span>
          </Link>
          <nav className="hidden md:flex items-center justify-center space-x-8 text-sm font-medium">
            <Link href="/about" className="transition-colors hover:text-primary">About</Link>
            <Link href="#projects" className="transition-colors hover:text-primary">Projects</Link>
            <Link href="#experience" className="transition-colors hover:text-primary">Experience</Link>
            <Link href="#tech" className="transition-colors hover:text-primary">Tech Stack</Link>
            <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>
          <div className="flex items-center justify-end space-x-4">
            <ThemeToggle />
            <Button variant="outline" className="hidden md:inline-flex">
              <a href="https://drive.google.com/file/d/1EA_OG_VBrYy4O-RS4r5VejTK7Npm6WOh/view?usp=sharing"target="_blank"rel="noopener noreferrer">Resume</a>
            </Button>
          </div>
        </div>
      </header>
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container flex flex-col md:flex-row items-center gap-6 px-6 md:px-12">
          <div className="flex-1 text-center md:text-left ">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 leading-tight">Hi, I'm <span className="text-purple-600">Mohit Soni</span></h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              A passionate <span className="font-semibold text-blue-600">Full Stack Developer</span> specialized in building scalable, user-friendly, and dynamic web applications. I bring creative problem-solving, clean design, and robust development practices together.
            </p>

            <div className="flex justify-center md:justify-start space-x-4 mt-6">
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

          <div className="flex-shrink-0">
            <img src="/mohit-profile-pic.jpeg" alt="Mohit Soni" className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-blue-200"/>
          </div>
        </div>
      </section>
      <section id="education" className="mt-5 relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-12 text-center">Education
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 rounded-full"></span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[90%] relative">
          {[
            {
              icon: <GraduationCap className="h-6 w-6" />,
              title: "Bachelor of Computer Applications (BCA)",
              place: "Kurukshetra University (2017 - 2021)"
            },
            {
              icon: <Award className="h-6 w-6" />,
              title: "Digital Marketing Course",
              place: "IT Training Classes, Gurugram (01/2023 - 07/2023)",
              note: "Specialization: SEO, SMO, Paid Ads"
            },
            {
              icon: <Code2 className="h-6 w-6" />,
              title: "Web Designing Course",
              place: "IT Training Classes, Gurugram (07/2023 - 08/2024)",
              note: "Specialization: Full Stack Development"
            }
          ].map((edu, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                         transform hover:scale-105 hover:shadow-2xl transition duration-300"
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
      <section className="mt-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-8 text-center">Certificates</h2>
        <div className="grid gap-8 md:grid-cols-2 mx-auto w-[85vw]">
          <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
              <Award className="h-5 w-5" /> Full Stack Development Certificate
            </h3>
            <p className="text-gray-600 dark:text-gray-300">GeeksforGeeks</p>
            <Link href="https://drive.google.com/file/d/1KAyCmRA0eG0nEgoMKt4JPt-xFahpv2Ut/view?usp=sharing" target="_blank" className="text-primary underline mt-2 inline-block">View Certificate</Link>
          </div>
          <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
              <Award className="h-5 w-5" /> DSA in C++ Certificate
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Apna College</p>
            <Link href="https://drive.google.com/file/d/11o3hk6WdN0LX0-9s_qHxjm9MSi-hb1kh/view?usp=sharing" target="_blank" className="text-primary underline mt-2 inline-block">View Certificate</Link>
          </div>
        </div>
      </section>
      <footer className="border-t bg-muted/40 mt-16">
        <div className="container flex flex-col gap-4 sm:flex-row py-8 w-full items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Mohit Soni. All rights reserved.</p>
          <BackToTopButton />
        </div>
      </footer>
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
