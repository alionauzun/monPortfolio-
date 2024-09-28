import styled from 'styled-components';

const Hexagon = ({ image }) => {
    return (
      <HexagonWrapper>
        <img src={image} alt="Project" />
      </HexagonWrapper>
    );
};

export default Hexagon;
  
const HexagonWrapper = styled.div`
  width: 173px; /* Ajustez selon vos besoins */
  height: 150px; /* Ajustez selon vos besoins */
  background-color: #64c7cc;
  position: relative;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  margin: 10px;
  transform-style: preserve-3d;
  transform: rotateX(20deg) rotateY(20deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: rotateX(0deg) rotateY(0deg) scale(1.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
    transform: translateZ(-20px);
    clip-path: inherit;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: inherit;
  }

  border: 5px solid #0ff; /* Bordure fluo */
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5); /* Effet fluo */
`;


