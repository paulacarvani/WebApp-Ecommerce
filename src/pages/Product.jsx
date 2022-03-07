import React from 'react'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'


const Container =styled.div`
`;

const Wrapper =styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer =styled.div`
  flex: 1;
`;

const Image =styled.img`
  width: 100%;
  object-fit: cover;
`;

const InfoContainer =styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title =styled.h1`
  font-style: italic;
`;

const Desc =styled.p`
  margin: 20px 0px;
  font-weight: 100;
  font-size: 30px;
`;

const Note =styled.p`
  font-weight: 100;
  font-size: 20px;
  font-style: italic;
`;




const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcements/>
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/5YQTwdW/Carvani-5.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>
            Laura y el Colibrí
          </Title>
          <Desc>
            Dicen que cuando un Colibrí te visita es porque las personas que nos han dejado aún nos acompañan en nuestro camino.
          </Desc>
          <Note>
            "En Colombia hay aproximadamente 150 especies de colibrís de las 350 que hay en el mundo."
          </Note>
        </InfoContainer>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Product