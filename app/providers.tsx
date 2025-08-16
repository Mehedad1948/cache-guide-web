"use client";
import { ThemeProviderProps } from 'next-themes';
import dynamic from "next/dynamic";

const HeroUIWrapper = dynamic(
  () => import("./HeroUIClientWrapper"),
  { ssr: false } // client-side only
);

export function Providers({ children, themeProps }: { children: React.ReactNode, themeProps?: ThemeProviderProps }) {
  return <HeroUIWrapper themeProps={themeProps}>{children}</HeroUIWrapper>;
}
