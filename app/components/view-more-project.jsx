"use client";

import { useState, useMemo, useId } from "react";
import ProjectCard from "@/app/components/project-card";

export default function ViewMoreProjects({ projects = [], initialCount = 6 }) {
  const [expanded, setExpanded] = useState(false);
  const gridId = useId();

  const visibleProjects = useMemo(() => {
    if (expanded) return projects;
    return projects.slice(0, initialCount);
  }, [expanded, projects, initialCount]);

  const hasMore = projects.length > initialCount;

  return (
    <section id="projects">
      <div className="py-2 md:py-4 container px-2 md:px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-600 mb-5 md:mb-12">Projects</h2>

        <div id={gridId} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              image={p.image}
              link={p.link}
              tags={p.tags}
            />
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="relative px-6 py-2 rounded-lg font-bold text-white bg-blue-600 hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)] hover:brightness-110 active:translate-y-1 active:shadow-[0_3px_0_0_rgba(0,0,0,0.3)] transition-all duration-200 ease-in-out"
              aria-expanded={expanded}
              aria-controls={gridId}
              onClick={() => setExpanded((s) => !s)}
            >
              {expanded ? "View less" : "View more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
