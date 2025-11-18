"use client";

import React from "react";

interface YouTubeEmbedProps {
    videoId: string; // just the ID, e.g., "dQw4w9WgXcQ"
    title?: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
    return (
        <div className="my-8 w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title || "YouTube video"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}
