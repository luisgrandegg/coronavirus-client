import React from 'react';

export const Menu: React.FunctionComponent = (): JSX.Element => {
    const isAuthenticated = true;

    const renderMenu = (): React.ReactNode => (
        <ul className="menu">
            <li className="menu__item">
                Register
            </li>
            <li className="menu__item">
                Login
            </li>
        </ul>
    );

    return (
        <>
            {!isAuthenticated ? renderMenu() : null}
        </>
    );
}

export default Menu;
