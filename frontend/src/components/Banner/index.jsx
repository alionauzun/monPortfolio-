import { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useLocation } from 'react-router-dom';
import colors from '../../utils/style/colors';
import videoHome from '../../assets/videoHome.mov';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import PortfolioButton from '../../utils/buttons/portfolioBtn';
import ContactButton from '../../utils/buttons/contactBtn';

export default function Banner() {
    const [portfolioPage, setPortfolioPage] = useState(false);
    const location = useLocation();
    const videoRef = useRef(null);

    // Détection de la page Portfolio
    useEffect(() => {
        if (location.pathname === '/portfolio') {
            setPortfolioPage(true);
        } else {
            setPortfolioPage(false);
        }
    }, [location.pathname]);

    // Effet de texte dynamique pour le mot MERN
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

    // Démarrage de la vidéo avec délai
    useEffect(() => {
        const timer = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <StyledBanner>
            <section className={portfolioPage ? 'banner_portfolio' : 'banner'}>
                {!portfolioPage && (
                    <div className="wrapper-banner">
                        <div className="content">
                            <div className="text">
                                <p>Salut, je suis Aliona </p>
                                <h1>Développeuse web</h1>
                                <p>Full-stack MERN <span> MongoDB</span></p>
                            </div>    
                            <div className="buttons">
                                <PortfolioButton />
                                <ContactButton />
                            </div>
                            <div className="socials-buttons">
                                <ul className="wrapper-socials-icons">
                                    <li className='icon linkedin'>
                                        <a href="https://www.linkedin.com/in/jean-philippe-royer-1b1b1b1b1/">
                                            <FaLinkedin />
                                        </a>
                                    </li>
                                    <li className='icon instagram'>
                                        <a href="https://www.instagram.com/jeanphilipperoyer/">
                                            <FaInstagram />
                                        </a>
                                    </li>
                                    <li className='icon facebook'>
                                        <a href="https://www.facebook.com/jeanphilipperoyer">
                                            <FaFacebook />
                                        </a>
                                    </li>
                                    <li className='icon twitter'>
                                        <a href="https://twitter.com/jeanphilipperoy">
                                            <FaTwitter />
                                        </a>
                                    </li>
                                    <li className='icon github'>
                                        <a href="github.com/jeanphilipperoyer">
                                            <FaGithub />
                                        </a>
                                    </li>
                                </ul>
                            </div>    
                        </div>

                        <div className="video">
                            <video ref={videoRef} loop muted>
                                <source src={videoHome} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                )}
            </section>
        </StyledBanner>
    );
}

// Styles CSS
const videoIn = keyframes`
  from {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

const StyledBanner = styled.div`
    .banner {
        height: 800px;
        .wrapper-banner {
            // height: 700px;
            .content {
                height: 700px;
                position: absolute;
                z-index: 2;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 20px;
                padding-left: 40px;
                padding-top: 90px;
                width: 37%;
                backdrop-filter: blur(10px);

                .text {
                    display: flex;
                    flex-direction: column;
                    height: 336px;
                    h1 {
                        font-size: 54px;
                        margin-top: 20px;
                        margin-bottom: 25px;
                        font-family: 'Georgia', sans-serif;
                        color: #fff;
                        letter-spacing: 1px;
                    }
                    p {
                        font-size: 26px;
                        color: ${colors.tertiary};
                        letter-spacing: 1px;
                        margin-bottom: 20px;
                        span {
                            position: relative;
                            color: #37fdff;
                        }
                        span::before {
                            content: '';
                            right: -8px;
                            top: 50%;
                            position: absolute;
                            width: 2px;
                            height: 20px;
                            transform: translateY(-45%);
                            animation: blink 0.5s infinite;
                        }
                        span.stop-blinking::before {
                            animation: none;
                        }
                    }
                }
                .buttons {
                    display: flex;
                    width: 98%;
                    justify-content: flex-end;
                    gap: 48px;
                }
            }

            .socials-buttons {
                width: 100%;
                .wrapper-socials-icons {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 20px;
                    list-style: none;
                    width: 100%;
                    padding: 40px 0;
                    margin-top: 30px;
                    .icon {
                        position: relative;
                        margin: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        cursor: pointer;
                        transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

                        svg {
                            font-size: 32px;
                            color: ${colors.tertiary};
                            transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                        }
                        &:hover {
                            transform: translateY(-5px);
                            svg {
                                color: #8f8f8f;
                                // color: #b7b3f9;
                            }
                        }
                    }
                }
            }

            .video {
                position: absolute;
                z-index: 1;
                display: flex;
                justify-content: flex-end;
                align-items: flex-start;
                width: 100%;
                animation: ${videoIn} 1s cubic-bezier(0.5, 0, 0.1, 1) 2s backwards;

                video {
                    height: 700px;
                    object-fit: cover;
                }
            }
        }
    }
`;
