import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jeegar Ranpura",
  description: "Full Stack Developer || Mern Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30 `}
      >
        <ThemeProvider
          attribute="class" // This tells next-themes to use the .dark class
          defaultTheme="system" // This will still sync with the browser initially
          enableSystem={true}
          disableTransitionOnChange
        >
          <div className="">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
