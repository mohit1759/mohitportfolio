import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import BlogCard from "./components/blog-card"
import TechStack from "./components/tech-stack"
import MobileMenu from "./components/mobile-menu"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link className="p-4 flex items-center space-x-2" href="/">
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Mohit.dev
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#tech" className="transition-colors hover:text-primary">
              Tech Stack
            </Link>
            <Link href="#contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" className="hidden md:inline-flex">
              <a href="/" target="_blank">Resume</a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>


      <main className="container px-4 md:px-6">
        <section id="about" className="py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Full Stack Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Hi, I'm Mohit Soni, an aspiring Full Stack Developer with a passion for building robust, scalable, and user-friendly web applications. I thrive on creating dynamic and responsive solutions and am seeking opportunities to leverage my expertise and grow within the web development industry.
                </p>
              </div>
              <div className="flex space-x-4">
                <Link href="https://github.com/mohit1759" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/mohitsoni01/" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="/" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:mohitsoni93556555@gmail.com">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-3 md:py-6">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce platform built with React.js, Mongodb, and AWS integration."
                image="/1.png"
                link="https://github.com/mohit1759"
                tags={["React.js", "Mongodb", "AWS"]}
              />
              <ProjectCard
                title="Agancy CRM"
                description="A Full stack Agency CRM Built With Next.JS And MySQL"
                image="/2.png"
                link="https://github.com/mohit1759"
                tags={["React", "Node.js", "Socket.io"]}
              />
              <ProjectCard
                title="Web3 NFT Minting"
                description="A Web3 NFT Minting Platform using Next.js , Soledity , Opensea and Metamask Wallet"
                image="/3.png"
                link="https://github.com/mohit1759"
                tags={["Soledity", "Next.js", "TailwindCSS" , "Metamask" , "Opensea"]}
              />
            </div>
          </div>
        </section>

        <section id="blog" className="py-3 md:py-6">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Latest Blog Posts
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <BlogCard
                title="The Future of Web Development: WASM and Beyond"
                excerpt="Exploring how WebAssembly is changing the landscape of web development and what it means for the future of the industry."
                date="2024-03-01"
                slug="future-of-web-development"
              />
              <BlogCard
                title="Mastering React Hooks: Advanced Patterns"
                excerpt="Dive deep into advanced React Hook patterns and learn how to write more efficient and maintainable React components."
                date="2024-02-15"
                slug="mastering-react-hooks"
              />
              <BlogCard
                title="Building Scalable Microservices with Node.js"
                excerpt="A comprehensive guide to designing and implementing scalable microservices architecture using Node.js and Docker."
                date="2024-01-30"
                slug="scalable-microservices-nodejs"
              />
              <BlogCard
                title="The Rise of JAMstack: Revolutionizing Web Development"
                excerpt="Discover how JAMstack architecture is changing the way we build and deploy web applications for better performance and security."
                date="2024-01-15"
                slug="rise-of-jamstack"
              />
            </div>
          </div>
        </section>

        <section id="tech" className="py-3 md:py-6">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-3 md:py-6">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col gap-4 sm:flex-row py-8 w-full items-center px-4 md:px-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Mohit soni. All rights reserved.</p>
          {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-primary dark:text-gray-400"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-primary dark:text-gray-400"
              href="#"
            >
              Privacy
            </Link>
          </nav> */}
        </div>
      </footer>

      <BackToTopButton />
    </div>
  )
}

function BackToTopButton() {
  return (
    <div className="fixed bottom-6 right-6">
      <a
        href="#"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all"
      >
        <ArrowUp className="h-5 w-5" />
        <span className="sr-only">Back to top</span>
      </a>
    </div>
  )
}

