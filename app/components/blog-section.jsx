"use client"

import BlogCard from "./blog-card"

export default function BlogSection() {
  return (
    <section id="blog" className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto py-3 md:py-6 lg:py-12 px-2 md:px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 md:mb-12 text-blue-600" data-aos="fade-up" data-aos-duration="700">Latest Blog Posts</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <BlogCard title="The Future of Web Development: WASM and Beyond" excerpt="Exploring how WebAssembly is changing the landscape of web development and what it means for the future of the industry." date="2024-03-01" slug="future-of-web-development" />
          <BlogCard title="Mastering React Hooks: Advanced Patterns" excerpt="Dive deep into advanced React Hook patterns and learn how to write more efficient and maintainable React components." date="2024-02-15" slug="mastering-react-hooks" />
          <BlogCard title="Building Scalable Microservices with Node.js" excerpt="A comprehensive guide to designing and implementing scalable microservices architecture using Node.js and Docker." date="2024-01-30" slug="scalable-microservices-nodejs" />
          <BlogCard title="The Rise of JAMstack: Revolutionizing Web Development" excerpt="Discover how JAMstack architecture is changing the way we build and deploy web applications for better performance and security." date="2024-01-15" slug="rise-of-jamstack" />
        </div>
      </div>
    </section>
  )
}
