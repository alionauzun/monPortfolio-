// Contact.jsx
//impot des composants
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { BsTelephone, BsEnvelope } from 'react-icons/bs'
import { RiMapPinLine } from "react-icons/ri";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';



export default function Contact () {
  return (
     <StyledContact>
      <>
        <Header />
            <div className='contactPage'>
              <div className='contactPageText'>
                  <h1>Vous avez un projet ?</h1>
                  <p>Je serais ravie de vous accompagner dans la réalisation de votre projet numérique. <br/>N&apos;hésitez pas à me contacter pour en discuter.</p> 
                 
              </div>
                <div className='contactPageContainer'>
                    <div className='contactPageContent'>
                        <div className='footerFormContact'>
                            <p>alionauzun.com</p>
                            <div className='social-icons'>
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
                        </div>
                        <div className='coordonnatedContent'>
                          <div className='coordonnated'>
                            <h2>Coordonnées</h2>
                            <p>Aliona Uzun</p>
                                <p><BsTelephone /> +33 61 33 39 498 </p>
                                <mail><BsEnvelope />aliona-balti@outlook.fr</mail>
                            <div className='contact'>
                                <adress> <RiMapPinLine />Oignies, France </adress>
                                </div>
                            </div>
                        </div> 
                                            
                        <form>
                            <div className='formContent'>
                              <div>
                                <label htmlFor="firstName">Prénom</label>
                                <input type="text" id="firstName" name="firstName" placeholder="ex. John" />
                              </div>
                              <div>
                                <label htmlFor="name">Nom</label>
                                <input type="text" id="name" name="name" placeholder="ex. Doe" />
                              </div>
                              <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="ex. johndoe@.exemple.com" />
                              </div>
                              <div>
                                <label htmlFor="phone">Téléphone</label>
                                <input type="tel" id="phone" name="phone" placeholder="ex. +1 234 5678 9786" />
                              </div>
                              <div>
                                <label className='labelMessage' htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="Entrez votre message"></textarea>
                              </div>
                              <button type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        <Footer />
      </>
    </StyledContact>
  )
}


//-----------------Styles CSS-----------------//

const StyledContact = styled.div`
.contactPage {
    display: flex;
    flex-direction: column;
    background-color: ${colors.lightGrey};
    color: ${colors.darkGrey};
    font-size: 1.2em;

    .contactPageText {
        text-align: center;
        h1 {
            margin-top: 0;
            margin-bottom: 20px;
            color: ${colors.primary};
        }
        p {
            line-height: 1.5;
            margin-bottom: 80px;
        }
      }

    .contactPageContainer{
      box-shadow: 0px 0px 11px -3px rgba(0,0,0,0.75);
      background-color: ${colors.primary};
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 900px;
      
      margin-bottom: 80px;

      .contactPageContent {  
          width: 1200px;
          height: 500px;
          position: relative; 
          height: 600px;
      
      .coordonnatedContent {
          background-color: #190D59;
          flex-direction: column;
          width: 52%;
          height: 65%;
          position: absolute;
          border-radius: 10px 0;
          top: 0;

      .coordonnated {
          padding-left: 100px;
          color: white;
          display: flex;
          flex-direction: column;
          h2 {
              margin-bottom: 20px;
              font-family: 'Avenir Next';
              font-size: 48px;
              font-weight: 600;
              letter-spacing: 1px;
          }
          p {
              margin-bottom: 20px;
              svg{
                margin-right: 15px;
              }
          }
          mail {
              display: flex;
              align-items: center;
              gap: 20px;
              margin-bottom: 20px;
          }
          adress {
              display: flex;
              align-items: center;
              gap: 20px;
          }
        }
      }

      .footerFormContact {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        margin-top: 20px;
        background-color: #E0DCFA;
        position: absolute;
        width: 100%;
        height: 35%;
        bottom: 0;
        border-radius: 0px 0 10px 10px;

      p {
          margin: 20px;
          margin-bottom: 0;
          margin-right: 40px;
          font-weight: bold;
          color: #190D59;
      }
        .social-icons {
          padding-right: 40px;
          padding-bottom: 20px;
          display: flex;
          gap: 20px;
          margin-top: 20px;
          div {
              font-size: 30px;
              color: #190D59;
              cursor: pointer;
              transition: 0.3s;
              &:hover {
                  color: ${colors.primary};
              }
          }
      }
    }
  }
      form {
        box-shadow: 0px 0px 17px -3px  rgba(0,0,0,0.75);
          display: flex;
          background-color: white;
          flex-direction: column;
          width: 50%;
          height: 75%;
          position: absolute;
          top: 0;
          border-radius: 10px;
          right: 0;

        .formContent {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          align-items: center;
          padding-top: 50px;

          div {
              display: flex;
              flex-direction: column;
              width: 100%;
              align-items: center;
              &:nth-child(-n + 4) {
                width: 36%;
              }
          

          label {
              margin-bottom: 6px;
              align-self: flex-start;
              color: #190D59;
              font-family: 'Avenir Next', sans-serif;
              font-size: 14px;
            }
            #message {
              width: 82%;
            }

            .labelMessage {
              margin-left: 55px;
            }
          
            input[type="text"], input[type="email"], input[type="tel"], textarea {
              width: 100%; /* Ajustement pour que les inputs occupent 100% de leur parent */
              margin-bottom: 20px;
              padding: 10px;
              border-radius: 5px;
              border: 1px solid ${colors.tertiary};
            }
          }
          /* CSS pour personnaliser les placeholders */
          ::-webkit-input-placeholder { /* Pour Chrome et Safari */
              font-size: 14px;
              color: #B1AEC1; /* Couleur grise */
            }
            :-moz-placeholder { /* Pour Firefox 18- */
              font-size: 14px;
              color: #B1AEC1; /* Couleur grise */
            }
            ::-moz-placeholder { /* Pour Firefox 19+ */
              font-size: 14px;
              color: #B1AEC1; /* Couleur grise */
            }
            :-ms-input-placeholder { /* Pour IE */
              font-size: 14px;
              color: #B1AEC1; /* Couleur grise */
            }
          button {
            padding: 14px;
            margin-top: 20px;
            border-radius: 5px;
            background-color: ${colors.primary};
            color: white;
            font-weight: bold;
            cursor: pointer;
            width: 40%;
            border: 1px solid #765fe8;
            position: absolute;
            bottom: 55px;
            right: 40px;

            &:hover {
                background-color: #190D59;
                border: 1px solid #190D59;
                  }
                }
              }
            }
          }
        }
      }
    }
`