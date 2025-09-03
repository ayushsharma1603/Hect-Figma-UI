"use client";
import { useState } from "react";
import styles from "./FormSection.module.css";
const FormSection = () => {
  const [message, setMessage] = useState("");
  return (
    <div className={`container-fluid ${styles.wrapper}`}>
      <div className={styles.overlay}>
        <form action="#" className={`${styles.formContainer}`}>
          <h1>Submit your request</h1>
          <div>
            <div className={styles.inputCont}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Contact No." />
            </div>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
