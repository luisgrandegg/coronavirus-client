import React from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ButtonColor, LinkButton } from '../components/Button';
import { Routes } from '../router/Routes';

export const Home: React.FunctionComponent = (): JSX.Element => {
    return (
        <>
            <Header/>
            <main className="main">
                <LinkButton
                    color={ButtonColor.PRIMARY}
                    href={Routes.REGISTER_DOCTOR}
                >Soy un médico</LinkButton>
                <LinkButton
                    color={ButtonColor.PRIMARY}
                    href={Routes.REGISTER_PATIENT}
                >Soy un paciente</LinkButton>
            </main>
            <Footer/>
        </>
    )
};
