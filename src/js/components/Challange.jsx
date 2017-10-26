import React, { Component } from 'react';

const Challange = props => {
    return (
        <div className={props.active ? 'challange active' : 'challange '}>
            Scroll if you can
            </div>
    );
};

export default Challange;