import React, { Component } from 'react';


class Dog extends Component {
    render() {
        return(
            <div className="tc bg-black-90 lh-copy white pa1 tracked-tight">
                <h2>JK I'm not a ninja. I'm a Dog.</h2>
                <p className="f6 lh-copy measure">{this.props.danews}</p>
            </div>
        );
    }
}

export default Dog;
