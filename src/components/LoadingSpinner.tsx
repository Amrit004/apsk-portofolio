"use client";

import { useState, useEffect } from "react";

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030014]"
    >
      <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
    </div>
  );
}
