import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import React from 'react';

export interface IInquiryCountryFilterProps {
    countries: string[];
    onChange: (country: string[]) => void;
}
export const InquiryCountryFilter: React.FunctionComponent<IInquiryCountryFilterProps> = (
    props: IInquiryCountryFilterProps
): JSX.Element => {
    const { countries, onChange } = props;

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>): void => {
        const country = e.target.value as string;
        const countries = [];
        countries.push(country);
        onChange(countries);
    };

    return (
        <FormControl>
            <InputLabel id="inquiry-localization-label">Localización</InputLabel>
            <Select
                labelId="inquiry-localization-label"
                id="inquiry-localization"
                value={countries}
                onChange={handleChange}
            >
                <MenuItem value="ES">España</MenuItem>
                <MenuItem value="ALL">Todos los países</MenuItem>
            </Select>
        </FormControl>

    )
};
