import React from "react"
import './Course.css'
const Course = (props) => {
    return(
        <>
        <div className="courseCard">
            <img src={props.image} alt="Image"/>
            <h2>{props.courseName}</h2>
            <h3>{props.area}</h3>
            <a href = {props.link} target = "_blank" className= "button-link"> Class Webpage</a>
        </div>
        </>      
    )
}

export default Course;