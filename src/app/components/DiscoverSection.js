"use client";
import styles from "./DiscoverSection.module.css";
import OurProductsBtn from "./OurProductsBtn";
const DiscoverSection = () => {
  return (
    <div className={`container-fluid ${styles.wrapper}`}>
      <div className={styles.imgCont}>
        <div className={styles.overlay}>
          <div className={styles.txt}>
            <h1>Discover Our Amazing</h1>
            <div>
              <span className={styles.ContactContainer}>Contact Lenses</span>
            </div>
            <p>
              Experience the perfect fit and clarity with our customized contact
              lenses.
            </p>
            <OurProductsBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
