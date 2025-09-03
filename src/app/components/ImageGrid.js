"use client";
import styles from "./ImageGrid.module.css";

import Image from "next/image";

const ImageGrid = () => {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];
  return (
    <div className={`container-fluid ${styles.wrapper}`}>
      <div className={styles.text}>
        <h3>We’re Social</h3>
        <h2>instagram feed</h2>
      </div>
      <div className="container ">
        {/* First Row */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6 col-lg-5">
            <div className={`${styles.imageWrapper} rounded overflow-hidden`}>
              <Image
                src={images[0]}
                alt="Image 1"
                width={500}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className={styles.zoom}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`${styles.imageWrapper} ${styles.imageWrapper2} rounded overflow-hidden`}>
              <Image
                src={images[1]}
                alt="Image 2"
                width={500}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className={styles.zoom}
              />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className={`${styles.imageWrapper} ${styles.imageWrapper3} rounded overflow-hidden`}>
              <Image
                src={images[2]}
                alt="Image 3"
                width={500}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className={styles.zoom}
              />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className={`row g-4 ${styles.row2}`}>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`${styles.imageWrapper} rounded overflow-hidden`}>
              <Image
                src={images[3]}
                alt="Image 4"
                width={500}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className={styles.zoom}
              />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className={`${styles.imageWrapper} ${styles.imageWrapper4} rounded overflow-hidden`}>
              <Image
                src={images[4]}
                alt="Image 5"
                width={500}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className={styles.zoom}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`${styles.imageWrapper} ${styles.imageWrapper5} rounded overflow-hidden`}>
              <Image
                src={images[5]}
                alt="Image 6"
                width={500}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className={styles.zoom}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
