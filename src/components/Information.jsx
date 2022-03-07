import styled from 'styled-components'

const Container = styled.div`
    height: 50vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
`;

const Desc = styled.p`
    padding-left: 50px;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
`;


const Information = () => {
  return (
    <Container>
        <Title>MUJERES CARVANISTAS</Title>
        <Desc>Las mujeres Carvanistas son aquellas que lucen con orgullo cada una de las prendas creadas por nosotros,</Desc>
        <Desc>mujeres que se han convertido en nuestras embajadoras y en nuestra familia alrededor del mundo.</Desc>
        <Desc>Orgullosas representantes de nuestra marca, empoderadas,alegres, mujeres reales.</Desc>
    </Container>
  )
}

export default Information