import { CardItem } from "./CardItem";
import React from 'react';
import { CardItemListWrapper } from "./CardItemList.Styled";

export const CardItemList = ({users}) => {
  return (
      <CardItemListWrapper>
        {users.map(item => (<CardItem key={item.id} avatar={item.avatar} user={item.user} tweets={item.tweets} followers={item.followers} />))}
      </CardItemListWrapper>
  )
}
