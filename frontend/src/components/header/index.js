import * as S from "../header/styled";

function Header() {
  return (
    <S.AppBar>
      <S.WelcomeText>Olá, Sara</S.WelcomeText>

      <S.RightContainer>
        <S.PercentageIcon />
        <S.Icon1 />
        <S.UserText>Texto</S.UserText>
        <S.Icon2 />
      </S.RightContainer>
    </S.AppBar>
  );
}

export default Header;
