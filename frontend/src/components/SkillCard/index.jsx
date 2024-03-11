import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../utils/style/colors';

const SkillCard = ({ title, image, description, tools, icon1, icon2, icon3 }) => {
    return (
        <StyledSkillCard>
            <li className='card'>
                <div className="face front">
                    <img src={image} alt={title} />
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p className='tools'><i>Outils</i> : {tools}</p>
                </div>
                <div className="face back">
                    <div className='iconTool icon1'>
                        {icon1}
                    </div>
                    <div className='iconTool icon2'>
                        {icon2}
                    </div>
                    <div className='iconTool icon3'>
                        {icon3}
                    </div>
                </div>
            </li>
        </StyledSkillCard>
    );
};

SkillCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    icon1: PropTypes.element.isRequired,
    icon2: PropTypes.element.isRequired,
    icon3: PropTypes.element.isRequired,
};

export default SkillCard;


// Styled CSS
const StyledSkillCard = styled.div`
            width: 22%;
            position: relative; 
            perspective: 1000px;
            .face {
                height: 350px;
                width: 100%;
                padding: 20px;
                margin-bottom: 25px;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                overflow: hidden;
                border-radius: 10px;
                transition: 0.5s;

                &.front {
                    position: relative;
                    transform-style: preserve-3d;
                    transition: transform 0.5s;
                    backface-visibility: hidden; 
                    box-shadow: 0 0 20px 0 ${colors.primary};

                    img {
                        width: 50px;
                        height: 50px;
                    }

                    h4 {
                        font: 500 20px 'Avenir Next', sans-serif;
                        letter-spacing: 1.5px;
                        margin: 20px 0;

                        &::after {
                            content: '';
                            display: block;
                            width: 20%;
                            height: 3px;
                            background-color: ${colors.primary};
                            margin-top: 5px;
                        }
                    }

                    p {
                        font-size: 17px;
                        margin: 0;
                        margin-bottom: 40px;
                        line-height: 1.5;

                        span {
                            color: ${colors.primary};
                            font-weight: 700;
                            margin: 0 5px;
                        }
                    }

                    .tools {
                        font-size: 15px;
                        color: #787878;
                        margin: 0;
                    }
                }

                &.back {
                    background: ${colors.quaternary};
                    border-radius: 20px;
                    display: flex;
                    align-items: end;
                    position: absolute; /* Position absolue pour la superposition */
                    top: 0;
                    left: 0;
                    backface-visibility: hidden; /* Cacher le dos lors de la rotation */
                    transform: rotateY(180deg); /* Initiallement, tourner pour le cacher */
                    transition: transform 0.5s;

                    .iconTool {
                        box-shadow: 0px 0px 8px 2px #A972FF;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        background-color: black;
                        color: ${colors.primary};
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 30px;

                        svg {
                            font-size: 32px;
                        }
                    }
                    
                    .icon1{
                        align-self: start;
                    }
                    .icon2 {
                        align-self: center;
                    }
                    .icon3 {
                        align-self: end;
                    }
                }
            }
            &:hover .front {
                transform: perspective(600px) rotateY(-180deg);
            }
            &:hover .back {
                transform: perspective(600px) rotateY(0deg);
            }
        }
`;