import { notFound } from "next/navigation"
import { Calendar } from "lucide-react"
import Link from "next/link"

// This would typically come from a database or CMS
const blogPosts = [
  {
    slug: "future-of-web-development",
    title: "The Future of Web Development: WASM and Beyond",
    date: "2024-03-01",
    content: `
      <p>WebAssembly (WASM) is revolutionizing the way we think about web development. As a low-level language that runs in the browser at near-native speed, WASM is opening up new possibilities for web applications that were previously only possible in native desktop environments.</p>
      <p>One of the most exciting aspects of WASM is its ability to bring languages like C, C++, and Rust to the web. This means developers can leverage existing codebases and skills to create high-performance web applications. For example, complex 3D games or scientific simulations that once required native applications can now run directly in the browser.</p>
      <p>But WASM isn't just about performance. It's also about expanding the capabilities of web applications. With WASM, we can implement features like video and audio codecs, encryption algorithms, and other computationally intensive tasks directly in the browser, reducing reliance on plugins or server-side processing.</p>
      <p>As we look to the future, WASM is likely to play a crucial role in the development of progressive web apps (PWAs) that blur the line between web and native applications. We may see a shift towards more complex, desktop-like applications running entirely in the browser, changing the landscape of software distribution and installation.</p>
      <p>However, it's important to note that WASM is not a replacement for JavaScript, but rather a powerful complement. The future of web development will likely involve a harmonious blend of JavaScript for DOM manipulation and user interface logic, with WASM handling performance-critical computations.</p>
      <p>As web developers, it's crucial to stay informed about these advancements and consider how technologies like WASM can be integrated into our projects to create faster, more capable web applications. The future of web development is exciting, and WASM is just one of the technologies pushing the boundaries of what's possible on the web.</p>
    `,
  },
  {
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks: Advanced Patterns",
    date: "2024-02-15",
    content: `
      <p>React Hooks have revolutionized the way we write functional components, making them more powerful and easier to manage. But beyond the basics, advanced patterns help us build more efficient and maintainable React applications.</p>
      <p>One such pattern is the use of custom hooks to encapsulate complex logic. By abstracting logic into reusable hooks, we can simplify components and improve code organization.</p>
      <p>Another crucial concept is the optimization of performance using memoization techniques like <code>useMemo</code> and <code>useCallback</code>. These hooks prevent unnecessary re-renders and improve application efficiency.</p>
      <p>React's Context API combined with hooks allows for better state management without the need for external libraries. Custom hooks can be used to centralize business logic and stateful behavior.</p>
      <p>As we dive deeper into advanced patterns, understanding how to leverage these techniques will help us build scalable and high-performance React applications.</p>
    `,
  },
  {
    slug: "scalable-microservices-nodejs",
    title: "Building Scalable Microservices with Node.js",
    date: "2024-01-30",
    content: `
      <p>Microservices architecture has become a go-to solution for building scalable and maintainable applications. Node.js, with its lightweight and event-driven nature, is an excellent choice for microservices development.</p>
      <p>Key components of scalable microservices include API gateways, service discovery, and database partitioning. By decoupling services and ensuring fault tolerance, we can build systems that scale efficiently.</p>
      <p>Docker and Kubernetes play a significant role in containerizing and orchestrating microservices, making deployment seamless and improving resource utilization.</p>
      <p>Implementing message queues like RabbitMQ or Kafka enables effective communication between microservices, ensuring reliability and scalability.</p>
      <p>By following best practices and leveraging the right tools, Node.js developers can create robust microservices architectures capable of handling high traffic and complex workflows.</p>
    `,
  },
  {
    slug: "rise-of-jamstack",
    title: "The Rise of JAMstack: Revolutionizing Web Development",
    date: "2024-01-15",
    content: `
      <p>JAMstack is reshaping modern web development by emphasizing performance, security, and scalability. By decoupling the frontend from the backend, developers can build faster and more secure web applications.</p>
      <p>Key components of JAMstack include static site generators, APIs, and a headless CMS. This architecture removes the need for traditional backend servers, leading to improved performance.</p>
      <p>With pre-rendered static files served via CDNs, JAMstack sites achieve lightning-fast load times and reduced server costs.</p>
      <p>Security is enhanced by reducing the attack surface—without a dynamic backend, vulnerabilities like SQL injection become obsolete.</p>
      <p>As adoption grows, JAMstack is proving to be a game-changer, enabling developers to create scalable, efficient, and developer-friendly web applications.</p>
    `,
  }
]


export default function BlogPost({ params }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      <Link href="/#blog" className="text-primary hover:underline mb-6 inline-block">
        &larr; Back to all posts
      </Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center text-sm text-muted-foreground mb-8">
        <Calendar className="h-4 w-4 mr-2" />
        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </div>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

