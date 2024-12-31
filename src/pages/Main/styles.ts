import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #ebecfe;
`;

export const Header = styled.header`
  background-color: #5054c2;
  min-height: 17.2rem;
  padding: 2.9rem 5.1rem;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  font-weight: bold;
  font-size: 5.2rem;
  color: #fff;
  font-family: "Rowdies", sans-serif;
`;
export const HeaderInfo = styled.div`
  display: flex;
  color: #fff;
  gap: 0 5rem;
`;
export const InfoLeft = styled.div``;
export const InfoRight = styled.div``;

export const HeaderText = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;
export const HeaderTextStrong = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 4rem;
  display: flex;
  align-items: center;
  gap: 0 1rem;
`;

export const WeatherIcon = styled.img``;

export const ContentWrapper = styled.div`
  padding: 0 4rem;
  display: flex;
  gap: 0 4rem;
  position: relative;
  top: -5rem;
`;

export const ContentLeft = styled.div`
  width: calc(53% - 2rem);
`;
export const ContentRight = styled.div`
  width: calc(47% - 2rem);
`;

export const TopColaborators = styled.div`
  /* min-height: 37.2rem; */
  background-color: #fff;
  border-radius: 10px;
  padding: 1.8rem 2.6rem;
`;

export const ColaboradoresList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const Separator = styled.div`
  background-color: #f8f8f8;
  width: 0.3rem;
`;

export const IndicadoresWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1.8rem 7.8rem;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
`;
export const Indicador = styled.div`
  text-align: center;
`;
export const IndicadorTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;
  color: #52554e;
`;
export const IndicadorSub = styled.div`
  font-size: 1.8rem;
  color: #b1b1b1;
`;
export const IndicadorValue = styled.div`
  font-size: 5.3rem;
  font-weight: bold;
  color: #5054c2;
`;

export const Alertas = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1.8rem;
  margin-top: 3rem;
`;
export const AlertasTable = styled.table`
  width: 100%;
  margin-top: 2rem;
`;

export const Carrousel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem 2rem;
`;
