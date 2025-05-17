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
  const propertyData = [
    {
      id: 1,
      name: "Kapakpoy Gold Cappadosia",
      location: "Ranjingan City, Indonesia",
      price: "$235,098",
      beds: 4,
      baths: 2,
      area: "790 sqft",
      image: "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg",
    },
    {
      id: 2,
      name: "Skyline Tower",
      location: "Downtown, Toronto",
      price: "$1,200,000",
      beds: 3,
      baths: 2,
      area: "1,200 sqft",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Ocean View Villa",
      location: "Malibu, California",
      price: "$3,500,000",
      beds: 5,
      baths: 4,
      area: "3,500 sqft",
      image:
        "https://images.unsplash.com/photo-1592595896616-c37162298647?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      name: "Modern Loft",
      location: "Brooklyn, New York",
      price: "$850,000",
      beds: 2,
      baths: 1,
      area: "1,000 sqft",
      image:
        "https://images.unsplash.com/photo-1627141234469-24711efb373c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Categories />
      <HomesForYou />
      <LocalExpertise />
      <Partners />
      <FeaturedProperties
        name="Featured Properties"
        properties={propertyData}
      />
      <DiscoverSection />
      <Testimonials />
      <Team />
    </div>
  );
}
