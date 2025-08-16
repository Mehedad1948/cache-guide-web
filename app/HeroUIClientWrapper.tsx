"use client";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProviderProps } from 'next-themes';
import { useRouter } from "next/navigation";

export default function HeroUIClientWrapper({ children, themeProps }: { children: React.ReactNode, themeProps?: ThemeProviderProps }) {
    const router = useRouter();
    return <HeroUIProvider {...themeProps} navigate={(path) => router.push(path)}>{children}</HeroUIProvider>;
}