"use client";
import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";
export default ({ children }) => {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push}>
      {children}
    </HeroUIProvider>
  );
}