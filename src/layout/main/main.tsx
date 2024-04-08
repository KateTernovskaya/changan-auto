import React from 'react';
import {Container} from "../../components/wrapper/container";
import {Card} from "./cards/card";
import Bg1 from '../../assets/marcet-section/bg1.png'
import Bg2 from '../../assets/marcet-section/bg2.png'
import Bg3 from '../../assets/marcet-section/bg3.png'
import Bg4 from '../../assets/marcet-section/bg4.png'
import {S} from './main_styles'

export const Main = () => {
    return (
        <S.Main>
            <Container>
                <S.TitleMain>Теперь услуги дилерского центра Вы можете можете получить онлайн!</S.TitleMain>
                <S.CardsWrapper>
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
                </S.CardsWrapper>
            </Container>
        </S.Main>
    );
};