"use client";
import { useEffect } from "react";
import { Button } from "@heroui/react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="text-default-500">{error.message || "An unexpected error occurred."}</p>
      <Button 
        color="primary" 
        onPress={() => reset()} // Attempt to recover by re-rendering the segment
      >
        Try again
      </Button>
    </div>
  );
}