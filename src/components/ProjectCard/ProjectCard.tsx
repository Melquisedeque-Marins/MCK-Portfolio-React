
import './ProjectCard.css';


type props = {
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({src, title, description}: props) => {
    return (
        <div className="card-container">
             <div className="content-card">
                    <div className="img-card">
                        <img src={src} alt="project image" />
                    </div>
                    <div className="text-card">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>

                </div>
        </div>
    )
}
export default ProjectCard;