import styled from 'styled-components';

export const CardListContainer = styled.div`
    display: flex;
    justify-content: space-around; /* Espaça os cards */
`;

export const Button = styled.button`
  margin: 10px; /* Espaçamento */
  padding: 20px; /* Espaçamento interno */
  background-color: #007bff; /* Cor de fundo */
  color: white; /* Cor do texto */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3; /* Cor ao passar o mouse */
  }
`;