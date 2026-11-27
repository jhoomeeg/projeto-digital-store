import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import "./Gallery.css";

const Gallery = ({ images = [], className = "", width, height, radius = "4px", showThumbs = false }) => {
  const [index, setIndex] = useState(0);
  const sizeStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };
  if (!images.length) return null;

  return (
    <div className={`gallery ${className}`}>
      <div
        className="gallery-stage"
        style={{ ...sizeStyle, borderRadius: radius }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" && index > 0) setIndex(index - 1);
          if (event.key === "ArrowRight" && index < images.length - 1) setIndex(index + 1);
        }}
        tabIndex={0}
        role="region"
        aria-label="Galeria de imagens"
      >
        <div
          className="gallery-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image, imageIndex) => (
            <div className="gallery-slide" key={image.src}>
              <img
                src={image.src}
                alt={`Slide ${imageIndex + 1}`}
                style={{ borderRadius: radius }}
              />
            </div>
          ))}
        </div>
        <button type="button" className="gallery-arrow gallery-arrow-left" disabled={index === 0} onClick={() => setIndex(index - 1)} aria-label="Imagem anterior">
          <img src={arrowLeft} alt="" />
        </button>
        <button type="button" className="gallery-arrow gallery-arrow-right" disabled={index === images.length - 1} onClick={() => setIndex(index + 1)} aria-label="Próxima imagem">
          <img src={arrowRight} alt="" />
        </button>
      </div>
      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((image, imageIndex) => (
            <button type="button" key={image.src} className={index === imageIndex ? "selected" : ""} onClick={() => setIndex(imageIndex)} aria-label={`Ver imagem ${imageIndex + 1}`}>
              <img src={image.src} alt="" style={{ borderRadius: radius }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
