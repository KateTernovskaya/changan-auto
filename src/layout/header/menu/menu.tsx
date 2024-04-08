import React from 'react';
import {Link} from "../../../components/link";
import {FlexWrapper} from "../../../components/wrapper/flexWrapper";

const itemsMenu = [
    {
        title: "Автомобили в наличии",
        href: "marketplace",
    },
    {
        title: "Спецпредложения",
        href: "specialOffers",
    },
    {
        title: "Продать авто",
        href: "sellAuto",
    },
    {
        title: "Сервис",
        href: "service",
    },
    {
        title: "Контакты",
        href: "contacts",
    },
]

export const Menu: React.FC<{ onClick?: () => void }> = ({onClick}) => {
    return (
        <ul>
            <FlexWrapper align={'center'} gap={'32px'}>
                {itemsMenu.map((item, index) => {
                    return <li key={index}>
                        <Link href={item.href}>{item.title}</Link>
                    </li>
                })}
            </FlexWrapper>
        </ul>
    );
};