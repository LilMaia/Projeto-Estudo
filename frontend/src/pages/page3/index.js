import * as S from './styled'
import React from 'react'
import Header from '../../components/header'
import SideBar from '../../components/sidebar'

function PageThree() {
  return (
    <S.PageThreeContainer>
      <S.SidebarContainer>
        <SideBar />
      </S.SidebarContainer>
      <S.ContentContainer>
        <S.HeaderContainer>
          <Header />
        </S.HeaderContainer>
        <S.NovoCertificadoContainer>
          <S.TitleAndIconContainer>
            <S.NovoCertificadoTitle>Novo Certificado</S.NovoCertificadoTitle>
            <S.NovoCertificadoEndIcon src="icon2.png" alt="Ícone de Fechar" />
          </S.TitleAndIconContainer>
          <S.NovoCertificadoUnderline />
        </S.NovoCertificadoContainer>
      </S.ContentContainer>
    </S.PageThreeContainer>
  )
}

export default PageThree
