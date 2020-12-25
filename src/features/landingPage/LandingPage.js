import {
  Link
} from "react-router-dom";
import Hero from '../hero/Hero';
import PointBoxList from '../../flat/pointBoxList/PointBoxList';
import WhyChooseUs from '../../flat/whyChooseUs/WhyChooseUs';

function LandingPage(){
  return(
    <div style={{width:'100%'}}>
      <Hero/>
      <PointBoxList/>
      <WhyChooseUs/>
    </div>
  )
}

export default LandingPage;
