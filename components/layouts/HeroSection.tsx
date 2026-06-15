import Image from "next/image";
import { skills } from "@/constants/skills";
import { Button } from "../ui/button";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/projects";
import Contact from "@/components/layouts/Contact";
import { GitHubCalendar } from "react-github-calendar";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center pt-10 sm:pt-20 px-4 sm:px-8 py-8">
      <div
        className="flex flex-row justify-center items-center gap-3 sm:gap-8 w-full max-w-6xl"
        id="home"
      >
        <div className="text-gray-900 dark:text-white flex flex-col items-start text-left">
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, i'm Sohail{" "}
          </h1>
          <p className="pt-1 sm:pt-2 text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Full Stack Developer
          </p>
        </div>

        <div className="shrink-0">
          <Image
            src="/Profile.jpeg"
            alt="Profile Image"
            width={200}
            height={200}
            className="rounded-full w-20 h-20 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 object-cover"
          />
        </div>
      </div>

      <div className="text-gray-900 dark:text-white mt-8 sm:mt-12 max-w-2xl w-full px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
          I'm a Full Stack Developer who builds and ships real products — not
          just tutorial projects. From AI expense trackers to Marathi legal
          document platforms, I've built full SaaS apps with auth, payments,
          databases, and AI integrations.
        </p>

        <p className="text-green-600 dark:text-green-400 font-semibold text-sm sm:text-base">
          🟢 Open to Internships & Full-Time Opportunities
        </p>
      </div>

      <div className="text-gray-900 dark:text-white mt-8 sm:mt-12 max-w-2xl w-full px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Education</h2>

        <div className="relative bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-gray-300 dark:hover:border-zinc-600 transition-all duration-500 overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gray-900 dark:bg-white rounded-l-2xl"></div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                New Arts, Commerce and Science College, Parner
              </h3>
              <p className="text-gray-500 dark:text-zinc-400 text-xs sm:text-sm mt-1">
                Bachelor of Science in Computer Science
              </p>
            </div>
            <span className="inline-flex items-center bg-gray-100 dark:bg-zinc-800/80 text-gray-600 dark:text-zinc-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-gray-200/80 dark:border-zinc-700/50 shrink-0">
              2023 - 2026
            </span>
          </div>

          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-zinc-800/80">
            <span className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-zinc-800/80 text-gray-600 dark:text-zinc-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-200/80 dark:border-zinc-700/50">
              Currently in Third Year
            </span>
          </div>
        </div>

        <div className="text-gray-900 dark:text-white mt-8 sm:mt-12 w-full">
          <h3 className="font-bold text-xl sm:text-2xl mb-4">Skills</h3>
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4"
            >
              <h4 className="text-sm sm:text-lg font-semibold capitalize text-gray-600 dark:text-gray-400 sm:min-w-25 pt-2">
                {category}:
              </h4>

              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Button
                    key={skill}
                    variant="outline"
                    className="text-xs sm:text-sm bg-blue-500 dark:bg-white hover:bg-blue-600 dark:hover:bg-gray-100 border-blue-600 dark:border-white text-white dark:text-black"
                  >
                    {skill}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center sm:mt-20 w-full" id="projects">
          <div className="space-y-3 mb-12">
            <span className="inline-block rounded-full bg-gray-900 dark:bg-white px-4 py-1.5 text-xs sm:text-sm text-white dark:text-gray-900 font-semibold tracking-wide uppercase">
              Projects
            </span>
            <h2 className="font-bold text-gray-900 dark:text-white text-3xl tracking-tight sm:text-4xl md:text-5xl text-center">
              Projects & Experiments
            </h2>
            <p className="text-gray-500 dark:text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto text-center leading-relaxed">
              A collection of web projects ranging from foundational
              implementations to full-stack applications, showcasing my growth
              and practical problem-solving skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20 w-full text-center">
          <div className="space-y-3 mb-10">
            <span className="inline-block rounded-full bg-gray-900 dark:bg-white px-4 py-1.5 text-xs sm:text-sm text-white dark:text-gray-900 font-semibold tracking-wide uppercase">
              GitHub
            </span>
            <h2 className="font-bold text-gray-900 dark:text-white text-3xl tracking-tight sm:text-4xl md:text-5xl text-center">
              Contributions
            </h2>
          </div>

          <div className="flex justify-center overflow-x-auto">
            <GitHubCalendar
              username="sohaildevx"
              fontSize={14}
              blockSize={12}
              blockMargin={4}
            />
          </div>
        </div>

        <Contact />
      </div>
    </section>
  );
};

export default HeroSection;
