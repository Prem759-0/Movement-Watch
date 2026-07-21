"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";

interface CanvasSequenceProps {
  folderPath: string;
  frameCount: number;
  startFrame?: number;
  padLength?: number;
  fallbackImage: string;
  children: (scrollProgress: MotionValue<number>) => React.ReactNode;
  fallbackChildren?: React.ReactNode;
}

export default function CanvasSequence({
  folderPath,
  frameCount,
  startFrame = 1,
  padLength = 4,
  fallbackImage,
  children,
  fallbackChildren,
}: CanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = new Array(frameCount);

    const loadImages = async () => {
      const promises = Array.from({ length: frameCount }, (_, i) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          const frameNum = (i + startFrame).toString().padStart(padLength, "0");
          img.src = `${folderPath}/frame-${frameNum}.webp`;
          
          img.onload = async () => {
            try {
              await img.decode();
            } catch (e) {
              // Ignore decoding errors
            }
            loadedImages[i] = img;
            loadedCount++;
            if (loadedCount === frameCount) {
              setImages(loadedImages);
              setIsLoaded(true);
            }
            resolve();
          };
          img.onerror = () => resolve();
        });
      });
      await Promise.all(promises);
    };

    loadImages();
  }, [prefersReducedMotion, frameCount, startFrame, padLength, folderPath]);

  useEffect(() => {
    if (prefersReducedMotion || !isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let currentFrame = -1;

    const render = () => {
      const targetFrame = Math.round(frameIndex.get());
      
      if (targetFrame !== currentFrame && images[targetFrame]) {
        currentFrame = targetFrame;
        const img = images[targetFrame];
        
        const parent = canvas.parentElement;
        if (parent) {
          canvas.width = parent.clientWidth;
          canvas.height = parent.clientHeight;
          
          const isMobile = window.innerWidth < 768;
          const canvasRatio = canvas.width / canvas.height;
          const imgRatio = isMobile ? img.height / img.width : img.width / img.height;
          
          let drawWidth, drawHeight;
          if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
          } else {
            drawHeight = canvas.height;
            drawWidth = canvas.height * imgRatio;
          }

          const drawX = (canvas.width - drawWidth) / 2;
          const drawY = (canvas.height - drawHeight) / 2;

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          if (isMobile) {
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(Math.PI / 2);
            
            let rotatedDrawWidth, rotatedDrawHeight;
            const rotatedCanvasRatio = canvas.height / canvas.width;
            const originalImgRatio = img.width / img.height;
            
            if (rotatedCanvasRatio > originalImgRatio) {
              rotatedDrawWidth = canvas.height;
              rotatedDrawHeight = canvas.height / originalImgRatio;
            } else {
              rotatedDrawHeight = canvas.width;
              rotatedDrawWidth = canvas.width * originalImgRatio;
            }
            
            const rDrawX = -rotatedDrawWidth / 2;
            const rDrawY = -rotatedDrawHeight / 2;
            
            ctx.drawImage(img, rDrawX, rDrawY, rotatedDrawWidth, rotatedDrawHeight);
            ctx.restore();
          } else {
            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [frameIndex, images, isLoaded, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('${fallbackImage}')` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full">
          {fallbackChildren}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[350vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {!isLoaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black">
            <div className="w-12 h-12 border-4 border-white/10 border-t-accent rounded-full animate-spin mb-6" />
            <p className="font-sans text-xs tracking-[0.3em] text-accent-bright uppercase animate-pulse">
              Loading Sequence
            </p>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
        
        <div className="relative z-10 w-full h-full">
          {children(scrollYProgress)}
        </div>
      </div>
    </div>
  );
}
