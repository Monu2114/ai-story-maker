import React from "react";
import { HeroUIProvider } from "@heroui/react";

function Provider({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}

export default Provider;
