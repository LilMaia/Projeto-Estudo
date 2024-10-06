import Header from "../../components/header";
import SideBar from "../../components/sidebar";
import CardList from "./components/cardList";
import Deslocamentos from "./components/deslocamentos";
import Fatores from "./components/fatores";
import Mapa from "./components/mapa";
import Rodovias from "./components/rodovias";
import * as S from "./styled";

function InitialPage() {
  return (
    
    <S.InitialPageContainer>
      <S.SidebarContainer>
        <SideBar />
      </S.SidebarContainer>
      <S.ContentContainer>
        <S.HeaderContainer>
          <Header />
        </S.HeaderContainer>
        <S.CardListContainer>
          <CardList />
        </S.CardListContainer>

        <S.MainContainer>
        <S.EsquerdaContainer>
          <Deslocamentos />
        </S.EsquerdaContainer>

        <S.DireitaContainer>
          <S.MapaContainer>
              <Mapa />
          </S.MapaContainer>
          <S.FatoresEdesviosContainer>
            <S.FatoresContainer>
              <Fatores />
            </S.FatoresContainer>
            <S.DesviosContainer>
              <Rodovias />
            </S.DesviosContainer>
          </S.FatoresEdesviosContainer>
        </S.DireitaContainer>
        
        </S.MainContainer>

      </S.ContentContainer>



    </S.InitialPageContainer>
  );
}

export default InitialPage;
