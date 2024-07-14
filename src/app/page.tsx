import HeroHeder from "@/components/global/HeroHeder";
import Navbar from "@/components/global/Navbar";
import Section1 from "@/components/global/Section1";
import Section2 from "@/components/global/Section2";
import Section3 from "@/components/global/Section3";
import Section4 from "@/components/global/Section4";
import Section5 from "@/components/global/Section5";
import Section6 from "@/components/global/Section6";
import Section7 from "@/components/global/Section7";
import Section8 from "@/components/global/Section8";
import Footer from "@/components/global/Footer";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <HeroHeder />
      </header>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </div>
  );
}
