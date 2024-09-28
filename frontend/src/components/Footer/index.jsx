import styled from "styled-components";
import colors from "../../utils/style/colors";
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
        margin-top: 150px;
        background-color: #00010b;
        color: #f4f4f8;
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
                border: 1px solid #007aca;
                box-shadow: 0px 0px 5px -3px  rgba(0,0,0,0.75);
                color: white;
                background-color: #007aca;
                cursor: pointer;

                &:hover {
                    box-shadow: 0px 0px 15px -3px  rgba(0,0,0,0.75);
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