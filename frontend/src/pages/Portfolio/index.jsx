//impot des composants
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import CardSingleImg from '../../components/PortfolioCards/CardSingleImg';
// import CardTwinImg from '../../components/PortfolioCards/CardTwinImg';
import styled from 'styled-components'
// import datas from '../../data/data'
import Hexagon from '../../components/Hexagon'
// import colors from '../../utils/style/colors'

// import imageUneBonneBaladeRecto from '../../assets/portfolio/rectoUneBonneBalade.jpeg'
// import imageUneBonneBaladeVerso from '../../assets/portfolio/versoUneBonneBalade.jpeg'
// import imageKasa from '../../assets/portfolio/kasa.png'


const projects = [
    { id: 1, image: '/images/image1.jpg' },
    { id: 2, image: '/images/image2.jpg' },
    { id: 3, image: '/images/image3.jpg' },
    { id: 4, image: '/images/image4.jpg' },
    { id: 5, image: '/images/image5.jpg' },
    { id: 6, image: '/images/image6.jpg' },
    { id: 7, image: '/images/image7.jpg' },
  ];

export default function Portfolio() {
    return (
        <>
        <StyledPortfolio>
            <Header />
                <StyledMain>
                    <PortfolioWrapper>
                        {projects.map(project => (
                            <Hexagon key={project.id} image={project.image} />
                        ))}
                    </PortfolioWrapper>
                                {/* <div className='portfolioPageContent'>
                                    <div className='card-group'>
                                    {datas.map(data => {
                                        return (
                                        <CardSingleImg
                                            key={data.id}
                                            id={data.id}
                                            title={data.title}
                                            cover={data.cover}
                                        />
                                        )
                                    }
                                    )}
                                    </div>


                                    <div className='card-group'>
                                        {datas.map(data => {
                                            return (
                                            <CardTwinImg
                                                key={data.id}
                                                id={data.id}
                                                title={data.title}
                                                cover={data.cover}
                                            />
                                            )
                                        }
                                        )}
                                    </div>
                                </div>                         */}
                </StyledMain>
            <Footer />
        </StyledPortfolio>
        </>
    );
}


const PortfolioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const StyledPortfolio = styled.div`
width: 100%;
`

const StyledMain = styled.main`
display: flex;
flex-wrap: wrap;
gap: 20px;
margin: 0px 20px;

.card-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    gap: 20px;
    margin-bottom: 20px;
}
`

 
