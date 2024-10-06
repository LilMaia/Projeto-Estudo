import styled from 'styled-components';

export const FatoresContainer = styled.div`
    display: flex;
    justify-content: center; /* Centraliza o retângulo horizontalmente */
    align-items: top; /* Centraliza o retângulo verticalmente */
`;

export const Rectangle = styled.div`
    width: 560px; /* Largura do retângulo */
    height: 247px; /* Altura do retângulo */
    background-color: white; /* Cor de fundo */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Sombra ao redor */
    border-radius: 8px; /* Bordas arredondadas, se desejado */
`;