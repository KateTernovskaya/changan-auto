import React, {useEffect, useState} from 'react';
import {Container} from "../../../../components/wrapper/Container";
import Logo from "../../../../assets/logo.svg";
import {FlexWrapper} from "../../../../components/wrapper/FlexWrapper";
import {Menu} from "../Menu";
import {StyledBtn} from "../../../../components/Button";
import {InfoString} from "../../info/InfoString";
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";

type TabletMenuPropsType = {
    withInfo?: boolean
}

export const MobileMenu: React.FC<TabletMenuPropsType> = ({withInfo}) => {
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
        <StyledHeader>
            <MenuBlock>
                <Container>
                    <img src={Logo} alt=""/>
                        <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                            <span></span>
                        </BurgerButton>
                    <MobileMenuPopup isOpen={menuIsOpen} onClick={() => {
                        setMenuIsOpen(false)
                    }}>
                        <Menu onClick={() => {
                            setMenuIsOpen(false)
                        }}/>
                    </MobileMenuPopup>
                </Container>
            </MenuBlock>
        </StyledHeader>
    );
};


const BurgerButton = styled.button<{ isOpen: boolean }>`
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  position: relative;
  z-index: 19;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    width: 50px;
    height: 50px;
  `}
  span {
    display: block;
    width: 40px;
    height: 2px;
    background-color: ${theme.colors.primaryBtn};

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background-color: ${theme.colors.primaryBtn};

      position: absolute;
      transform: translateY(-10px);
      transition: transform 1s;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background-color: ${theme.colors.primaryBtn};

      position: absolute;
      transform: translateY(10px);
      transition: transform 1s;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  ${StyledBtn} {
    display: block;
  }

  background-color: ${theme.colors.headerBg};
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  transform: translateY(-100%);
  transition: .8s ease-in-out;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
  `}
  ul {
    ${FlexWrapper} {
      padding: 20px;

      flex-direction: column;
    }


    & li a {
      color: ${theme.colors.primaryBtn};

      &:hover {
        border-bottom: 1px solid ${theme.colors.cardFont};
      }
    }
  }
`
const StyledHeader = styled.header`
  background-color: ${theme.colors.headerBg};
  box-shadow: 0 5px 5px #CECECE;

  ${Container} {
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
  }
`
const MenuBlock = styled.div`
  ${StyledBtn} {
    margin-left: 56px;
  }

  border-bottom: 1px solid #CECECE;
`
const InfoBlock = styled.div``
const Address = styled.div`
  display: flex;
  gap: 32px;
`
const WorkTime = styled.div`

`