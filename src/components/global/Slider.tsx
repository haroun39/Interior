import React from "react";
import styles from "./Slider.module.css";

interface SliderProps {
  images: { src: string; alt: string }[];
  width: string;
  height: string;
  quantity: number;
  reverse?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  images,
  width,
  height,
  quantity,
  reverse,
}) => {
  const customStyles = {
    "--width": width,
    "--height": height,
    "--quantity": quantity,
  } as React.CSSProperties;

  return (
    <div
      className={`${styles.slider} ${reverse ? styles.reverse : ""}`}
      style={customStyles}
    >
      <div className={styles.list}>
        {images.map((image, index) => (
          <div
            className={styles.item}
            style={{ "--position": index + 1 } as React.CSSProperties}
            key={index}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
