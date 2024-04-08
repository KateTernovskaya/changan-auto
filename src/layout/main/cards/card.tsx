import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {StyledBtn} from "../../../components/Button";
import {Icon} from "../../../components/icon";

type CardPropsType = {
    title: string
    text: string
    btnText: string
    img: string
    withPlay?: boolean
    withLoupe?: boolean
}

export const Card: React.FC<CardPropsType> = (
    {
        title, text, btnText, img,
        withPlay,withLoupe
    }) => {
    return (
        <StyledCard>
            <FlexWrapper direction={'column'}>
                <Title> {title} </Title>
                <Text> {text} </Text>
                <StyledBtn> {btnText} </StyledBtn>
                {withLoupe
                    ? <Loupe>
                        <Icon iconId={"loupe"} width={'134px'} height={'154px'}
                              viewBox={'0px 0px 134px 154px'} />
                    </Loupe>
                : null
                }
                {withPlay
                    ? <Play>
                        <Icon iconId={"play"} width={'54px'} height={'64px'}
                              viewBox={'0px 0px 54px 64px'} />
                    </Play>
                    : null
                }
            </FlexWrapper>
            <img src={img} alt=""/>
        </StyledCard>
    );
};


const StyledCard = styled.div`
  border-radius: 12px;
  max-width: 424px;
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
  }
`

const Title = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 122%;
  max-width: 332px;
  width: 100%;
`
const Text = styled.h4`
  font-size: 14px;
  line-height: 129%;
  max-width: 332px;
  width: 100%;
  padding: 12px 0 32px 0;
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