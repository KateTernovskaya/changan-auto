import React, {useEffect, useState} from 'react';
import {Container} from "../../../../components/wrapper/container";
import Logo from "../../../../assets/logo.svg";
import {Menu} from "../menu";
import {S}  from '../../header_styles'

export const MobileMenu = () => {
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
                        <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                            <span></span>
                        </S.BurgerButton>
                    <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => {
                        setMenuIsOpen(false)
                    }}>
                        <Menu onClick={() => {
                            setMenuIsOpen(false)
                        }}/>
                    </S.MobileMenuPopup>
                </Container>
            </S.MenuBlock>
        </S.Header>
    );
};