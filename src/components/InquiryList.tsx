import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { sdk } from '../sdk';
import { Inquiry } from '../entities/Inquiry';

export const InquiryList: React.FunctionComponent = (): JSX.Element => {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const { t } = useTranslation();

    const getInquiries = () => { sdk.inquiries.get().then((inquiries: Inquiry[]) => setInquiries(inquiries)); };

    const solveInquiry = (inquiry: Inquiry): () => void => {
        return (): void => {
            sdk.inquiries.solve(inquiry.id)
                .then(() => getInquiries());
        }
    };

    useEffect((): () => void => {
        getInquiries();
        const interval = setInterval(() => { getInquiries(); }, 5000)
        return (): void => { clearInterval(interval); }
    }, []);

    const renderInquiries = (): React.ReactNode => {
        return inquiries.map((inquiry: Inquiry) => (
            <tr key={inquiry.id}>
                <td>MISSING STATE</td>
                <td>{inquiry.createdAt.toISOString()}</td>
                <td>{inquiry.speciality}</td>
                <td>{inquiry.summary}</td>
                <td>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={solveInquiry(inquiry)}
                        type="submit"
                    >
                        {t('inquiry-list.inquiry.solve')}
                    </Button>
                </td>
            </tr>
        ))
    };

    return (
        <section className="inquiry-list">
            <table>
                <thead>
                    <tr>
                        <th>{t('inquiry-list.headers.state')}</th>
                        <th>{t('inquiry-list.headers.time')}</th>
                        <th>{t('inquiry-list.headers.speciality')}</th>
                        <th>{t('inquiry-list.headers.summary')}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderInquiries()}
                </tbody>
            </table>
        </section>
    )
};
