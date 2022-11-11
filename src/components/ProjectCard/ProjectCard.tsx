import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import './ProjectCard.css';

type Props = {
    src: string[];
    title: string;
    description: string;
    link: string;
    color?: string;
    fontColor?: string;
}


const ProjectCard = (props: Props) => {

    const ComponentStyle = {
        backgroundColor: props.color || '#FFF',
        color: props.fontColor || '#000'
    }
    return (
        <div className="card-container" style={ComponentStyle}>
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
                    <a href={props?.link} target="_blank">Confira o Código fonte no GitHub</a>
                </div>

            </div>
        </div>
    )
}
export default ProjectCard;