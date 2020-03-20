import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Doctor } from '../entities/Doctor';
import { sdk } from '../sdk';
import { DoctorListParams } from '../dto/DoctorListParams';
import { DoctorCard } from './DoctorCard';
import { Button } from '@material-ui/core';

export interface IDoctorListProps {
    doctorListParams: DoctorListParams;
}

export const DoctorList: React.FunctionComponent<IDoctorListProps> = (
    props: IDoctorListProps
): JSX.Element => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const { t } = useTranslation();

    const validateDoctor = (doctor: Doctor): () => void => {
        return (): void => {
            sdk.doctors.validate(doctor.id)
                .then(() => { getDoctors(); });
        };
    };

    const deactivateDoctor = (doctor: Doctor): () => void => {
        return (): void => {
            sdk.doctors.deactivate(doctor.id)
                .then(() => { getDoctors(); });
        };
    };

    const getDoctors = () => {
        sdk.doctors.get(props.doctorListParams).then((doctors: Doctor[]) => setDoctors(doctors));
    };

    useEffect((): void => {
        getDoctors();
// eslint-disable-next-line
    }, []);

    const renderDoctorCardContent = (doctor: Doctor): React.ReactNode => {
        return (
            <>
                <Button
                    color="primary"
                    onClick={validateDoctor(doctor)}
                    type="button"
                    variant="contained"
                >
                    {t('doctor.validate')}
                </Button>
                <Button
                    color="secondary"
                    onClick={deactivateDoctor(doctor)}
                    type="button"
                    variant="contained"
                >
                    {t('doctor.validate')}
                </Button>
            </>
        );
    };

    const renderDoctors = (): React.ReactNode => doctors.map((doctor: Doctor) => (
        <DoctorCard doctor={doctor}>
            {renderDoctorCardContent(doctor)}
        </DoctorCard>
    ));

    return (
        <section className="doctor-list">
            {renderDoctors()}
        </section>
    );
}
