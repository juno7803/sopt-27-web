import React from 'react';
import { Route } from 'react-router-dom';
import {DeleteOutlined} from "@ant-design/icons";
import './Card.scss';

interface ICard{
    memberData: any;
}

function Card({memberData}:ICard){
    return(
        <div className="card" draggable>
            <div className="remove-button">
                <DeleteOutlined />
            </div>
            <div className="image-area">
                {
                    memberData.profileUrl === "" ? '' : (<img src={memberData.profileUrl}/>)
                }
            </div>
            <div className="card__content card__text name">{memberData.name}</div>
            <div className="card__content card__text instagram">{memberData.instagram}</div>
            <div className="card__content card__text introduction">{memberData.introduction}</div>
            <div className="card__content card__text mbti">{memberData.mbti}</div>
        </div>
    );
}

export default Card;