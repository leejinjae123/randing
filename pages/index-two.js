import Head from "next/head";
import TestimonialSliderTwo from "../components/common/sliders/testimonial/testimonial-slider-two";
import TextSliderOne from "../components/common/sliders/text/text-slider-one";
import VideoSectionThree from "../components/common/video/video-section-three";
import FeatureSection from "../components/home-two/feature-section";
import ShoppingGrid from "../components/home-two/shopping-grid";
import HeroThumbSection from "../components/home-two/hero-thumb-section";
import HomeTwoHeroSection from "../components/home-two/home-two-hero-section";
import TradingSection from "../components/home-two/trading-section";
import TradingSectionTwo from "../components/home-two/trading-section-two";

export default function IndexTwo() {
	return (
		<>
			<Head>
				<title>fugu - index o2</title>
			</Head>
			<HomeTwoHeroSection />
			<HeroThumbSection />
			<FeatureSection />
			<TextSliderOne />
			<VideoSectionThree />
			<TradingSection />
			<ShoppingGrid />
			<TradingSectionTwo />
			<TestimonialSliderTwo />
		</>
	);
}
export async function getStaticProps() {
	return { props: { header: "two", footer: "two" } };
}
