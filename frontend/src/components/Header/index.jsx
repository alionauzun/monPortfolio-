                  //-----------Le header du site-----------//
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.svg';
import { BsMoonStarsFill } from "react-icons/bs";
import { TiAdjustBrightness } from "react-icons/ti";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { toggleMusic, toggleDarkMode, toggleLanguage } from '../../utils/style/theme.js';
import flagUK from '../../assets/flag-of-uk.png';
import flagFR from '../../assets/flag-of-france.png';
import { useState } from 'react'; 

import colors from '../../utils/style/colors.js'

export default function Header() {
      const [isMusicPlaying, setIsMusicPlaying] = useState(true); // Utilisez useState pour gérer l'état de la musique
      const [isDarkMode, setIsDarkMode] = useState(false); // Utilisez useState pour gérer l'état du mode sombre
    const [isFrench, setIsFrench] = useState(true); // Utilisez useState pour gérer l'état de la langue

    return (
        <StyledHeader>
            <StyledLink className="logo" to="/">
                <img src={Logo} alt="logo" />
            </StyledLink>
            <nav>
                  <StyledLink to="/">
                        <span className="span-mother">
                              <span>A</span>
                              <span>c</span>
                              <span>c</span>
                              <span>u</span>
                              <span>e</span>
                              <span>i</span>
                              <span>l</span>
                        </span>
                        <span className="span-mother2">
                              <span>A</span>
                              <span>c</span>
                              <span>c</span>
                              <span>u</span>
                              <span>e</span>
                              <span>i</span>
                              <span>l</span>
                        </span>
                  </StyledLink>
                  <StyledLink to="/portfolio">
                        <span className="span-mother">
                              <span>P</span>
                              <span>o</span>
                              <span>r</span>
                              <span>t</span>
                              <span>f</span>
                              <span>o</span>
                              <span>l</span>
                              <span>i</span>
                              <span>o</span>
                        </span>
                        <span className="span-mother2">
                              <span>P</span>
                              <span>o</span>
                              <span>r</span>
                              <span>t</span>
                              <span>f</span>
                              <span>o</span>
                              <span>l</span>
                              <span>i</span>
                              <span>o</span>
                        </span>
                  </StyledLink>
                  <StyledLink to="/blog">
                        <span className="span-mother">
                              <span>B</span>
                              <span>l</span>
                              <span>o</span>
                              <span>g</span>
                        </span>
                        <span className="span-mother2">
                              <span>B</span>
                              <span>l</span>
                              <span>o</span>
                              <span>g</span>
                        </span>
                  </StyledLink>
                  <StyledLink to="/contact">
                        <span className="span-mother">
                              <span>C</span>
                              <span>o</span>
                              <span>n</span>
                              <span>t</span>
                              <span>a</span>
                              <span>c</span>
                              <span>t</span>
                        </span>
                        <span className="span-mother2">
                              <span>C</span>
                              <span>o</span>
                              <span>n</span>
                              <span>t</span>
                              <span>a</span>
                              <span>c</span>
                              <span>t</span>
                        </span>
                  </StyledLink>
            </nav>
            <div>
                <div>
                <button className="buttonMusic" onClick={() => { toggleMusic(); setIsMusicPlaying(!isMusicPlaying); }}>
                        {isMusicPlaying ? <MdMusicNote />:<MdMusicOff />  }
                        <audio className='audio-player' src='music.mp3' />
                    </button>
                    <button className="buttonMode" onClick={() => { toggleDarkMode(); setIsDarkMode(!isDarkMode); }}>
                        {isDarkMode ?  <BsMoonStarsFill />: <TiAdjustBrightness/> }
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
      background-color: #00010B;
      font-family: 'Avenir Next', sans-serif;
      height: 75px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 20px 0;
      justify-content: space-between;
      // position: relative;

      @media (max-width: 768px) {
            width: 95%;
      }
      .logo {
            padding: 18px 20px;
            width: 20%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
      
      img {
            width: 180px;
            display: flex;
            justify-content: center;

            @media (max-width: 768px) {
                  width: 130px;
                  height: 130px;
            }
      }
}
      nav {
            display: flex;
            align-items: center;
            gap: 40px;
      }

      div {
            display: flex;
            flex-direction: row;
            margin-right: 16px;
            
            button {
                  background: none;
                  border: none;
                  margin: 10px;
                  margin-bottom: 0;
                  outline: none;
                  cursor: pointer;

                  svg {
                        color:#BCBCC8;    
                        font-size: 20px;
                        &:hover {
                              color: ${colors.quaternary};
                        }
                  }
            }
            .buttonMusic{
                  svg {
                        font-size: 20px;
                  }
            }

            .buttonLanguage{
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
                  border: 1px solid ${colors.tertiary};
                  border-radius: 20px;
                  padding: 4px 10px 4px 4px;

                  img {
                        width: 20px;
                        height: 20px;
                        margin-right: 5px;
                  }

                  p {
                        color: #fff;
                        margin: 0;
                        margin-left: 5px;
                  }

                  &:hover {
                        border: 1px solid #0F0A2B;
                  }

            }
      }
`

const StyledLink = styled(Link)`
      text-decoration: none;
      width: 95.02px;
      height: 42.66px;
      font: 400 19px / 1.1 'Avenir Next', sans-serif;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      .span-mother {
            display: flex;
            overflow: hidden;
          }
        
          &:hover .span-mother {
            position: absolute;
          }
        
          &:hover .span-mother span {
            transform: translateY(1.2em);
          }
        
          .span-mother span:nth-child(1) {
            transition: 0.2s;
          }
        
          .span-mother span:nth-child(2) {
            transition: 0.3s;
          }
        
          .span-mother span:nth-child(3) {
            transition: 0.4s;
          }
        
          .span-mother span:nth-child(4) {
            transition: 0.5s;
          }
        
          .span-mother span:nth-child(5) {
            transition: 0.6s;
          }
        
          .span-mother span:nth-child(6) {
            transition: 0.7s;
          }
        
          .span-mother2 {
            display: flex;
            position: absolute;
            overflow: hidden;
          }
        
          .span-mother2 span {
            transform: translateY(-1.2em);
          }
        
          &:hover .span-mother2 span {
            transform: translateY(0);
          }
        
          .span-mother2 span {
            transition: 0.2s;
          }
        
          .span-mother2 span:nth-child(2) {
            transition: 0.3s;
          }
        
          .span-mother2 span:nth-child(3) {
            transition: 0.4s;
          }
        
          .span-mother2 span:nth-child(4) {
            transition: 0.5s;
          }
        
          .span-mother2 span:nth-child(5) {
            transition: 0.6s;
          }
        
          .span-mother2 span:nth-child(6) {
            transition: 0.7s;
          }
        `;