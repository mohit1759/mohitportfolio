"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import ContactForm from "./components/contact-form";
import AllProjects from "./components/all-project";
import ProjectCard from "./components/project-card";
import BlogSection from "./components/blog-section";
import TechSection from "./components/tech-section";
import MobileMenu from "./components/mobile-menu";
import Header from "./components/layout/header";
import HeroSection from "./components/hero-section";
import Footer from "./components/layout/footer";


const PROJECTS = [
  {
    title: "Marriage Counselor Gurgaon Website",description:"A fully responsive and SEO-optimized WordPress website developed for a professional marriage counseling service. The site includes custom layouts, optimized performance, and on-page SEO with a 100/100 score in Lighthouse audits.",image: "/projectimg/marriage.jpg",link: "https://www.marriagecounselorgurgaon.com/",tags: ["WordPress", "Responsive Design", "On-Page SEO", "Custom Theme"],
  },
  {
    title: "MindSoulBridge Website",description:"A responsive and SEO-friendly WordPress website created for a mental health and therapy services provider. Built with user-focused UI/UX, optimized loading performance, and strong on-page SEO implementation.",image: "/projectimg/mind.jpg",link: "https://www.mindsoulbridge.com/",tags: ["WordPress", "Responsive Design", "SEO", "UI/UX"],
  },
  {
    title: "RENcomm Corporate Website",description:"Developed a professional WordPress website for RENcomm, showcasing their business services with mobile responsiveness, modern layout, and on-page SEO best practices for visibility and performance.",image: "/projectimg/rencom.jpg",link: "https://rencomm.net/",tags: ["WordPress", "Corporate Website", "Responsive Design", "SEO"],
  },
  {
    title: "LiveCure24 Healthcare Website",description:"Developed a responsive healthcare service platform using Laravel PHP. Integrated appointment booking, dynamic service management, and implemented on-page SEO to boost online visibility.",image: "/projectimg/livecure.jpg",link: "https://www.livecure24.com/",tags: ["Laravel", "PHP", "Healthcare", "Responsive Design", "SEO"],
  },
  {
    title: "CorpPlace Business Solutions Website",description:"Designed and developed a corporate solutions platform using Laravel PHP and Tailwind CSS. Delivered a clean, fully responsive UI with SEO optimization and modular architecture.",image: "/projectimg/corpplace.jpg",link: "https://corpplace.com/",tags: ["Laravel", "PHP", "Tailwind CSS", "Corporate", "Responsive Design"],
  },
  {
    title: "Arabius Language Learning Platform",description:"Built a responsive Arabic language learning website using WordPress. Integrated live tutoring features, placement tests, and ensured fast loading speeds with an intuitive user experience.",image: "/projectimg/arabius.jpg",link: "https://arabius.com/",tags: ["WordPress", "EdTech", "Live Tutoring", "Responsive Design", "Performance"],
  },
  {
    title: "Pradeep Classes Coaching Website",description:"Developed a responsive educational website using Laravel PHP for Pradeep Classes, featuring multi-course management, modern UI, and strong on-page SEO for high performance and visibility.",image: "/projectimg/study.jpg", link: "https://www.pradeepclasses.com/",tags: ["Laravel", "PHP", "Education", "Responsive Design", "SEO", "Performance"],
  },
  {
    title: "Epoch IAS Website", description:"Developed a responsive educational website using Laravel PHP for Epoch IAS, featuring course management, modern UI, and strong on-page SEO for high performance and visibility.", image: "/projectimg/epoch.jpg", link: "https://epochias.com/", tags: ["Laravel", "PHP", "Education", "Responsive Design", "Performance"],
  }

];

export default function Page() {
  // NOTE: project list state and paging now lives in AllProjects
  // (No need for local expanded/visible/hasMore in this file anymore).

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AllProjects projects={PROJECTS} />
      <BlogSection />
      <TechSection />

      <section id="contact" className="py-3 md:py-6">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-12 text-center text-blue-600">Get in Touch</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />

      <BackToTopButton />
    </div>
  );
}

function BackToTopButton() {
  return (
    <div className="fixed bottom-6 right-6">
      <a href="#"className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all">
        <ArrowUp className="h-5 w-5" />
        <span className="sr-only">Back to top</span>
      </a>
    </div>
  );
}
