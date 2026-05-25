import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import GallerySlider from "../components/GallerySlider";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import kitchen1 from "../assets/kitchen/1.jpeg";
import kitchen2 from "../assets/kitchen/2.jpeg";
import kitchen3 from "../assets/kitchen/3.jpeg";
import kitchen4 from "../assets/kitchen/4.jpeg";
import kitchen5 from "../assets/kitchen/5.jpeg";
import kitchen6 from "../assets/kitchen/6.jpeg";

import living1 from "../assets/living/1.jpeg";
import living2 from "../assets/living/2.jpeg";
import living3 from "../assets/living/3.jpeg";

import bedroom1 from "../assets/bedroom/1.jpeg";
import bedroom2 from "../assets/bedroom/2.jpeg";
import bedroom3 from "../assets/bedroom/3.jpeg";

import realestate1 from "../assets/realestate/1.jpeg";
import realestate2 from "../assets/realestate/2.jpeg";
import realestate3 from "../assets/realestate/3.jpeg";

function Home() {
  const kitchenImages = [kitchen1, kitchen2, kitchen3, kitchen4, kitchen5, kitchen6];
  const realestateImages = [realestate1, realestate2, realestate3];
  const livingImages = [living1, living2, living3];
  const bedroomImages = [bedroom1, bedroom2, bedroom3];

  return (
    <>
      <Navbar />
      <Hero />

      <section id="realestate" className="py-20 px-5">
        <SectionTitle title="Real Estate Projects" />
        <GallerySlider images={realestateImages} />
      </section>

      <section id="kitchen" className="py-20 px-5 bg-[#111]">
        <SectionTitle title="Kitchen Design" />
        <GallerySlider images={kitchenImages} />
      </section>

      <section id="living" className="py-20 px-5">
        <SectionTitle title="Living Room Designs" />
        <GallerySlider images={livingImages} />
      </section>

      <section id="bedroom" className="py-20 px-5 bg-[#111]">
        <SectionTitle title="Bedroom Designs" />
        <GallerySlider images={bedroomImages} />
      </section>

      <Contact />
      <Footer />
    </>
  );
}

export default Home;

