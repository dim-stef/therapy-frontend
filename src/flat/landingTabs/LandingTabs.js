import {useSelector} from 'react-redux';
import { Tabs } from 'antd';
import TabComponent from './TabComponent';
import TabItem from './TabItem';

import './landingTabs.css';

const { TabPane } = Tabs;

function LandingTabs(){
  const {data} = useSelector((state)=>state.landingPageData);
  const tabItems = data.find(d=>d.slice_type=='facility_item');

  return(
    <div className="landing-item-container">
      <Tabs>
        {tabItems.items.map((item, i)=>(
          <TabPane tab={
            <TabComponent title={item.tab_title[0].text} icon={item.tab_icon.url}/>
            } key={i}>
              <TabItem title={item.title[0].text} 
              details={item.details[0].text}
              image={item.image.url}
              />
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}


export default LandingTabs;
