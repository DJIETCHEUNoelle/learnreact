import React from "react";
import './person.css';

 const Person = (props) => {

    return (<div className="Person">

        <p onClick={props.click}>Im a {props.name} and im {props.age} year old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    
  
    ) 
 };

 export default Person;