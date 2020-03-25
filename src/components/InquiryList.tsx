import { Button, Typography, IconButton, Tooltip } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import Pagination from '@material-ui/lab/Pagination';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import { sdk } from '../sdk';
import { Inquiry, InquiryPagination, IInquiryPaginated } from '../entities/Inquiry';
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
    const [loading, setLoading] = useState<boolean | null>(null);
    const [page, setPage] = useState(1);
    const [perPage] = useState(InquiryPagination.PER_PAGE);
    const [total, setTotal] = useState(0);
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
        setLoading(true);
        sdk.inquiries.get({ ...props.inquiryListParams, page, perPage })
            .then((data: IInquiryPaginated) => {
                const { inquiries, total } = data;
                setInquiries(inquiries);
                setTotal(total);
            })
            .finally(() => setLoading(false));
    };

    useEffect((): void => {
        setPage(1);
        // eslint-disable-next-line
    }, [props.inquiryListParams]);

    useEffect((): () => void => {
        const interval = isLive ?
            setInterval(() => { getInquiries(); }, 5000) :
            null;
        return (): void => { interval && clearInterval(interval); }

        // eslint-disable-next-line
    }, [props.inquiryListParams, page]);

    useEffect((): void => {
        getInquiries();
        // eslint-disable-next-line
    }, [props.inquiryListParams, page]);

    const handleChange = (event: React.ChangeEvent<any>, value: number) => {
        setPage(value);
    }

    const renderDeactivateContent = (inquiry: Inquiry): React.ReactNode => {
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

    const renderEmptyState = (): React.ReactNode =>
        inquiries.length === 0 && loading === false ?
            (
                <div className="inquiry-list__empty">
                    {t('inquiry-list.empty')}
                </div>
            ) : (
                null
            );

    return (
        <section className="inquiry-list">
            {inquiries.length ? (
                <>
                    {renderInquiries()}
                    {total > perPage ?
                        (
                            <Pagination
                                className="inquiry-list__pagination"
                                count={Math.ceil(total / perPage)}
                                page={page}
                                onChange={handleChange}
                            />
                        ) :
                        null}
                </>
            ) : renderEmptyState()}
        </section>
    )
};
