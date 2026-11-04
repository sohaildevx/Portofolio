import type { ReactNode } from "react";
import Separator from "./Separator";

type SectionProps = {
  id?: string;
  title?: string;
  children: ReactNode;
};

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id}>
      <Separator />

      {title && (
        <>
          <div className="px-5 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
          </div>
          <Separator />
        </>
      )}

      <div className="px-5 sm:px-6 py-8 sm:py-10 text-gray-900 dark:text-white">
        {children}
      </div>
    </section>
  );
};

export default Section;
