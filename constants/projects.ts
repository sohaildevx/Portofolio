
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
}


export const projects = [
    {
        id: 1,
        title: "ExpenseFlow: AI Expense Tracker",
        description: "Full-stack MERN expense tracker with dual transport/personal modes, AI receipt scanning, monthly AI email reports, JWT auth, Razorpay payments, budgets, and analytics.",
        imageUrl: "/ExpenseTrackor.png",
        backgroundImage: "/Card-Bg-Image/image.png",
        videoUrl: "",
        projectUrl: "https://myexpenseflow.vercel.app/",
        githubUrl: "https://github.com/sohaildevx/ExpenseFlow.git",
        technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "RazorPay"]
    },
    {
        id: 2,
        title: "Forgemate",
        description: "Full-stack AI CLI agent: Chat with OpenAI models, execute tools, and generate complete applications from descriptions. Device-flow authentication, conversation persistence, and Next.js dashboard.",
        imageUrl: "/Cli-Ai-Agent.png",
        backgroundImage: "/Card-Bg-Image/image copy.png",
        videoUrl: "",
        githubUrl: "https://github.com/sohaildevx/Forgemate.git",
        technologies: ["Next.js", "Node.js", "Express", "OpenAI API", "TypeScript", "Prisma", "PostgreSQL"]
    },
    {
        id: 3,
        title: "Vidora",
        description: "AI-powered media SaaS featuring smart reel generation, auto-compression, subtitle generation via OpenAI Whisper, and intelligent image formatting.",
        imageUrl: "/vidora.png",
        backgroundImage: "/Card-Bg-Image/image copy 2.png",
        videoUrl: "",
        projectUrl: "https://cloudinary-saas.vercel.app/",
        githubUrl: "https://github.com/sohaildevx/vidora.git",
        technologies: ["Next.js", "Cloudinary", "OpenAI Whisper", "PostgreSQL"]
    },
    {
        id: 4,
        title: "ArzaAi",
        description: "Built a full-stack AI legal SaaS that generates Marathi legal documents across 20+ categories, including affidavits, FIR requests, complaints, and official applications.",
        imageUrl: "/arzaAi.png",
        backgroundImage: "/Card-Bg-Image/image copy 3.png",
        videoUrl: "",
        projectUrl: "https://arza-ai.vercel.app/",
        githubUrl: "https://github.com/sohaildevx/ArzaAi.git",
        technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS", "shadcn/ui", "OpenAI GPT-4o API", "Razorpay"]
    },
    {
        id: 5,
        title: "MailCraft",
        description: "An AI-powered email generator that turns job descriptions into personalized, send-ready emails in seconds. Built for job seekers who want to stand out.",
        imageUrl: "/mailcraft.png",
        backgroundImage: "/Card-Bg-Image/image copy 4.png",
        videoUrl: "",
        projectUrl: "https://mail-craft-zeta.vercel.app/",
        githubUrl: "https://github.com/sohaildevx/MailCraft.git",
        technologies: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "shadcn/ui", "OpenAI API", "Framer Motion"]
    },
    {
        id: 6,
        title: "Deal-Drop",
        description: "Smart price tracker that monitors e-commerce products and alerts you when prices drop. Built with Next.js & Supabase.",
        imageUrl: "/dealDrop.png",
        backgroundImage: "/Card-Bg-Image/image copy 5.png",
        videoUrl: "",
        projectUrl: "https://deal-drop.vercel.app/",
        githubUrl: "https://github.com/sohaildevx/Deal-Drop.git",
        technologies: ["Next.js", "Supabase", "TailwindCSS", "firecrawl"]
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
        technologies: ["React", "Node.js", "Express", "OpenAI GPT-4 API"]
    },
    {
        id: 8,
        title: "Ai-Code-Reviewer",
        description: "AI code reviewer with OpenAi, Gemini & Hugging Face. Instant feedback on quality, performance & security using Monaco editor.",
        imageUrl: "/Ai-CodeReview.png",
        backgroundImage: "/Card-Bg-Image/image copy.png",
        videoUrl: "",
        githubUrl: "https://github.com/sohaildevx/Ai-Code-Review.git",
        technologies: ["React", "Node.js", "Express", "OpenAI", "Monaco Editor", "Hugging Face", "Gemini API"]
    },
    {
        id: 9,
        title: "ChessGame",
        description: "Real-time multiplayer chess game built with Node.js, Express, Socket.IO, and Chess.js.",
        imageUrl: "/chessgame.png",
        backgroundImage: "/Card-Bg-Image/image copy 2.png",
        videoUrl: "",
        githubUrl: "https://github.com/sohaildevx/Chess-Game.git",
        technologies: ["Node.js", "Express", "Socket.IO", "Chess.js"]
    }
]
