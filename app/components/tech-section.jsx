"use client"

import TechStack from "./tech-stack"

export default function TechSection() {
  return (
    <section id="tech">
      <div className="container mx-auto py-3 md:py-6 lg:py-12">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4 md:mb-10 text-center text-blue-600">
          Tech Stack
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></span>
        </h2>
        <TechStack />
      </div>
    </section>
  )
}
