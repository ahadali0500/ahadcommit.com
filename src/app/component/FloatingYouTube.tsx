"use client";

import React from "react";
import { FaYoutube } from "react-icons/fa";

interface FloatingYouTubeProps {
    videoUrl: string;
    position?: "left" | "right"; // which side to float
}

export default function FloatingYouTube({ videoUrl, position = "right" }: FloatingYouTubeProps) {
    return (
        <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        fixed top-1/2 transform -translate-y-1/2 z-50 flex items-center gap-3 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform
        ${position === "right" ? "right-4" : "left-4"}
        animate-bounce
      `}
        >
            <FaYoutube size={24} />
            <span className="font-semibold hidden md:inline">Watch Tutorial</span>
        </a>
    );
}
