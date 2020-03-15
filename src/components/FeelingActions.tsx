import React from 'react';
import { Button, ButtonColor } from './Button/Button';
import { FeelingType, Feeling } from '../entities/Feeling';
import { sdk } from '../sdk';

export interface IFeelingActionsProps {
    onCreateFeeling: (feeling: Feeling) => void
}

export const FeelingActions: React.FunctionComponent<IFeelingActionsProps> = (
    props: IFeelingActionsProps
): JSX.Element => {
    const submitFeeling = (feelingType: FeelingType): (event: React.MouseEvent<HTMLButtonElement>) => void =>
        (event: React.MouseEvent<HTMLButtonElement>) => {
            const { onCreateFeeling } = props;
            sdk.users.createFeeling(feelingType)
                .then((feeling: Feeling) => {
                    onCreateFeeling(feeling);
                });
        }

    return (
        <section className="feeling-actions">
            <Button color={ButtonColor.ALERT} type="button" onClick={submitFeeling(FeelingType.WORSE)}>I'm feeling worse</Button>
            <Button color={ButtonColor.PRIMARY} type="button" onClick={submitFeeling(FeelingType.SAME)}>I'm feeling the same</Button>
            <Button color={ButtonColor.SUCCESS} type="button" onClick={submitFeeling(FeelingType.BETTER)}>I'm feeling better</Button>
        </section>
    )
};
