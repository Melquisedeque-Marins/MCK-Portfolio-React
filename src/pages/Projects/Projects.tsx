import './Projects.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Cat_index from '../../assets/img/MCK-catalog-index.png'
import Cat_catalog from '../../assets/img/MCK-catalog-catalog.png'
import Cat_details from '../../assets/img/MCK-catalog-details.png'
import Car_index from '../../assets/img/MCK-car-index.png'
import Mck from '../../assets/img/Home-screen.png'
import Api from '../../assets/img/api_logo.png'

const Projects = () => {
    return (
        <div className="container-projects base-container">
            <div className="content-projects">
                <div className="content-cards">
                    <div className="card-title">
                        <h1>Projetos Full stack Spring React</h1>
                    </div>
                    <ProjectCard src={[Cat_index, Cat_catalog, Cat_details, Cat_index]} title="MCK Catalog" description='Projeto executado no Bootcamp spring react da DevSuperior.
                    Um catálogo de proutos que se comunica com uma rest api em Java e exibe uma lista de produtos cadastros, bem como preços e informações detalhadas de cada item.
                    possui também área de administrador e operador.' link='https://github.com/Melquisedeque-Marins/MCK-Catalog'/>
                    <ProjectCard src={[Car_index]} title="MCK Car" description='Projeto executado no Bootcamp spring react da DevSuperior.
                    Um projeto simples de catálogo de carros para desenvolver a pratica de habilidades como: capaciade de desenhar layouts responsivos, navegação entre paginas, rotas, utilização do framework Bootstrap, etc.' link='https://github.com/Melquisedeque-Marins/MCK-Clinic-Thymeleaf'/>
                </div>
                
                <div className="content-cards">
                     <div className="card-title">
                        <h1>Projetos Pessoais</h1>
                    </div>
                    <ProjectCard src={[Api]} title="MCK Clinic - Rest API" description='API Rest desenvolvida em Java com Spring Boot utilizando boas práticas de programação.' link='https://github.com/Melquisedeque-Marins/MCK-Clinic-Thymeleaf'/>
                    <ProjectCard src={[Mck]} title="MCK Clinic" description="" link='https://github.com/Melquisedeque-Marins/MCK-Clinic-Thymeleaf#readme'/>
                </div>
            </div>
        </div>
    )
}
export default Projects;