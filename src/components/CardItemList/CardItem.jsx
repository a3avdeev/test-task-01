import React from 'react';
import Logo from "../../images/Logo.png";
import Picture from "../../images/picture2.png";
import { Card, LogoImg, PictureImg, CardTitles, CardButton, AvatarWrapper } from "./CardItemList.Styled";
import { useState, useEffect } from 'react';

export const CardItem = ({ id, avatar, user, tweets, followers }) => {

    const [toggle, setToggle] = useState(() => {
        const statusBtn = JSON.parse(localStorage.getItem("button"));
        return statusBtn ?? true;
    });

    const [follow, setFollow] = useState(() => {
        const value = JSON.parse(localStorage.getItem("followers"));
        return value ?? followers;
    });

    console.log(id);

    useEffect(() => {
        localStorage.setItem("followers", JSON.stringify(follow));
        localStorage.setItem("button", JSON.stringify(toggle));
    }, [follow, toggle]);

    const handleIncrease = () => {
        return (
            setFollow((number) => number + 1),
            setToggle(!toggle)
        )
    }

    const handleDecrease = () => {
        return (
            setFollow((number) => number - 1),
            setToggle(!toggle)
        )
    }

  return (
    <Card>
        <LogoImg src={Logo} alt="GoIT" width="76px" height="22px" />
        <PictureImg src={Picture} alt="" width="308px" height="168px" />
        <AvatarWrapper>
            <img className='avatar' src={avatar} alt={user} width="62px" height="62px" />
        </AvatarWrapper>
        <CardTitles>{user}</CardTitles>
        <CardTitles>{tweets} TWEETS</CardTitles>
        <CardTitles>{follow} FOLLOWERS</CardTitles>
        {toggle ? <CardButton type='button' onClick={handleIncrease} style={{background: '#EBD8FF'}}>Follow</CardButton> : <CardButton type='button' onClick={handleDecrease} style={{background: '#5CD3A8'}}>Following</CardButton>}
    </Card>
  )
}