import {useEffect} from 'react';
import {
  Link
} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import Hero from '../hero/Hero';
import OurTherapists from '../../flat/ourTherapists/OurTherapists';
import Quotes from '../../flat/quotes/Quotes';
import FirstPoint from '../../flat/firstPoint/FirstPoint';
import SecondPointBox from '../../flat/secondPointBox/SecondPointBox';
import LandingTabs from '../../flat/landingTabs/LandingTabs';
import Services from '../../flat/services/Services';
import BecomeMember from '../../flat/becomeMember/BecomeMember';
import BecomePartner from '../../flat/becomePartner/BecomePartner';
import Testimonials from '../../flat/testimonials/Testimonials';
import Faq from '../../flat/faq/Faq';
import Footer from '../../flat/footer/Footer';
import {getLandingPageData} from '../langingPageData/landingPageDataSlice'

function LandingPage(){
  const dispatch = useDispatch();
  const {data} = useSelector((state)=>state.landingPageData);
  console.log(data);
  return(
    <div style={{width:'100%'}}>
      <Hero/>
      <FirstPoint/>
      <SecondPointBox/>
      <LandingTabs/>
      <Services/>
      <Testimonials/>
      <OurTherapists/>
      <Footer/>
    </div>
  )
}

export default LandingPage;
