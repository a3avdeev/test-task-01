import { CardItem } from "./CardItem";
import React from 'react';

export const CardItemList = ({users}) => {
  return (
      <ul>
        {users.map(item => (<CardItem key={item.id} avatar={item.avatar} user={item.user} tweets={item.tweets} followers={item.followers} />))}
      </ul>
  )
}
