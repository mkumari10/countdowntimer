import React from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Cardtime(props) {
    return (<div>
             <div style={props.cardStyle} className='befsemi'><hr className="line"/>{props.cardcont}</div>
             <div style={props.textstyle}>{props.ctext}</div>
           </div>);
}

export default Cardtime;
