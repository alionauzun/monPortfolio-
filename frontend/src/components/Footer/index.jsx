import styled from "styled-components";
import colors from "../../utils/style/colors";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { RiMapPinLine } from "react-icons/ri";
import { BsTelephone, BsEnvelope } from "react-icons/bs";


export default function Footer() {
    return (
        <StyledFooter>
            <div className="footerContent">
                <div className="newsletter">
                    <h2>Newsletter</h2>
                    <p>Recevez les dernières articles et mises à jour</p>
                    <form>
                        <input type="text" placeholder="Votre adresse email" />
                        <button>S&apos;inscrire</button>
                    </form>
                </div>
                <div className="footerContact">
                    <h2>Me contacter</h2>
                    <p>Aliona Uzun</p>
                    <p><RiMapPinLine />Oignies, France</p>
                    <p><BsTelephone /> +33 61 33 39 498</p>
                    <p><BsEnvelope />aliona-balti@outlook.fr</p>
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
            </div>

        </StyledFooter>
    );
}

// Styled CSS

const StyledFooter = styled.footer`

    .footerContent {
        height: 300px;
        display: flex;
        justify-content: space-between;
        padding: 20px 50px;
        border-top: 1px solid #dddddd;
        margin-top: 150px;
        background: linear-gradient(180deg, rgba(118,95,232,1) 0%, rgba(52,40,112,1) 90%);
        color: white;
        font-family: 'Avenir Next', sans-serif;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }

        h2 {
            font-size: 24px;
            margin-bottom: 10px;
            font-weight: 600;
        }

        p {
            margin-bottom: 20px;
            font-size: 18px;
            width: 80%;
        }

        form {
            width: 80%;
            display: flex;
            flex-direction: column;
            input {
                margin-bottom: 20px;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid ${colors.tertiary};
            }
            button {
                padding: 10px;
                border-radius: 5px;
                border: 1px solid ${colors.primary};
                box-shadow: 0px 0px 5px -3px  rgba(0,0,0,0.75);
                color: white;
                background-color: ${colors.primary};
                cursor: pointer;

                &:hover {
                    box-shadow: 0px 0px 15px -3px  rgba(0,0,0,0.75);
                }
            }
        }

        .social-icons {
            display: flex;
            gap: 20px;
            margin-top: 24px;
            div {
                font-size: 30px;
                cursor: pointer;
                transition: 0.3s;
                &:hover {
                    color: ${colors.tertiary};
                }
            }
        }
        
        .footerContact{
            width: 25%;

            @media (max-width: 768px) {
                width: 80%;
                text-align: center;
            }

            p {
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
        }
    }
`;