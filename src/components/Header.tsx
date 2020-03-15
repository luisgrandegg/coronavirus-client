import React from 'react';

import { Menu } from './Menu';

export const Header: React.FunctionComponent = (): JSX.Element => {
    return (
        <header className="header">
            <h1 className="header__title">
            FIGHT CORONAVIRUS
            </h1>
            <Menu/>
        </header>
    );
};
