import * as S from "./styled";

function ConfirmacaoModal() {
  return (
    <S.ConfirmacaoModalContainer>
      <S.Rectangle>
        <h1 style={{
            marginTop: '30px'
        }}>Confirmação</h1>
        <p style={{
            marginTop: '100px'
        }}>Tem certeza que deseja excluir este item?</p>
        <div>
          <S.CancelButton>Cancelar</S.CancelButton>
          <S.ConfirmButton>Confirmar</S.ConfirmButton>
        </div>
      </S.Rectangle>
    </S.ConfirmacaoModalContainer>
  );
}

export default ConfirmacaoModal;
