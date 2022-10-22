import foto  from '../../assets/img/foto.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import './Home.css';
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
                        <p>Desenvolvimento é o que me motiva seja em uma aplicação front web, backend ou mesmo na vida.</p>
                    </div>
                </div>
                        <div className="profile-info">
                            <div className="field">
                            <a href="https://github.com/Melquisedeque-Marins" target="_Blank" ><FaPhoneAlt /> <span>+351 935 893 129</span></a>
                            </div>
                            <div className="field">
                            <a href="https://github.com/Melquisedeque-Marins" target="_Blank" ><FaEnvelope/> <span>melck_junior@hotmail.com</span></a>
                            </div>
                            <div className="field">
                            <a href="https://github.com/Melquisedeque-Marins" target="_Blank" ><FaGithub/> <span>Github</span></a>
                            </div>
                            <div className="field">
                            <a href="https://www.linkedin.com/in/melquisedeque-marins-junior-324291230/" target="_Blank" ><FaLinkedin/> <span>Linkedin</span></a>
                            </div>
                        </div>
            </div>
        </div>
    )
}
export default Home;