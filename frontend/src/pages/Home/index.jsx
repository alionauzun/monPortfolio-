//----------Code: Home page-------------
//impot des composants
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import CV from '../../assets/cv.pdf'
import SkillCard from '../../components/SkillCard'

//import icons pour les cards compétences
import { IoLogoHtml5, IoLogoReact, IoLogoCss3 } from "react-icons/io5";
import { SiNodedotjs, SiExpress, SiDjango, SiGoogleanalytics, SiGooglesearchconsole, SiSemrush, SiAdobexd, SiAdobeillustrator, SiMongodb} from "react-icons/si";
import { FaDocker, FaGitlab } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import Slack from '../../assets/skills/color/slack.png';
import Figma from '../../assets/skills/color/figma.png';

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


function Home() {
    return (
            <StyledHome>
            <>
                <Header />
                <Banner />
                    <div className='about'>
                        <h2>Ma passion pour le developpement web au service de vos projets numériques</h2>
                        <p>Diplômée récemment en développement web avec OpenClassrooms, j&apos;ai acquis des compétences solides grâce à des projets concrets et directement applicables en entreprise. Aujourd&apos;hui, forte de mon diplôme et de mon expérience pratique, je suis prête à relever de nouveaux défis professionnels et à contribuer au succès des entreprises numériques en mettant mes compétences et ma passion au service de projets innovants.
                            <a href= {CV} target="_blank" rel="noreferrer">Télécharger mon CV</a>
                        </p>
                    </div>
                    <div className='skills'>
                        <h3>Compétences</h3>
                        <ul>
                    {/* Utilisation du composant SkillCard pour chaque carte */}
                    <SkillCard
                        title="Frontend"
                    image={FrontendBlack}
                    description="Conception et développement d'interfaces utilisateur interactives et réactives."
                    tools="Html5 | CSS3 | SASS | React.js"
                        icon1={<IoLogoHtml5 className='iconOrange'/>}
                        icon2={<IoLogoCss3 className='iconBlue'/>}
                        icon3={<IoLogoReact />}
                    />
                    <SkillCard
                        title="Backend"
                    image={BackendBlack}
                    description="Développement de la logique métier et de la gestion des données côté serveur."
                    tools="Node.js | Express | Django"
                        icon1={<SiNodedotjs className='iconGreen'/>}
                        icon2={<SiExpress className='iconWhite'/>}
                        icon3={<SiDjango />}
                    />
                    <SkillCard 
                        title="DevOps"
                        image={DevopsBlack}
                        description="Mettre en place un pipeline d'intégration et de livraison continue"
                        tools="Docker | Slack | GitLab CI/CD"
                        icon1={<FaDocker className='iconBlue'/>}
                        icon2={<img src={Slack} alt="slack" className='iconGreen'/>}
                        icon3={<FaGitlab />}
                    />
                    <SkillCard
                        title="SEO"
                        image={SeoBlack}
                        description="Optimisation pour les moteurs de recherche afin d'améliorer la visibilité en ligne."
                        tools="Google Analytics | Google Search console | SEMrush"
                        icon1={<SiGoogleanalytics className='iconOrange'/>}
                        icon2={<SiGooglesearchconsole className='iconBlue'/>}
                        icon3={<SiSemrush />}
                    />
                    <SkillCard
                        title="Web design"
                        image={WebdesignBlack}
                        description="Conception esthétique et fonctionnelle de sites Web pour une expérience utilisateur optimale."
                        tools="Adobe XD | Figma | Adobe Illustrator"
                        icon1={<SiAdobexd className='iconPurple'/>}
                        icon2={<img src={Figma} alt="figma" className='iconGreen'/>}
                        icon3={<SiAdobeillustrator />}
                    />
                    <SkillCard
                        title="Base de Données"
                        image={DatabaseBlack}
                        description="Stockage et gestion efficaces des données pour répondre aux besoins des applications."
                        tools="MySQL | MongoDB"
                        icon1={<GrMysql className='iconBlue' />}
                        icon2={<SiMongodb />}
                    />
                        </ul>
                    </div>
                    <div className='contact'>
                        <h2>Vous avez un projet ?</h2>
                        <p>Je serais ravie de vous accompagner dans la réalisation de votre projet numérique. N&apos;hésitez pas à me contacter pour en discuter.</p>
                        {/* <button><a href="mailto:  */}
                    </div>
                <Footer />
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