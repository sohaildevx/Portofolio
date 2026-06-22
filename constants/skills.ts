import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export type Skill = {
  name: string;
  icon: IconType | null;
};

export const skills: Record<string, Skill[]> = {
  frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "RESTful APIs", icon: null },
    { name: "Prisma", icon: SiPrisma },
  ],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: VscVscode },
    { name: "Postman", icon: SiPostman },
  ],
};