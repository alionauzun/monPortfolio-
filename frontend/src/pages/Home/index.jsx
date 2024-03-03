//----------Code: Home page-------------
//impot des composants
import Header from '../../components/Header'
import Banner from '../../components/Banner'
// import Footer from '../../components/Footer'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

//import image skils color
// import Devops from '../../assets/skills/color/devops.png'
// import Frontend from '../../assets/skills/color/frontend.png'
// import Backend from '../../assets/skills/color/backend.png'
// import Seo from '../../assets/skills/color/seo.png'
// import Webdesign from '../../assets/skills/color/uiux.png'
// import Database from '../../assets/skills/color/database.png'

//import image skils black
import DatabaseBlack from '../../assets/skills/black/database1.png'
import DevopsBlack from '../../assets/skills/black/devops1.png'
import FrontendBlack from '../../assets/skills/black/frontend1.png'
import BackendBlack from '../../assets/skills/black/backend1.png'
import SeoBlack from '../../assets/skills/black/seo1.png'
import WebdesignBlack from '../../assets/skills/black/uiux1.png'

//import icons pour les cards compétences
import { IoLogoHtml5, IoLogoReact, IoLogoCss3 } from "react-icons/io5";
import { SiNodedotjs, SiExpress, SiDjango, SiGoogleanalytics, SiGooglesearchconsole, SiSemrush, SiAdobexd, SiAdobeillustrator, SiMongodb} from "react-icons/si";
import { FaDocker, FaGitlab } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import Slack from '../../assets/skills/color/slack.png';
import Figma from '../../assets/skills/color/figma.png';

function Home() {
  return (
            <StyledHome>
        <>
          <Header />
            <Banner />
            <div className='about'>
              <h2>Ma passion pour le developpement web au service de vos projets numériques</h2>
              <p>
              Diplômée récemment en développement web avec OpenClassrooms, j&apos;ai acquis des compétences solides grâce à des projets concrets et directement applicables en entreprise. Aujourd&apos;hui, forte de mon diplôme et de mon expérience pratique, je suis prête à relever de nouveaux défis professionnels et à contribuer au succès des entreprises numériques en mettant mes compétences et ma passion au service de projets innovants.
              <a href="/assets/cv.pdf" download="cv_Aliona-Uzun.pdf">Telecharger le cv </a>
              </p>
              
            </div>
            <div className='skills'>
                <h3>Compétences</h3>
                <ul>
                    <li className='card'>
                        <div className="face front">
                          <img src={FrontendBlack} alt="Frontend" />
                          <h4>Frontend <span></span></h4>
                          <p>Conception et développement d&apos;interfaces utilisateur interactives et réactives.</p>
                          <p className='tools'><i>Outils</i> : Html5<span>|</span>CSS3 <span>|</span>SASS<span>|</span>React</p>
                        </div>
                        <div className="face back">
                              <div className='iconTool icon1 iconOrange'>
                                  <IoLogoHtml5/>
                              </div>
                              <div className='iconTool icon2 iconBlue'>
                                  <IoLogoCss3 />
                              </div>
                              <div className='iconTool icon3 iconPurple'>
                                  <IoLogoReact />
                              </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="face front">
                          <img src={BackendBlack} alt="Backend" />
                          <h4>Backend <span></span></h4>
                          <p>Développement de la logique métier et de la gestion des données côté serveur.</p>
                          <p className='tools'><i>Outils</i> : Node.js<span>|</span>Express<span>|</span>Django</p>
                        </div>
                        <div className="face back">
                            <div className='iconTool icon1 iconGreen'>
                                  <SiNodedotjs />
                            </div>
                            <div className='iconTool icon2 iconWhite'>
                                  <SiExpress />
                            </div>
                            <div className='iconTool icon3 iconGreen'>
                                  <SiDjango />
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="face front">
                          <img src={DevopsBlack} alt="DevOps" />
                          <h4>DevOps</h4>
                          <p>Mettre en place un pipeline d&apos;intégration et de livraison continue</p>
                          <p className='tools'><i>Outils</i> : Docker<span>|</span>Slack<span>|</span>GitLab CI/CD</p>
                        </div>
                        <div className=" face back">
                            <div className='iconTool icon1 iconBlue'>
                                  <FaDocker />
                            </div>
                            <div className='iconTool icon2 iconGreen'>
                                <img src={Slack} alt="Slack" />
                            </div>
                            <div className='iconTool icon3 iconOrange'>
                                  <FaGitlab />
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="face front">
                          <img src={SeoBlack} alt="SEO" />
                          <h4>SEO</h4>
                          <p>Optimisation pour les moteurs de recherche afin d&apos;améliorer la visibilité en ligne.</p>
                          <p className='tools'><i>Outils</i> : Google Analytics<span>|</span> Google Search console <span>|</span>SEMrush</p>
                        </div>
                        <div className="face back">
                            <div className='iconTool icon1 iconOrange'>
                                <SiGoogleanalytics />
                            </div>
                            <div className='iconTool icon2 iconBlue'>
                                <SiGooglesearchconsole />
                            </div>
                            <div className='iconTool icon3 iconOrange'>
                                < SiSemrush/>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="face front">
                          <img src={WebdesignBlack} alt="Web design" />
                          <h4>Web design</h4>
                          <p>Conception esthétique et fonctionnelle de sites Web pour une expérience utilisateur optimale.</p>
                          <p className='tools'><i>Outils</i> : Adobe XD<span>|</span>Figma</p>
                        </div>
                        <div className="face back">
                            <div className='iconTool icon1 iconPurple'>
                                < SiAdobexd/>
                            </div>
                            <div className='iconTool icon2 iconGreen'>
                                <img src={Figma} alt="Figma" />
                            </div>
                            <div className='iconTool icon3 iconOrange'>
                                <SiAdobeillustrator/>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="face front">
                            <img src={DatabaseBlack} alt="Database" />
                            <h4>Base de Données</h4>
                            <p>Stockage et gestion efficaces des données pour répondre aux besoins des applications.</p>
                            <p className='tools'><i>Outils</i> : MySQL<span>|</span>MongoDB</p>
                        </div>
                        <div className="face back">
                            <div className='iconTool icon1 iconBlue'>
                                <GrMysql/>
                            </div>
                            <div className='iconTool icon2 iconGreen'>
                                <SiMongodb/>
                            </div>
                            <div className='iconTool icon3 '>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='contact'>
              <h2>Vous avez un projet ?</h2>
              <p>Je serais ravie de vous accompagner dans la réalisation de votre projet numérique. N&apos;hésitez pas à me contacter pour en discuter.</p>
              {/* <button><a href="mailto:  */}
            </div>
            
            {/* <Footer /> */}
        </>
            </StyledHome>
  );
}

