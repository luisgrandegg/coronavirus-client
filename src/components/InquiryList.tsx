import { Button, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';

import { sdk } from '../sdk';
import { Inquiry } from '../entities/Inquiry';
import { Routes } from '../router/Routes';
import { InquiryCard } from './InquiryCard';
import { InquiryListParams } from '../dto/InquiryListParams';

export interface IInquiryListProps {
    admin?: boolean;
    inquiryListParams?: InquiryListParams;
    isLive?: boolean;
}

export const InquiryList: React.FunctionComponent<IInquiryListProps> = (
    props: IInquiryListProps
): JSX.Element => {
    const { admin = false, isLive = true } = props;
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const { t } = useTranslation();

    const attendInquiry = (inquiry: Inquiry): () => void => {
        return (): void => { sdk.inquiries.attend(inquiry.id); }
    };

    const unattendInquiry = (inquiry: Inquiry): () => void => {
        return (): void => { sdk.inquiries.unattend(inquiry.id); }
    };

    const flagInquiry = (inquiry: Inquiry): () => void => {
        return (): void => { sdk.inquiries.flag(inquiry.id).then(() => { getInquiries(); }); }
    };

    const unflagInquiry = (inquiry: Inquiry): () => void => {
        return (): void => { sdk.inquiries.unflag(inquiry.id).then(() => { getInquiries(); }); }
    };

    const deactivateInquiry = (inquiry: Inquiry): () => void => {
        return (): void => { sdk.inquiries.deactivate(inquiry.id).then(() => { getInquiries(); }); }
    };

    const getInquiries = () => {
        sdk.inquiries.get(props.inquiryListParams).then((inquiries: Inquiry[]) => setInquiries(inquiries));
    };

    useEffect((): () => void => {
        const interval = isLive ?
            setInterval(() => { getInquiries(); }, 5000):
            null;
        return (): void => { interval && clearInterval(interval); }

// eslint-disable-next-line
    }, []);

    useEffect((): void => {
        getInquiries();
        // eslint-disable-next-line
    }, [props.inquiryListParams]);


    const renderDeactivateContent = (inquiry: Inquiry): React. ReactNode => {
        if (props.inquiryListParams?.flagged) {
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
        if (props.inquiryListParams?.attended) {
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
        } else {
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
        if (props.inquiryListParams?.flagged) {
            return (
                <Button
                    color="secondary"
                    onClick={unflagInquiry(inquiry)}
                    type="button"
                >
                    {t('inquiry.unflag')}
                </Button>
            );
        } else {
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

    const renderInquiries = (): React.ReactNode => inquiries.map((inquiry: Inquiry) => (
        <InquiryCard key={inquiry.id} inquiry={inquiry}>
            {props.inquiryListParams?.attended && (
                <CopyToClipboard text={inquiry.email}>
                    <Typography className="inquiry__email">
                        <strong>{t('inquiry.email')}</strong> {inquiry.email}
                    </Typography>
                </CopyToClipboard>
            )}
            <div className="button-group">
                {admin ?
                     renderDeactivateContent(inquiry) :
                     renderInquiryAttendContent(inquiry)
                }
            </div>
            <div className="button-group">
                {renderInquiryFlagContent(inquiry)}
            </div>
        </InquiryCard>
    ));

    return (
        <section className="inquiry-list">
            {renderInquiries()}
        </section>
    )
};
