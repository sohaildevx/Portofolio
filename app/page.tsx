import HeroSection from "../components/layouts/HeroSection";
import FloatingToolbar from "../components/layouts/FloatingToolbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black pb-20 overflow-x-clip">
      <FloatingToolbar />
      <div className="mx-auto w-full max-w-4xl border-x border-dotted border-gray-300 dark:border-zinc-700">
        <HeroSection />
      </div>
    </main>
  );
}
