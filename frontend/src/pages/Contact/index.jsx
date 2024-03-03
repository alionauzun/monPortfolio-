// Contact.jsx
//impot des composants
import Header from '../../components/Header'
// import Footer from '../../components/Footer'
import styled from 'styled-components'
import colors from '../../utils/style/colors'



export default function Contact () {
  return (
     <StyledContact>
      <>
      <div>
          <Header />
      <h1>Contactez-nous</h1>
      <form>
        <div>
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit">Envoyer</button>
      </form>
      {/* <Footer /> */}
    </div>
    </>
    </StyledContact>
  )
}


//-----------------Styles CSS-----------------//

const StyledContact = styled.div`
  h1 {
    margin-top: 100px;
    text-align: center;
    font-size: 2.5rem;
    color: ${colors.primary};
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    input {
      width: 300px;
      height: 30px;
      margin-bottom: 20px;
    }
    textarea {
      width: 300px;
      height: 100px;
      margin-bottom: 20px;
    }
    button {
      width: 100px;
      height: 30px;
      background-color: ${colors.primary};
      color: white;
      border: none;
      cursor: pointer;
    }
  }
`

