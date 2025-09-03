"use client";
import styles from "./NumbersComp.module.css"
const NumbersComp = () => {
    return (
        <div className={`container-fluid ${styles.wrapper}`}>
            <div className={styles.imgCont}>
                <div className={styles.overlay}>
                    <div className={styles.txt}>
                        <div>
                            <h4>
                                4.5k+
                            </h4>
                            <p>
                                Happy Patients
                            </p>
                        </div>
                         <div>
                            <h4>
                                99%
                            </h4>
                            <p>
                                Customer Satisfaction
                            </p>
                        </div>
                         <div>
                            <h4>
                                75+
                            </h4>
                            <p>
                                Store  & Clinic
                            </p>
                        </div>
                         <div className={styles.endDiv}>
                            <h4>
                                200+
                            </h4>
                            <p>
                                Online Appointments
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NumbersComp;