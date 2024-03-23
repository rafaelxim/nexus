import * as S from "./styles.ts";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ColaboradorRank from "../../components/ColaboradorRank";

import Weather from "./../../assets/weatherIcon.png";
import Alerta from "../../components/Alerta/index.tsx";
import ColaboradorCard from "../../components/ColaboradorCard/index.tsx";

const Main = () => {
  return (
    <S.Wrapper>
      {/* Header */}
      <S.Header>
        <S.HeaderLogo>NEXUS</S.HeaderLogo>
        <S.HeaderInfo>
          <S.InfoLeft>
            <S.HeaderTextStrong>Rio de Janeiro</S.HeaderTextStrong>
            <S.HeaderText>25/10/2026</S.HeaderText>
          </S.InfoLeft>
          <S.InfoRight>
            <S.HeaderTextStrong>
              <S.WeatherIcon src={Weather} /> 31º
            </S.HeaderTextStrong>
            <S.HeaderText>18:20:35</S.HeaderText>
          </S.InfoRight>
        </S.HeaderInfo>
      </S.Header>

      <S.ContentWrapper>
        <S.ContentLeft>
          <S.TopColaborators>
            <S.HeaderText>Top Colaboradores</S.HeaderText>
            <S.ColaboradoresList>
              <ColaboradorRank></ColaboradorRank>
              <S.Separator />
              <ColaboradorRank></ColaboradorRank>
              <S.Separator />
              <ColaboradorRank></ColaboradorRank>
            </S.ColaboradoresList>
          </S.TopColaborators>

          <S.IndicadoresWrapper>
            <S.Indicador>
              <S.IndicadorTitle>ORDENS DE SERVIÇOS</S.IndicadorTitle>
              <S.IndicadorSub>EM ABERTO</S.IndicadorSub>
              <S.IndicadorValue>50</S.IndicadorValue>
            </S.Indicador>
            <S.Separator />

            <S.Indicador>
              <S.IndicadorTitle>ATENDIMENTOS</S.IndicadorTitle>
              <S.IndicadorSub>EM ABERTO</S.IndicadorSub>
              <S.IndicadorValue>50</S.IndicadorValue>
            </S.Indicador>
          </S.IndicadoresWrapper>

          <S.Alertas>
            <S.HeaderText>Últimos Alertas</S.HeaderText>
            <S.AlertasTable>
              <tbody>
                <Alerta />
                <Alerta />
                <Alerta />
                <Alerta />
              </tbody>
            </S.AlertasTable>
          </S.Alertas>
        </S.ContentLeft>
        <S.ContentRight>
          <Carousel autoPlay infiniteLoop axis="vertical" interval={6000}>
            <div>
              <S.Carrousel>
                <ColaboradorCard />
                <ColaboradorCard />
                <ColaboradorCard />
                <ColaboradorCard />
              </S.Carrousel>
            </div>
            <div>
              <S.Carrousel>
                <ColaboradorCard />
                <ColaboradorCard />
                <ColaboradorCard />
                <div></div>
              </S.Carrousel>
            </div>
          </Carousel>
        </S.ContentRight>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Main;
