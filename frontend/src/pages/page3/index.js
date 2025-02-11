import * as S from './styled'
import React from 'react'
import Header from '../../components/header'
import SideBar from '../../components/sidebar'
import PreviewConfig from './components/preview_config'
import Preview from './components/preview'

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
          <S.PreviewEPreviewConfigContainer>
            <PreviewConfig />
            <Preview />
          </S.PreviewEPreviewConfigContainer>
        </S.NovoCertificadoContainer>
      </S.ContentContainer>
    </S.PageThreeContainer>
  )
}

export default PageThree
