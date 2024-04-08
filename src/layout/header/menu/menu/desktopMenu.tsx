import React from 'react';
import {Container} from "../../../../components/wrapper/container";
import Logo from "../../../../assets/logo.svg";
import {FlexWrapper} from "../../../../components/wrapper/flexWrapper";
import {Menu} from "../menu";
import {StyledBtn} from "../../../../components/button";
import {Info} from "../../info/info";
import {S} from '../../header_styles'

export const DesktopMenu = () => {
    return (
        <>
            <S.MenuBlock>
                <Container>
                    <img src={Logo} alt=""/>
                    <FlexWrapper align={'center'}>
                        <Menu/>
                        <StyledBtn primary>Заказать звонок</StyledBtn>
                    </FlexWrapper>
                </Container>
            </S.MenuBlock>
            <S.InfoBlock>
                <Container>
                    <S.Address>
                        <Info imgId={'map-pin'} text={"Олимпийский просп., 5, стр. 1, Москва"}/>
                        <Info imgId={'location'} text={"Проложить маршрут"}/>
                    </S.Address>
                    <S.WorkTime>
                        <Info imgId={'clock'} text={"9:00 - 21:00 (ежедневно)"}/>
                    </S.WorkTime>
                </Container>
            </S.InfoBlock>
        </>
    );
};