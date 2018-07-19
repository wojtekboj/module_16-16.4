import React from 'react';
import ReactDOM from 'react-dom';

const Title = props => (
    <h1>{props.title} ({props.qty})</h1>  
);

export default Title;