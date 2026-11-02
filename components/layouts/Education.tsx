"use client";

import Image from "next/image";

type EducationEntry = {
  logo: string;
  logoAlt: string;
  institution: string;
  degree: string;
  period: string;
  status: string;
};

const educationEntries: EducationEntry[] = [
  {
    logo: "/college_logos/nacs_college.svg",
    logoAlt: "New Arts, Commerce and Science College logo",
    institution: "New Arts, Commerce and Science College, Parner",
    degree: "Bachelor of Science in Computer Science",
    period: "2023 - 2026",
    status: "Completed",
  },
  {
    logo: "/college_logos/ibmrd_college.svg",
    logoAlt: "IBMRD College logo",
    institution: "Institute of Business Management & Rural Development (IBMRD)",
    degree: "Master of Computer Applications",
    period: "2026 - 2028",
    status: "In Progress",
  },
];

const Education = () => {
  return (
    <div className="text-gray-900 dark:text-white mt-8 sm:mt-12 max-w-2xl w-full px-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Education</h2>

      <div className="flex flex-col gap-5 sm:gap-6">
        {educationEntries.map((entry) => (
          <div key={entry.institution} className="flex items-center gap-4">
            <div className="shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden border border-gray-200 dark:border-zinc-800 bg-white">
              <Image
                src={entry.logo}
                alt={entry.logoAlt}
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white leading-snug">
                {entry.institution}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 mt-0.5">
                {entry.degree}
              </p>
            </div>

            <div className="shrink-0 text-right">
              <div className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 tabular-nums">
                {entry.period}
              </div>
              <div
                className={`text-xs mt-0.5 ${
                  entry.status === "Completed"
                    ? "text-green-600 dark:text-green-400"
                    : "text-gray-400 dark:text-zinc-500"
                }`}
              >
                {entry.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
