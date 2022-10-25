import './ProjectCard.css';

type props = {
    src: string;
    title: string;
    description: string;
    link: string;
}

const ProjectCard = ({src, title, description, link}: props) => {
    return (
        <div className="card-container">
             <div className="content-card">
                    <div className="img-card">
                        <img src={src} alt="project image" />
                    </div>
                    <div className="text-card">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <a href={link} target="_blank">Confira o código no Github</a>
                    </div>

                </div>
        </div>
    )
}
export default ProjectCard;