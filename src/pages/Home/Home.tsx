import foto  from '../../assets/img/foto.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Cat_index from '../../assets/img/MCK-catalog-index.png'
import Cat_catalog from '../../assets/img/MCK-catalog-catalog.png'
import Cat_details from '../../assets/img/MCK-catalog-details.png'
import Car_index from '../../assets/img/MCK-car-index.png'
import Mck from '../../assets/img/Home-screen.png'
import Api from '../../assets/img/api_logo.png'

import './Home.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SimpleSlider from '../../components/Carroussel/Carroussel';
import CenterMode from '../../components/Carroussel/Carroussel';
import Fade from '../../components/Carroussel/Carroussel';
const Home = () => {
    return (
        <div className="container-home">
            <div className="home-content">
                <div className="banner">
                    <div className="profile">
                        <img src={foto} alt="" />
                    </div>
                    <div className="text">
                        <h1>Melquisedeque M. Junior</h1>
                        <h2>Full Stack Developer</h2>
                        <h2>Java/Spring/React</h2>
                        <p>Desenvolvimento é o que me motiva seja em uma aplicação front web, backend ou mesmo na vida.</p>
                    </div>
                </div>
                <div className="profile-info">
                    <div className="field">
                    <a href="https://github.com/Melquisedeque-Marins" target="_Blank" ><FaPhoneAlt /></a>
                    </div>
                    <div className="field">
                    <a href="https://github.com/Melquisedeque-Marins" target="_Blank" ><FaEnvelope/></a>
                    </div>
                    <div className="field">
                    <a href="https://github.com/Melquisedeque-Marins" target="_Blank" ><FaGithub/></a>
                    </div>
                    <div className="field">
                    <a href="https://www.linkedin.com/in/melquisedeque-marins-junior-324291230/" target="_Blank" ><FaLinkedin/></a>
                    </div>
                </div>
                   <div className="slider-home" >
                        <Fade/>
                    </div>
            </div>
        </div>
    )
}
export default Home;