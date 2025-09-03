"use client";
import ContactLens from "./ContactLens";
import styles from "./CustomizedSection.module.css";
import Image from "next/image";

const CustomizedSection = () => {
  return (
    <div className={`container-fluid ${styles.wrapper}`}>
      <div className={`container`}>
        <div className={styles.content}>
          <div>
            <h5>Customized</h5>
            <h2>Enhance Your Vision with Personalized </h2>
            <div>
              <ContactLens />
            </div>
          </div>
          <p>
            Experience the difference of personalized contact lenses today -
            customized for the perfect fit, exceptional comfort, and
            crystal-clear vision with advanced technology and precise
            measurements.
          </p>
        </div>
        <div className={`${styles.cards}`}>
          <div className={`${styles.card} ${styles.card1}`}>
            <button>
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.384 26.8481C10.5327 27.0102 10.7397 27.1066 10.9595 27.1161C11.1793 27.1256 11.3938 27.0474 11.5559 26.8987L25.9724 13.6753L25.6529 21.0499C25.6434 21.2699 25.7217 21.4848 25.8706 21.6471C26.0195 21.8094 26.2267 21.9059 26.4468 21.9154C26.6668 21.9249 26.8816 21.8466 27.0439 21.6977C27.2063 21.5488 27.3028 21.3416 27.3123 21.1215L27.717 11.7465C27.7218 11.6375 27.7051 11.5287 27.6678 11.4262C27.6305 11.3236 27.5734 11.2295 27.4996 11.1491C27.4259 11.0687 27.337 11.0036 27.2381 10.9576C27.1391 10.9116 27.0321 10.8856 26.9231 10.881L17.5481 10.4763C17.4392 10.4716 17.3303 10.4884 17.2279 10.5258C17.1254 10.5631 17.0313 10.6203 16.9509 10.694C16.7886 10.8429 16.6921 11.0501 16.6826 11.2702C16.6731 11.4902 16.7514 11.7051 16.9003 11.8674C17.0492 12.0297 17.2564 12.1262 17.4765 12.1357L24.8511 12.4529L10.4346 25.6762C10.2725 25.8249 10.1761 26.0319 10.1666 26.2517C10.1571 26.4714 10.2354 26.686 10.384 26.8481Z"
                  fill="white"
                />
              </svg>
            </button>
            <div className={styles.text}>
              <h1>Superior Comfort and Optimal <br/> Vision</h1>
              <p>
                Our contact lenses are crafted with utmost care to ensure
                maximum comfort and clarity. Say goodbye to dryness, irritation,
                and compromised vision.
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.card2}`}>
            <button>
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.384 26.8481C10.5327 27.0102 10.7397 27.1066 10.9595 27.1161C11.1793 27.1256 11.3938 27.0474 11.5559 26.8987L25.9724 13.6753L25.6529 21.0499C25.6434 21.2699 25.7217 21.4848 25.8706 21.6471C26.0195 21.8094 26.2267 21.9059 26.4468 21.9154C26.6668 21.9249 26.8816 21.8466 27.0439 21.6977C27.2063 21.5488 27.3028 21.3416 27.3123 21.1215L27.717 11.7465C27.7218 11.6375 27.7051 11.5287 27.6678 11.4262C27.6305 11.3236 27.5734 11.2295 27.4996 11.1491C27.4259 11.0687 27.337 11.0036 27.2381 10.9576C27.1391 10.9116 27.0321 10.8856 26.9231 10.881L17.5481 10.4763C17.4392 10.4716 17.3303 10.4884 17.2279 10.5258C17.1254 10.5631 17.0313 10.6203 16.9509 10.694C16.7886 10.8429 16.6921 11.0501 16.6826 11.2702C16.6731 11.4902 16.7514 11.7051 16.9003 11.8674C17.0492 12.0297 17.2564 12.1262 17.4765 12.1357L24.8511 12.4529L10.4346 25.6762C10.2725 25.8249 10.1761 26.0319 10.1666 26.2517C10.1571 26.4714 10.2354 26.686 10.384 26.8481Z"
                  fill="white"
                />
              </svg>
            </button>
            <div className={styles.text}>
              <h1>Seamless Integration for Active Lifestyles</h1>
              <p>
                Designed for those with active lifestyles, our contact lenses provide a secure and stable fit, allowing you to enjoy your favorite activities without any restrictions.
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.card3}`}>
            <button>
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.384 26.8481C10.5327 27.0102 10.7397 27.1066 10.9595 27.1161C11.1793 27.1256 11.3938 27.0474 11.5559 26.8987L25.9724 13.6753L25.6529 21.0499C25.6434 21.2699 25.7217 21.4848 25.8706 21.6471C26.0195 21.8094 26.2267 21.9059 26.4468 21.9154C26.6668 21.9249 26.8816 21.8466 27.0439 21.6977C27.2063 21.5488 27.3028 21.3416 27.3123 21.1215L27.717 11.7465C27.7218 11.6375 27.7051 11.5287 27.6678 11.4262C27.6305 11.3236 27.5734 11.2295 27.4996 11.1491C27.4259 11.0687 27.337 11.0036 27.2381 10.9576C27.1391 10.9116 27.0321 10.8856 26.9231 10.881L17.5481 10.4763C17.4392 10.4716 17.3303 10.4884 17.2279 10.5258C17.1254 10.5631 17.0313 10.6203 16.9509 10.694C16.7886 10.8429 16.6921 11.0501 16.6826 11.2702C16.6731 11.4902 16.7514 11.7051 16.9003 11.8674C17.0492 12.0297 17.2564 12.1262 17.4765 12.1357L24.8511 12.4529L10.4346 25.6762C10.2725 25.8249 10.1761 26.0319 10.1666 26.2517C10.1571 26.4714 10.2354 26.686 10.384 26.8481Z"
                  fill="white"
                />
              </svg>
            </button>
            <div className={styles.text}>
              <h1>Easy Maintenance and Long-Lasting Durability</h1>
              <p>
                With our contact lenses, you can enjoy hassle-free maintenance and extended usage. Experience lenses that are built to last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizedSection;
