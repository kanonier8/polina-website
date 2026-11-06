import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import CriminalPractice from "@/components/sections/CriminalPractice";
import MilitaryPractice from "@/components/sections/MilitaryPractice";
import Approach from "@/components/sections/Approach";
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <CriminalPractice />
        <MilitaryPractice />
        <Approach />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
