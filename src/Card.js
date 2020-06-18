import React, { Component } from 'react';


const Card = ({ name, email, id }) => {
    return(
        <div className="tc bg-light-blue dib br3 ps3 ma2 grow bw2 shadow-5">
            <img alt="pic" src={require('./pics/' + id + '.png')} width="250" height="300"  />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
