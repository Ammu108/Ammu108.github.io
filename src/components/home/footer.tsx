export default function CopyrightFooter() {
  return (
    <div className="border-t border-slate-700/50 text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          {/* Left Section - Copyright */}
          <div className="text-xs sm:text-sm font-mono text-gray-400">
            <span className="text-cyan-400">$</span>
            <span className="ml-2">© 2026 AMENX --ALL-RIGHTS-RESERVED</span>
          </div>

          {/* Right Section - Version & Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono text-gray-400">
            <span className="text-cyan-400">V1.0.0-LATEST</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-cyan-400">CRAFTED_WITH_PASSION_& LOVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
