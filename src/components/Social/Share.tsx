import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import { EmailIcon } from './Icons/EmailIcon';
import { FacebookIcon } from './Icons/FacebookIcon';
import { TwitterIcon } from './Icons/TwitterIcon';
import { WhatsappIcon } from './Icons/WhatsappIcon';

export const Share: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();

    const buttonClassName = 'share__button';
    const shareUrl = 'https://www.citamedicaencasa.es';

    return (
        <ul className="share">
            <li>
                <TwitterShareButton
                    className={buttonClassName}
                    url={shareUrl}
                    via="CitaMedicaCasa"
                    title={t('share.twitter')}
                >
                    <TwitterIcon />
                    <span>Twitter</span>
                </TwitterShareButton>
            </li>
            <li>
                <FacebookShareButton
                    className={buttonClassName}
                    url={shareUrl}
                    quote={t('share.text')}
                >
                    <FacebookIcon />
                    <span>Facebook</span>
                </FacebookShareButton>
            </li>
            <li>
                <WhatsappShareButton
                    className={buttonClassName}
                    url={shareUrl}
                    title={t('share.text')}
                >
                    <WhatsappIcon />
                    <span>Whatsapp</span>
                </WhatsappShareButton>
            </li>
            <li>
                <EmailShareButton
                    className={buttonClassName}
                    url={shareUrl}
                    subject={t('share.title')}
                    body={t('share.text')}
                >
                    <EmailIcon />
                    <span>Email</span>
                </EmailShareButton>
            </li>
        </ul>
    )
};
