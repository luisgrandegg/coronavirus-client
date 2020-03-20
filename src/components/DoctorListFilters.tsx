import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import React, { useEffect } from "react";

import { DoctorListParams } from "../dto/DoctorListParams";

export interface IDoctorListFilterProps {
    doctorListParams: DoctorListParams;
    onChange: (doctorListParams: DoctorListParams) => void;
}

export const DoctorListFilters: React.FunctionComponent<IDoctorListFilterProps> = (
    props: IDoctorListFilterProps
) => {
    const [doctorListParams, setDoctorListParams] = React.useState<DoctorListParams>(props.doctorListParams);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const params = { ...doctorListParams, [event.target.name]: event.target.checked };
        const changedDoctorListParams = new DoctorListParams(params.isActive, params.isValidated);
        setDoctorListParams(changedDoctorListParams);
        props.onChange(changedDoctorListParams);
    };

    useEffect((): void => {
        setDoctorListParams(props.doctorListParams);
    }, [props.doctorListParams]);

    return (
        <FormGroup row>
            <FormControlLabel
            control={<Switch checked={doctorListParams.isValidated} onChange={handleChange} name="isValidated" />}
            label="Validados"
            />
            <FormControlLabel
            control={
                <Switch
                checked={doctorListParams.isActive}
                onChange={handleChange}
                name="isActive"
                color="primary"
                />
            }
            label="Activos"
            />
        </FormGroup>
    );
}
