import React from 'react';
import style from './Header.module.css'
const Header = () => {
    return (
        <header className={style.header}>
            <img
                src="https://dynamic.brandcrowd.com/asset/logo/dcfb2274-53d5-4b9e-8e94-1564140a7265/logo-search-grid-2x?logoTemplateVersion=1&v=637884511546230000&text=ProAtletics&colorpalette=blue"
                alt="logo" className={style.logo}/>
        </header>
    );
};

export default Header;