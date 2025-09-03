"use client";
import Image from "next/image";
import styles from "./page.module.css";
import NavbarSection from "./components/NavbarSection";
import NumbersComp from "./components/NumbersComp";
import ContactLens from "./components/ContactLens";
import Precision from "./components/Precision";
import EnhanceSection from "./components/EnhanceSection";
import AccuracySection from "./components/AccuracySection";
import DiscoverSection from "./components/DiscoverSection";
import ImageGrid from "./components/ImageGrid";
import ExploreSection from "./components/ExploreSection";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";
import AccordionSection from "./components/AccordionSection";
import AboutUs from "./components/AboutUs";
import CustomizedSection from "./components/CustomizedSection";
import CarouselSection from "./components/CarouselSection";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <>
    <NavbarSection/>
    <NumbersComp/>
    <AboutUs/>
    <CustomizedSection/>
    <Precision/>
    <EnhanceSection/>
    <AccuracySection/>
    <DiscoverSection/>
    <ImageGrid/>
    <CarouselSection/>
    <ExploreSection/>
    <AccordionSection/>
    <FormSection/>
    <Footer/>
    </>
  );
}
