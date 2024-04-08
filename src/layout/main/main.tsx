import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/wrapper/Container";
import {theme} from "../../styles/Theme";
import {Card} from "./cards/card";
import Bg1 from '../../assets/bg1.png'
import Bg2 from '../../assets/bg2.png'
import Bg3 from '../../assets/bg3.png'
import Bg4 from '../../assets/bg4.png'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Title>Теперь услуги дилерского центра Вы можете можете получить онлайн!</Title>
                <CardsWrapper>
                    <Card title={"Диагностика автомобиля перед покупкой"}
                          text={'Расскажем обо всех скрытых дефектах автомобиля с пробегом'}
                          btnText={'Записаться'}
                          img={Bg1}
                    />

                    <Card title={"Онлайн показ автомобиля по видеосвязи"}
                          text={'Проведем онлайн-показ интересующего автомобиля в удобное для Вас время'}
                          btnText={'Оставить заявку'}
                          img={Bg2}
                          withPlay
                    />

                    <Card title={"Онлайн бронирование"}
                          text={'Забронируйте понравившийся автомобиль без визита в дилерский центр'}
                          btnText={'Забронировать'}
                          img={Bg3}
                    />

                    <Card title={"Онлайн оценка автомобиля с пробегом"}
                          text={'Узнайте предварительную стоимость автомобиля за 1 мин, указав его параметры'}
                          btnText={'Оценить'}
                          img={Bg4}
                          withLoupe
                    />
                </CardsWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  border: 1px solid red;
  padding: 56px 0;
`

const Title = styled.h2`
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
`

