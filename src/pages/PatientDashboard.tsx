import React from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FeelingActions } from '../components/FeelingActions';
import { TemperatureForm } from '../components/TemperatureForm';
import { Feeling } from '../entities/Feeling';
import { Temperature } from '../entities/Temperature';

export const PatientDashbord: React.FunctionComponent = (): JSX.Element => {
    const onCreateFeeling = (feeling: Feeling) => {
        console.log(feeling);
    };

    const onCreateTemperatureSuccess = (temperature: Temperature) => {
        console.log(temperature);
    };

    const onCreateTemperatureError = () => {};

    const onCreateTemperatureValidation = () => {};

    return(
        <>
            <Header/>
            <FeelingActions onCreateFeeling={onCreateFeeling}/>
            <TemperatureForm
                onCreateTemperatureSuccess={onCreateTemperatureSuccess}
                onCreateTemperatureError={onCreateTemperatureError}
                onCreateTemperatureValidation={onCreateTemperatureValidation}
            />
            <Footer/>
        </>
    )
};
