import {
  Link
} from "react-router-dom";
import Hero from '../hero/Hero';
import PointBoxList from '../../flat/pointBoxList/PointBoxList';
import WhyChooseUs from '../../flat/whyChooseUs/WhyChooseUs';
import OurTherapists from '../../flat/ourTherapists/OurTherapists';
import Quotes from '../../flat/quotes/Quotes';
import Faq from '../../flat/faq/Faq';
import Footer from '../../flat/footer/Footer';

function LandingPage(){
  return(
    <div style={{width:'100%'}}>
      <Hero/>
      <PointBoxList/>
      <WhyChooseUs/>
      <OurTherapists/>
      <Quotes/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default LandingPage;
