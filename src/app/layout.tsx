import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { Children } from "@/types/global";
import AppProviders from "@/components/AppProviders";
import Navbar from "@/components/navbar/Navbar";
import { Background } from "@/components/particles/background";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "بنویس",
};

const vazirFont = Vazirmatn({ subsets: ["arabic", "latin"] });
export default function RootLayout({ children }: Readonly<Children>) {
  return (
    <html lang="fa-IR" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazirFont.className} bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100`}
      >
        <AppProviders>
          <main className="max-w-sm mx-auto box-border">
            {children}
            <Navbar />
          </main>
          <Background />
        </AppProviders>
      </body>
    </html>
  );
}
