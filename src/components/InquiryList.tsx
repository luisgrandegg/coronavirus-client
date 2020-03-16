import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { sdk } from '../sdk';
import { Inquiry } from '../entities/Inquiry';
import { Routes } from '../router/Routes';
import { InquiryCard } from './InquiryCard';

export const InquiryList: React.FunctionComponent = (): JSX.Element => {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const { t } = useTranslation();

    const solveInquiry = (inquiry: Inquiry): () => void => {
        return (): void => { sdk.inquiries.solve(inquiry.id); }
    };

    const getInquiries = () => { sdk.inquiries.get().then((inquiries: Inquiry[]) => setInquiries(inquiries)); };

    useEffect((): () => void => {
        getInquiries();
        const interval = setInterval(() => { getInquiries(); }, 5000)
        return (): void => { clearInterval(interval); }
    }, []);

    const renderInquiries = (): React.ReactNode => inquiries.map((inquiry: Inquiry) => (
        <InquiryCard inquiry={inquiry}>
            <Button
                color="primary"
                to={{
                    pathname: Routes.INQUIRY_DETAIL.replace(':id', inquiry.id),
                    state: {
                        inquiry
                    }
                }}
                onClick={solveInquiry(inquiry)}
                type="button"
                component={RouterLink}
            >
                {t('inquiry.attend')}
            </Button>
        </InquiryCard>
    ));

    return (
        <section className="inquiry-list">
            {renderInquiries()}
        </section>
    )
};
