import { SKILLS } from "@/src/lib/constant";

export default function CoreProficiencies() {
  return (
    <div id="skills" className="text-white px-4 sm:px-6 lg:px-8 mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 ">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <p className="text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase mb-3 sm:mb-4">
                SKILLS
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Core Proficiencies
              </h2>
            </div>
            {/* <div className="text-right">
              <p className="text-cyan-400 text-xs sm:text-sm font-mono flex items-center justify-start sm:justify-end gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full inline-block"></span>
                System online | v2.4.0
              </p>
            </div> */}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 sm:p-7 md:p-8 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 flex flex-col items-center text-center h-full group-hover:bg-slate-800/40">
                  {/* Icon Container */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg bg-slate-700/40 group-hover:bg-slate-700/60 transition-all duration-300">
                      <Icon
                        className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 ${skill.color}`}
                      />
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-white">
                    {skill.name}
                  </h3>

                  {/* Skill Subtitle */}
                  <p className="text-gray-400 text-xs sm:text-sm font-mono uppercase tracking-wide">
                    {skill.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
