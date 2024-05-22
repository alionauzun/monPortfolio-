import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../../utils/style/colors.js';

export default function CardSingleImg({ id, title, image,}) {
    return (
        <StyledLink to={`/projet/${id}`}>
            <h2>{title}</h2>
            <div className='imgContainer'>
                <figure className='img-wrapper'>
                    <img src={image} alt={title} />
                </figure>
            </div>
        </StyledLink>
    );
}

CardSingleImg.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};



const StyledLink = styled(Link)`
    width: 49%;
    height: 50vh;
    position: relative;
    background: ${colors.tertiary};
    opacity: 0.9;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(3n+1) {
        background-color:${colors.secondary} 
    }
    &:hover {
        opacity: 1;
    }
    h2 {
        font: 500 14px 'Avenir Next', sans-serif;
        margin-bottom: 20px;
        position: absolute;
        top: 0;
        left: 20px;
        text-transform: uppercase;
        color: white;
        background: #94949a;
        padding: 2px 5px;
    }
    .imgContainer {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: drop-shadow(1px 8px 5px rgba(15,10,43, 0.4));
        }
    
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;
