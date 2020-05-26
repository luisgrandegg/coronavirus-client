import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

import { IStatsApiResponse } from '../entities/Stats';
import { sdk } from '../sdk';

export const ByeBye: React.FunctionComponent = (): JSX.Element => {
    const [stats, setStats] = useState<IStatsApiResponse>({});

    useEffect(() => {
        sdk.getStats().then((stats: IStatsApiResponse) => setStats(stats))
    }, []);

    const getHeroesElements = (numberOfElements: number = 6): number[] => {
        const heroes = [1, 2, 3, 4, 5, 6, 7, 8];
        let heroesLength = heroes.length;
        const result = new Array(numberOfElements);
        const taken = new Array(heroes.length);

        if (numberOfElements > heroes.length)
            throw new RangeError("getRandom: more elements taken than available");

        while (numberOfElements--) {
            var x = Math.floor(Math.random() * heroesLength);
            result[numberOfElements] = heroes[x in taken ? taken[x] : x];
            taken[x] = --heroesLength in taken ? taken[heroesLength] : heroesLength;
        }
        return result;
    };

    const renderDoctorCounter = (): JSX.Element => (
        <section className="bye-bye__counter bye-bye__counter--doctor">
            <div className="bye-bye__counter-content">
                <Typography variant="h6">Han participado</Typography>
                <Typography variant="h4" className="bye-bye__count">{stats?.total?.doctors_validated}</Typography>
                <Typography>médicos</Typography>
                <Typography variant="h4" className="bye-bye__count">{stats?.total?.psychologists_validated}</Typography>
                <Typography>psicólogos</Typography>
            </div>
        </section>
    );

    const renderCitizenCounter = (): JSX.Element => (
        <section className="bye-bye__counter bye-bye__counter--citizen">
            <div className="bye-bye__counter-content">
                <Typography variant="h6">Hemos atendido</Typography>
                <Typography variant="h4" className="bye-bye__count">{stats?.total?.inquiries_attended}</Typography>
                <Typography>consultas</Typography>
            </div>
        </section>
    );

    const renderHeroes = (): JSX.Element => (
        <div className="bye-bye__heroes">
            {getHeroesElements().map(renderHero)}
        </div>
    );

    const renderHero = (index: number): JSX.Element => (
        <article className="bye-bye__hero">
            <figure>
                <img src={`/images/heroes/${index}.png`} alt="Imagen de nuestros héroes"/>
            </figure>
        </article>
    );

    return (
        <section className="bye-bye">
            <header className="bye-bye__header">
                <Typography variant="h5" align="center" gutterBottom={true}>Afortunadamente debemos parar Cita Médica en Casa</Typography>
            </header>
            <Typography gutterBottom={true}>
                Poco a poco volvemos a la nueva normalidad y ha llegado el momento de pausar Cita Médica en Casa.
                Deseamos que esta pausa sea definitiva y que nunca más necesitemos de serivicios como este.
            </Typography>
            <Typography gutterBottom={true}>
                Han sido meses duros para todos. Esperamos haber aliviado algo la situación.
                Gracias siempre a la labor de los 192 profesionales de la medicina y la psicología que han resuelto las dudas de casi 3000 personas.
            </Typography>
            {renderDoctorCounter()}
            {renderCitizenCounter()}
            <p className="bye-bye-subtitle">Algunos de nuestros...</p>
            <h2 className="bye-bye-title">Héroes</h2>
            {renderHeroes()}
        </section>
    );
};
