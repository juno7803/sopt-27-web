import React from 'react';
import './Card.scss';

interface ICard{
    memberData: any;
}

function Card({memberData}:ICard){
    return(
        <div className="card" draggable>
            <div className="remove-button">

            </div>
            <div className="image-area">
                {
                    memberData.profileUrl === "" ? '' : (<img src={memberData.profileUrl}/>)
                }
            </div>

        </div>
    );
}

export default Card;