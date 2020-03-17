import { Card, CardContent, Typography, CardActions } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import moment from '../../utils/moment';
import { Inquiry } from '../../entities/Inquiry';

export interface IInquiryCardProps {
    children: React.ReactNode;
    inquiry: Inquiry;
}

export const InquiryCard: React.FunctionComponent<IInquiryCardProps> = (
    props: IInquiryCardProps
): JSX.Element => {
    const { children, inquiry } = props;
    const { t } = useTranslation();

    return (
        <Card className="inquiry">
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('inquiry.created-at', {
                        createdAtDate: moment(inquiry.createdAt).format('dddd D '),
                        createdAtTime: moment(inquiry.createdAt).format('H:m')
                    })}
                </Typography>
                <Typography>
                    {inquiry.speciality}
                </Typography>
                <Typography color="textSecondary">
                    {inquiry.summary}
                </Typography>
            </CardContent>
            <CardActions>
                {children}
            </CardActions>
        </Card>
    )
};
