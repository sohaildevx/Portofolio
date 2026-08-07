export type Hackathon = {
  id: number;
  name: string;
  organizer: string;
  date: string;
  participants: string;
  project: string;
  description: string;
  teamSize: number;
  role: string;
  techStack: string[];
  githubUrl: string | null;
  devpostUrl: string | null;
};

export const hackathons: Hackathon[] = [
  {
    id: 1,
    name: "Gemini 3 Hackathon",
    organizer: "Google DeepMind",
    date: "Dec 2025 - Feb 2026",
    participants: "35,541",
    project: "Founder AI",
    description:
      "An intelligent VC investment platform powered by Google Gemini 3.0 that analyzes startup pitches and automates the investment decision pipeline using multiple specialized AI agents.",
    teamSize: 2,
    role: "Full Stack Developer",
    techStack: ["React 19", "TypeScript", "Tailwind CSS v4", "Gemini 3.0", "Recharts", "Vite"],
    githubUrl: "https://github.com/AashishTambe/FounderAIWithGemini.git",
    devpostUrl: null,
  },
];
