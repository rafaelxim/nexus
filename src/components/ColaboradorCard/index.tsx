import * as S from "./styles";
import ProfPic from "../../assets/prfile-pic.jpg";
import Monitoring from "../../assets/monitoring_FILL0_wght400_GRAD0_opsz24.svg";

const ColaboradorCard = () => {
  return (
    <S.Wrapper>
      <S.Info>
        <S.PicWrapper>
          <S.Pic src={ProfPic} />
        </S.PicWrapper>
        <S.InfoWrapper>
          <S.Name>SUZANA MORAES SILVA</S.Name>
          <S.InfoText>Cargo X</S.InfoText>
          <S.InfoText>Info X</S.InfoText>
        </S.InfoWrapper>
      </S.Info>
      <S.Indicadores>
        <S.Indicador>
          <S.IndIconWrapper>
            <S.IndIcon src={Monitoring} />
          </S.IndIconWrapper>
          <S.IndicadorInfo>
            <S.IndPrincipalText>56</S.IndPrincipalText>
            <S.IndSubText>Minutos</S.IndSubText>
          </S.IndicadorInfo>
        </S.Indicador>

        <S.Indicador>
          <S.IndIconWrapper>
            <S.IndIcon src={Monitoring} />
          </S.IndIconWrapper>
          <S.IndicadorInfo>
            <S.IndPrincipalText>56</S.IndPrincipalText>
            <S.IndSubText>Minutos</S.IndSubText>
          </S.IndicadorInfo>
        </S.Indicador>

        <S.Indicador>
          <S.IndIconWrapper>
            <S.IndIcon src={Monitoring} />
          </S.IndIconWrapper>
          <S.IndicadorInfo>
            <S.IndPrincipalText>56</S.IndPrincipalText>
            <S.IndSubText>Minutos</S.IndSubText>
          </S.IndicadorInfo>
        </S.Indicador>

        <S.Indicador>
          <S.IndIconWrapper>
            <S.IndIcon src={Monitoring} />
          </S.IndIconWrapper>
          <S.IndicadorInfo>
            <S.IndPrincipalText>56</S.IndPrincipalText>
            <S.IndSubText>Minutos</S.IndSubText>
          </S.IndicadorInfo>
        </S.Indicador>
      </S.Indicadores>
    </S.Wrapper>
  );
};

export default ColaboradorCard;
