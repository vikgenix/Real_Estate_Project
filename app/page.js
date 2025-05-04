import Navbar from "./webcomponents/Navbar";
import HeroSection from "./webcomponents/HeroSection";
import LocalExpertise from "./webcomponents/LocalExpertise";
import Partners from "./webcomponents/Partners.js";
import FeaturedProperties from "./webcomponents/FeaturedProperties";
import Testimonials from "./webcomponents/Testimonials";
import Team from "./webcomponents/Team";
import Footer from "./webcomponents/Footer";
import Categories from "./webcomponents/Categories";
import HomesForYou from "./webcomponents/HomesForYou";
import DiscoverSection from "./webcomponents/DiscoverSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Categories />
      <HomesForYou />
      <LocalExpertise />
      <Partners />
      <FeaturedProperties name="Featured Properties" />
      <DiscoverSection />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
}
