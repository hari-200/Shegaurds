import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import BlogNavbar from "./Component/Navbar/Navbar";
import SheGuardSection from "./Component/Hero page/Hero page";
import SheGuards2025 from "./Component/Features/Feautures";
import Defi from "./Component/About/About";
import FAQ from "./Component/Faq/Faq";
import OurServices from "./Component/Services/Service";
import WhoCanApply from "./Component/Services/Apply";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Contact/Footer";
import QRSection from "./Component/Register/Registration";

const scrollToSection = (section) => {
  scroller.scrollTo(section, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    offset: -70, // Adjust for fixed navbar
  });
};

const App = () => {
  return (
    <Router>
      <BlogNavbar scrollToSection={scrollToSection} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SheGuardSection />
              <Element name="about">
              
              <SheGuards2025 />
              <Defi/>
                
              </Element>
              
              {/* Services Section */}
              <Element name="services">
                <OurServices />
                <WhoCanApply />
              </Element>

              {/* About Section */}
              

              
              

              {/* FAQ Section */}
              <Element name="faq">
                <FAQ />
              </Element>
              <QRSection/>

              {/* Contact Section */}
              <Element name="contact">
                <Contact />
              </Element>

              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

