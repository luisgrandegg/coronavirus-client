import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Doctor } from '../entities/Doctor';
import { sdk } from '../sdk';
import { DoctorListParams } from '../dto/DoctorListParams';
import { DoctorCard } from './DoctorCard';
import { Button } from '@material-ui/core';
import { DoctorListFilters } from './DoctorListFilters';

export interface IDoctorListProps {
    doctorListParams: DoctorListParams;
}

export const DoctorList: React.FunctionComponent<IDoctorListProps> = (
    props: IDoctorListProps
): JSX.Element => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [doctorListParams, setDoctorListParams] = useState<DoctorListParams>(props.doctorListParams);
    const { t } = useTranslation();

    const validateDoctor = (doctor: Doctor): () => void => {
        return (): void => {
            sdk.users.validate(doctor.userId)
                .then(() => { getDoctors(doctorListParams); });
        };
    };

    const activateDoctor = (doctor: Doctor): () => void => {
        return (): void => {
            sdk.users.activate(doctor.userId)
                .then(() => { getDoctors(doctorListParams); });
        };
    };

    const invalidateDoctor = (doctor: Doctor): () => void => {
        return (): void => {
            sdk.users.invalidate(doctor.userId)
                .then(() => { getDoctors(doctorListParams); });
        };
    };

    const deactivateDoctor = (doctor: Doctor): () => void => {
        return (): void => {
            sdk.users.deactivate(doctor.userId)
                .then(() => { getDoctors(doctorListParams); });
        };
    };

    const getDoctors = (doctorListParams: DoctorListParams) => {
        sdk.doctors.get(doctorListParams).then((doctors: Doctor[]) => setDoctors(doctors));
    };

    const onFilterChange = (doctorListParams: DoctorListParams): void => {
        setDoctorListParams(doctorListParams);
    };

    useEffect((): void => {
        getDoctors(doctorListParams);
    }, [doctorListParams]);

    const renderActiveActions = (
        doctor: Doctor,
        doctorListParams: DoctorListParams
    ): React.ReactNode => {
        if (!doctorListParams.isActive) {
            return (
                <Button
                    color="primary"
                    onClick={activateDoctor(doctor)}
                    type="button"
                    variant="contained"
                >
                    {t('doctor.activate')}
                </Button>
            );
        } else {
            return (
                <Button
                    color="secondary"
                    onClick={deactivateDoctor(doctor)}
                    type="button"
                    variant="contained"
                >
                    {t('doctor.deactivate')}
                </Button>
            );
        }
    };

    const renderValidateActions = (
        doctor: Doctor,
        doctorListParams: DoctorListParams
    ): React.ReactNode => {
        if (!doctorListParams.isValidated) {
            return (
                <Button
                    color="primary"
                    onClick={validateDoctor(doctor)}
                    type="button"
                    variant="contained"
                >
                    {t('doctor.validate')}
                </Button>
            );
        } else {
            return (
                <Button
                    color="secondary"
                    onClick={invalidateDoctor(doctor)}
                    type="button"
                    variant="contained"
                >
                    {t('doctor.invalidate')}
                </Button>
            );
        }
    };

    const renderDoctorCardContent = (doctor: Doctor): React.ReactNode => (
        <>
            {renderValidateActions(doctor, doctorListParams)}
            {renderActiveActions(doctor, doctorListParams)}
        </>
    );

    const renderDoctors = (): React.ReactNode => doctors.map((doctor: Doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor}>
            {renderDoctorCardContent(doctor)}
        </DoctorCard>
    ));

    return (
        <section className="doctor-list">
            <DoctorListFilters doctorListParams={props.doctorListParams} onChange={onFilterChange}/>
            {renderDoctors()}
        </section>
    );
}
