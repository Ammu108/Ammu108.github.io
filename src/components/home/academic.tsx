import { IconBook, IconCode } from "@tabler/icons-react";

export default function AcademicBranch() {
  return (
    <div id="education" className="max-w-7xl mx-auto mt-16">
      {/* Header Section */}
      <div className="mb-8 sm:mb-12 md:mb-16 px-4 lg:px-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8">
          <div>
            <p className="text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase mb-3 sm:mb-4">
              Background
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Academic Branch
            </h2>
          </div>
          {/* <div className="text-right">
            <p className="text-gray-400 text-xs sm:text-sm md:text-base font-mono italic">
              $ git log --online --graph education
            </p>
          </div> */}
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-1 bg-linear-to-b from-cyan-500 via-purple-500 to-cyan-500"></div>

        {/* Timeline Items */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 pl-10 sm:pl-20 md:pl-24 px-4">
          {/* First Timeline Item - BSC */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-8 sm:-left-14 md:-left-20 top-12 sm:top-14 md:top-16 w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-cyan-400 rounded-full border-3 md:border-4 border-slate-950 shadow-lg shadow-cyan-400/50 transform -translate-y-1/2"></div>

            {/* Card */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-5 sm:p-6 md:p-8 hover:bg-slate-800/60 transition-all duration-300 hover:border-slate-600/50">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                <div className="flex items-center gap-2">
                  <IconCode className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-mono text-xs sm:text-sm">
                    commit 4a7d2e9
                  </span>
                </div>
                <div className="bg-slate-700/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-600/50 w-fit">
                  <span className="text-gray-300 text-xs sm:text-sm font-mono">
                    2023 - 2026
                  </span>
                </div>
              </div>

              {/* Degree Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                BCA - Bachelor Of Computer Applications
              </h3>

              {/* University Name */}
              <p className="text-purple-400 text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 md:mb-5">
                Chaudhary Charan Singh University Meerut
              </p>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6">
                Specialized in Distributed Systems and Cloud Infrastructure.
                Graduated with honors, focusing on high-performance computing
                and neural network foundations.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs sm:text-sm">
                  <IconBook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Core CS Fundamentals</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs sm:text-sm">
                  <IconCode className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Data Structures & Algorithms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
