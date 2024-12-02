import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ src, alt, placeholderSrc, id, className }) => (
  <LazyLoadImage
    src={src} // Actual image
    alt={alt} // Alt text
    effect="blur" // Lazy load effect (e.g., blur, opacity)
    placeholderSrc={placeholderSrc} // Optional placeholder image
    className={className}
  />
);

export default LazyImage;
