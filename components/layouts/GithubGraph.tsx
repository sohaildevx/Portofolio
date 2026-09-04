"use client";

import { useTheme } from "next-themes";
import { useState, useEffect, ReactElement } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

interface TooltipPayload {
  count: number;
  date: string;
}

interface CalendarSize {
  blockSize: number;
  blockMargin: number;
  fontSize: number;
}

const GithubGraph = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [calendarSize, setCalendarSize] = useState<CalendarSize>({
    blockSize: 12,
    blockMargin: 4,
    fontSize: 12,
  });

  useEffect(() => {
    setMounted(true);

    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setCalendarSize({ blockSize: 8, blockMargin: 2, fontSize: 10 });
      } else if (width < 640) {
        setCalendarSize({ blockSize: 10, blockMargin: 3, fontSize: 11 });
      } else if (width < 768) {
        setCalendarSize({ blockSize: 11, blockMargin: 3, fontSize: 12 });
      } else {
        setCalendarSize({ blockSize: 12, blockMargin: 4, fontSize: 12 });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!mounted) {
    return null;
  }

  const colorScheme = resolvedTheme === "dark" ? "dark" : "light";

  const renderBlock = (
    block: ReactElement,
    payload: TooltipPayload
  ): ReactElement => {
    return (
      <g data-tooltip-id="github-tooltip" data-tooltip-content={`${payload.count} contributions on ${payload.date}`}>
        {block}
      </g>
    );
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="inline-block text-center max-w-full overflow-x-auto">
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 italic px-4">
          I love spending time in open source, building real stuff and solving real problems
        </p>
        <div className="flex justify-center min-w-0">
          <GitHubCalendar
            username="sohaildevx"
            colorScheme={colorScheme}
            fontSize={calendarSize.fontSize}
            blockSize={calendarSize.blockSize}
            blockMargin={calendarSize.blockMargin}
            renderBlock={renderBlock}
            showTotalCount
            showColorLegend
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        </div>
        <Tooltip
          id="github-tooltip"
          className="!rounded-lg !px-3 !py-2 !text-xs !font-medium !border !shadow-sm z-50"
          style={{
            backgroundColor: resolvedTheme === "dark" ? "#27272a" : "#ffffff",
            color: resolvedTheme === "dark" ? "#fafafa" : "#18181b",
            borderColor: resolvedTheme === "dark" ? "#3f3f46" : "#e4e4e7",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </div>
  );
};

export default GithubGraph;
