"use client";

import { useState } from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Hackathon } from "@/constants/hackathons";
import Link from "next/link";
import { Github, ExternalLink, Users, Calendar } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  vite: SiVite,
};

const techNames: Record<string, string> = {
  react: "React",
  typescript: "TypeScript",
  tailwind: "Tailwind CSS",
  vite: "Vite",
};

const iconSize = "w-4 h-4";

interface HackathonCardProps {
  hackathon: Hackathon;
}

const HackathonCard = ({ hackathon }: HackathonCardProps) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const getIconKey = (tech: string): string | null => {
    const lower = tech.toLowerCase();
    if (lower.includes("react")) return "react";
    if (lower.includes("typescript")) return "typescript";
    if (lower.includes("tailwind")) return "tailwind";
    if (lower.includes("vite")) return "vite";
    return null;
  };

  return (
    <Card className="group relative z-10 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 overflow-hidden p-0 gap-0 w-full h-full flex flex-col rounded-2xl hover:shadow-2xl hover:shadow-neutral-500/5 hover:-translate-y-1">
      <CardHeader className="px-5 sm:px-6 pt-5 pb-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
            {hackathon.organizer}
          </span>
        </div>
        <CardTitle className="text-neutral-900 dark:text-neutral-100 text-lg sm:text-xl font-semibold tracking-tight leading-tight">
          {hackathon.project}
        </CardTitle>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
          {hackathon.name}
        </p>
      </CardHeader>

      <CardContent className="px-5 sm:px-6 pb-4 flex-1 flex flex-col">
        <CardDescription className="line-clamp-2 text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
          {hackathon.description}
        </CardDescription>

        <div className="flex items-center gap-4 mt-4 text-xs text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {hackathon.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {hackathon.teamSize} members
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap mt-4">
          {hackathon.techStack.map((tech) => {
            const iconKey = getIconKey(tech);
            const Icon = iconKey ? iconMap[iconKey] : null;

            return (
              <div
                key={tech}
                className="relative"
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className="p-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-default">
                  {Icon ? (
                    <Icon className={`${iconSize} text-neutral-500 dark:text-neutral-400`} />
                  ) : (
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 px-0.5">
                      {tech.charAt(0)}
                    </span>
                  )}
                </div>
                {hoveredTech === tech && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                    <div className="bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-[10px] px-2 py-1 rounded shadow-xl whitespace-nowrap font-medium">
                      {tech}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>

      <CardFooter className="px-5 sm:px-6 pb-5 pt-0 flex gap-2 mt-auto">
        {hackathon.githubUrl && (
          <Link
            href={hackathon.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github
              size={16}
              className="opacity-50 hover:opacity-100 transition cursor-pointer text-neutral-700 dark:text-neutral-300"
            />
          </Link>
        )}

        {hackathon.devpostUrl && (
          <Link
            href={hackathon.devpostUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink
              size={16}
              className="opacity-50 hover:opacity-100 transition cursor-pointer text-neutral-700 dark:text-neutral-300"
            />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default HackathonCard;
