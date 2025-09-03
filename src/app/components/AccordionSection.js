"use client";
import { useState } from "react";
import styles from "./AccordionSection.module.css";

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // track open accordion

  const accordionItems = [
    {
      title: "What types of contact lenses do you offer?",
      content:
        "We offer a wide range of customized contact lenses, including spherical lenses, toric lenses, multifocal lenses, and special lenses tailored to individual needs.",
    },
    {
      title: "How can I order customized contact lenses for my patients?",
      content:
        "We offer a wide range of customized contact lenses, including spherical lenses, toric lenses, multifocal lenses, and special lenses tailored to individual needs.",
    },
    {
      title: "Do you provide resources and support for opticians?",
      content:
        "We offer a wide range of customized contact lenses, including spherical lenses, toric lenses, multifocal lenses, and special lenses tailored to individual needs.",
    },
    {
      title: "How do I care for my contact lenses?",
      content:
        "We offer a wide range of customized contact lenses, including spherical lenses, toric lenses, multifocal lenses, and special lenses tailored to individual needs.",
    },
    {
      title: "Can I wear contact lenses if I have astigmatism?",
      content:
        "We offer a wide range of customized contact lenses, including spherical lenses, toric lenses, multifocal lenses, and special lenses tailored to individual needs.",
    },
    {
      title: "Are your lenses suitable for children?",
      content:
        "We offer a wide range of customized contact lenses, including spherical lenses, toric lenses, multifocal lenses, and special lenses tailored to individual needs.",
    }
  ];

  return (
    <div className={`container-fluid ${styles.wrapper}`}>
      <div className={`container ${styles.accordionContainer}`}>
        <h1>
            FAQs
        </h1>
        <p>
            Answers to Your Most Common Questions about Hecht Contactlinsen Products and Services
        </p>
        <div className={`accordion ${styles.container}`}>
          {accordionItems.map((item, index) => (
            <div className={`accordion-item ${styles.item}`} key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button  ${
                    openIndex === index ? "" : "collapsed"
                  } ${styles.accordionBtn}`}
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                >
                  {item.title}
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${
                  openIndex === index ? "show" : ""
                } ${styles.accordionBodyContainer}`}
              >
                <div className={`accordion-body ${styles.accordionBody}`}>{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
