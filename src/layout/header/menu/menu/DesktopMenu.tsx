import React from 'react';
import {Container} from "../../../../components/wrapper/Container";
import Logo from "../../../../assets/logo.svg";
import {FlexWrapper} from "../../../../components/wrapper/FlexWrapper";
import {Menu} from "../Menu";
import {StyledBtn} from "../../../../components/Button";
import {InfoString} from "../../info/InfoString";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

export const DesktopMenu = () => {
    return (
        <StyledHeader>
            <MenuBlock>
                <Container>
                    <img src={Logo} alt=""/>
                    <FlexWrapper align={'center'}>
                        <Menu/>
                        <StyledBtn primary>Заказать звонок</StyledBtn>
                    </FlexWrapper>
                </Container>
            </MenuBlock>
            <InfoBlock>
                <Container>
                    <Address>
                        <InfoString img={'map-pin'} text={"Олимпийский просп., 5, стр. 1, Москва"}/>
                        <InfoString img={'location'} text={"Проложить маршрут"}/>
                    </Address>
                    <WorkTime>
                        <InfoString img={'clock'} text={"9:00 - 21:00 (ежедневно)"}/>
                    </WorkTime>
                </Container>
            </InfoBlock>
        </StyledHeader>
    );
};

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

const InfoBlock = styled.div`

`
const Address = styled.div`
  display: flex;
  gap: 32px;
`
const WorkTime = styled.div`

`