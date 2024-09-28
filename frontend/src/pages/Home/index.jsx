//----------Code: Home page-------------
import { useState } from 'react';

//importation des composants
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import styled from 'styled-components'
import imageDeveloppeuse from '../../assets/image_developpeuse.png'
import SkillCard from '../../components/SkillCard'
import DownloadButton from '../../utils/buttons/donwloadBtn'
import ReadMoreButton from '../../utils/buttons/readMoreBtn'

//import icons pour les cards compétences
import { IoLogoHtml5, IoLogoReact, IoLogoCss3 } from "react-icons/io5";
import { SiNodedotjs, SiExpress, SiGoogleanalytics, SiGooglesearchconsole, SiSemrush, SiAdobexd, SiFigma, SiAdobeillustrator, SiMongodb, SiAmazonaws} from "react-icons/si";
import { FaDocker,FaSlack, FaGitlab, FaRegCheckCircle } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

//importation des image skils black
import DatabaseBlack from '../../assets/skills/black/database1.png'
import DevopsBlack from '../../assets/skills/black/devops1.png'
import FrontendBlack from '../../assets/skills/black/frontend1.png'
import BackendBlack from '../../assets/skills/black/backend1.png'
import SeoBlack from '../../assets/skills/black/seo1.png'
import WebdesignBlack from '../../assets/skills/black/uiux1.png'

//
import imageTechnicalSkills from '../../assets/skills/technical-skills.png'
import imageRocket from '../../assets/skills/rocket.png'
import imagePolyvalance from '../../assets/skills/polyvalence.png'
import imageIdea from '../../assets/skills/idea.png'
function Home() {
    // Ajouter un état pour suivre l'état d'expansion des paragraphes
    const [expanded, setExpanded] = useState(false);

    // Créer une fonction pour basculer l'état entre plié et déplié
    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <StyledHome>
            <>
                <Header />
                <Banner />

                <div className='selling-text'>
                    <div id='text'>
                        <h2>
                            Ma passion pour le développement web au service de vos projets numériques
                        </h2>
                    </div>
                    <div id='list'>
                        <ul>
                            <li>
                                <img src={imageTechnicalSkills} alt="image Compétences techniques" />
                                <h4>Expertise technique</h4>
                                <p>Ma formation avec Openclassrooms m&apos;a dotée des compétences MERN nécessaires pour contribuer aux projets, assurant des solutions de qualité.</p>
                            </li>
                            <li>
                                <img src={imagePolyvalance} alt="image Polyvalance" />
                                <h4> Polyvalence
                                </h4>
                                <p>En tant que développeuse fullstack, je suis capable de travailler sur toutes les facettes du développement web, facilitant la collaboration avec différentes équipes.</p>
                            </li>
                            <li>
                                <img src={imageRocket} alt="image Passion et motivation" />
                                <h4>Passion et motivation</h4>
                                <p>Ma passion pour le développement web se traduit par un engagement fort envers les objectifs de l&apos;entreprise et une recherche continue d&apos;amélioration.</p>
                            </li>
                            <li>
                                <img src={imageIdea} alt="image Innovation et valeur ajoutée" />
                                <h4>Innovation et valeur ajoutée
                                    {/* <span>
                                        <FaRegCheckCircle />
                                    </span> */}
                                </h4>
                                <p> Je suis constamment à la pointe des tendances et des meilleures pratiques, ce qui me permet de proposer des solutions innovantes et de valeur pour les projets de l&apos;entreprise.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='Btn-donwload-cv'>
                        <DownloadButton />
                    </div>
                </div>

                <div className='about'>
                    <h2>A PROPOS DE MOI...</h2>
                    <div className='about-content'>
                        <div className='about-text'>
                            <p>Je suis une développeuse Full Stack junior basée à Oignies, Hauts-de-France, avec une passion pour le développement web et le design. Après avoir obtenu mon diplôme en développement web, je suis prête à relever de nouveaux défis professionnels et à contribuer à des projets numériques passionnants.
                            </p>
                            <p>
                                Mon parcours d&apos;études en Moldavie et en France m&apos;a dotée d&apos;une solide formation et d&apos;une curiosité intellectuelle qui me pousse constamment à apprendre et à m&apos;améliorer. Mon objectif est de rejoindre une Entreprise de Services du Numérique (ESN) basée à Lille pour explorer tous les aspects du domaine, du design web à la gestion de projet.
                            </p>
                            {expanded && (
                                <>
                                    <p>
                                        Au-delà du développement, je suis également passionnée par l&apos;UI/UX Design, le graphisme et l&apos;architecture paysagiste. Mes atouts incluent une curiosité intellectuelle insatiable, une approche circonspecte envers les problèmes, ainsi qu&apos;un esprit d&apos;équipe solide qui favorise la collaboration et l&apos;innovation.
                                    </p>
                                    <p>
                                        Explorez mon portfolio pour en savoir plus sur mes réalisations, et contactez-moi pour discuter de collaborations futures. 
                                    </p>
                                </>
                            )}
                        </div>
                        <figure>
                            <img src={imageDeveloppeuse} alt="Développeuse" />
                        </figure>
                    </div>
                    <div className="about-button">
                        <ReadMoreButton expanded={expanded} onClick={toggleExpand} />
                    </div>
                </div>

                <div className='skills'>
                    <h3>Compétences</h3>
                    <ul>
                        <SkillCard
                            title="Frontend"
                            image={FrontendBlack}
                            description="Conception et développement d'interfaces utilisateur interactives et réactives."
                            tools="Html5 | CSS3 | SASS | React.js"
                            icon1={<IoLogoHtml5 />}
                            icon2={<IoLogoCss3 />}
                            icon3={<IoLogoReact />}
                        />
                        <SkillCard
                            title="Backend"
                            image={BackendBlack}
                            description="Développement de la logique métier et de la gestion des données côté serveur."
                            tools="Node.js | Express.js | JavaScript"
                            icon1={<SiNodedotjs />}
                            icon2={<SiExpress />}
                            icon3={<DiJavascript1 />}
                        />
                        <SkillCard 
                            title="DevOps"
                            image={DevopsBlack}
                            description="Mettre en place un pipeline d'intégration et de livraison continue"
                            tools="Docker | Slack | GitLab CI/CD"
                            icon1={<FaDocker/>}
                            icon2={<FaSlack />}
                            icon3={<FaGitlab />}
                        />
                        <SkillCard
                            title="SEO"
                            image={SeoBlack}
                            description="Optimisation pour les moteurs de recherche afin d'améliorer la visibilité en ligne."
                            tools="Google Analytics | Google Search console | SEMrush"
                            icon1={<SiGoogleanalytics />}
                            icon2={<SiGooglesearchconsole />}
                            icon3={<SiSemrush />}
                        />
                        <SkillCard
                            title="Web design"
                            image={WebdesignBlack}
                            description="Conception esthétique et fonctionnelle de sites Web pour une expérience utilisateur optimale."
                            tools="Adobe XD | Figma | Adobe Illustrator"
                            icon1={<SiAdobexd className='iconPurple'/>}
                            icon2={<SiFigma/>}
                            icon3={<SiAdobeillustrator />}
                        />
                        <SkillCard
                            title="Base de Données"
                            image={DatabaseBlack}
                            description="Stockage et gestion efficaces des données pour répondre aux besoins des applications."
                            tools="MySQL | MongoDB | AWS"
                            icon1={<GrMysql />}
                            icon2={<SiMongodb />}
                            icon3={<SiAmazonaws />}
                        />
                    </ul>
                </div>

                <div className='contact'>
                    {/* <h2>Contact</h2> */}
                    <p>Pour toute demande de renseignements, de collaboration ou simplement pour échanger des idées, n&apos;hésitez pas à me contacter. Je suis toujours ouverte aux nouvelles opportunités et prête à contribuer à des projets innovants.</p>
                </div>
                <Footer />
            </>
        </StyledHome>
    );
}

