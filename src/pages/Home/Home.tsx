import foto from '../../assets/img/foto.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Fade from '../../components/Carroussel/Carroussel';
import { Link } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

import './Home.css';
const Home = () => {
    return (
        <div className="container-home">
            <div className="animated-banner">
                <VideoPlayer />

                <div className="banner">
                    <img src={foto} alt="" />
                    <div className="text">
                        <h1>Melquisedeque M. Junior</h1>
                        <h2>Full Stack Developer</h2>
                        <h2>Spring/React</h2>
                        <p>Desenvolvimento é o que me motiva seja em uma aplicação front web, backend ou mesmo na vida.</p>
                    </div>
                </div>
            </div>
            <div className="contacts">
                <a className="btnn btnn-neon" href="https://github.com/Melquisedeque-Marins" target="_Blank" ><FaEnvelope /></a>
                <a className="btnn btnn-neon" href="https://github.com/Melquisedeque-Marins" target="_Blank" ><FaGithub /></a>
                <a className="btnn btnn-neon" href="https://www.linkedin.com/in/melquisedeque-marins-junior-324291230/" target="_Blank" ><FaLinkedin /></a>
            </div>
        </div>
    )
}
export default Home;