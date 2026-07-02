"use client";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Atom Notes",
      description:
        "AtomsNote is a student-built platform delivering semester-wise, subject-wise college notes and previous year questions — so you spend less time searching and more time learning.",
      tags: ["REACT", "NEXTJS", "TAILWIND CSS"],
      image: "/atom-notes.webp",
      projectUrl: "https://atom-notes-web.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js, showcasing projects, skills, and experience with a modern design.",
      tags: ["REACT", "NEXTJS", "TAILWIND CSS"],
      image: "/portfolio-img-1.png",
      projectUrl: "https://ayush-portfolio-two-beta.vercel.app/",
    },
  ];

  return (
    <div id="projects" className="text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8 mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Featured Projects
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 md:gap-10 flex-col gap-10">
          {projects.map((project) => (
            <CardContainer key={project.id} className="inter-var w-full">
              <CardBody className="bg-slate-800/40 relative group/card hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-sm border-slate-700/50 border w-full h-auto rounded-xl p-6 sm:p-8 transition-all duration-300 hover:bg-slate-800/60 hover:border-slate-600/50">
                {/* Title */}
                <CardItem
                  translateZ="60"
                  className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4"
                >
                  {project.title}
                </CardItem>

                {/* Description */}
                <CardItem
                  as="p"
                  translateZ="70"
                  className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6"
                >
                  {project.description}
                </CardItem>

                {/* Tags */}
                <CardItem translateZ="80" className="mb-4 sm:mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs font-mono text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardItem>

                {/* Project Image */}
                <CardItem translateZ="100" className="w-full mb-6">
                  <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden border border-slate-700/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                    />
                  </div>
                </CardItem>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "linear-gradient(135deg, #7B61FF, #5B3FDE)",
                      boxShadow: "0 0 40px rgba(123,97,255,0.3)",
                    }}
                    className="flex w-full items-center justify-center gap-2 px-4 py-1.5 md:py-2.5 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg transform hover:scale-105 flex-1 text-sm"
                  >
                    <IconExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
