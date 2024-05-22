//impot des composants
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CardSingleImg from '../../components/PortfolioCards/CardSingleImg';
import CardTwinImg from '../../components/PortfolioCards/CardTwinImg';
import styled from 'styled-components'
import datas from '../../data/data'
// import colors from '../../utils/style/colors'

// import imageUneBonneBaladeRecto from '../../assets/portfolio/rectoUneBonneBalade.jpeg'
// import imageUneBonneBaladeVerso from '../../assets/portfolio/versoUneBonneBalade.jpeg'
// import imageKasa from '../../assets/portfolio/kasa.png'


export default function Portfolio() {
    return (
        <>
        <StyledPortfolio>
            <Header />
                <StyledMain>
                                <div className='portfolioPageContent'>
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
                                </div>                        
                </StyledMain>
            <Footer />
        </StyledPortfolio>
        </>
    );
}

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

{/* <div className='portfolioPage'>
<div className='portfolioPageContainer'>
    <div className='portfolioPageContent'>
        <div className='card-group'>
            
            <Link to="/projet/kasa" className='card'>
                <h2>kasa</h2>
                <div className='imgContainer'>
                    <figure className='wrapper-single-img'>
                        <img src={imageKasa} alt='projet kasa' className='single-img'/>
                    </figure>
                </div>
            </Link>
            
            <div className='card'>
                <h2>Balti habitat</h2>
                {/* <p>Projet 1 description</p> */}
{/* //                 <figure className='img-wrapper'>
//                 <img src='https://via.placeholder.com/150' alt='projet 1' />
//                 </figure>
//             </div>
//             <div className='card'> */}
{/* //                 <h2>La panthere</h2> */}
//                 {/* <p>Projet 1 description</p> */}
{/* //                 <img src='https://via.placeholder.com/150' alt='projet 1' />
//             </div>
//             <div className='card'>
//                 <h2>resto</h2> */}
//                 {/* <p>Projet 1 description</p> */}
{/* //                 <div className='imgContainer'>
//                     <figure className='img-wrapper'>
//                         <img src={imageUneBonneBaladeRecto} alt='projet 1' />
//                         <img src={imageUneBonneBaladeVerso} alt='projet 1' />
//                     </figure>
//                 </div>
//             </div>
//         </div>
//         <div className='card-group'>
//             <div className='card'>
//                 <h2>Une belle balade</h2> */}
//                 {/* <p>Projet 1 description</p> */}
{/* //                 <img src='https://via.placeholder.com/150' alt='projet 1' />
//             </div>
//             <div className='card'>
//                 <h2>Projet 1</h2> */}
//                 {/* <p>Projet 1 description</p> */}
{/* //                 <img src='https://via.placeholder.com/150' alt='projet 1' />
//             </div>
//             <div className='card'>
//                 <h2>Projet 1</h2> */}
//                 {/* <p>Projet 1 description</p> */}
{/* //                 <img src='https://via.placeholder.com/150' alt='projet 1' />
//             </div>
//             <div className='card'>
//                 <h2>Projet 1</h2> */}
//                 {/* <p>Projet 1 description</p> */}
{/* //                 <img src='https://via.placeholder.com/150' alt='projet 1' />
//             </div>
//         </div>
//     </div> */}
{/* // </div>
// </div> */} 
