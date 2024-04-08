import React from 'react';
import {FlexWrapper} from "../../../components/wrapper/flexWrapper";
import {StyledBtn} from "../../../components/button";
import {Icon} from "../../../components/icon";
import {S} from '../main_styles'

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
        withPlay, withLoupe
    }) => {

    const tablet = 1199;
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Card>
            <FlexWrapper direction={'column'}>
                <S.TitleCard> {title} </S.TitleCard>
                <S.TextCard> {text} </S.TextCard>
                <StyledBtn> {btnText} </StyledBtn>
                {withLoupe && width > tablet
                    ? <S.Loupe>
                        <Icon iconId={"loupe"} width={'134px'} height={'154px'}
                              viewBox={'0px 0px 134px 154px'}/>
                    </S.Loupe>
                    : null
                }
                {withPlay && width > tablet
                    ? <S.Play>
                        <Icon iconId={"play"} width={'54px'} height={'64px'}
                              viewBox={'0px 0px 54px 64px'}/>
                    </S.Play>
                    : null
                }
            </FlexWrapper>
            <img src={img} alt=""/>
        </S.Card>
    );
};