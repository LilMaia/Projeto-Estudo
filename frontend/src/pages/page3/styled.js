import styled from 'styled-components'

export const SidebarContainer = styled.div`
  position: absolute;
  z-index: 1;
`

export const HeaderContainer = styled.div`
  z-index: 0;
`

export const ContentContainer = styled.div`
  margin-left: 100px; /* Ajuste conforme necessário */
  width: calc(100% - 100px); /* Faz o conteúdo ocupar o restante da tela */
  display: flex;
  flex-direction: column;
`

// container da página
export const PageThreeContainer = styled.div`
  display: flex;
  position: relative;
`

// container de novo certificado
export const NovoCertificadoContainer = styled.div`
  display: flex;
  position: relative;
  background-color: orange;
  flex-direction: column;
  padding-start: 20px;
  padding-end: 20px;
`

export const TitleAndIconContainer = styled.div`
  display: flex;
  position: relative;
  background-color: orange;
  align-items: center;
  flex-direction: row;
  padding-left: 20px; // Corrigido: 'padding-start' para 'padding-left'
  padding-right: 20px; // Corrigido: 'padding-end' para 'padding-right'
  justify-content: space-between; // Adicionado para distribuir itens com espaço entre eles
`

export const NovoCertificadoTitle = styled.h1`
  color: #000;
  align-self: start;
  font-size: 24px;
  font-weight: bold;
  margin-left: 30px;
`

export const NovoCertificadoEndIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  align-self: end;
  margin-rightr: 30px;
  cursor: pointer;
`

export const NovoCertificadoUnderline = styled.div`
  width: 96%;
  height: 2px;
  align-self: center;
  background-color: #000;
  margin-top: 10px;
  margin-bottom: 20px;
`
