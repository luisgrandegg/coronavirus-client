import { Button } from '@material-ui/core';
import React from 'react';

import { FeelingType, Feeling } from '../entities/Feeling';
import { sdk } from '../sdk';

export interface IFeelingActionsProps {
    onCreateFeeling: (feeling: Feeling) => void
}

export const FeelingActions: React.FunctionComponent<IFeelingActionsProps> = (
    props: IFeelingActionsProps
): JSX.Element => {
    const submitFeeling = (feelingType: FeelingType): (event: React.MouseEvent<HTMLButtonElement>) => void =>
        (_event: React.MouseEvent<HTMLButtonElement>) => {
            const { onCreateFeeling } = props;
            sdk.users.createFeeling(feelingType)
                .then((feeling: Feeling) => {
                    onCreateFeeling(feeling);
                });
        }

    return (
        <section className="feeling-actions">
            <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={submitFeeling(FeelingType.WORSE)}
            >I'm feeling worse</Button>
            <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={submitFeeling(FeelingType.SAME)}
            >I'm feeling the same</Button>
            <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={submitFeeling(FeelingType.BETTER)}
            >I'm feeling better</Button>
        </section>
    )
};
