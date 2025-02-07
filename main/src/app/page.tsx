import BrowseRange from "./component/BrowseRange";
import Header from "./component/Header";
import Hero from "./component/Hero";
import ProductCards from "./component/products/page";
import OurProducts from "./component/Outproducts";
import Rooms from "./component/Rooms";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <BrowseRange/>
      <OurProducts/>
      <Rooms/>
      <ProductCards/>
    </div>
    
  );
} 



