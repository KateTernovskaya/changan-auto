import React from 'react';
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {Icon} from "../../../components/icon";

type InfoStringPropsType ={
    img: string
    text: string
}

export const InfoString: React.FC<InfoStringPropsType> = ({img, text}) => {
    return (
        <FlexWrapper gap={'8px'} align={'center'}>
            <Icon iconId={img}/>
            <span>{text}</span>
        </FlexWrapper>
    );
};