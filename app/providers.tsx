// app/providers.tsx
"use client";

import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";

// Only if using TypeScript
declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {

  return <HeroUIProvider >{children}</HeroUIProvider>;
}