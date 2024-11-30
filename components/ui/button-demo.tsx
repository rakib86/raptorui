"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export interface ButtonDemoProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  initialText?: string;
  onClick?: () => void;
}

export default function ButtonDemo({
  variant = 'default',
  size = 'default',
  initialText = 'RaptorUI Button',
  onClick
}: ButtonDemoProps) {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    onClick?.();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        variant={variant}
        size={size}
        onClick={handleClick}
        className="relative overflow-hidden group"
      >
        <span className="relative z-10">{initialText}</span>
        <div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 
                     group-hover:opacity-20 transition-opacity duration-300"
        />
      </Button>
      {clickCount > 0 && (
        <p className="text-sm text-muted-foreground">
          Button clicked {clickCount} times
        </p>
      )}
    </div>
  );
}
