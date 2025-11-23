"use client";
import { HeroUIProvider } from "@heroui/react";
export default ({ children }) => (
    <HeroUIProvider>
        {children}
    </HeroUIProvider>
)