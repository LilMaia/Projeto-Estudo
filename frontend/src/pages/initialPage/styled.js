import styled from 'styled-components';

export const InitialPageContainer = styled.div`
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

export const CardListContainer = styled.div`
  margin-top: 30px;
  z-index: 0;
`;

export const MainContainer = styled.div`
  margin-left: 20px;
  margin-top: 0px;
  width: calc(100% - 20px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px; /* Adiciona um pequeno espaçamento entre os elementos da esquerda e direita */
`;

export const EsquerdaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeslocamentosContainer = styled.div`
  z-index: 0;
`;

export const MapaContainer = styled.div`
  z-index: 0;
`;

export const DireitaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FatoresEdesviosContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 5px;
`;

export const FatoresContainer = styled.div`
  z-index: 0;
`;

export const DesviosContainer = styled.div`
  z-index: 0;
`;
