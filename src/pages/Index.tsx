import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Courses from "@/components/portfolio/Courses";
import ValueDelivery from "@/components/portfolio/ValueDelivery";
import Services from "@/components/portfolio/Services";
import Cases from "@/components/portfolio/Cases";
import TechStack from "@/components/portfolio/TechStack";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Courses />
      <ValueDelivery />
      <Services />
      <Cases />
      <TechStack />
      <Contact />
    </main>
  );
};

export default Index;
