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

export type IShareProps = {
    fill?: string;
    showText?: boolean;
    hidden?: string[];
    text?: {
        twitter?: string;
        facebook?: string;
        whatsapp?: string;
        email?: string;
    }
}

export const Share: React.FunctionComponent<IShareProps> = (props: IShareProps): JSX.Element => {
    const { t } = useTranslation();
    const { fill = 'white', showText = true, hidden = [] } = props;
    const text = {
        twitter: props.text?.twitter || t('share.twitter'),
        facebook: props.text?.facebook || t('share.text'),
        whatsapp: props.text?.whatsapp || t('share.text'),
        email: props.text?.email || t('share.text')
    }

    const buttonClassName = 'share__button';
    const shareUrl = 'https://www.citamedicaencasa.es';

    return (
        <ul className="share">
            {!hidden.includes('twitter') ? (
                <li>
                    <TwitterShareButton
                        className={buttonClassName}
                        url={shareUrl}
                        via="CitaMedicaCasa"
                        title={text.twitter}
                    >
                        <TwitterIcon
                            fill={fill}
                        />
                        {showText ?
                            (
                                <span>Twitter</span>
                            ) : null
                        }
                    </TwitterShareButton>
                </li>
            ) : null
            }
            {!hidden.includes('facebook') ? (
                <li>
                    <FacebookShareButton
                        className={buttonClassName}
                        url={shareUrl}
                        quote={text.facebook}
                    >
                        <FacebookIcon
                            fill={fill}
                        />
                        {showText ?
                            (
                                <span>Facebook</span>
                            ) : null
                        }
                    </FacebookShareButton>
                </li>
            ) : null
            }
            {!hidden.includes('whatsapp') ? (
                <li>
                    <WhatsappShareButton
                        className={buttonClassName}
                        url={shareUrl}
                        title={text.whatsapp}
                    >
                        <WhatsappIcon
                            fill={fill}
                        />
                        {showText ?
                            (
                                <span>Whatsapp</span>
                            ) : null
                        }
                    </WhatsappShareButton>
                </li>
            ) : null
            }
            {!hidden.includes('email') ? (
                <li>
                    <EmailShareButton
                        className={buttonClassName}
                        url={shareUrl}
                        subject={t('share.title')}
                        body={text.email}
                    >
                        <EmailIcon
                            fill={fill}
                        />
                        {showText ?
                            (
                                <span>Email</span>
                            ) : null
                        }
                    </EmailShareButton>
                </li>
            ) : null
            }
        </ul>
    )
};
