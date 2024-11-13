import Header from "../../components/header";
import SideBar from "../../components/sidebar";
import ConfirmacaoModal from "./components/confirmacaoModal";
import ModalExportacao from "./components/modalExportacao";
import * as S from "./styled";
import { generateGames } from "./services";
import React, { useState } from "react";

function PageTwo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.PageTwoContainer>
      <S.SidebarContainer>
        <SideBar />
      </S.SidebarContainer>
      <S.ContentContainer>
        <S.HeaderContainer>
          <Header />
        </S.HeaderContainer>

        <S.MainContainer>
          {!isModalOpen && <S.Button onClick={handleOpenModal}>Botão exportação</S.Button>}
          {isModalOpen && <ModalExportacao onClose={handleCloseModal} generateGames={generateGames} nome_arquivo="Games" />}
        </S.MainContainer>
      </S.ContentContainer>
    </S.PageTwoContainer>
  );
}

export default PageTwo;
