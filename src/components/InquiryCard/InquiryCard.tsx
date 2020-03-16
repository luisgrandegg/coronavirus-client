import { Card, CardContent, Typography, CardActions } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

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
                <Typography color="textSecondary" gutterBottom>
                    {t('inquiry.created-at', {
                        createdAt: inquiry.createdAt
                    })}
                </Typography>
                <Typography variant="h5" component="h2">
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
