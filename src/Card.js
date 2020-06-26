import React, { Component } from 'react';
import Tilt from 'react-tilt';


const Card = ({ name, email, id }) => {
    return(

        <div className="tc bg-light-blue dib br3 ps3 ma2 grow bw2 shadow-5">
            <Tilt classname="Tilt" options={{ max : 35, scale: 1}}>
                <img alt="pic" src={require('./pics/' + id + '.png')} width="250" height="300"  />
            </Tilt>
            <>
                <h2>{name}</h2>
                <p><a href={'mailto:' + email}>{email}</a></p>
            </>

        </div>

    );
}

export default Card;
