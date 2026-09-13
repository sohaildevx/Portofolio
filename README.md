# Sohail Shaikh - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, showcasing my projects, skills, and experience as a Full Stack Developer.

## Demo Video

[![Demo Video](https://img.youtube.com/vi/0Oz8yoggC1g/maxresdefault.jpg)](https://youtu.be/0Oz8yoggC1g)

## Features

- Modern Dark/Light Theme - Seamless theme switching with next-themes
- Fully Responsive - Optimized for all device sizes (mobile, tablet, desktop)
- Smooth Navigation - Floating toolbar with smooth scrolling to sections
- Project Showcase - Display of featured projects with Framer Motion hover effects
- GitHub Contributions Graph - Interactive contribution calendar with theme support
- Contact Form - Integrated contact form with email functionality using Nodemailer
- Skills Section - Organized display of frontend, backend, and tool proficiencies
- Education Information - Current academic background and achievements
- Social Links - Quick access to GitHub, LinkedIn, and Twitter profiles

## Tech Stack

### Frontend
- **Next.js 16.1.0** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 13** - Animation library for hover effects and transitions
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **React Icons** - Comprehensive icon library
- **next-themes** - Theme management system
- **react-github-calendar** - GitHub contribution graph
- **react-tooltip** - Tooltip components

### Backend
- **Node.js** - Server runtime
- **Nodemailer 7** - Email sending functionality
- **Next.js API Routes** - Serverless API endpoints

### Development Tools
- **ESLint 9** - Code linting
- **PostCSS** - CSS processing
- **TypeScript 5** - Type checking

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sohaildevx/portofolio.git
cd portofolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portofolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── layouts/
│   │   ├── Contact.tsx           # Contact form component
│   │   ├── FloatingToolbar.tsx   # Navigation toolbar
│   │   ├── GithubGraph.tsx       # GitHub contributions graph
│   │   ├── HackathonCard.tsx     # Hackathon card component
│   │   ├── HeroSection.tsx       # Main hero section
│   │   ├── ProjectCard.tsx       # Project card component
│   │   ├── theme-provider.tsx    # Theme provider wrapper
│   │   └── theme-modes.tsx       # Theme toggle component
│   └── ui/
│       ├── button.tsx            # Reusable button component
│       ├── card.tsx              # Reusable card component
│       └── dropdown-menu.tsx     # Dropdown menu component
├── constants/
│   ├── hackathons.ts             # Hackathon data
│   ├── projects.ts               # Project data
│   └── skills.ts                 # Skills data
├── lib/
│   └── utils.ts                  # Utility functions
├── public/
│   └── Images/                   # Image assets
└── README.md
```

## Links

- **GitHub:** [@sohaildevx](https://github.com/sohaildevx)
- **LinkedIn:** [Sohail Shaikh](https://linkedin.com/in/sohailshaikh786)
- **Twitter:** [@Sohaildevs](https://twitter.com/Sohaildevs)

## License

This project is open source and available for personal use.

## About Me

Hi! I'm Sohail Shaikh, a Full Stack Developer. I love building real products and solving real problems with clean, efficient code.

## Contributing

Feel free to fork this project and customize it for your own portfolio! If you find any bugs or have suggestions, please open an issue.

## Contact

For any inquiries, feel free to reach out through the contact form on the website or connect with me on social media.
