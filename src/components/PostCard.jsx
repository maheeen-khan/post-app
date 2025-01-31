import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined , SettingOutlined, LikeOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex, Switch } from 'antd';


const actions = [
  <LikeOutlined key="like" />,
  // <EditOutlined key="edit" />,
  // <SettingOutlined key="setting" />,
  // <EllipsisOutlined key="ellipsis" />,
  // <DeleteOutlined key="delete"/>
];


const PostCard = ({field1, field2}) => {
  // const [loading, setLoading] = useState(false);
  return (
    <Flex gap="middle" align="center" vertical>
      
      <Card
        actions={actions}
        style={{
          minWidth: '100%',
          alignContent : 'center',
        }}
      >
        <Card.Meta 
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
         
          description={
            <> 
              <p style={{color: 'black', fontSize: '18px'}}>{field2}</p>
            </>
          }
           title={
            <>
            <p className='name'>
            {field1}
            </p>
            </>
          }
        />
      </Card>
     
    </Flex>
  );
};
export default PostCard;