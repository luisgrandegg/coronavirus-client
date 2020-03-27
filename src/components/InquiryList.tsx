import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Pagination from '@material-ui/lab/Pagination';

import { sdk } from '../sdk';
import { Inquiry, InquiryPagination, IInquiryPaginated } from '../entities/Inquiry';
import { InquiryCard } from './InquiryCard';
import { InquiryListParams } from '../dto/InquiryListParams';
import { SkipNavIds } from './SkipNav';

export interface IInquiryListProps {
    isAdmin?: boolean;
    inquiryListParams?: InquiryListParams;
    isLive?: boolean;
    onAttendEvent?: (inquiry: Inquiry) => void;
}

export const InquiryList: React.FunctionComponent<IInquiryListProps> = (
    props: IInquiryListProps
): JSX.Element => {
    const { isAdmin = false, isLive = true } = props;
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [page, setPage] = useState(1);
    const [perPage] = useState(InquiryPagination.PER_PAGE);
    const [total, setTotal] = useState(0);
    const { t } = useTranslation();

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

    const handleFlagEvent = () => { getInquiries(); };

    const handleActivateEvent = () => { getInquiries(); };

    const handleUpdateSpeciality = () => { getInquiries(); };

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

    const handleChange = (_event: React.ChangeEvent<any>, value: number) => {
        setPage(value);
    }

    const renderInquiries = (): React.ReactNode => inquiries.map((inquiry: Inquiry) => (
        <InquiryCard
            key={inquiry.id}
            inquiry={inquiry}
            isAdmin={isAdmin}
            onFlagEvent={handleFlagEvent}
            onActivateEvent={handleActivateEvent}
            onUpdateSpeciality={handleUpdateSpeciality}
            onAttendEvent={props.onAttendEvent}
        />
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
        <section id={SkipNavIds.MAIN} className="inquiry-list">
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
