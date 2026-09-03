"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Github, X } from "lucide-react";
import { Project } from "@/constants/projects";
import { Button } from "../ui/button";

interface ProjectCardProps {
  project: Project;
  setActiveVideo: (video: string) => void;
}

const ProjectCard = ({ project, setActiveVideo }: ProjectCardProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc =
    mounted && theme === "light" && project.lightModeSrc
      ? project.lightModeSrc
      : project.imageUrl;

  const bgImage = project.backgroundImage;

  return (
    <motion.div
      className="group relative z-10 rounded-2xl border border-gray-200 dark:border-zinc-800 p-3 transition-all duration-300 hover:border-gray-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-950 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/30"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className="flex w-full flex-col gap-4">
        
        <div className="rounded-xl border border-gray-200 dark:border-zinc-800 p-[4px] bg-gray-50 dark:bg-zinc-900/50">
          
          <div className="relative h-[200px] sm:h-[220px] w-full overflow-hidden rounded-lg border border-gray-200 dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900 select-none">
            
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${bgImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              variants={{
                rest: { opacity: 0, scale: 1 },
                hover: { opacity: 1, scale: 1.05 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

           
            <motion.div
              className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
              variants={{
                rest: { opacity: 0, y: 20 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <span className="text-[11px] font-bold text-white dark:text-white uppercase tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] bg-black/30 dark:bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
                View Project
              </span>
            </motion.div>

            
            {project.videoUrl && (
              <motion.div
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVideo(project.videoUrl!);
                }}
                className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto cursor-pointer"
                variants={{
                  rest: { scale: 0.5, opacity: 0 },
                  hover: { scale: 1, opacity: 1 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.05,
                }}
              >
                <div className="h-12 w-12 sm:h-14 sm:w-14 bg-white/90 dark:bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200 border border-white/50">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 ml-0.5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.25 5.653v12.694c0 .856.926 1.39 1.668.958l11.1-6.347a1.125 1.125 0 000-1.916L6.918 4.695c-.742-.432-1.668.102-1.668.958z" />
                  </svg>
                </div>
              </motion.div>
            )}

            
            <motion.div
              className="absolute bottom-0 left-1/2 w-[85%] rounded-t-md bg-white dark:bg-zinc-950 p-[2px] pb-0 shadow-2xl z-20 border-x border-t border-gray-200 dark:border-zinc-800"
              variants={{
                rest: { height: "80%", y: 0, x: "-50%" },
                hover: { height: "74%", y: 4, x: "-50%" },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="size-full overflow-hidden rounded-t-[4px] bg-gray-50 dark:bg-zinc-900">
                <Image
                  src={imageSrc}
                  alt={`${project.title} preview`}
                  width={600}
                  height={400}
                  className="size-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>

        
        <div className="flex flex-col gap-2 px-1">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold tracking-wide text-gray-900 dark:text-white truncate">
              {project.title}
            </h3>
            <div className="flex items-center gap-3 shrink-0">
              {project.projectUrl && (
                <Link
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe
                    size={16}
                    className="opacity-50 hover:opacity-100 transition cursor-pointer text-gray-700 dark:text-zinc-300"
                  />
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github
                    size={16}
                    className="opacity-50 hover:opacity-100 transition cursor-pointer text-gray-700 dark:text-zinc-300"
                  />
                </Link>
              )}
            </div>
          </div>

          <p className="line-clamp-2 text-sm text-gray-500 dark:text-zinc-400 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-zinc-200 transition-colors duration-300">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 dark:bg-zinc-800/80 text-gray-600 dark:text-zinc-300 px-2.5 py-0.5 rounded-full text-xs font-medium border border-gray-200/80 dark:border-zinc-700/50 transition-colors duration-300 group-hover:border-gray-300 dark:group-hover:border-zinc-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

       
        <div className="flex gap-2.5 px-1 pb-1">
          {project.projectUrl && (
            <Link
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 w-full text-sm py-5 cursor-pointer rounded-xl font-medium transition-all duration-300 gap-2">
                <Globe size={15} />
                Live Demo
              </Button>
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                className="bg-transparent dark:bg-transparent text-gray-700 dark:text-zinc-300 border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:border-gray-300 dark:hover:border-zinc-600 flex items-center justify-center gap-2 w-full text-sm py-5 cursor-pointer rounded-xl font-medium transition-all duration-300"
              >
                <Github size={15} />
                Source Code
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
