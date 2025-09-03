"use client";
import ContactLens from "./ContactLens";
import OurProductsBtn from "./OurProductsBtn";
import styles from "./EnhanceSection.module.css";
import Image from "next/image";

const EnhanceSection = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.content}>
        <div>
          <h5>Enhance</h5>
          <h2>
            Discover the Benefits of Customized <ContactLens/>
          </h2>
          <p>
            Experience improved vision and comfort with our customized contact lenses. Designed specifically for opticians and their clients, our lenses offer a perfect fit and optimal visual performance.
          </p>
        </div>
        <OurProductsBtn />
      </div>
      <div className={styles.imageCont}>
        <Image
          src="/Rectangle82.svg"
          alt="Decorative rectangle background"
          width={785}
          height={673}
          className={styles.responsiveImage} // optional extra control
          priority
        />
        <div className={styles.square}></div>
      </div>
    </div>
  );
};

export default EnhanceSection;
