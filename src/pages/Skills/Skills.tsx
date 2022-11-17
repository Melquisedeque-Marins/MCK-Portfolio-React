import './Skills.css' ;
import Java from '../../assets/img/Java_Logo.png';
import Spring from '../../assets/img/spring_logo.png';
import Html from '../../assets/img/html5_logo.png';
import Css from '../../assets/img/css3_logo.png';
import Js from '../../assets/img/javascript_logo.png';
import React from '../../assets/img/react_logo.png';
import Ts from '../../assets/img/Typescript_logo.png';

const Skills = () => {
    return (
        <div className="container-skills base-container">
            <div className="content">
                <div className="content-skills">
                    <img src={Java} alt="" />
                    <img src={Spring} alt="" />
                    <img src={Html} alt="" />
                    <img src={Css} alt="" />
                    <img src={Js} alt="" />
                    <img src={Ts} alt="" />
                    <img src={React} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Skills;
