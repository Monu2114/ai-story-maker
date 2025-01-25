import React from "react";
import { HeroUIProvider } from "@heroui/react";
import { ClerkProvider } from "@clerk/nextjs";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <HeroUIProvider>{children}</HeroUIProvider>
    </ClerkProvider>
  );
}

export default Provider;
