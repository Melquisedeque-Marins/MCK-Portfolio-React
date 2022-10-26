import './ProjectCard.css';

type Props = {
    src: string[];
    title: string;
    description: string;
    link: string;
}

const ProjectCard = (props: Props) => {
    return (
        <div className="card-container">
            <div className="content-card">
                <div className="carro">
                    <div className="img-card">
                        {
                            props.src.map((s: string) => (
                                <img src={s} alt="project image" />
                            )
                            )
                        }
                    </div>
                </div>
                <div className="text-card">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <a href={props.link} target="_blank">Confira o código no Github</a>
                </div>

            </div>
        </div>
    )
}
export default ProjectCard;