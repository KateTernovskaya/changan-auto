import React from 'react';
import {TabletMenu} from "./menu/menu/tabletMenu";
import {MobileMenu} from "./menu/menu/mobileMenu";
import {DesktopMenu} from "./menu/menu/desktopMenu";
import {S} from "./header_styles"

export const Header = () => {
    const tablet = 1199;
    const tabletWithoutAddress = 899;
    const mobile = 599;

    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            {width > tablet
                ? <DesktopMenu/>
                : width > tabletWithoutAddress
                    ? <TabletMenu withInfo/>
                    : width > mobile
                        ? <TabletMenu/>
                        : <MobileMenu/>
            }
        </S.Header>
    );
};