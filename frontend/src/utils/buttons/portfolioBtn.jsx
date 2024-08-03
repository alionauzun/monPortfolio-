import styled from "styled-components";
import { Link } from "react-router-dom";

export default function PortfolioButton() {
    return (
        <StyledPortfolioButton>
            <Link to="/portfolio">
                <button className="buttonPortfolio">
                    <span className="transition"></span>
                    <span className="label">Portfolio</span>
                </button>
            </Link>
        </StyledPortfolioButton>
    );
    }

const StyledPortfolioButton = styled.section`

button {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    font-size: 17px;
    padding:  12px 22px;
    font-weight: 500;
    // background-color: #04133a6b;
    background-color: #D6FEFF;
    color: #0A1045;
    border: 1px solid #0A1045;
    box-shadow: 0px 0px 16px -3px #355FE9;
    position: relative;
    overflow: hidden;
    border-radius: 0.6em;
    cursor: pointer;

    &:hover{
      // color: #0A1045;
      // border: 0.5px solid #ADFEFF;
    }
  }
  
  .label {
    position: relative;
  }
  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: #85FDFF;
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