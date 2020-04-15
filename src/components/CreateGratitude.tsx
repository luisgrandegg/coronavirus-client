import { Dialog, DialogContent } from '@material-ui/core';
import React from 'react';

import { CreateGratitudeForm } from './CreateGratitudeForm';
import { Gratitude } from '../entities/Gratitude';

export interface ICreateGratitudeProps {
    isOpen: boolean;
    onCreateSucces: (gratitude: Gratitude) => void;
    onClose: () => void;
}

export const CreateGratitude: React.FunctionComponent<ICreateGratitudeProps> = (
    props: ICreateGratitudeProps
): JSX.Element => {
    const { isOpen, onClose, onCreateSucces } = props;

    const handleClose = (): void => { onClose(); }

    return (
        <Dialog aria-labelledby="create-gratitude-dialog-title" open={isOpen} onClose={handleClose}>
            <DialogContent>
                <CreateGratitudeForm onCreateSuccess={onCreateSucces}/>
            </DialogContent>
        </Dialog>
    )
}
