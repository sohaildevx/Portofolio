import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/layouts/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sohail Shaikh - Full Stack Developer",
  description: "Portfolio of Sohail Shaikh, a passionate Full Stack Developer specializing in modern web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0YQGY4DLN7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0YQGY4DLN7');
        `}
      </Script>
      <body className={manrope.className}>
        <ThemeProvider
         attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
