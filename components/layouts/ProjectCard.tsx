"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Github, X } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPrisma,
  SiTailwindcss,
  SiPostgresql,
  SiFramer,
  SiCloudflare,
  SiSupabase,
  SiSocketdotio,
} from "react-icons/si";
import { Project } from "@/constants/projects";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  next: SiNextdotjs,
  react: SiReact,
  node: SiNodedotjs,
  typescript: SiTypescript,
  prisma: SiPrisma,
  tailwind: SiTailwindcss,
  postgresql: SiPostgresql,
  framer: SiFramer,
  cloudinary: SiCloudflare,
  supabase: SiSupabase,
  socketio: SiSocketdotio,
  express: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 18.588a1.529 1.529 0 0 1-1.895.748l-3.45-2.803v2.458A1.53 1.53 0 0 1 17.123 23H6.877a1.53 1.53 0 0 1-1.532-1.529V2.53A1.53 1.53 0 0 1 6.877 1h10.246a1.53 1.53 0 0 1 1.532 1.529v6.476l3.45-2.804a1.528 1.528 0 0 1 1.895.748 1.53 1.53 0 0 1-.001 1.93l-3.45 2.803v2.457z" />
    </svg>
  ),
  mongodb: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.889 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z" />
    </svg>
  ),
  openai: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0014.91 4.18a5.985 5.985 0 00-3.997 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.396-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08L8.704 5.46a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  ),
  razorpay: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-8h2v8zm-2-10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </svg>
  ),
  shadcn: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z" />
    </svg>
  ),
  firecrawl: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  ),
  monaco: SiTypescript,
  huggingface: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </svg>
  ),
  gemini: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  ),
  chess: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-2 2V4zm6 0h2v7l-2 2V4zM7 16c0 .55.45 1 1 1h1v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h1c.55 0 1-.45 1-1v-4H7v4z" />
    </svg>
  ),
};

const iconSize = "w-4 h-4";

const techNames: Record<string, string> = {
  next: "Next.js",
  react: "React",
  node: "Node.js",
  typescript: "TypeScript",
  prisma: "Prisma",
  tailwind: "Tailwind CSS",
  postgresql: "PostgreSQL",
  framer: "Framer Motion",
  cloudinary: "Cloudinary",
  supabase: "Supabase",
  socketio: "Socket.IO",
  express: "Express",
  mongodb: "MongoDB",
  openai: "OpenAI",
  razorpay: "Razorpay",
  shadcn: "shadcn/ui",
  firecrawl: "Firecrawl",
  monaco: "Monaco Editor",
  huggingface: "Hugging Face",
  gemini: "Gemini",
  chess: "Chess.js",
};

const ProjectCard = ({
  project,
  setActiveVideo,
}: {
  project: Project;
  setActiveVideo: (video: string) => void;
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc =
    mounted && theme === "light" && project.lightModeSrc
      ? project.lightModeSrc
      : project.imageUrl;

  return (
    <motion.div
      className="group relative z-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-3 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-black hover:shadow-2xl hover:shadow-neutral-500/5"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className="flex w-full flex-col gap-4">
        
        <div className="relative h-[200px] sm:h-[240px] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
          
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${project.backgroundImage}')`,
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
            className="absolute inset-0 z-20 flex items-center justify-center p-3"
            variants={{
              rest: { y: 0 },
              hover: { y: 8 },
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Image
              src={imageSrc}
              alt={`${project.title} preview`}
              width={600}
              height={400}
              className="max-w-full max-h-full object-contain rounded-md"
            />
          </motion.div>

          
          <motion.div
            className="absolute inset-0 z-30 flex items-start justify-start pointer-events-none p-4"
            variants={{
              rest: { opacity: 0, x: -10 },
              hover: { opacity: 1, x: 0 },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <span className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
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
                  className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-900 ml-0.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.25 5.653v12.694c0 .856.926 1.39 1.668.958l11.1-6.347a1.125 1.125 0 000-1.916L6.918 4.695c-.742-.432-1.668.102-1.668.958z" />
                </svg>
              </div>
            </motion.div>
          )}
        </div>

        {/* Content area */}
        <div className="flex flex-col gap-2 px-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold tracking-wide text-neutral-900 dark:text-neutral-100 truncate">
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
                    className="opacity-50 hover:opacity-100 transition cursor-pointer text-neutral-700 dark:text-neutral-300"
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
                    className="opacity-50 hover:opacity-100 transition cursor-pointer text-neutral-700 dark:text-neutral-300"
                  />
                </Link>
              )}
            </div>
          </div>

          <p className="line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
            {project.description}
          </p>

          {/* Tech icons row */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 flex-wrap">
              {project.techIcons.map((key) => {
                const Icon = iconMap[key];
                if (!Icon) return null;
                return (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => setHoveredTech(key)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="p-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-default">
                      <Icon className={`${iconSize} text-neutral-500 dark:text-neutral-400`} />
                    </div>
                    {hoveredTech === key && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                        <div className="bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-[10px] px-2 py-1 rounded shadow-xl whitespace-nowrap font-medium">
                          {techNames[key] || key}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Status badge */}
            <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black px-2.5 py-1 text-[10px] font-medium text-neutral-600 dark:text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
