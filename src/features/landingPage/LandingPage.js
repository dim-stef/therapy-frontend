import {useEffect} from 'react';
import {
  Link
} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import Hero from '../hero/Hero';
import OurTherapists from '../../flat/ourTherapists2/OurTherapists';
import Quotes from '../../flat/quotes/Quotes';
import FirstPoint from '../../flat/firstPoint/FirstPoint';
import SecondPointBox from '../../flat/secondPointBox/SecondPointBox';
import LandingTabs from '../../flat/landingTabs/LandingTabs';
import Services from '../../flat/services/Services';
import BecomeMember from '../../flat/becomeMember/BecomeMember';
import BecomePartner from '../../flat/becomePartner/BecomePartner';
import Testimonials from '../../flat/testimonials/Testimonials';
import SubscribeNewsletter from '../../flat/subscribeNewsletter/SubscribeNewsletter';
import WhatsNew from '../../flat/whatsNew/WhatsNew';
import Partners from '../../flat/partners/Partners';
import Faq from '../../flat/faq/Faq';
import Footer from '../../flat/footer/Footer';
import {getLandingPageData} from '../langingPageData/landingPageDataSlice'

function LandingPage({type='home'}){
  const dispatch = useDispatch();
  const {data, dataDoctors} = useSelector((state)=>state.landingPageData);
  console.log(data, dataDoctors, "doctors");
  return(
    <div style={{width:'100%'}}>
      <Hero data={type==='home'?data:dataDoctors}/>
      <FirstPoint data={type==='home'?data:dataDoctors}/>
      <SecondPointBox data={type==='home'?data:dataDoctors}/>
      <LandingTabs data={type==='home'?data:dataDoctors}/>
      <Services data={type==='home'?data:dataDoctors}/>
      <Testimonials data={type==='home'?data:dataDoctors}/>
      <OurTherapists data={type==='home'?data:dataDoctors}/>
      <SubscribeNewsletter data={type==='home'?data:dataDoctors}/>
      <WhatsNew data={type==='home'?data:dataDoctors}/>
      <Partners data={type==='home'?data:dataDoctors}/>
      <Footer data={type==='home'?data:dataDoctors}/>
    </div>
  )
}

export default LandingPage;
