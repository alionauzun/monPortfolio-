import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ContactButton() {
    return (
        <StyledContactButton>
            <Link to="/contact">
                <button className="button">
                    <span className="transition"></span>
                    <span className="label">Contact</span>
                </button>
            </Link>
        </StyledContactButton>
    );
    }

const StyledContactButton = styled.section`
button {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    font-size: 17px;
    padding:  12px 28px;
    font-weight: 500;
    background-color: #0A1045;
    color: #ADFEFF;
    border: 0.5px solid #ADFEFF;
    box-shadow: 0px 0px 7px 0px #ADFEFF;
    position: relative;
    overflow: hidden;
    border-radius: 0.6em;
    cursor: pointer;

    &:hover{
      box-shadow: 0px 0px 10px 2px #30fdff;
    }
  }

  .label {
    position: relative;
  }
  
  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: #0F186B;
    border-radius: 9999px;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  button:hover .transition {
    width: 14em;
    height: 14em;
  }
  
  button:active {
    transform: scale(0.97);
    }
`