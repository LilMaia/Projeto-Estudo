import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: fixed;
  width: ${props => (props.isOpen ? '200px' : '100px')}; /* Largura do menu expandido e colapsado */
  height: 100dvh; /* Altura total da tela */
  background-color: #333;
  color: white;
  transition: width 0.3s ease; /* Transição suave */
  overflow: hidden; /* Evita overflow de conteúdo */
`;

export const ToggleButton = styled.button`
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
`;

export const MenuItem = styled.div`
  padding: 15px;
  &:hover {
    background-color: #444;
  }
`;