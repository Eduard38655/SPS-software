import AboutUS from "./components/AboutUs";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileNavBar";
import NavigationBar from "./components/NavigationBar";
import NewsSection from "./components/NewsSection";
import OurValues from "./components/OurValues";
import OurValuesSction2 from "./components/OurValuesPart2";
import Products from "./components/Product";
import RequirementsDGII from "./components/RequirementsDGII";
import SPSMap from "./components/SPSMap";
import WhatsApp from "./components/WhatsApp";


function App() {
  return (
    <main>
      <MobileMenu />
      <NavigationBar />
      <AboutUS />
      <OurValues />
      <OurValuesSction2 />
      <Products />
      <WhatsApp />
      <RequirementsDGII />
      <NewsSection />
      <SPSMap />
      <Footer />
    </main>
  );
}

export default App;
