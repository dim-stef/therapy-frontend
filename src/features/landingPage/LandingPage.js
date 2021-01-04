import {
  Link
} from "react-router-dom";
import Hero from '../hero/Hero';
import PointBoxList from '../../flat/pointBoxList/PointBoxList';
import WhyChooseUs from '../../flat/whyChooseUs/WhyChooseUs';
import OurTherapists from '../../flat/ourTherapists/OurTherapists';
import Quotes from '../../flat/quotes/Quotes';
import BecomeMember from '../../flat/becomeMember/BecomeMember';
import BecomePartner from '../../flat/becomePartner/BecomePartner';
import Faq from '../../flat/faq/Faq';
import Footer from '../../flat/footer/Footer';

function LandingPage(){
  return(
    <div style={{width:'100%'}}>
      <Hero/>
      <PointBoxList/>
      <WhyChooseUs/>
      <BecomeMember/>
      <OurTherapists/>
      <Quotes/>
      <BecomePartner/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default LandingPage;
