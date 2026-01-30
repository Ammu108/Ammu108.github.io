import AcademicBranch from "../components/home/academic";
import LetsBuildFuture from "../components/home/contact";
import CopyrightFooter from "../components/home/footer";
import HeroSection from "../components/home/hero-section";
import LiveExperience from "../components/home/live-working";
import Navbar from "../components/home/navbar";
import FeaturedProjects from "../components/home/projects";
import CoreProficiencies from "../components/home/skills";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="pt-16 lg:pt-0 bg-linear-to-br from-slate-950 via-teal-900 to-slate-950">
        <HeroSection />
        <AcademicBranch />
        <CoreProficiencies />
        <LiveExperience />
        <FeaturedProjects />
        <div className="bg-slate-900/80">
          <LetsBuildFuture />
          <CopyrightFooter />
        </div>
      </div>
    </main>
  );
}
