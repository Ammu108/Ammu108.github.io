"use client";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Earnex Rewards",
      description:
        "Earnex Rewards connects brands with real users through performance-driven, reward-based engagement—boosting visibility, trust, and measurable results.",
      tags: ["REACT", "NEXTJS", "TAILWIND CSS"],
      image: "/earnex-screen.webp",
      projectUrl: "https://www.earnexrewards.com/",
    },
  ];

  return (
    <div id="projects" className="text-white px-4 sm:px-6 lg:px-8 mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 ">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <p className="text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase mb-3 sm:mb-4">
                Portfolio showcase
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Featured Projects
              </h2>
            </div>
            <div className="text-right">
              <p className="text-cyan-400 text-xs sm:text-sm font-mono flex items-center justify-start sm:justify-end gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full inline-block"></span>
                {projects.length} projects deployed
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-8 md:gap-10">
          {projects.map((project) => (
            <CardContainer key={project.id} className="inter-var w-full">
              <CardBody className="bg-slate-800/40 relative group/card hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-sm border-slate-700/50 border w-full h-auto rounded-xl p-6 sm:p-8 transition-all duration-300 hover:bg-slate-800/60 hover:border-slate-600/50">
                {/* Project Number Badge */}
                <CardItem
                  translateZ="50"
                  className="text-cyan-400 font-mono text-xs sm:text-sm mb-3 sm:mb-4"
                >
                  <span className="bg-cyan-500/20 border border-cyan-500/50 rounded-full px-3 py-1">
                    PROJECT #{project.id.toString().padStart(2, "0")}
                  </span>
                </CardItem>

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
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-black transition-all duration-200 hover:shadow-lg transform hover:scale-105 bg-[#00CECE] flex-1"
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