export default Home;

// Styled Components
const StyledHome = styled.div`
.selling-text {
    padding: 90px 40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #f4f4f8;

    #text {
        width: 80%;
        h2 {
            font: 600 54px 'Avenir Next', sans-serif;
            text-align: center;
            letter-spacing: 1px;
            line-height: 1.5;
            margin-top:0;
            margin-bottom: 60px;
            @apply animate-fadeInUp; /* Apply Tailwind animation */
        }
    }

    #list {
        width: 80%;
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 80px;
        list-style-type: none;
        }
        li {
            display: flex;
            flex-direction: column;
            width: 46%;

            img {
                width: 64px;
                height: auto;
                margin-bottom: 20px
            }
            h4 {
                font-size: 20px;
                font-weight: 600;
                letter-spacing: 2px;
                margin: 0;
            }
            span {
                width: 24px;
                height: 24px;
                min-width: 24px;

                svg {
                    margin-right: 10px;
                    color: #85FDFF;
                    font-size: 24px;
                    float: left;
                }
            }
            p {
                font-size: 18px;
                line-height: 1.5;
                text-align: justify;
                margin: 0;
                color: #BCBCC8;
            }
        }
    }
    .Btn-donwload-cv {
        display: flex;
        justify-content: center;
        margin-top: 60px;
    }
}
.about {
    padding: 100px 40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    text-align: justify;
    color: #f4f4f8;
    // background-color: #fff;
    // border-top: #b3dfff solid 1px;
    h2 {
      margin-bottom: 20px;
      width: 100%;
      font: 600 34px 'Avenir Next', sans-serif;
      letter-spacing: 0px;
      line-height: 1.5;
      text-align: center;
    }
    .about-content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    
    .about-text {
        margin-bottom: 20px;
        width: 46%;
    p {
      margin-bottom: 0;
      font-size: 20px;
      line-height: 1.5;
      text-align: justify;
    }
}
    figure {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
            height: auto;
            border-radius: 10px;
            filter: blur(2px);
        }
    }
}
    .about-button {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

    button {
        border: none;
        margin: 10px;
        margin-bottom: 0;
        outline: none;
        cursor: pointer;
        font-family: 'Avenir Next', sans-serif;
        color: #6c49de;
        }
    }
}
  .skills {
    // border-top: #b9e2fe solid 1px;
    padding: 90px 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    // background-color: #e0f0fe;
    
    h3 {
        color: #f4f4f8;
        margin-top: 0;
        width: 40%;
        font: 600 64px 'Georgia', serif;
        letter-spacing: 2px;
        text-align: center;
        margin-bottom: 80px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 60px;
        list-style-type: none;
        padding: 0 80px;
        max-width: 1920px;
        height: 900px;
    }
}
.contact {
    color: #f4f4f8;
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    text-align: justify;
    // background-color: #F4F4F6;
    h2 {
      margin-bottom: 20px;
      width: 36%;
      font: 600 34px 'Avenir Next', sans-serif;
      letter-spacing: 0px;
      line-height: 1.5;
      text-align: center;
    }
    p {
      margin-bottom: 20px;
      font-size: 20px;
      line-height: 1.5;
      width: 46%;
      text-align: justify;
    }
}
`;


