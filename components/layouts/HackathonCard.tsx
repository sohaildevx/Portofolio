import { Button } from "../ui/button";
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
import { Github, ExternalLink, Code, Users, Calendar } from "lucide-react";

interface HackathonCardProps {
  hackathon: Hackathon;
}

const HackathonCard = ({ hackathon }: HackathonCardProps) => {
  return (
    <Card className="group bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-600 transition-all duration-500 ease-out overflow-hidden p-0 gap-0 w-full h-full flex flex-col rounded-2xl shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 hover:-translate-y-1">
      <CardHeader className="px-5 sm:px-6 pt-5 pb-1">
        <div className="flex items-center gap-2 mb-1">
          <Code className="h-4 w-4 text-blue-500" />
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
            {hackathon.organizer}
          </span>
        </div>
        <CardTitle className="text-gray-900 dark:text-white text-lg sm:text-xl font-semibold tracking-tight leading-tight">
          {hackathon.project}
        </CardTitle>
        <p className="text-sm text-gray-500 dark:text-zinc-400 mt-0.5">
          {hackathon.name}
        </p>
      </CardHeader>

      <CardContent className="px-5 sm:px-6 pb-4 flex-1 flex flex-col">
        <CardDescription className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed">
          {hackathon.description}
        </CardDescription>

        <div className="flex items-center gap-4 mt-4 text-xs text-gray-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {hackathon.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {hackathon.teamSize} members
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {hackathon.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 dark:bg-zinc-800/80 text-gray-600 dark:text-zinc-300 px-2.5 py-0.5 rounded-full text-xs font-medium border border-gray-200/80 dark:border-zinc-700/50 transition-colors duration-300 group-hover:border-gray-300 dark:group-hover:border-zinc-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-5 sm:px-6 pb-5 pt-0 flex gap-2.5 mt-auto">
        {hackathon.githubUrl && (
          <Link
            href={hackathon.githubUrl}
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

        {hackathon.devpostUrl && (
          <Link
            href={hackathon.devpostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 w-full text-sm py-5 cursor-pointer rounded-xl font-medium transition-all duration-300 gap-2">
              <ExternalLink size={15} />
              Devpost
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default HackathonCard;
