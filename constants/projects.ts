
export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    lightModeSrc?: string;
    videoUrl?: string;
    backgroundImage?: string;
    projectUrl?: string;
    githubUrl?: string;
    technologies: string[];
    techIcons: string[];
}

export const projects = [
    {
        id: 1,
        title: "ExpenseFlow",
        description: "ExpenseFlow is a dual-mode expense tracker for personal and transport use, with AI receipt scanning and automated month-end summaries.",
        imageUrl: "/ExpenseTrackor.png",
        backgroundImage: "/Card-Bg-Image/image.png",
        videoUrl: "https://www.youtube.com/embed/PKNj-Y0IJnU?si=ftIRa2uE_j-PkeeQ",
        projectUrl: "https://myexpenseflow.vercel.app/",
        githubUrl: "https://github.com/sohaildevx/ExpenseFlow.git",
        technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "RazorPay"],
        techIcons: ["react", "node", "express", "mongodb", "tailwind", "razorpay"]
    },
    {
        id: 2,
        title: "Forgemate",
        description: "ForgeMate is a CLI AI agent with multi-model support for chat, web search, and automated project scaffolding from the terminal.",
        imageUrl: "/Cli-Ai-Agent.png",
        backgroundImage: "/Card-Bg-Image/image copy.png",
        videoUrl: "",
        githubUrl: "https://github.com/sohaildevx/Forgemate.git",
        technologies: ["Next.js", "Node.js", "Express", "OpenAI API", "TypeScript", "Prisma", "PostgreSQL"],
        techIcons: ["next", "node", "express", "openai", "typescript", "prisma", "postgresql"]
    },
    {
        id: 3,
        title: "Vidora",
        description: "AI-powered video platform for compression, subtitle generation, and social-ready reel creation",
        imageUrl: "/vidora.png",
        backgroundImage: "/Card-Bg-Image/image copy 2.png",
        videoUrl: "https://www.youtube.com/embed/jnP5RoV68co?si=3ymX8Bxw5Ocn9x1T",
        projectUrl: "https://cloudinary-saas.vercel.app/",
        githubUrl: "https://github.com/sohaildevx/vidora.git",
        technologies: ["Next.js", "Cloudinary", "OpenAI Whisper", "PostgreSQL"],
        techIcons: ["next", "cloudinary", "openai", "postgresql"]
    },
    {
        id: 4,
        title: "ArzaAi",
        description: "A full-stack AI SaaS that drafts Marathi legal documents from plain-language user inputs across 20+ categories.",
        imageUrl: "/arzaAi.png",
        backgroundImage: "/Card-Bg-Image/image copy 3.png",
        videoUrl: "https://www.youtube.com/embed/OaVTUp5sw7c?si=k7GUYtqZ5tkKydCs",
        projectUrl: "https://arza-ai.vercel.app/",
        githubUrl: "https://github.com/sohaildevx/ArzaAi.git",
        technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS", "shadcn/ui", "OpenAI GPT-4o API", "Razorpay"],
        techIcons: ["next", "typescript", "prisma", "postgresql", "tailwind", "shadcn", "openai", "razorpay"]
    },
    {
        id: 5,
        title: "MailCraft",
        description: "AI-powered email generator — describe your goal, pick a tone, get a send-ready email in seconds.",
        imageUrl: "/mailcraft.png",
        backgroundImage: "/Card-Bg-Image/image copy 4.png",
        videoUrl: "https://www.youtube.com/embed/cuOIzpGdaVU?si=N7RZYDaWNJgtRBkU",
        projectUrl: "https://mail-craft-zeta.vercel.app/",
        githubUrl: "https://github.com/sohaildevx/MailCraft.git",
        technologies: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "shadcn/ui", "OpenAI API", "Framer Motion"],
        techIcons: ["next", "typescript", "supabase", "tailwind", "shadcn", "openai", "framer"]
    },
    {
        id: 6,
        title: "Deal-Drop",
        description: "Deal Droper tracks your bucket list and sends email notifications when your target deal becomes available.",
        imageUrl: "/dealDrop.png",
        backgroundImage: "/Card-Bg-Image/image copy 5.png",
        videoUrl: "",
        projectUrl: "https://deal-drop.vercel.app/",
        githubUrl: "https://github.com/sohaildevx/Deal-Drop.git",
        technologies: ["Next.js", "Supabase", "TailwindCSS", "firecrawl"],
        techIcons: ["next", "supabase", "tailwind", "firecrawl"]
    },
    {
        id: 7,
        title: "Devin-Ai",
        description: "Full-stack AI Chatbot built with the MERN stack. Supports dynamic conversations, API-powered AI responses, and a responsive modern interface.",
        imageUrl: "/ai-Team-ChatBot.png",
        backgroundImage: "/Card-Bg-Image/image.png",
        videoUrl: "",
        projectUrl: "https://ai-realtime-chat-red.vercel.app/",
        githubUrl: "https://github.com/sohaildevx/Devin-Ai.git",
        technologies: ["React", "Node.js", "Express", "OpenAI GPT-4 API"],
        techIcons: ["react", "node", "express", "openai"]
    },
    {
        id: 8,
        title: "Ai-Code-Reviewer",
        description: "AI code reviewer with OpenAi, Gemini & Hugging Face. Instant feedback on quality, performance & security using Monaco editor.",
        imageUrl: "/Ai-CodeReview.png",
        backgroundImage: "/Card-Bg-Image/image copy.png",
        videoUrl: "",
        githubUrl: "https://github.com/sohaildevx/Ai-Code-Review.git",
        technologies: ["React", "Node.js", "Express", "OpenAI", "Monaco Editor", "Hugging Face", "Gemini API"],
        techIcons: ["react", "node", "express", "openai", "monaco", "huggingface", "gemini"]
    },
    {
        id: 9,
        title: "ChessGame",
        description: "Real-time multiplayer chess game built with Node.js, Express, Socket.IO, and Chess.js.",
        imageUrl: "/chessgame.png",
        backgroundImage: "/Card-Bg-Image/image copy 2.png",
        videoUrl: "",
        githubUrl: "https://github.com/sohaildevx/Chess-Game.git",
        technologies: ["Node.js", "Express", "Socket.IO", "Chess.js"],
        techIcons: ["node", "express", "socketio", "chess"]
    }
]
