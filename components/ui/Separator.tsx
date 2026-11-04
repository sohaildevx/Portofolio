const Separator = () => {
  return (
    <div className="relative h-px w-full" aria-hidden="true">
      {/* Dotted line spanning the full viewport width */}
      <div className="absolute top-0 left-1/2 w-screen -translate-x-1/2 border-t border-dotted border-gray-300 dark:border-zinc-700" />

      {/* Intersection marks aligned with the column borders */}
      <div className="absolute top-1/2 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-gray-300 dark:bg-zinc-700" />
      <div className="absolute top-1/2 right-0 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 bg-gray-300 dark:bg-zinc-700" />
    </div>
  );
};

export default Separator;
