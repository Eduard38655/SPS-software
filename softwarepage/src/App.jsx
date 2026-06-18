import NavigationBar from "./components/NavigationBar";
import AboutUS from "./components/AboutUs";
import RequirementsDGII from "./components/RequirementsDGII";
import NewsSection from "./components/NewsSection";
import OurValues from "./components/OurValues";
import OurValuesSction2 from "./components/OurValuesPart2";
import Products from "./components/Product";
import SPSMap from "./components/SPSMap";
import WhatsApp from "./components/WhatsApp";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <NavigationBar />
      <AboutUS />
<OurValues/>
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
