import React from 'react';
import Logo from "../../images/Logo.png";
import Picture from "../../images/picture2.png";

export const CardItem = ({avatar, user, tweets, followers}) => {
  return (
    <li>
        <img src={Logo} alt="GoIT" width="76px" height="22px" />
        <img src={Picture} alt="" width="308px" height="168px" />
          <img src={avatar} alt={user} width="80px" height="80px" />
          <p>{user}</p>
          <p>{tweets} TWEETS</p>
          <p>{followers} FOLLOWERS</p>
          <button type='button'>Follow</button>
    </li>
  )
}
