import styled from 'styled-components';

export const PageTwoContainer = styled.div`
  display: flex;
  position: relative;
`;

export const SidebarContainer = styled.div`
  position: absolute;
  z-index: 1;
`;

export const ContentContainer = styled.div`
  margin-left: 100px; /* Ajuste conforme necessário */
  width: calc(100% - 100px); /* Faz o conteúdo ocupar o restante da tela */
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  z-index: 0;
`;

export const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
  height: calc(100vh - 68px); /* Subtrai a altura do Header */
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Coloca o conteúdo na parte inferior */
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  background-color: orange; /* Define a cor de fundo como vermelho */
`;

export const Button = styled.button`
  color: white;
  z-index: 0;
  height: 50px;
  width: 150px;
  border-radius: 10px;
  background-color: #4CAF50;
  margin-bottom: 10px;
`;
