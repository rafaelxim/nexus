import Monitoring from "../../assets/monitoring_FILL0_wght400_GRAD0_opsz24.svg";
import ProfPic from "../../assets/prfile-pic.jpg";
import { ColaboradorInfo } from "../../types";
import * as S from "./styles";

type Props = {
  colaboradorInfo: ColaboradorInfo;
};

const ColaboradorCard = ({ colaboradorInfo }: Props) => {
  console.log({ colaboradorInfo });
  return (
    <S.Wrapper>
      <S.Info>
        <S.PicWrapper>
          <S.Pic src={ProfPic} />
        </S.PicWrapper>
        <S.InfoWrapper>
          <S.Name>{colaboradorInfo.name}</S.Name>
          <S.InfoText>{colaboradorInfo.role}</S.InfoText>
          <S.InfoText>Info X</S.InfoText>
        </S.InfoWrapper>
      </S.Info>
      <S.Indicadores>
        <S.Indicador>
          <S.IndIconWrapper>
            <S.IndIcon src={Monitoring} />
          </S.IndIconWrapper>
          <S.IndicadorInfo>
            <S.IndPrincipalText>
              {colaboradorInfo.count_services}
            </S.IndPrincipalText>
            <S.IndSubText>Chamados Atendidos</S.IndSubText>
          </S.IndicadorInfo>
        </S.Indicador>

        <S.Indicador>
          <S.IndIconWrapper>
            <S.IndIcon src={Monitoring} />
          </S.IndIconWrapper>
          <S.IndicadorInfo>
            <S.IndPrincipalText>
              {colaboradorInfo.count_open_services}
            </S.IndPrincipalText>
            <S.IndSubText>Chamados Abertos</S.IndSubText>
          </S.IndicadorInfo>
        </S.Indicador>

        {/* <S.Indicador>
          <S.IndIconWrapper>
            <S.IndIcon src={Monitoring} />
          </S.IndIconWrapper>
          <S.IndicadorInfo>
            <S.IndPrincipalText>56</S.IndPrincipalText>
            <S.IndSubText>Minutos</S.IndSubText>
          </S.IndicadorInfo>
        </S.Indicador> */}

        {/* <S.Indicador>
          <S.IndIconWrapper>
            <S.IndIcon src={Monitoring} />
          </S.IndIconWrapper>
          <S.IndicadorInfo>
            <S.IndPrincipalText>56</S.IndPrincipalText>
            <S.IndSubText>Minutos</S.IndSubText>
          </S.IndicadorInfo>
        </S.Indicador> */}
      </S.Indicadores>
    </S.Wrapper>
  );
};

export default ColaboradorCard;
