import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex, Switch } from 'antd';


const actions = [
  <EditOutlined key="edit" />,
  <SettingOutlined key="setting" />,
  <EllipsisOutlined key="ellipsis" />,
];


const PostCard = ({field1, field2}) => {
  // const [loading, setLoading] = useState(false);
  return (
    <Flex gap="middle" align="center" vertical>
      {/* <Switch checked={!loading} onChange={(checked) => setLoading(!checked)} /> */}
      <Card
        // loading={loading}
        actions={actions}
        style={{
          minWidth: 300,
        }}
      >
        <Card.Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title={field1}
          description={
            <>
              <p>{field2}</p>
            </>
          }
        />
      </Card>
     
    </Flex>
  );
};
export default PostCard;