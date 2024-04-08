import React from 'react';
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {Icon} from "../../../components/icon";
import styled from "styled-components";

type InfoStringPropsType ={
    img: string
    text: string
}

export const InfoString: React.FC<InfoStringPropsType> = ({img, text}) => {
    return (
        <FlexWrapper gap={'8px'} align={'center'}>
            <Icon iconId={img}/>
            <Text>{text}</Text>
        </FlexWrapper>
    );
};

const Text = styled.span`
font-size: 12px
`