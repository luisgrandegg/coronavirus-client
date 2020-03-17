import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { sdk } from '../sdk';
import { Inquiry } from '../entities/Inquiry';
import { Routes } from '../router/Routes';
import { InquiryCard } from './InquiryCard';
import { InquiryListParams } from '../dto/InquiryListParams';

export interface IInquiryListProps {
    inquiryListParams?: InquiryListParams;
}

export const InquiryList: React.FunctionComponent<IInquiryListProps> = (
    props: IInquiryListProps
): JSX.Element => {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const { t } = useTranslation();

    const attendInquiry = (inquiry: Inquiry): () => void => {
        return (): void => { sdk.inquiries.attend(inquiry.id); }
    };

    const getInquiries = () => {
        sdk.inquiries.get(props.inquiryListParams).then((inquiries: Inquiry[]) => setInquiries(inquiries));
    };

    useEffect((): () => void => {
        getInquiries();
        const interval = setInterval(() => { getInquiries(); }, 5000)
        return (): void => { clearInterval(interval); }
    });

    const renderInquiryCardContent = (inquiry: Inquiry): React.ReactNode => {
        if (props.inquiryListParams?.attended) {
            return (
                <span>{inquiry.email}</span>
            );
        } else {
            return (
                <Button
                    color="primary"
                    to={{
                        pathname: Routes.INQUIRY_DETAIL.replace(':id', inquiry.id),
                        state: {
                            inquiry
                        }
                    }}
                    onClick={attendInquiry(inquiry)}
                    type="button"
                    component={RouterLink}
                >
                    {t('inquiry.attend')}
                </Button>
            );
        }
    };

    const renderInquiries = (): React.ReactNode => inquiries.map((inquiry: Inquiry) => (
        <InquiryCard inquiry={inquiry}>
            {renderInquiryCardContent(inquiry)}
        </InquiryCard>
    ));

    return (
        <section className="inquiry-list">
            {renderInquiries()}
        </section>
    )
};
