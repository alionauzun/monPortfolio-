import styled from 'styled-components';
import PropTypes from 'prop-types';


function ReadMoreButton({ expanded, onClick }) {
    return (
        <StyledReadMore expanded={expanded}>
            <button className={`learn-more ${expanded ? 'expanded' : ''}`} onClick={onClick}>
                <span className="circle" aria-hidden="true">
                    <span className={`icon arrow ${expanded ? 'expanded' : ''}`}></span>
                </span>
                <span className="button-text">{expanded ? 'Réduire' : 'Lire la suite'}</span>
            </button>
        </StyledReadMore>
    );
}

ReadMoreButton.propTypes = {
    expanded: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ReadMoreButton;


const StyledReadMore = styled.section`
button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
}

button.learn-more {
    width: 12rem;
    height: auto;
    display: flex;
    justify-content: ${props => props.expanded ? 'flex-end' : 'flex-start'};
    align-items: center;
}

button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    margin: 0;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 1.625rem;
    background: linear-gradient(-60deg, #33EFFF 15%, #1147BC 85%);
    background-size: 200% 200%;
    animation: ani_gradient 5s ease infinite; 
    display: flex;
    align-items: center;
    justify-content: center;
    order: ${props => props.expanded ? 2 : 1};
}
@keyframes ani_gradient {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
}

button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
}

button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1rem;
    height: 0.125rem;
    background: none;
}

button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.32rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
}

button.learn-more .circle .icon.arrow.expanded{
    left: 10.3rem;
        &:before {
            transform: rotate(-135deg);
            right: 0.2rem;
        }
}

button.learn-more .button-text {
    font-size: 14px;
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 15px;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #229BDE;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    order: ${props => props.expanded ? 1 : 2};
}

button:hover .circle {
    width: 100%;
}

button:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
}

button:hover .button-text {
    color: #fff;
}
`
