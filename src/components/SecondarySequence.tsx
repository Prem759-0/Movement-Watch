"use client";

import CanvasSequence from "./CanvasSequence";
import SecondaryOverlays from "./SecondaryOverlays";

export default function SecondarySequence() {
  return (
    <CanvasSequence
      folderPath="/2-frames"
      frameCount={240}
      startFrame={1}
      padLength={4}
      fallbackImage="/2-frames/frame-0240.webp"
      fallbackChildren={
        <div className="text-center px-4 max-w-2xl mx-auto mt-24">
          <h2 className="font-serif text-4xl md:text-6xl text-offwhite mb-6">The Rose Gold Edition</h2>
          <p className="font-sans text-offwhite-muted mb-8">Mastery, revealed.</p>
        </div>
      }
    >
      {(scrollProgress) => <SecondaryOverlays scrollProgress={scrollProgress} />}
    </CanvasSequence>
  );
}
