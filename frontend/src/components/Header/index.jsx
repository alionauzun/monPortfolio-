                  //-----------Le header du site-----------//
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.svg';
import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny, MdMusicNote, MdMusicOff } from "react-icons/md";
import { toggleMusic, toggleDarkMode, toggleLanguage } from '../../utils/style/theme.js';
import flagUK from '../../assets/flag-of-uk.png';
import flagFR from '../../assets/flag-of-france.png';
import { useState } from 'react'; 

// import colors from '../../utils/style/colors.js'

export default function Header() {
      const [isMusicPlaying, setIsMusicPlaying] = useState(true); // Utilisez useState pour gérer l'état de la musique
      const [isDarkMode, setIsDarkMode] = useState(false); // Utilisez useState pour gérer l'état du mode sombre
    const [isFrench, setIsFrench] = useState(true); // Utilisez useState pour gérer l'état de la langue

    return (
        <StyledHeader>
            <StyledLink to="/">
                <img src={Logo} alt="logo" />
            </StyledLink>
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/portfolio">Portfolio</StyledLink>
                <StyledLink to="/blog">Blog</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
            </nav>
            <div>
                <div>
                <button className="buttonMusic" onClick={() => { toggleMusic(); setIsMusicPlaying(!isMusicPlaying); }}>
                        {isMusicPlaying ? <MdMusicNote />:<MdMusicOff />  }
                        <audio className='audio-player' src='music.mp3' />
                    </button>
                    <button className="buttonMode" onClick={() => { toggleDarkMode(); setIsDarkMode(!isDarkMode); }}>
                        {isDarkMode ?  <BsMoonStarsFill />: <MdSunny/> }
                    </button>
                    
                    <button className='buttonLanguage' onClick={() => { toggleLanguage(); setIsFrench(!isFrench); }}>
                        <img src={isFrench ? flagFR : flagUK} alt="flag" />
                        <p>{isFrench ? 'FR' : 'EN'}</p>
                    </button>
                </div>
            </div>
        </StyledHeader>
    );
}


const StyledHeader = styled.header`
      font-family: 'Avenir Next', sans-serif;
      height: 90px;
      margin-bottom: 100px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background: linear-gradient(180deg, rgba(52,40,112,1) 0%, rgba(118,95,232,1) 60%);

      @media (max-width: 768px) {
            width: 95%;
      }
      img {
            width: 180px;
            display: flex;
            justify-content: center;

            @media (max-width: 768px) {
                  width: 130px;
                  height: 130px;
            }
      }

      div {
            display: flex;
            flex-direction: row;
            margin-right: 16px;
            button {
                  background: none;
                  border: none;
                  margin: 10px;
                  outline: none;
                  cursor: pointer;

                  svg {
                        color: #E9E9ED;
                        font-size: 20px;

                        &:hover {
                              color: #0F0A2B;
                        }
                  }
            }
            .buttonMusic{
                  svg {
                        font-size: 24px;
                  }
            }

            .buttonLanguage{
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
                  border: 1px solid #E9E9ED;
                  border-radius: 20px;
                  padding: 4px 10px 4px 4px;

                  img {
                        width: 20px;
                        height: 20px;
                        margin-right: 5px;
                  }

                  p {
                        color: #E9E9ED;
                        margin: 0;
                        margin-left: 5px;
                  }

                  &:hover {
                        border: 1px solid #0F0A2B;
                        p {
                              color: #0F0A2B;
                        }
                  }

            }
      }
`

const StyledLink = styled(Link)`
      text-decoration: none;
      color: #E9E9ED;
      font-size: 20px;
      margin-right: 40px;
      margin-left: 40px;
      outline: none;

      &:hover {
            color: #0F0A2B;
      }

      &:active {
            color: #0F0A2B;
      }

      @media (max-width: 768px) {
            margin: 10px;
            text-transform: uppercase;
            font-size: 14px;
      }
`
