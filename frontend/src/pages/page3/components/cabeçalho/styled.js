import styled from 'styled-components';

//  campos container
export const CamposContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  background-color: #f2f2f2;
`;

export const CamposTitle = styled.h1`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

export const logoEtextoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const LogoSelectInput = styled.input`
  padding: 8px;
  box-sizing: border-box;
  margin: 0;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  color: #999; /* Lighter gray color */
`;

export const LogoSelectInputIcon = styled.img`
  position: absolute;
  right: 10px; /* Posição do ícone à direita */
  pointer-events: none; /* Faz com que o ícone não interfira na interação com o input */
  width: 20px; /* Ajuste a largura conforme necessário */
  height: auto; /* Mantém a proporção */
  padding-top: 30px; /* Ajuste conforme necessário */
`;

export const TextInput = styled.input`
  padding: 8px;
  box-sizing: border-box;
  margin: 0;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  color: #999; /* Lighter gray color */
`;

export const AssinaturasTitle = styled.h1`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

export const AssinaturasContainer = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

export const TitleETogleButtonContainer = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

export const AssinaturaTitle = styled.h1`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;