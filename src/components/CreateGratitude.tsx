import { Modal } from '@material-ui/core';
import React from 'react';
import { CreateGratitudeForm } from './CreateGratitudeForm';
import { Gratitude } from '../entities/Gratitude';

export interface ICreateGratitudeProps {
    isOpen: boolean;
    onCreateSucces: (gratitude: Gratitude) => void;
}

export const CreateGratitude: React.FunctionComponent<ICreateGratitudeProps> = (
    props: ICreateGratitudeProps
): JSX.Element => {
    const { isOpen } = props;

    const onCreateSuccess = (gratitude: Gratitude): void => {
        props.onCreateSucces(gratitude);
    }

    return (
        <Modal
            open={isOpen}
        >
            <CreateGratitudeForm onCreateSuccess={onCreateSuccess}/>
        </Modal>
    )
}
