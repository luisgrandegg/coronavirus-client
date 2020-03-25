import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import { FacebookIcon } from '../Social/Icons/FacebookIcon';
import { TwitterIcon } from '../Social/Icons/TwitterIcon';
import { WhatsappIcon } from '../Social/Icons/WhatsappIcon';
import { ClickAwayListener } from '@material-ui/core';

export type IThanksTooltipProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const ThanksTooltip: React.FunctionComponent<IThanksTooltipProps> = (props: IThanksTooltipProps): JSX.Element => {
    const { isOpen } = props;
    const { t } = useTranslation();

    const buttonClassName = 'thanks-tooltip__button';
    const shareUrl = 'https://www.citamedicaencasa.es';

    const handleClickAway = (): void => { props.onClose(); }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={`thanks-tooltip ${isOpen? 'thanks-tooltip--open' : ''}`}>
                <div className="thanks-tooltip__content">
                    <p className="thanks-tooltip__text">{t('thanks-box.tooltip.text')}</p>
                </div>
                <ul className="thanks-tooltip__share">
                    <li>
                        <TwitterShareButton
                            className={buttonClassName}
                            url={shareUrl}
                            via="CitaMedicaCasa"
                            title={t('thanks-box.tooltip.message')}
                        >
                            <TwitterIcon />
                        </TwitterShareButton>
                    </li>
                    <li>
                        <FacebookShareButton
                            className={buttonClassName}
                            url={shareUrl}
                            quote={t('thanks-box.tooltip.message-alternative')}
                        >
                            <FacebookIcon />
                        </FacebookShareButton>
                    </li>
                    <li>
                        <WhatsappShareButton
                            className={buttonClassName}
                            url={shareUrl}
                            title={t('thanks-box.tooltip.message')}
                        >
                            <WhatsappIcon />
                        </WhatsappShareButton>
                    </li>
                </ul>
            </div>
        </ClickAwayListener>
    )
};
