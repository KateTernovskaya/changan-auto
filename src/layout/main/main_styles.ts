import styled from "styled-components";
import {theme} from "../../styles/theme";
import {FlexWrapper} from "../../components/wrapper/flexWrapper";

const Main = styled.main`
  padding: 56px 0;
`
const TitleMain = styled.h2`
  color: ${theme.colors.titleFont};
  font-weight: 500;
  font-size: 24px;
  line-height: 121%;
`
const CardsWrapper = styled.div`
  padding: 32px 0;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows:repeat(2, 250px) ;
  grid-template-areas:
    "card1  card2 card4"
    "card1  card3 card4";

  & div:nth-child(1) {
    grid-area: card1;
  }

  & div:nth-child(2) {
    grid-area: card2;
  }

  & div:nth-child(3) {
    grid-area: card3;
  }

  & div:nth-child(4) {
    grid-area: card4;
  }
  
 @media ${theme.media.medium} {
   grid-template-columns: repeat(2, 1fr);
   grid-template-areas:
    "card1  card2 "
    "card3  card4 ";
 }

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    grid-template-areas:
    "card1"
    "card2"
    "card3"
    "card4";
  }
`

const Card = styled.div`
  border-radius: 12px;
  width: 100%;
  background: linear-gradient(87deg, rgba(18, 18, 18, 0.9) 50%, rgba(0, 0, 0, 0.8) 100%);
  color: ${theme.colors.cardFont};
  padding: 0 12px;
  position: relative;
  overflow: hidden;

  ${FlexWrapper} {
    padding: 32px 32px;
  }

  & img {
    position: absolute;
    right: 12px;
    bottom: 0;
    max-height: 165px;
    z-index: 1;

    @media ${theme.media.medium} {
      max-width: 217px;
    }

    @media ${theme.media.mobile} {
      max-width: 149px;
    }
  }
`
const TitleCard = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 122%;
  max-width: 332px;
  width: 100%;

  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`
const TextCard = styled.h4`
  font-size: 14px;
  line-height: 129%;
  max-width: 332px;
  width: 100%;
  padding: 12px 0 32px 0;
  font-weight: 400;
`
const Loupe = styled.div`
  width: 288px;
  height: 262px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: -5%;
  left: -10%;
  z-index: -1;
`
const Play = styled.div`
  width: 195px;
  height: 195px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  right: 14%;
  z-index: -1;
`

export const S ={
    Main,
    TitleMain,
    CardsWrapper,
    Card,
    TitleCard,
    TextCard,
    Loupe,
    Play,
}