import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ContactButton() {
    return (
        <StyledContactButton>
            <Link to="/contact">
                <button className="button">
                    <span className="transition"></span>
                    {/* <span className="gradient"></span> */}
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
    background-color: #c2d1ffbf;
    color: #0544ff;
    border: 1px solid #0544ff;
    position: relative;
    overflow: hidden;
    border-radius: 0.6em;
    cursor: pointer;
  }
  
//   .gradient {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     left: 0;
//     top: 0;
//     border-radius: 0.6em;
//     margin-top: -0.25em;
//     background-image: linear-gradient(
//       rgba(0, 0, 0, 0),
//       rgba(0, 0, 0, 0),
//       rgba(0, 0, 0, 0.3)
//     );
//   }
  
  .label {
    position: relative;
    // top: -1px;
  }
  
  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: #C2D1FF;
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