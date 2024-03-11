                    //------Le composant Banner------// 
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import imageHome from '../../assets/developp.png';
import portfolioImage from '../../assets/projets.jpeg';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Banner() {
    const [portfolioPage, setPortfolioPage] = useState(false);
    const location = useLocation();

//-----------------fonction pour détecter si c'est la page Portfolio--------//
    useEffect(() => {
        if (location.pathname === '/portfolio') {
            setPortfolioPage(true);
        } else {
            setPortfolioPage(false); // Réinitialisation si le chemin n'est pas '/portfolio'
        }
    }, [location.pathname]);

//-----------------Effet de texte dynamique pour le mot MERN-----------------//
    useEffect(() => {
        const dynamicText = document.querySelector('p span');
        const mernWords = ["MongoDB", "Express.js", "React.js", "Node.js"];

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeEffect = () => {
            const currentWord = mernWords[wordIndex];
            const currentChar = currentWord.substring(0, charIndex);
            dynamicText.textContent = currentChar;
            dynamicText.classList.add('stop-blinking');
            if (!isDeleting && charIndex < currentWord.length) {
                charIndex++;
                setTimeout(typeEffect, 200);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                setTimeout(typeEffect, 100);
            } else {
                isDeleting = !isDeleting;
                dynamicText.classList.remove('stop-blinking');
                wordIndex = !isDeleting ? (wordIndex + 1) % mernWords.length : wordIndex;
                setTimeout(typeEffect, 1200);
            }
        };

        typeEffect();
    }, []);

    return (
        <StyledBanner>
            <section className={portfolioPage ? 'banner_portfolio' : 'banner'}>
                {!portfolioPage && (
                    <div className="content">
                        <div className="text">
                            <p>Salut, je suis Aliona </p>
                            <h1>Développeuse web</h1>
                            <p>Full-stack MERN <span> MongoDB</span></p>
                            <div className="buttons">

                                <Link to="/portfolio">
                                    <button className="buttonPortfolio">Portfolio</button>
                                </Link>

                                <Link to="/contact">
                                    <button className="buttonContact">Contact</button>
                                </Link>

                            </div>
                        </div>
                        <div className="social-icons">
                            <div>
                            <FaLinkedin />
                            </div>
                            <div>
                            <FaInstagram />
                            </div>
                            <div>
                            <FaFacebook />
                            </div>
                            <div>
                            <FaTwitter />
                            </div>
                            <div>
                            <FaGithub />
                            </div>
                        </div>
                        <div className="image">
                            <img src={imageHome} alt="developpeuse web" />
                        </div>
                    </div>
                )}
            </section>
        </StyledBanner>
    );
}

//-----------------Styles CSS-----------------//
const StyledBanner = styled.div`
    .banner {
        padding: 0 50px 140px 50px;
        border-bottom: #dddddd solid 1px;
        

        @media (max-width: 768px) {
            width: 95%;
            justify-content: flex-start;
        }
    }
    .banner_portfolio {
        background-image: url(${portfolioImage});
        background-size: cover;
        background-position: center;
        box-shadow: inset 5em 20em rgba(0, 0, 0, 0.3);
        height: 200px;
        display: flex;
        margin: 0 auto;
        margin-bottom: 20px;

        @media (max-width: 768px) {
            width: 95%;
            height: 230px;
            border-radius: 10px;
        }
    }
    .content {
        display: flex;
        justify-content: space-between;
        max-width: 1920px;
        position: relative;
        .text {
            margin: 100px 100px 0 0;
            p {
                font-size: 24px;
                color: #787878;
                font-family: 'Avenir Next', sans-serif;
                margin-bottom: 10px;
            }
            h1 {
                font-size: 40px;
                margin-top: 20px;
                margin-bottom: 25px;
                font-family: 'Georgia', sans-serif;
                color: #765fe8;
                letter-spacing: 1px;
            }
            p {
                font: 25px, 'Avenir Next', sans-serif;
                font-weight: 400;
                color: #535365;
                letter-spacing: 1px;
                margin-bottom: 20px;
                span {
                    position: relative;
                    color: #765fe8;
                }
                span::before {
                    content: '';
                    right: -8px;
                    top: 50%;
                    position: absolute;
                    width: 2px;
                    height: 20px;
                    background: #765fe8;
                    transform: translateY(-45%);
                    animation: blink 1s infinite;
                }
                span.stop-blinking::before {
                    animation: none;
                }
            }
            .buttons {
                display: flex;
                justify-content: flex-end;
                gap: 20px;
                margin-top: 100px;
                button {
                    font-size: 15px;
                    font-family: 'Avenir Next', sans-serif;
                    border: 1px solid #765fe8;
                    background: #765fe8;
                    color: #fff;
                    padding: 10px 40px;
                    border-radius: 10px;
                    cursor: pointer;
                    box-shadow: 0 0 10px #765fe8;
                    transition: all 0.3s ease-in-out;
                    &:hover {
                        Box-shadow: 0 0 12px #765fe8;
                        padding: 11px 41px;
                    }
                }
                .buttonPortfolio {
                    background: #fff;
                    color: #765fe8;
                    transition: all 0.3s ease-in-out;
                    margin-right: 10px;
                    &:hover {
                        box-shadow: 0 0 12px #765fe8;
                    }
                }
                .buttonContact {
                    margin-left: 10px;
                    &:hover {
                        margin-left: 8px;
                    }
                }
            }
        }
    }
    .image img {
        max-width: 570px;
        filter: blur(1.5rem);
    }
    .social-icons {
        display: flex;
        gap: 25px;
        position: absolute;
        bottom: 20px;

        div{
            font-size: 32px;
            color: #BCBCC8;
            cursor: pointer;
            filter: drop-shadow(1px 1px 0px #765fe8);
            transition: all 0.3s ease-in-out;
            &:hover {
                color: #765fe8;
                filter: drop-shadow(1px 1px 1px #765fe8);
                }
        }
    }
`;
