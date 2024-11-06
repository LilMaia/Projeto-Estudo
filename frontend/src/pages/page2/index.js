import Header from "../../components/header";
import SideBar from "../../components/sidebar";
import ConfirmacaoModal from "./components/confirmacaoModal";
import * as S from "./styled";

function PageTwo() {
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
          <ConfirmacaoModal/>

          {/* <S.Button onClick={() => alert("Mimílton")}>
            Botão Mimílton
          </S.Button> */}

        </S.MainContainer>
      </S.ContentContainer>
    </S.PageTwoContainer>
  );
}

export default PageTwo;