export default Home;


const StyledHome = styled.div`
  .about {
    padding: 40px 50px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    text-align: justify;
    background-color: #F4F4F6;
    border-bottom: #dddddd solid 1px;
    h2 {
      margin-bottom: 20px;
      width: 36%;
      font: 600 34px 'Avenir Next', sans-serif;
      letter-spacing: 0px;
      line-height: 1.5;
      text-align: center;
    }
    p {
      margin-bottom: 0;
      font-size: 20px;
      line-height: 1.5;
      width: 46%;
      text-align: justify;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    a {
      margin-top: 40px;
      font-size: 20px;
      line-height: 1.5;
      width: 46%;
      text-decoration: none;
      text-align: justify;
      color: ${colors.primary};
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .skills {
    padding-top: 140px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    background-color: white;
    gap: 30px;
    margin-bottom: 100px;

    h3 {
        margin-top: 0;
        margin-bottom: 20px;
        width: 40%;
        font: 500 50px 'Georgia', serif;
        letter-spacing: 2px;
        line-height: 1.5;
        text-align: center;
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

        li {
            width: 22%;
            height: 350px;
            position: relative; /* Ajoutez ceci pour permettre l'absolu à l'intérieur */
            perspective: 1000px; /* Ajoutez une perspective sur le parent pour l'effet 3D */
            .face {
                height: 100%;
                width: 100%;
                padding: 20px;
                margin-bottom: 25px;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                overflow: hidden;
                border-radius: 10px;
                transition: 0.5s;

                &.front {
                    position: relative; /* Assurez-vous que la face avant est positionnée relativement */
                    transform-style: preserve-3d;
                    transition: transform 0.5s;
                    backface-visibility: hidden; /* Cacher le dos lors de la rotation */
                    box-shadow: 0 0 20px 0 ${colors.primary};

                    img {
                        width: 50px;
                        height: 50px;
                    }

                    h4 {
                        font: 500 20px 'Avenir Next', sans-serif;
                        letter-spacing: 1.5px;
                        margin: 20px 0;

                        &::after {
                            content: '';
                            display: block;
                            width: 20%;
                            height: 3px;
                            background-color: ${colors.primary};
                            margin-top: 5px;
                        }
                    }

                    p {
                        font-size: 17px;
                        margin: 0;
                        margin-bottom: 40px;
                        line-height: 1.5;

                        span {
                            color: ${colors.primary};
                            font-weight: 700;
                            margin: 0 5px;
                        }
                    }

                    .tools {
                        font-size: 15px;
                        color: #787878;
                        margin: 0;
                    }
                }

                &.back {
                    background: ${colors.quaternary};
                    border-radius: 20px;
                    display: flex;
                    align-items: end;
                    position: absolute; /* Position absolue pour la superposition */
                    top: 0;
                    left: 0;
                    backface-visibility: hidden; /* Cacher le dos lors de la rotation */
                    transform: rotateY(180deg); /* Initiallement, tourner pour le cacher */
                    transition: transform 0.5s;

                    .iconTool {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        background-color: black;
                        color: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 30px;

                        svg {
                            font-size: 32px;
                        }
                    }

                    .icon1{
                      align-self: start;
                    }

                    .icon2 {
                        align-self: center;
                    }

                    .icon3 {
                        align-self: end;
                    }

                    .iconOrange {
                        color: #FF5A1F;
                        box-shadow: 0px 0px 8px 2px #FF5A1F;
                    }

                    .iconBlue {
                        color: #2997ff;
                        box-shadow: 0px 0px 8px 2px #2997ff;
                    }

                    .iconPurple {
                        color: #A972FF;
                        box-shadow: 0px 0px 8px 2px #A972FF;
                    }

                    .iconGreen{
                        color: #00FFA3;
                        box-shadow: 0px 0px 8px 2px #00FFA3;
                    }

                    .iconWhite{
                        color: white;
                        box-shadow: 0px 0px 8px 2px white;
                    }
                }
            }
            &:hover .front {
              transform: perspective(600px) rotateY(-180deg);
            }
        
            &:hover .back {
              transform: perspective(600px) rotateY(0deg);
            }
        }
    }
}

.contact {
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    text-align: justify;
    background-color: #F4F4F6;
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