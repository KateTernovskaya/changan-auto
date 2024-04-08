import React from 'react';
import {FlexWrapper} from "../../../components/wrapper/flexWrapper";
import {Icon} from "../../../components/icon";
import {S} from '../header_styles'

type InfoPropsType = {
    imgId: string
    text: string
}

export const Info: React.FC<InfoPropsType> = ({imgId, text}) => {
    return (
        <FlexWrapper gap={'8px'} align={'center'}>
            <Icon iconId={imgId}/>
            <S.Text>{text}</S.Text>
        </FlexWrapper>
    );
};