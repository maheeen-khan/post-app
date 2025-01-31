import React, { useState, useContext } from 'react';
import { EditOutlined, DeleteOutlined, SettingOutlined, LikeOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex, Switch } from 'antd';

import LikeCounterContext from '../context/LikeContextContext';



const PostCard = ({ field1, field2 }) => {

  const [like, setLike] = useState(false);

  const { incrementLike, decrementLike } = useContext(LikeCounterContext);

  const toggleLike = () => {
    if (like) {
      decrementLike(); // Reduce count if unliking
    } else {
      incrementLike(); // Increase count if liking
    }
    setLike(!like);
  };


  return (
    <Flex gap="middle" align="center" vertical>

      <Card
        actions={[

          <LikeOutlined
            key="like"
            style={{ color: like ? 'blue' : 'rgb(38, 201, 255)', fontSize: '18px', cursor: 'pointer' }}
            className='like-btn'
            onClick={toggleLike}
          />

        ]}
        style={{
          minWidth: '100%',
          alignContent: 'center',
        }}
      >
        <Card.Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}

          description={
            <>
              <p style={{ color: 'black', fontSize: '18px' }}>{field2}</p>

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