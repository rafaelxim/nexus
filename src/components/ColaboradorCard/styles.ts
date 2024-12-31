import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 4rem 1.8rem;
  font-size: 1rem;
`;
export const Info = styled.div`
  display: flex;
  gap: 0 1em;
  padding-bottom: 2em;
  border-bottom: 1px solid #ededed;
`;
export const PicWrapper = styled.div``;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Name = styled.div`
  font-size: 2.4em;
  color: #52554e;
  font-weight: bold;
`;
export const InfoText = styled.div`
  font-size: 2.2em;
  color: #959595;
`;
export const Pic = styled.img`
  width: 16em;
  height: 16em;
  object-fit: cover;
  border-radius: 15px;
`;
export const Indicadores = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3em 1em;
  margin-top: 3em;
`;
export const Indicador = styled.div`
  display: flex;
  gap: 1em;
`;
export const IndIconWrapper = styled.div``;
export const IndIcon = styled.img`
  width: 3.5rem;
  height: 3.5rem;
`;
export const IndicadorInfo = styled.div``;
export const IndPrincipalText = styled.div`
  font-size: 2.4em;
  color: #52554e;
  font-weight: bold;
`;
export const IndSubText = styled.div`
  font-size: 1.7em;
  color: #959595;
`;
