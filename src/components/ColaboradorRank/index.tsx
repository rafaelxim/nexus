import * as S from "./styles";
import Badge from "../../assets/badge";

import PflPic from "../../assets/prfile-pic.jpg";

const ColaboradorRank = () => {
  return (
    <S.Wrapper>
      <S.ProfilePic src={PflPic} />
      <S.Name>SUZANA SILVA MORAES</S.Name>
      <S.Medal>
        <Badge type="gold" />
        <S.BadgeText>OURO</S.BadgeText>
      </S.Medal>
    </S.Wrapper>
  );
};

export default ColaboradorRank;
