import styled from "styled-components";
import CV from '../../assets/cv.pdf';

function DownloadButton() {
    return (
        <StyledDownload>
            {/* <button className="Cv-btn"> */}
            <a href={CV} target="_blank" rel="noreferrer">
                <span className="folderContainer">
                  <svg
                    className="fileBack"
                    width="146"
                    height="113"
                    viewBox="0 0 146 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
                        fill="url(#paint0_linear_117_5)"
                      ></path>
                  </svg>
                  <svg
                    className="filePage"
                    width="88"
                    height="99"
                    viewBox="0 0 88 99"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="88" height="99" fill="url(#paint0_linear_117_6)"></rect>
                    <defs>
                      <linearGradient
                        id="paint0_linear_117_6"
                        x1="0"
                        y1="0"
                        x2="81"
                        y2="160.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="#686868"></stop>
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg
                    className="fileFront"
                    width="160"
                    height="79"
                    viewBox="0 0 160 79"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
                      fill="url(#paint0_linear_117_5)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_117_5"
                        x1="38.7619"
                        y1="8.71323"
                        x2="66.9106"
                        y2="82.8317"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#a040fd"></stop>
                        <stop offset="1" stopColor="#5251f2"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <p className="text">Mon CV</p>
            </a>
            {/* </button> */}

        </StyledDownload>
    );
}

export default DownloadButton;

const StyledDownload = styled.section`
a{
  height: 46px;
  width: 220px;
  border: 5px double #E0DCFA;
  cursor: pointer;
  transition: all 0.3s;

  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.folderContainer {
  width: 36px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}
.fileBack {
  z-index: 1;
  width: 80%;
  height: auto;
}
.filePage {
  width: 50%;
  height: auto;
  position: absolute;
  z-index: 2;
  transition: all 0.3s ease-out;
}
.fileFront {
  width: 85%;
  height: auto;
  position: absolute;
  z-index: 3;
  opacity: 0.95;
  transform-origin: bottom;
  transition: all 0.3s ease-out;
}
.text {
  color: #E0DCFA;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin: 0;
}
a:hover .filePage {
  transform: translateY(-5px);
}
// .Cv-btn:hover {
//   background-color: #000533;
// }
a:active {
  transform: scale(0.95);
}
a:hover .fileFront {
  transform: rotateX(30deg);
}
`