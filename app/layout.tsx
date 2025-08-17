import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";


import Sidebar from '@/components/ui/Sidebar';
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import ClientShwTime from '@/components/ClientShwoTime';
import TimeShowWrapper from '@/components/TimeShowWrapper';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const renderTime = Date.now();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="relative flex flex-col h-screen">
          <div className='grid container grid-cols-[300px_1fr] h-full mx-auto max-w-7xl pt-16 px-6'>
            <div className=' w-full h-full'>
              <Sidebar />
            </div>
            <main className="bg-gradient-to-bl h-full w-full ">
              {children}
            </main>
          </div>
          <Footer renderTime={renderTime} />
        </div>
      </body>
    </html>
  );
}
