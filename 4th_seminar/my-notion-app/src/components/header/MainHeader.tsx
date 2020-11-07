import React from 'react';
import "./MainHeader.scss";
import Button from '../button/Button';
//import MenuIcon from "../../assets/icons/"

function MainHeader({match, history, location}:any){
    return(
        <header className="main-header">
            <img className="main-header__icon" alt="icon" src={""}/>
            <nav className="main-header__nav">
                <Button text="[ON SOPT] Web Part" onClickFunc={()=>history.push('/')}/>
                <span> / </span>
                <Button text="파트원 소개" onClickFunc={()=>history.push('/members')}/>
            </nav>
            <div className="empty"></div>
            <div className="main-header__nav">
                <Button text="Share"/>
                <Button text="Favorite"/>
            </div>
        </header>
    );
}

export default MainHeader;