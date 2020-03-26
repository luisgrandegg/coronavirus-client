import { Card, CardContent, Typography, CardActions } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import moment from '../../utils/moment';
import { Inquiry } from '../../entities/Inquiry';
import { getSpecialityLabel } from '../../constants/specialities';

export interface IInquiryCardProps {
    children: React.ReactNode;
    inquiry: Inquiry;
    specialist?: React.ReactNode;
}

export const InquiryCard: React.FunctionComponent<IInquiryCardProps> = (
    props: IInquiryCardProps
): JSX.Element => {
    const { children, inquiry, specialist } = props;
    const { t } = useTranslation();

    return (
        <Card className="inquiry">
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('inquiry.created-at', {
                        createdAtDate: moment(inquiry.createdAt).format('dddd D '),
                        createdAtTime: moment(inquiry.createdAt).format('HH:mm')
                    })}
                </Typography>
                <>
                    {specialist ?
                        (
                            <div className="inquiry__speciality-field">
                                <label>{t('inquiry.speciality')}</label>
                                {specialist}
                            </div>
                        ) :
                        (
                            <Typography>
                                <strong>{t('inquiry.speciality')}</strong> {getSpecialityLabel(inquiry.speciality)}
                            </Typography>
                        )
                    }
                </>
                <Typography>
                    <strong>{t('inquiry.age')}</strong> {inquiry.age}
                </Typography>
                { inquiry?.time &&
                    <Typography>
                        <strong>{t('inquiry.time')}</strong> {inquiry.time}
                    </Typography>
                }
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
