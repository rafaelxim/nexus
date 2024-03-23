import * as S from "./styles";
import Critical from "../../assets/cancel_FILL0_wght400_GRAD0_opsz24.svg";

const Alerta = () => {
  return (
    <S.Wrapper>
      <S.TD>
        <S.Icon src={Critical} />
      </S.TD>

      <S.TD>
        <S.SeverityLabel>Crítico</S.SeverityLabel>
      </S.TD>
      <S.TD>
        <S.DateWrapper>
          <S.Date></S.Date>
          <S.Hours></S.Hours>
        </S.DateWrapper>
      </S.TD>
      <S.TD>
        <S.Description>Região x fora de operação</S.Description>
      </S.TD>
      <S.TD>
        <S.Status>Em Andamento</S.Status>
      </S.TD>
    </S.Wrapper>
  );
};

export default Alerta;
