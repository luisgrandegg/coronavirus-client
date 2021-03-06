import { Card, CardContent, Typography, CardActions } from '@material-ui/core';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import moment from '../utils/moment';
import { Doctor } from '../entities/Doctor';
import { getSpecialityLabel } from '../constants/specialities';
import { DoctorComment } from './DoctorComment';

export interface IDoctorCardProps {
    children: React.ReactNode;
    doctor: Doctor;
}

export const DoctorCard: React.FunctionComponent<IDoctorCardProps> = (
    props: IDoctorCardProps
): JSX.Element => {
    const [doctor, setDoctor] = useState<Doctor>(props.doctor);
    const { children } = props;
    const { t } = useTranslation();

    const handleOnSave = (comment: string): void => {
        doctor.comment = comment;
        setDoctor(doctor);
    };

    return (
        <Card className="doctor">
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('doctor.created-at', {
                        createdAtDate: moment(doctor.createdAt).format('dddd D '),
                        createdAtTime: moment(doctor.createdAt).format('HH:mm')
                    })}
                </Typography>
                {doctor.isPsychologist() && <Typography>
                    <strong>{t('doctor.types.psychologist')}</strong>
                </Typography>}
                <Typography>
                    {t('doctor.name')} {doctor.name}
                </Typography>
                <Typography>
                    {t('doctor.surname')} {doctor.surname}
                </Typography>
                {doctor.speciality && <Typography>
                    {t('doctor.speciality')} {getSpecialityLabel(doctor.speciality)}
                </Typography>}
                <Typography>
                    {t('doctor.license')} {doctor.license}
                </Typography>
                <Typography>
                    {t('doctor.email')} {doctor.email}
                </Typography>
                <Typography>
                    {t('doctor.phone')} {doctor.phone}
                </Typography>
                <Typography>
                    {t('doctor.inquiries-attended')} {doctor.inquiriesAttended}
                </Typography>
                <DoctorComment doctor={doctor} onSave={handleOnSave}/>
            </CardContent>
            <CardActions>
                {children}
            </CardActions>
        </Card>
    )
};
