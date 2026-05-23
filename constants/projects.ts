
export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    videoUrl?: string;
    projectUrl?: string;
    githubUrl?: string;
    technologies: string[];
}


export const projects =[
    {
        id:1,
        title:"ExpenseFlow: AI Expense Tracker",
        description:"Full-stack MERN expense tracker with dual transport/personal modes, AI receipt scanning, monthly AI email reports, JWT auth, Razorpay payments, budgets, and analytics — built with React, Node.js, Express, MongoDB, and TailwindCSS.",
        imageUrl:"/ExpenseTrackor.png",
        projectUrl:"https://myexpenseflow.vercel.app/",
        githubUrl:"https://github.com/sohaildevx/ExpenseFlow.git",
        technologies:["React","Node.js","Express","MongoDB","TailwindCSS","RazorPay"]
    },
    {
       id:2,
       title:"Forgemate",
       description:"Full-stack AI CLI agent: Chat with OpenAI models, execute tools, and generate complete applications from descriptions. Device-flow authentication, conversation persistence, and Next.js dashboard. TypeScript + Prisma + PostgreSQL.",
       imageUrl:"/Cli-Ai-Agent.png",
       githubUrl:"https://github.com/sohaildevx/Forgemate.git",
       technologies:["Next.js","Node.js","Express","OpenAI API","TypeScript","Prisma","PostgreSQL"]
    },
    {
       id:3,
       title:"Vidora",
       description:"AI-powered media SaaS featuring smart reel generation, auto-compression, subtitle generation via OpenAI Whisper, and intelligent image formatting. Built with Next.js, Cloudinary, and PostgreSQL.",
       imageUrl:"/vidora.png",
       projectUrl:"https://cloudinary-saas.vercel.app/",
       githubUrl:"https://github.com/sohaildevx/vidora.git",
       technologies:["Next.js","Cloudinary","OpenAI Whisper","PostgreSQL"]
    },
    {
        id:4,
        title:"ArzaAi",
        description:"Built a full-stack AI legal SaaS that generates Marathi legal documents across 20+ categories, including affidavits, FIR requests, complaints, and official applications. Implemented GPT-4o powered workflows, secure authentication, document management, and Razorpay-based credit billing using Next.js, PostgreSQL, and Prisma.",
        imageUrl:"/arzaAi.png",
        githubUrl:"https://github.com/sohaildevx/ArzaAi.git",
        technologies:["Next.js","TypeScript","Prisma","PostgreSQL","TailwindCSS","shadcn/ui","OpenAI GPT-4o API","Razorpay"]
    },
    {
        id:5,
        title:"Deal-Drop",
        description:"Smart price tracker that monitors e-commerce products and alerts you when prices drop. Built with Next.js & Supabase.",
        imageUrl:"/dealDrop.png",
        projectUrl:"https://deal-drop.vercel.app/",
        githubUrl:"https://github.com/sohaildevx/Deal-Drop.git",
        technologies:["Next.js","Supabase","TailwindCSS","firecrawl"]
    },
    {
        id:6,
        title:"Devin-Ai",
        description:"Full-stack AI Chatbot built with the MERN stack. Supports dynamic conversations, API-powered AI responses, and a responsive modern interface.",
        imageUrl:"/ai-Team-ChatBot.png",
        githubUrl:"https://github.com/sohaildevx/Devin-Ai.git",
        technologies:["React","Node.js","Express","OpenAI GPT-4 API"]
    },
    {
        id:7,
        title:"Ai-Code-Reviewer",
        description:"AI code reviewer with OpenAi, Gemini & Hugging Face. Instant feedback on quality, performance & security using Monaco editor. React + Node.js",
        imageUrl:"/Ai-CodeReview.png",
        githubUrl:"https://github.com/sohaildevx/Ai-Code-Review.git",
        technologies:["React","Node.js","Express","OpenAI","Monaco Editor","Hugging Face","Gemini API"]
    },
    {
        id:8,
        title:"ChessGame",
        description:"Real-time multiplayer chess game built with Node.js, Express, Socket.IO, and Chess.js.",
        imageUrl:"/chessgame.png",
        githubUrl:"https://github.com/sohaildevx/Chess-Game.git",
        technologies:["Node.js","Express","Socket.IO","Chess.js"]
    }
]