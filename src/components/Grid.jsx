import React from "react";
import Course from "./Course";
import "./Grid.css"
import compilerImage from "../images/compiler.png"
import computerArchitectureImage from "../images/computerarchitecture.png"
import cryptographyImage from "../images/cryptography.jpeg"
import dataScienceImage from "../images/datasciencealgo.jpeg"
import hciImage from "../images/hci.jpeg"
import machineLearningImage from "../images/machinelearning.jpeg"
import mobileDevImage from "../images/mobiledev.png"
import osImage from "../images/os.png"
import paradigmsImage from "../images/paradigms.jpeg"
import parallelComputingImage from "../images/parallel_computing.jpeg"
import sweImage from "../images/swe.jpeg"
import networksImage from "../images/networks.jpeg"


const Grid = () => {
    return (
        <div className="Grid">
            <Course courseName="CMSC411" area="Computer Systems Architecture" image={computerArchitectureImage} link="https://www.cs.umd.edu/class/fall2023/cmsc411/"/>
            <Course courseName="CMSC412" area="Operating Systems" image={osImage} link="https://www.cs.umd.edu/class/fall2023/cmsc412/"/>

            <Course courseName="CMSC416" area="Intro To Parallel Computing" image={parallelComputingImage} link="https://www.cs.umd.edu/class/fall2023/cmsc416/"/>

            <Course courseName="CMSC417" area="Computer Networks" image={networksImage} link="https://www.cs.umd.edu/class/fall2023/cmsc417/"/>

            <Course courseName="CMSC422" area="Intro to Machine Learning" image={machineLearningImage} link="https://www.cs.umd.edu/class/fall2023/cmsc422/"/>

            <Course courseName="CMSC430" area="Intro to Compilers" image= {compilerImage}link="https://www.cs.umd.edu/class/fall2023/cmsc430/"/>

            <Course courseName="CMSC433" area="Programming Language Paradigms" image={paradigmsImage} link="https://www.cs.umd.edu/class/fall2023/cmsc433/"/>

            <Course courseName="CMSC434" area="Intro to HCI" image={hciImage} link="https://www.cs.umd.edu/class/fall2023/cmsc434/"/>

            <Course courseName="CMSC435" area="Software Engineering" image={sweImage} link="https://seam.cs.umd.edu/purtilo/435/"/>

            <Course courseName="CMSC436" area="Programming Handheld Systems" image={mobileDevImage} link="https://www.cs.umd.edu/class/fall2023/cmsc436/"/>
            
            <Course courseName="CMSC454" area="Algorithms for Data Science" image={dataScienceImage} link="https://www.cs.umd.edu/class/fall2023/cmsc454/"/>

            <Course courseName="CMSC456" area="Cryptography" image={cryptographyImage} link="https://www.cs.umd.edu/class/fall2023/cmsc456-0201/"/>

        </div>
    )

}

export default Grid;