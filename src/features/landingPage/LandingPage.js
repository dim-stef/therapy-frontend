import {
  Link
} from "react-router-dom";
import Hero from '../hero/Hero';
import BlogList from '../blog/BlogList';
import IntroLines from '../../flat/introLines/IntroLines';
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
      <IntroLines/>
      <WhyChooseUs/>
      <PointBoxList/>
      <BecomeMember/>
      <OurTherapists/>
      <BecomePartner/>
      <Quotes/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default LandingPage;
