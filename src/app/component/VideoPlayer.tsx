"use client";
import React, { useState, useRef, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export default function VideoPlayer() {
  const videoId = "dQw4w9WgXcQ"; // 👈 Replace with your YouTube video ID
  const playerRef = useRef<YT.Player | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [markedComplete, setMarkedComplete] = useState<boolean>(false);

  // Restore last saved time on mount
  useEffect(() => {
    const savedTime = localStorage.getItem("video-progress");
    if (savedTime) setCurrentTime(parseFloat(savedTime));
  }, []);

  // Player ready event
  const onReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
    if (currentTime > 0) {
      playerRef.current.seekTo(currentTime, true);
    }
  };

  // Handle player state changes
  const onStateChange: YouTubeProps["onStateChange"] = (event) => {
    const player = playerRef.current;
    if (!player) return;

    if (event.data === window.YT.PlayerState.PLAYING) {
      // Start tracking progress
      intervalRef.current = setInterval(() => {
        const time = player.getCurrentTime();
        const duration = player.getDuration();

        localStorage.setItem("video-progress", time.toString());
        setCurrentTime(time);

        // 🔔 Trigger when 30 seconds are left
        if (!markedComplete && duration - time <= 30) {
          setMarkedComplete(true);
          handleVideoAboutToEnd();
        }
      }, 2000);
    } else {
      // Stop tracking when paused or ended
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  };

  // Custom: Called when 30s left
  const handleVideoAboutToEnd = () => {
    console.log("⚡ Video will end soon — mark as complete!");
    // 👉 You can also call API here to mark complete:
    // await fetch("/api/mark-complete", { method: "POST", body: JSON.stringify({ videoId }) });
  };

  // Custom controls
  const handlePlay = () => playerRef.current?.playVideo();
  const handlePause = () => playerRef.current?.pauseVideo();
  const handleSkip = (seconds: number) => {
    const player = playerRef.current;
    if (!player) return;
    const newTime = player.getCurrentTime() + seconds;
    player.seekTo(newTime, true);
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      controls: 0, // Hide default controls
    },
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        onStateChange={onStateChange}
      />

      <div className="flex gap-3">
        <button
          onClick={handlePlay}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          ▶️ Play
        </button>
        <button
          onClick={handlePause}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
        >
          ⏸ Pause
        </button>
        <button
          onClick={() => handleSkip(-10)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          ⏪ -10s
        </button>
        <button
          onClick={() => handleSkip(10)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          ⏩ +10s
        </button>
      </div>

      {markedComplete && (
        <p className="text-green-600 font-semibold mt-2">
          ✅ Marked as complete (30s left)
        </p>
      )}
    </div>
  );
}
