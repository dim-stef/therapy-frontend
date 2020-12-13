import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, CalendarOutlined } from '@ant-design/icons';

function TherapistCard(){
  return(
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <div>
          <CalendarOutlined/>
          <span style={{marginLeft:5}}>Buy a session</span>
        </div>,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Skeleton loading={false} avatar active>
        <Card.Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Skeleton>
    </Card>
  )
}

export default TherapistCard;
