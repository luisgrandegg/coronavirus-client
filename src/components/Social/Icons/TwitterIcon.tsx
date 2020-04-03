import React from 'react';
import { useTranslation } from 'react-i18next';

export type ITwitterIconProps = {
    fill?: string;
}
export const TwitterIcon: React.FunctionComponent<ITwitterIconProps> = (props: ITwitterIconProps): JSX.Element => {
    const { t } = useTranslation();
    const { fill = 'white' } = props;
    const textTitle = fill === 'white' ? 'share.twitterTitle' : 'share.twitter';

    return (
        <svg aria-labelledby="twitterTitle" role="img" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title id="twitterTitle">{t(textTitle)}</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8659 2.43C23.7129 2.265 23.4679 2.223 23.2679 2.328C23.1249 2.403 22.8469 2.501 22.5209 2.597C22.9119 2.084 23.2289 1.501 23.3649 0.979C23.4189 0.776 23.3379 0.561 23.1659 0.441C22.9909 0.322 22.7619 0.324 22.5919 0.445C22.2979 0.654 20.9389 1.256 20.0619 1.451C18.9489 0.45 17.8409 0 16.5009 0C15.4959 0 14.5649 0.287 13.4829 0.929C11.5959 2.049 11.2689 4.47 11.4089 5.955C6.28689 5.467 3.41389 2.487 2.39289 1.19C2.29089 1.061 2.12889 0.999 1.96489 1.001C1.79989 1.013 1.65089 1.105 1.56789 1.248C0.346887 3.341 0.846886 5.495 1.78489 6.944C1.63089 6.839 1.47489 6.722 1.31889 6.593C1.16889 6.47 0.961887 6.442 0.786887 6.526C0.611887 6.608 0.499887 6.784 0.499887 6.978C0.499887 9.175 1.78689 10.745 3.04289 11.637C2.91989 11.604 2.78789 11.566 2.64889 11.522C2.46089 11.465 2.25689 11.52 2.12689 11.667C1.99589 11.814 1.96289 12.024 2.04289 12.203C2.84589 14.008 4.44289 15.354 6.23289 15.822C4.69389 16.759 2.56589 17.24 0.557887 17.003C0.323887 16.972 0.0988865 17.118 0.0248865 17.344C-0.0491135 17.569 0.0458865 17.816 0.251887 17.934C2.68589 19.324 5.21489 20 7.98289 20H8.00089C11.7819 19.997 15.3329 18.352 17.9989 15.368C20.5719 12.489 21.9209 8.802 21.6449 5.445C22.3059 4.951 23.3069 4.027 23.9239 3.035C24.0439 2.843 24.0199 2.595 23.8659 2.43Z" fill={fill} />
        </svg>
    )
};
