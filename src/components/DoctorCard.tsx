import { Card, CardContent, Typography, CardActions } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import moment from '../utils/moment';
import { Doctor } from '../entities/Doctor';
import { getSpecialityLabel } from '../constants/specialities';

export interface IDoctorCardProps {
    children: React.ReactNode;
    doctor: Doctor;
}

export const DoctorCard: React.FunctionComponent<IDoctorCardProps> = (
    props: IDoctorCardProps
): JSX.Element => {
    const { children, doctor } = props;
    const { t } = useTranslation();

    return (
        <Card className="doctor">
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('doctor.created-at', {
                        createdAtDate: moment(doctor.createdAt).format('dddd D '),
                        createdAtTime: moment(doctor.createdAt).format('HH:mm')
                    })}
                </Typography>
                <Typography>
                    {t('doctor.name')} {doctor.name}
                </Typography>
                <Typography>
                    {t('doctor.surname')} {doctor.surname}
                </Typography>
                <Typography>
                    {t('doctor.speciality')} {getSpecialityLabel(doctor.speciality)}
                </Typography>
                <Typography>
                    {t('doctor.license')} {doctor.license}
                </Typography>
                <Typography>
                    {t('doctor.email')} {doctor.email}
                </Typography>
                <Typography>
                    {t('doctor.phone')} {doctor.phone}
                </Typography>
            </CardContent>
            <CardActions>
                {children}
            </CardActions>
        </Card>
    )
};
