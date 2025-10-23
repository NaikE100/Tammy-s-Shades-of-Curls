import { useState } from "react";
import { categoryFallbackImages } from "../data/products";

interface ProductImageProps {
  src?: string;
  alt: string;
  category: string;
  className?: string;
}

export function ProductImage({ src, alt, category, className = "" }: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src || categoryFallbackImages[category] || categoryFallbackImages["Treatment"]);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      // Try category fallback first
      const fallback = categoryFallbackImages[category] || categoryFallbackImages["Treatment"];
      if (imgSrc !== fallback) {
        setImgSrc(fallback);
        setHasError(true);
      }
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
}
