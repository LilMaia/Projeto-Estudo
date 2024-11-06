import styled from 'styled-components';

export const ConfirmacaoModalContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const Rectangle = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 460px; /* Largura do retângulo */
    height: 447px; /* Altura do retângulo */
    background-color: white; /* Cor de fundo */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Sombra ao redor */
    border-radius: 34px; /* Bordas arredondadas, se desejado */
`;

export const ConfirmButton = styled.button`
  color: white;
  z-index: 0;
  height: 50px;
  width: 150px;
  border-radius: 10px;
  background-color: #4CAF50;
  margin-bottom: 10px;
  margin-top: 50px;
`;

export const CancelButton = styled.button`
  color: white;
  z-index: 0;
  height: 50px;
  width: 150px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: red;
  margin-bottom: 10px;
  margin-top: 120px;
`;
