import React, { useEffect } from "react";
 export default function Image(props) {
    console.log("*******")
    console.log(props.imURL)
    console.log("*******")
    

     return (
        <img src={require('../../screenshot.png')} alt='screenshot of submitted URL' width='400px'/>
     )
 }