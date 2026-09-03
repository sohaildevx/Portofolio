"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { projects } from "@/constants/projects";
import ProjectCard from "@/components/layouts/ProjectCard";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-black pb-20">
      <section className="w-full flex flex-col items-center pt-10 sm:pt-20 px-4 sm:px-8 py-8">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-12">
            <Link href="/#projects">
              <Button
                variant="ghost"
                className="text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white mb-6 cursor-pointer"
              >
                ← Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              All Projects
            </h1>
            <p className="text-gray-500 dark:text-zinc-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
              A complete collection of my work — from full-stack SaaS apps to AI-powered tools.
            </p>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  setActiveVideo={setActiveVideo}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 cursor-pointer p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-black rounded-xl overflow-hidden w-full max-w-3xl shadow-2xl"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 p-2 bg-zinc-800/80 hover:bg-zinc-700 rounded-full cursor-pointer transition-colors z-50"
              >
                <X size={20} className="text-zinc-200" />
              </button>

              {activeVideo.includes("youtube") || activeVideo.includes("youtu.be") ? (
                <iframe
                  src={activeVideo}
                  className="w-full aspect-video border-0"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                />
              ) : (
                <video
                  src={activeVideo}
                  className="w-full h-auto"
                  controls
                  autoPlay
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
