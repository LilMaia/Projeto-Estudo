import styled from 'styled-components';

// Container principal do modal
export const ModalExportacaoContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 460px;
  height: 427px;
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  margin-bottom: 16px;
`;

// Container do titulo
export const TituloContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  padding-bottom: 16px;
`;

export const BotaoFechar = styled.button`
  padding-bottom: 10px; /* Espaçamento interno do botão */
  background-color: transparent; /* Sem fundo */
  border: none; /* Sem borda */
  cursor: pointer;
  position: absolute; /* Posição fixa */
  right: 10px; /* Distância da direita */
  transition: color 0.3s ease; /* Transição suave para a cor do ícone */

  &:focus {
    outline: none; /* Remove o contorno ao focar */
  }

  &:hover img {
    opacity: 0.7; /* Faz a imagem ficar um pouco transparente ao passar o mouse */
  }
`;

export const ImagemFechar = styled.img`
  width: 14px; /* Largura da imagem (ajuste conforme necessário) */
  height: auto; /* Mantém a proporção da imagem */
`;

export const DowloadImageIcon = styled.img`
  border: 2px solid orange; /* Borda laranja */
  width: 30px; /* Ajuste a largura conforme necessário */
  height: auto; /* Mantém a proporção */
  margin-right: 10px; /* Espaçamento entre a imagem e o título */
  display: block; /* Você pode ajustar para alinhamento conforme necessário */
  border-radius: 5px; /* Adiciona bordas arredondadas */
`;

// Container da primeira linha
export const ArquivoEFormatoLinhaContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`;

export const ArquivoContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 50%;
  margin-right: 16px;
`;

export const ArquivoLabel = styled.label`
  text-align: left;
  display: block;
  margin-bottom: 2px;
  font-size: 12px;
`;

export const ArquivoInput = styled.input`
  padding: 8px;
  box-sizing: border-box;
  margin: 0;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  color: #999; /* Lighter gray color */
`;

export const FormatoContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 50%;
`;

export const FormatoLabel = styled.label`
  text-align: left;
  display: block;
  margin-bottom: 2px;
  font-size: 12px;
`;

export const FormatoInput = styled.input`
  padding: 8px;
  box-sizing: border-box;
  margin: 0;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  color: #999; /* Lighter gray color */
`;

// Container da segunda linha
export const PeriodoFiltradoContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
`;

export const PeriodoFiltradoLabel = styled.label`
  text-align: left;
  display: block;
  margin-bottom: 2px;
  font-size: 12px;
`;

export const PeriodoFiltradoInput = styled.input`
  padding: 8px;
  box-sizing: border-box;
  margin: 0;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  color: #999; /* Lighter gray color */
`;

export const PeriodoFiltradoInputIcon = styled.img`
  position: absolute;
  right: 10px; /* Posição do ícone à direita */
  pointer-events: none; /* Faz com que o ícone não interfira na interação com o input */
  width: 20px; /* Ajuste a largura conforme necessário */
  height: auto; /* Mantém a proporção */
  padding-top: 30px; /* Ajuste conforme necessário */
`;

// Container da terceira linha
export const FiltroFilialContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
`;

export const FiltroFilialLabel = styled.label`
  text-align: left;
  display: block;
  margin-bottom: 2px;
  font-size: 12px;
`;

export const FiltroFilialInput = styled.input`
  padding: 8px;
  box-sizing: border-box;
  margin: 0;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  color: #999; /* Lighter gray color */
`;

export const FiltroFilialInputIcon = styled.img`
  position: absolute;
  right: 10px; /* Posição do ícone à direita */
  pointer-events: none; /* Faz com que o ícone não interfira na interação com o input */
  width: 20px; /* Ajuste a largura conforme necessário */
  height: auto; /* Mantém a proporção */
  padding-top: 30px; /* Ajuste conforme necessário */
`;

// Container da quarta linha
export const FiltroResponsaveisContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
`;

export const FiltroResponsaveisLabel = styled.label`
  text-align: left;
  display: block;
  margin-bottom: 2px;
  font-size: 12px;
`;

export const FiltroResponsaveisInput = styled.input`
  padding: 8px;
  box-sizing: border-box;
  margin: 0;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  color: #999; /* Lighter gray color */
`;

export const FiltroResponsaveisInputIcon = styled.img`
  position: absolute;
  right: 10px; /* Posição do ícone à direita */
  pointer-events: none; /* Faz com que o ícone não interfira na interação com o input */
  width: 20px; /* Ajuste a largura conforme necessário */
  height: auto; /* Mantém a proporção */
  padding-top: 30px; /* Ajuste conforme necessário */
`;

// Container da quinta linha
export const BotoesContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;

export const BotaoBaixar = styled.button`
  padding: 3px 10px; /* Reduzido para menor altura */
  background-color: transparent; /* Sem fundo */
  color: black; /* Cor do texto preta */
  border: 2px solid black; /* Borda preta */
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px; /* Tamanho da fonte reduzido */
  margin-right: 5px; /* Espaçamento entre os botões */
  transition: all 0.3s ease; /* Transição suave para todos os efeitos */

  // /* Estilo para quando o botão é focado */
  // &:focus {
  //   outline: none;
  // }

  // /* Estilo para quando o botão é hover */
  // &:hover {
  //   background-color: black; /* Cor de fundo preta ao passar o mouse */
  //   color: white; /* Cor do texto muda para branco */
  // }
`;

export const BotaoCancelar = styled.button`
  margin-right: 5px; /* Espaçamento entre os botões */
  padding: 3px 10px; /* Reduzido para menor altura */
  background-color: transparent; /* Sem fundo */
  color: red; /* Cor do texto vermelha */
  border: 2px solid red; /* Borda vermelha */
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px; /* Tamanho da fonte reduzido */
  transition: all 0.3s ease; /* Transição suave para todos os efeitos */

  // /* Estilo para quando o botão é focado */
  // &:focus {
  //   outline: none;
  // }

  // /* Estilo para quando o botão é hover */
  // &:hover {
  //   background-color: red; /* Cor de fundo vermelha ao passar o mouse */
  //   color: white; /* Cor do texto muda para branco */
  // }
`;
