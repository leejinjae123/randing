import Head from "next/head";
import FaqHomeOne from "../components/common/faq/faq-home-one";
import FeatureSectionTwo from "../components/common/feature/feature-section-two";
import ClientSliderOne from "../components/common/sliders/client/client-slider-one";
import ContentWithPhotoSection from "../components/home/content-with-photo-section";
import CtaHomeOne from "../components/home/cta-home-one";
import HeroSection from "../components/home/hero-section";
import FeatureSectionThree from "../components/common/feature/feature-section-three";
import ShoppingGrid from "../components/home-two/shopping-grid";
import ArtWorkSection from "../components/home-four/art-work-section";
import AboutSection from "../components/home-four/about-section";
import FloatingSection from "../components/common/feature/floation-section";
import VideoComponent from "../components/common/video/video-component";
import { useEffect, useRef, useState } from "react";
import { Element, Events, Link, scroller } from "react-scroll";
import ViewPort from "../components/viewport/view-port";

const sections = [
	{ name: "section0", component: AboutSection },
	{ name: "section1", component: ArtWorkSection },
	{ name: "section2", component: AboutSection },
	{ name: "section3", component: ArtWorkSection },
	{ name: "section4", component: AboutSection },
	{ name: "section5", component: ArtWorkSection },
  ];

export default function Home() {
	const [showVideoComponent, setShowVideoComponent] = useState(true);

	useEffect(() => {
		function handleScroll(e) {
		  if (e.deltaY > 0 && showVideoComponent) {
			e.preventDefault();
			scrollToHeroSection();
		  }
		}
	  
		function handleTouchStart(e) {
		  if (showVideoComponent) {
			e.preventDefault();
			scrollToHeroSection();
		  }
		}
	  
		window.addEventListener('wheel', handleScroll, { passive: false });
		window.addEventListener('touchstart', handleTouchStart, { passive: false });
	  
		return () => {
		  window.removeEventListener('wheel', handleScroll);
		  window.removeEventListener('touchstart', handleTouchStart);
		};
	  }, [showVideoComponent]);
	
	  const scrollToHeroSection = () => {
		scroller.scrollTo('heroSection', {
		  duration: 5,
		  smooth: 'easeInOutQuart',
		});
		setTimeout(() => {
			setShowVideoComponent(false);
		  }, 1000)
	  };

  return (
    <>
      <Head>
        <title>fugu - index -01</title>
      </Head>
	  {showVideoComponent && <VideoComponent />}
      <Element name="heroSection">
        <HeroSection />
      </Element>
      <ContentWithPhotoSection />
      <FloatingSection />
      <FeatureSectionTwo />
      <FeatureSectionThree />
      <ShoppingGrid />
	  {sections.map((section, index) => (
        <Element key={section.name} name={section.name}>
          <ViewPort>
            <section.component />
          </ViewPort>
        </Element>
      ))}
      <Link to={sections[0].name} />
      <FaqHomeOne />
      <ClientSliderOne />
      <CtaHomeOne />
	  <Link to="heroSection" />
    </>
  );
}

export async function getStaticProps() {
  return { props: { header: "one", footer: "one" } };
}
