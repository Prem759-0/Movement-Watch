"use client";

import CanvasSequence from "./CanvasSequence";
import TertiaryOverlays from "./TertiaryOverlays";

export default function TertiarySequence() {
  return (
    <CanvasSequence
      folderPath="/4-frames"
      frameCount={240}
      startFrame={1}
      padLength={4}
      fallbackImage="/4-frames/frame-0240.webp"
      fallbackChildren={
        <div className="text-center px-4 max-w-2xl mx-auto mt-24">
          <h2 className="font-serif text-4xl md:text-6xl text-offwhite mb-6">A New Dimension</h2>
          <p className="font-sans text-offwhite-muted mb-8">Unparalleled Depth.</p>
        </div>
      }
    >
      {(scrollProgress) => <TertiaryOverlays scrollProgress={scrollProgress} />}
    </CanvasSequence>
  );
}
