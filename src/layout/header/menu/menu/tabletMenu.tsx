import React, {useEffect, useState} from 'react';
import {Container} from "../../../../components/wrapper/container";
import Logo from "../../../../assets/logo.svg";
import {FlexWrapper} from "../../../../components/wrapper/flexWrapper";
import {Menu} from "../menu";
import {StyledBtn} from "../../../../components/button";
import {Info} from "../../info/info";
import {S} from '../../header_styles'

type TabletMenuPropsType = {
    withInfo?: boolean
}

export const TabletMenu: React.FC<TabletMenuPropsType> = ({withInfo}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body')
        if (!body) {
            return
        }
        if (menuIsOpen) {
            body.style.overflow = 'hidden'
            return
        }
        body.style.overflow = ''
    }, [menuIsOpen])
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }


    return (
        <S.Header>
            <S.MenuBlock>
                <Container>
                    <img src={Logo} alt=""/>
                    <FlexWrapper align={'center'} gap={'24px'}>
                        <StyledBtn primary>Заказать звонок</StyledBtn>
                        <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                            <span></span>
                        </S.BurgerButton>
                    </FlexWrapper>
                    <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => {
                        setMenuIsOpen(false)
                    }}>
                        <Menu onClick={() => {
                            setMenuIsOpen(false)
                        }}/>
                    </S.MobileMenuPopup>
                </Container>
            </S.MenuBlock>
            {withInfo
                ? <S.InfoBlock>
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
                : null}
        </S.Header>
    );
};