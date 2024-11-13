import React, { useState } from 'react';
import * as S from "./styled";

function ModalExportacao({ onClose, generateGames, nome_arquivo = "Arquivo", formato_arquivo = "Formato", periodo_filtrado = "Período", filtro_filial = "Filtro: Filial", filtro_responsaveis = "Filtro: Responsaveis" }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateGames = async () => {
    setIsLoading(true); // Inicia o estado de carregamento
    try {
      await generateGames(1); // Aguarda a geração dos jogos (caso seja uma função assíncrona)
    } catch (error) {
      console.error("Erro ao gerar os jogos:", error);
    } finally {
      setIsLoading(false); // Para o estado de carregamento
    }
  };

  return (
    <S.ModalExportacaoContainer>
      {/* Titulo */}
      <S.TituloContainer>
        <S.DowloadImageIcon src="download_icon.png" alt="Ícone de download" />
        <h7 style={{ fontWeight: "bold" }}>
          Confira os dados da sua exportação
        </h7>
        <S.BotaoFechar onClick={onClose}>
          <S.ImagemFechar
            src="close_icon.png"
            alt="Ícone de Fechar"
          />
        </S.BotaoFechar>
      </S.TituloContainer>
      {/* Linha 1 */}
      <S.ArquivoEFormatoLinhaContainer>
        <S.ArquivoContainer>
          <S.ArquivoLabel>Arquivo</S.ArquivoLabel>
          <S.ArquivoInput
            type="text"
            id="input-1"
            value={nome_arquivo}
            onChange={() => {}}
          />
        </S.ArquivoContainer>
        <S.FormatoContainer>
          <S.FormatoLabel>Formato</S.FormatoLabel>
          <S.ArquivoInput
            type="text"
            id="input-2"
            value={formato_arquivo}
            onChange={() => {}}
            disabled={true}
          />
        </S.FormatoContainer>
      </S.ArquivoEFormatoLinhaContainer>
      {/* Linha 2 */}
      <S.PeriodoFiltradoContainer>
        <S.PeriodoFiltradoLabel>Período filtrado</S.PeriodoFiltradoLabel>
        <S.PeriodoFiltradoInput
          type="text"
          id="input-3"
          value={periodo_filtrado}
          onChange={() => {}}
          disabled={true}
        />
        <S.PeriodoFiltradoInputIcon
          src="download_icon.png"
          alt="Ícone de download"
        />
      </S.PeriodoFiltradoContainer>
      {/* Linha 3 */}
      <S.FiltroFilialContainer>
        <S.FiltroFilialLabel>Filtro: Filial</S.FiltroFilialLabel>
        <S.FiltroFilialInput
          type="text"
          id="input-3"
          value={filtro_filial}
          onChange={() => {}}
          disabled={true}
        />
        <S.FiltroFilialInputIcon
          src="download_icon.png"
          alt="Ícone de download"
        />
      </S.FiltroFilialContainer>
      {/* Linha 4 */}
      <S.FiltroResponsaveisContainer>
        <S.FiltroResponsaveisLabel>Filtro: Responsaveis</S.FiltroResponsaveisLabel>
        <S.FiltroResponsaveisInput
          type="text"
          id="input-3"
          value={filtro_responsaveis}
          onChange={() => {}}
          disabled={true}
        />
        <S.FiltroResponsaveisInputIcon
          src="download_icon.png"
          alt="Ícone de download"
        />
      </S.FiltroResponsaveisContainer>
      {/* Linha 5 */}
      <S.BotoesContainer>
        <S.BotaoCancelar onClick={onClose}>Cancelar</S.BotaoCancelar>
        <S.BotaoBaixar onClick={handleGenerateGames}>Baixar</S.BotaoBaixar>
      </S.BotoesContainer>

      {/* Modal de Loading */}
      {!isLoading && (
        <toast>
          <p>Carregando...</p>
        </toast>
      )}
    </S.ModalExportacaoContainer>
  );
}

export default ModalExportacao;
