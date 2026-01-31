"use client";
import { IconFileCvFilled } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { useDownloadFile } from "@/lib/download-hook";

export default function HeroSection() {
  const { download } = useDownloadFile();

  return (
    <div className="relative text-white min-h-screen overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        {/* <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div> */}
      </div>

      <div className="relative z-10 w-full lg:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-6 sm:space-y-4 items-center lg:items-start">
              {/* Badge */}
              <div className="inline-flex w-fit flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <span className="px-3 sm:px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-[10px] md:text-xs font-semibold tracking-wider">
                    ● AVAILABLE FOR NEW PROJECTS
                  </span>
                  <span className="inline-flex justify-center items-center gap-1.5 px-3 sm:px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-[10px] md:text-xs font-semibold tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    WORKING AT EARNEX
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-purple-400 text-center lg:text-start">
                  <span className="text-purple-500">&gt;&gt;</span> 8+ months of
                  experience
                </div>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl sm:text-5xl text-center lg:text-start md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Hello World,
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  I&apos;m{" "}
                  <span className="text-cyan-400 underline">
                    {"<>AMENX</>"}
                  </span>
                </h1>
              </div>

              {/* Description */}
              <div>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-md leading-relaxed text-center lg:text-start">
                  I&apos;m a developer who loves turning ideas into fast,
                  scalable, and user-focused digital products using clean code
                  and real-world best practices.
                </p>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Button
                  variant="primary"
                  size="xl"
                  onClick={() => download("/amenx-resume.pdf", "resume.pdf")}
                >
                  <IconFileCvFilled className="size-6" />
                  View Resume
                </Button>
                <span className="text-gray-300 text-xs sm:text-sm">
                  1,248 commits this year
                </span>
              </div>
            </div>

            {/* Right Code Block */}
            <div className="flex items-center justify-center lg:justify-end w-full">
              <div className="w-full max-w-md bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="bg-slate-800 px-3 sm:px-4 py-3 flex items-center justify-between border-b border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono tracking-wider">
                    EXPERIENCE.TS
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-4 sm:p-5 md:p-6 font-mono text-xs sm:text-sm leading-relaxed">
                  <div className="space-y-1.5 text-gray-300">
                    {/* Line 1 */}
                    <div>
                      <span className="text-purple-400">const</span>
                      <span className="text-white"> profile</span>
                      <span className="text-gray-400"> = </span>
                      <span className="text-yellow-400">{`{`}</span>
                    </div>

                    {/* Line 2 */}
                    <div className="pl-4">
                      <span className="text-cyan-400">name</span>
                      <span className="text-gray-400">: </span>
                      <span className="text-green-400">&apos;AmenX&apos;</span>
                      <span className="text-gray-400">,</span>
                    </div>

                    {/* Line 3 */}
                    <div className="pl-4">
                      <span className="text-cyan-400">role</span>
                      <span className="text-gray-400">: </span>
                      <span className="text-green-400">
                        &apos;Frontend Developer&apos;
                      </span>
                      <span className="text-gray-400">,</span>
                    </div>

                    {/* Line 4 */}
                    <div className="pl-4">
                      <span className="text-cyan-400">experience</span>
                      <span className="text-gray-400">: </span>
                      <span className="text-blue-400">8</span>
                      <span className="text-gray-500"> {"// months"}</span>
                    </div>

                    {/* Line 5 */}
                    <div className="pl-4">
                      <span className="text-cyan-400">commits</span>
                      <span className="text-gray-400">: </span>
                      <span className="text-blue-400">5200</span>
                      <span className="text-gray-400">,</span>
                    </div>

                    {/* Line 6 */}
                    <div className="pl-4">
                      <span className="text-cyan-400">stack</span>
                      <span className="text-gray-400">: [</span>
                      <span className="text-green-400">
                        &apos;Next.Js&apos;
                      </span>
                      <span className="text-gray-400">, </span>
                      <span className="text-green-400">&apos;React&apos;</span>
                      <span className="text-gray-400">, </span>
                      <span className="text-green-400">
                        &apos;Typescript&apos;
                      </span>
                      <span className="text-gray-400">],</span>
                    </div>

                    {/* Line 7 */}
                    <div>
                      <span className="text-yellow-400">{`}`}</span>
                    </div>

                    {/* Line 8 */}
                    <div className="mt-3 pt-3 border-t border-slate-700">
                      <span className="text-purple-400">function</span>
                      <span className="text-white"> isHiring</span>
                      <span className="text-gray-400">() </span>
                      <span className="text-yellow-400">{`{`}</span>
                    </div>

                    {/* Line 9 */}
                    <div className="pl-4">
                      <span className="text-purple-400">return</span>
                      <span className="text-blue-400"> true</span>
                      <span className="text-gray-400">;</span>
                    </div>

                    {/* Line 10 */}
                    <div>
                      <span className="text-yellow-400">{`}`}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-3 pt-3 sm:mt-4 sm:pt-4 border-t border-slate-700 flex items-center justify-between text-xs text-gray-500">
                    <span>Shift + Enter to run</span>
                    <span>UTF-8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
