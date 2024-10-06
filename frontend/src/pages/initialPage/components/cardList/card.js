import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  width: 400px; /* Ajuste conforme necessário */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.div`
  background-image: url('/image.png'); /* Altere para o caminho correto do seu ícone */
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 0; /* Remove margens padrão */
`;

function Card({ icon, title }) {
    return (
      <CardContainer>
        <Icon style={{ backgroundImage: `url(${icon})` }} />
        <Title>{title}</Title>
      </CardContainer>
    );
  }
  
  export default Card;