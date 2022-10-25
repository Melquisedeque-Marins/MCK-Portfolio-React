import './Projects.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Cat_index from '../../assets/img/MCK-catalog-index.png'
import Car_index from '../../assets/img/MCK-car-index.png'

const Projects = () => {
    return (
        <div className="container-projects">
            <div className="content-projects">
                <div className="content-cards">
                    <h1>Projetos de estudo</h1>
                    <ProjectCard src={Cat_index} title="MCK Catalog" description='testando props em um componente'/>
                    <ProjectCard src={Car_index} title="MCK Car" description='testando props em um componente'/>
                </div>
                <div className="content-cards">
                    <h1>Projetos de estudo</h1>
                    <ProjectCard src={Cat_index} title="MCK Catalog" description='testando props em um componente'/>
                    <ProjectCard src={Car_index} title="MCK Car" description='testando props em um componente'/>
                </div>
            </div>
        </div>
    )
}
export default Projects;