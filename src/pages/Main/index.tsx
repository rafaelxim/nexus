import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ColaboradorRank from "../../components/ColaboradorRank";
import * as S from "./styles.ts";

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import Alerta from "../../components/Alerta/index.tsx";
import ColaboradorCard from "../../components/ColaboradorCard/index.tsx";
import { ColaboradorInfo } from "../../types/index.ts";
import Weather from "./../../assets/weatherIcon.png";

const Main = () => {
  const [colaborators, setColaborators] = useState<ColaboradorInfo[]>();

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get<{ services_by_user: ColaboradorInfo[] }>(
        "https://dash.atendimento.wmcnetworks.com.br:3443/api/v1/services_by_user",
        {
          params: {
            // date: "2024-12-31",
          },
        }
      );

      setColaborators(data.services_by_user);
    }

    getData();
  }, []);

  const chunkArray = (
    array: ColaboradorInfo[],
    chunkSize: number
  ): ColaboradorInfo[][] => {
    const chunks: ColaboradorInfo[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const chunks = useMemo(() => {
    console.log({ colaborators });
    if (colaborators && colaborators?.length > 0) {
      return chunkArray(colaborators!, 4);
    }
    return [];
  }, [colaborators]);

  console.log({ chunks });

  const renderCarousel = useCallback(() => {
    if (chunks.length > 0) {
      return (
        <Carousel
          showIndicators={false}
          autoPlay
          infiniteLoop
          axis="horizontal"
          interval={6000}
          stopOnHover={false}
        >
          {chunks.map((chunk) => (
            <S.Carrousel>
              {chunk.map((colaborator) => (
                <ColaboradorCard colaboradorInfo={colaborator} />
              ))}
            </S.Carrousel>
          ))}
        </Carousel>
      );
    } else {
      return <div>Carregando...</div>;
    }
  }, [chunks]);

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
        <S.ContentRight>{renderCarousel()}</S.ContentRight>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Main;
