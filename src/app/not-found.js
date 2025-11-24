"use client";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h2 className="text-4xl font-bold">404 - Not Found</h2>
      <p className="text-default-500">Could not find requested resource</p>
      <Button as={Link} href="/" color="primary" variant="flat">
        Return Home
      </Button>
    </div>
  );
}