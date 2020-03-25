import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { InquiryCard } from '../components/InquiryCard';
import { useParams } from 'react-router-dom';
import { Inquiry } from '../entities/Inquiry';
import { DoctorTabs } from '../components/DoctorTabs';
import { sdk } from '../sdk';
import { Tooltip, Typography, IconButton } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';

interface IInquiryDetailLocationState {
    id: string;
}

export const InquiryDetail: React.FunctionComponent = (): JSX.Element => {
    let { id: inquiryId } = useParams<IInquiryDetailLocationState>();
    const [inquiry, setInquiry] = useState<Inquiry | null>(null);
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

    const renderInquiry = (inquiryToRender: Inquiry): React.ReactNode => {
        return (
            <InquiryCard inquiry={inquiryToRender}>
                <CopyToClipboard
                    onCopy={onCopyToClipboard}
                    text={inquiryToRender.email}
                >
                    <Tooltip
                        open={open}
                        onClose={handleTooltipClose}
                        onOpen={handleTooltipOpen}
                        interactive
                        title={copied ? t('inquiry.email.copied') : t('inquiry.email.copy')}
                    >
                        <Typography className="inquiry__email">
                            <strong>{t('inquiry.email.field')}</strong> {inquiryToRender.email}
                            <IconButton aria-label="copy">
                                <FileCopyIcon/>
                            </IconButton>
                        </Typography>
                    </Tooltip>
                </CopyToClipboard>
            </InquiryCard>
        );
    };

    useEffect((): void => {
        sdk.inquiries.getOne(inquiryId)
            .then((inquiry: Inquiry) => { setInquiry(inquiry); });
    }, [inquiryId]);

    return (
        <>
            <Header>
                <DoctorTabs value={1}/>
            </Header>
            <main className="main inquiry-detail">
                <div className="container">
                    <BackHome />
                    {inquiry && renderInquiry(inquiry)}
                </div>
            </main>
            <Footer/>
        </>
    );
};
