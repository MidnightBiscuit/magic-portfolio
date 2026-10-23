"use client";

import { Media, MasonryGrid } from "@once-ui-system/core";

interface GalleryViewProps {
  images: string[];
}

export default function GalleryView({ images }: GalleryViewProps) {
  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {images.map((src, index) => (
        <Media
          enlarge
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          key={index}
          radius="m"
          src={src}
          alt={`Photo ${index + 1}`}
        />
      ))}
    </MasonryGrid>
  );
}
