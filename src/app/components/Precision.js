"use client";
import ContactLens from "./ContactLens";
import OurProductsBtn from "./OurProductsBtn";
import styles from "./Precision.module.css";
import Image from "next/image";
const Precision = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.imageCont}>
        <Image
          src="/Rectangle8.svg"
          alt="Decorative rectangle background"
          width={785}
          height={673}
          className={styles.responsiveImage} // optional extra control
          priority
        />
        <div className={styles.square}></div>
        <div className={styles.Csquare}>
          <div className={styles.svgImg}>
            <Image
              src="/blueSvg.svg"
              alt="Decorative rectangle background"
              width={80}
              height={80}
              className={styles.responsiveImage2} // optional extra control
              priority
            />
          </div>
          <p>
            Hecht Contactlinsen: Providing Quality Vision Solutions Since 1990
          </p>
          <h2>
            1984
          </h2>
        </div>
      </div>
      <div className={styles.content}>
        <div>
            <h5>
                Precision
            </h5>
            <h2>
                Providing quality and tradition in <ContactLens/> customization for over 40 years.
            </h2>
            <p>
                Hecht Contactlinsen GmbH, a traditional company from the Black Forest, is committed to delivering precise and customized contact lenses to opticians. With a focus on quality and a history spanning over 50 years, we have become a trusted name in the industry.
            </p>
        </div>
        <OurProductsBtn/>
      </div>
    </div>
  );
};

export default Precision;
