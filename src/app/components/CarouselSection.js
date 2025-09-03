'use client';

import styles from "./CarouselSection.module.css";
import CustomCarousel from "./CustomCarousel";

const CarouselSection = () => {
    
const testimonialSlides = [
  [
    {
      name: "JOHN M.",
      title: "Optometrist",
      text: "Hecht Contactlinsen’s custom lenses have transformed my practice. Our patients love the comfort and clarity they provide!",
      stars: 5,
      pp:"/pp1.png"
    },
    {
      name: "SARAH L.",
      title: "Eye Care Professional",
      text: "The precision and quality of Hecht lenses are unmatched. We've seen a big increase in patient satisfaction.",
      stars: 5,
      pp:"/pp2.png"
    },
    {
      name: "DR. MARKUS K.",
      title: "Optician",
      text: "Partnering with Hecht was the best decision. Their solutions made a real difference for our clients.",
      stars: 5,
      pp:"/pp3.png"
    },
  ],
   [
    {
      name: "JOHN M.",
      title: "Optometrist",
      text: "Hecht Contactlinsen’s custom lenses have transformed my practice. Our patients love the comfort and clarity they provide!",
      stars: 5,
      pp:"/pp1.png"
    },
    {
      name: "SARAH L.",
      title: "Eye Care Professional",
      text: "The precision and quality of Hecht lenses are unmatched. We've seen a big increase in patient satisfaction.",
      stars: 5,
      pp:"/pp2.png"
    },
    {
      name: "DR. MARKUS K.",
      title: "Optician",
      text: "Partnering with Hecht was the best decision. Their solutions made a real difference for our clients.",
      stars: 5,
      pp:"/pp3.png"
    },
  ],
 
   [
    {
      name: "JOHN M.",
      title: "Optometrist",
      text: "Hecht Contactlinsen’s custom lenses have transformed my practice. Our patients love the comfort and clarity they provide!",
      stars: 5,
      pp:"/pp1.png"
    },
    {
      name: "SARAH L.",
      title: "Eye Care Professional",
      text: "The precision and quality of Hecht lenses are unmatched. We've seen a big increase in patient satisfaction.",
      stars: 5,
      pp:"/pp2.png"
    },
    {
      name: "DR. MARKUS K.",
      title: "Optician",
      text: "Partnering with Hecht was the best decision. Their solutions made a real difference for our clients.",
      stars: 5,
      pp:"/pp3.png"
    },
  ],
 
   [
    {
      name: "JOHN M.",
      title: "Optometrist",
      text: "Hecht Contactlinsen’s custom lenses have transformed my practice. Our patients love the comfort and clarity they provide!",
      stars: 5,
      pp:"/pp1.png"
    },
    {
      name: "SARAH L.",
      title: "Eye Care Professional",
      text: "The precision and quality of Hecht lenses are unmatched. We've seen a big increase in patient satisfaction.",
      stars: 5,
      pp:"/pp2.png"
    },
    {
      name: "DR. MARKUS K.",
      title: "Optician",
      text: "Partnering with Hecht was the best decision. Their solutions made a real difference for our clients.",
      stars: 5,
      pp:"/pp3.png"
    },
  ],
 
];
  return (
    <div className={`container-fluid ${styles.wrapper}`}>
      <div className={`container ${styles.content}`}>
        <div className={`${styles.imageContainer}`}></div>
        <div className={styles.textContainer}>
          <h1>Over 2,500 Satisfied Customers Trust Us</h1>
          <p>
            Join the thousands of satisfied opticians who rely on Hecht
            Contactlinsen for superior quality and unmatched comfort.
          </p>
        </div>
      </div>
      <CustomCarousel slides={testimonialSlides} />
    </div>
  );
};

export default CarouselSection;
