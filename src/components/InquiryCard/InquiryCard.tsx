import { Card, CardContent, Typography, CardActions, Tooltip, IconButton, Button } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import moment from '../../utils/moment';
import { Inquiry } from '../../entities/Inquiry';
import { getSpecialityLabel } from '../../constants/specialities';
import { Routes } from '../../router/Routes';
import { sdk } from '../../sdk';
import { useSelector } from 'react-redux';
import { getAuth } from '../../store/selectors/status';
import { UserType } from '../../entities/User';
export interface IInquiryCardProps {
    inquiry: Inquiry;
    isAdmin: boolean;
    onAttendEvent?: (attended: boolean) => void;
    onFlagEvent?: (flagged: boolean) => void;
    onActivateEvent?: (activated: boolean) => void;
}


export const InquiryCard: React.FunctionComponent<IInquiryCardProps> = (
    props: IInquiryCardProps
): JSX.Element => {
    const auth = useSelector(getAuth);
    const { isAdmin, inquiry, onAttendEvent, onFlagEvent, onActivateEvent } = props;
    const { t } = useTranslation();

    const [open, setOpen] = React.useState(false);
    const [copied, setCopied] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const onCopyToClipboard = () => {
        setOpen(true);
        setCopied(true);
        setTimeout(() => {
            setOpen(false);
            setCopied(false);
        }, 5000);
    }

    const attendInquiry = (inquiry: Inquiry): () => void => {
        return (): void => { sdk.inquiries.attend(inquiry.id).then(() => { onAttendEvent && onAttendEvent(true); }); }
    };

    const unattendInquiry = (inquiry: Inquiry): () => void => {
        return (): void => { sdk.inquiries.unattend(inquiry.id).then(() => { onAttendEvent && onAttendEvent(false); }); }
    };

    const flagInquiry = (inquiry: Inquiry): () => void => {
        return (): void => { sdk.inquiries.flag(inquiry.id).then(() => { onFlagEvent && onFlagEvent(true) }); }
    };

    const unflagInquiry = (inquiry: Inquiry): () => void => {
        return (): void => { sdk.inquiries.unflag(inquiry.id).then(() => { onFlagEvent && onFlagEvent(false) }); }
    };

    const deactivateInquiry = (inquiry: Inquiry): () => void => {
        return (): void => { sdk.inquiries.deactivate(inquiry.id).then(() => { onActivateEvent && onActivateEvent(false); }); }
    };

    const renderDeactivateContent = (inquiry: Inquiry): React.ReactNode => {
        if (inquiry.flagged) {
            return (
                <Button
                    color="primary"
                    onClick={deactivateInquiry(inquiry)}
                    type="button"
                >
                    {t('inquiry.deactivate')}
                </Button>
            );
        }
    };

    const renderInquiryAttendContent = (inquiry: Inquiry): React.ReactNode => {
        if (inquiry.doctorId === auth?.userId && inquiry.attended) {
            return (
                <>
                    <Button
                        color="primary"
                        onClick={unattendInquiry(inquiry)}
                        type="button"
                        to={{
                            pathname: Routes.DOCTOR_DASHBOARD
                        }}
                        component={RouterLink}
                    >
                        {t('inquiry.unattend')}
                    </Button>
                </>
            );
        } else if (!isAdmin) {
            return (
                <Button
                    color="primary"
                    onClick={attendInquiry(inquiry)}
                    type="button"
                    to={{
                        pathname: Routes.INQUIRY_DETAIL.replace(':id', inquiry.id)
                    }}
                    component={RouterLink}
                >
                    {t('inquiry.attend')}
                </Button>
            );
        }
    };

    const renderInquiryFlagContent = (inquiry: Inquiry): React.ReactNode => {
        if (isAdmin && inquiry.flagged) {
            return (
                <Button
                    color="secondary"
                    onClick={unflagInquiry(inquiry)}
                    type="button"
                >
                    {t('inquiry.unflag')}
                </Button>
            );
        } else if (!inquiry.flagged) {
            return (
                <Button
                    color="secondary"
                    onClick={flagInquiry(inquiry)}
                    type="button"
                >
                    {t('inquiry.flag')}
                </Button>
            );
        }
    }

    const showEmail = (): boolean => {
        return inquiry.attended && (inquiry.doctorId === auth?.userId || auth?.userType === UserType.DOCTOR_ADMIN);
    }

    return (
        <Card className="inquiry">
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('inquiry.created-at', {
                        createdAtDate: moment(inquiry.createdAt).format('dddd D '),
                        createdAtTime: moment(inquiry.createdAt).format('HH:mm')
                    })}
                </Typography>
                <Typography>
                    <strong>{t('inquiry.speciality')}</strong> {getSpecialityLabel(inquiry.speciality)}
                </Typography>
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
                {showEmail() && (
                    <CopyToClipboard
                        onCopy={onCopyToClipboard}
                        text={inquiry.email}
                    >
                        <Tooltip
                            open={open}
                            onClose={handleTooltipClose}
                            onOpen={handleTooltipOpen}
                            interactive
                            title={copied ? t('inquiry.email.copied') : t('inquiry.email.copy')}
                        >
                            <Typography className="inquiry__email">
                                <strong>{t('inquiry.email.field')}</strong> {inquiry.email}
                                <IconButton aria-label="copy">
                                    <FileCopyIcon/>
                                </IconButton>
                            </Typography>
                        </Tooltip>
                    </CopyToClipboard>
                )}
                <div className="button-group">
                    {isAdmin ?
                        renderDeactivateContent(inquiry) :
                        renderInquiryAttendContent(inquiry)
                    }
                </div>
                <div className="button-group">
                    {renderInquiryFlagContent(inquiry)}
                </div>
            </CardActions>
        </Card>
    )
};
