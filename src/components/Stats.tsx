import React, { useState, useEffect } from 'react';
import { IStatsApiResponse, IStatApiResponse } from '../entities/Stats';
import { sdk } from '../sdk';
import { Card, CardContent, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const Stats: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    const [stats, setStats] = useState<IStatsApiResponse>({});

    const getStats = async (): Promise<void> =>{
        sdk.admin.getStats().then((stats: IStatsApiResponse) => { setStats(stats) });
    }

    useEffect((): void => {
        getStats();
    }, []);

    const renderStatCard = (statPeriod: string, stat: IStatApiResponse): React.ReactNode => {
        return (
            <Card className="stats" key={statPeriod}>
                <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {t(`admin.stats.period.${statPeriod}`)}
                    </Typography>
                    {Object.keys(stat).map((statType: string) => (
                        <Typography key={statType}>
                            {t(`admin.stats.type.${statType}`)} {(stat as any)[statType]}
                        </Typography>
                    ))}
                </CardContent>
            </Card>
        );
    }

    const renderStats = (): React.ReactNode => {
        if (!stats) {
            return null;
        }

        return Object.keys(stats).map((statPeriod: string) => renderStatCard(statPeriod, stats[statPeriod]));
    };

    return (
        <>
            {renderStats()}
        </>
    );
}
