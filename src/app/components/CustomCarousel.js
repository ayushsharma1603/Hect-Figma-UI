'use client';

import { useEffect, useState } from "react";
import styles from "./CustomCarousel.module.css";
import Image from "next/image";

const CustomCarousel = ({ slides }) => {

  const [isClient, setIsClient] = useState(false);

   // render nothing on server

  const [currentSlide, setCurrentSlide] = useState(0);
useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  const handleIndicatorClick = index => {
    setCurrentSlide(index);
  };
  return (
    <div className={styles.carouselWrapper}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, slideIndex) => (
          <div className={styles.slide} key={slideIndex}>
            {slide.map((box, boxIndex) => (
              <div className={styles.box} key={boxIndex}>
                <div className={styles.stars}>
                  <span>
                    <Image
                      src="/star.svg"
                      width={24}
                      height={24}
                      alt="Picture of the author"
                    />
                  </span>
                  <span>
                    <Image
                      src="/star.svg"
                      width={24}
                      height={24}
                      alt="Picture of the author"
                    />
                  </span>
                  <span>
                    <Image
                      src="/star.svg"
                      width={24}
                      height={24}
                      alt="Picture of the author"
                    />
                  </span>
                  <span>
                    <Image
                      src="/star.svg"
                      width={24}
                      height={24}
                      alt="Picture of the author"
                    />
                  </span>
                  <span>
                    <Image
                      src="/star.svg"
                      width={24}
                      height={24}
                      alt="Picture of the author"
                    />
                  </span>
                </div>
                <p className={styles.text}>{box.text}</p>
                <div className={styles.footer}>
                  <div className={styles.profile}>
                    <Image
                      src={box.pp}
                      width={60}
                      height={60}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <div className={styles.name}>{box.name}</div>
                    <div className={styles.title}>{box.title}</div>
                  </div>
                </div>
                <div className={styles.backGroundImg}>
                    <Image
                      src="/grp78.svg"
                      width={116}
                      height={89}
                      alt="Picture of the author"
                    />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
