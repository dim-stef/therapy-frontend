import {useSelector} from 'react-redux';
import { Tabs } from 'antd';
import TabComponent from './TabComponent';
import TabItem from './TabItem';
import Wave from '../illustrations/Wave';

import './landingTabs.css';

const { TabPane } = Tabs;

function LandingTabs(){
  const {data} = useSelector((state)=>state.landingPageData);
  const tabItems = data.find(d=>d.slice_type=='facility_item');

  return(
    <div className="landing-item-container facility-section" style={{flexFlow:'column', zIndex:12}}>
      <Wave style={{position: 'absolute', top: -200, zIndex:-1, fill:'#fff'}}/>
      <div style={{position:'relative'}}>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center',
        position:'absolute', top: -50, height:90, width: '100%',zIndex:-1}}>
          <img src={tabItems.primary.placeholder.url} style={{height:'100%'}}/>
        </div>      
        <h1>{tabItems.primary.title[0].text}</h1>
      </div>
      <p>{tabItems.primary.details[0].text}</p>
      <Tabs>
        {tabItems.items.map((item, i)=>(
          <TabPane tab={
            <TabComponent title={item.tab_title[0].text} icon={item.tab_icon.url}/>
            } key={i}>
              <TabItem title={item.title[0].text} 
              details={item.details[0].text}
              image={item.image.url}
              actionText={tabItems.primary.action_text[0].text}
              />
          </TabPane>
        ))}
      </Tabs>
      <Wave style={{position: 'absolute', bottom: -195, zIndex:-1, transform: 'rotate(180deg)', fill:'#fff'}}/>
    </div>
  )
}


export default LandingTabs;
