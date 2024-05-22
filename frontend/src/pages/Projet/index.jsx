import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import datas from '../../data/data';
import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Project() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const project = datas.find((project) => project.id === id);
        setProject(project);
    }
    , [id]);


    if (!project) {
        return <Navigate to="/portfolio" />;
    }


    return (
        <>
            <Header />
                <StyledMain>
                    <ProjectContent>
                        <h1>{project.title}</h1>
                        <ContentInfos>
                            <img src={project.image} alt={project.title} />
                            <p>{project.description}</p>
                            <p className='tools'><i>Outils</i> : {project.tools}</p>
                        </ContentInfos>
                    </ProjectContent>
                </StyledMain>
            <Footer />
        </>
    );
}

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

const ProjectContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    img {
        width: 100%;
        height: auto;
    }
`;

const ContentInfos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    p {
        text-align: justify;
    }
`;

