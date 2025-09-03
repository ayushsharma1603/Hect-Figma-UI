"use client";
import ContactLens from "./ContactLens";
import styles from "./AccuracySection.module.css";
import Image from "next/image";

const AccuracySection = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.content}>
        <div>
          <h5>Accuracy</h5>
          <h2>Discover the Impressive Results of Our Customized</h2>
          <div>
            <ContactLens />
          </div>
        </div>
        <p>
          Our company has achieved remarkable success in delivering effective,
          tailored, and innovative contact lenses to opticians, ensuring that we
          meet the diverse needs of their patients and provide top-notch quality
          in every aspect of our products and services.
        </p>
      </div>
      <div className={styles.imageCont}>
        <Image
          src="/Rectangle22.svg"
          alt="Decorative rectangle background"
          width={1600}
          height={783}
          className={styles.responsiveImage} // optional extra control
          priority
        />
        <div>
            <span>
                <h1>
                    50% Increase
                </h1>
                <p>
                    in Optician Satisfaction with Our Customized Contact Lenses
                </p>
            </span>
            <span>
                <h1>
                    50% Increase
                </h1>
                <p>
                    in Customer Comfort and Vision Clarity with Our Lenses
                </p>
            </span>
        </div>
      </div>
    </div>
  );
};

export default AccuracySection;
