import { CardItem } from "./CardItem";
import React from 'react';
import { CardItemListWrapper } from "./CardItemList.Styled";

export const CardItemList = ({users}) => {
  return (
      <CardItemListWrapper>
        {users.map(user => (<CardItem key={user.id} id={user.id} avatar={user.avatar} user={user.user} tweets={user.tweets} followers={user.followers} />))}
      </CardItemListWrapper>
  )
}
