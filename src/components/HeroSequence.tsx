"use client";

import CanvasSequence from "./CanvasSequence";
import NarrativeOverlays from "./NarrativeOverlays";

export default function HeroSequence() {
  return (
    <CanvasSequence
      folderPath="/1-frames"
      frameCount={238}
      startFrame={3}
      padLength={4}
      fallbackImage="/1-frames/frame-0240.webp"
      fallbackChildren={
        <div className="text-center px-4 max-w-2xl mx-auto mt-24">
          <h1 className="font-serif text-4xl md:text-6xl text-offwhite mb-6">Astronomia Luxe</h1>
          <p className="font-sans text-offwhite-muted mb-8">Assembled by one watchmaker, start to finish.</p>
          <a href="#reserve" className="inline-block pointer-events-auto text-accent uppercase tracking-[0.2em] text-sm border-b border-accent pb-1 hover:text-white hover:border-white transition-colors">
            Reserve yours
          </a>
        </div>
      }
    >
      {(scrollProgress) => <NarrativeOverlays scrollProgress={scrollProgress} />}
    </CanvasSequence>
  );
}
