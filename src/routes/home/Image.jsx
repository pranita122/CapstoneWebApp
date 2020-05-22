import React from "react";
 export default function Image(props) {

     return (
        <img src={require('../../screenshot.png')} alt='screenshot of submitted URL' width='400px'/>
     )
 }