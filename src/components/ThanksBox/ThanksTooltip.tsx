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
    clicked: number;
    onClose: () => void;
};

export const ThanksTooltip: React.FunctionComponent<IThanksTooltipProps> = (props: IThanksTooltipProps): JSX.Element => {
    const { isOpen, clicked } = props;
    const { t } = useTranslation();

    const buttonClassName = 'thanks-tooltip__button';
    const shareUrl = 'https://www.citamedicaencasa.es';

    let tooltipText = t('thanks-box.tooltip.first-text');
    if (clicked > 1) {
        tooltipText = t('thanks-box.tooltip.second-text');
    }
    if (clicked > 2) {
        tooltipText = t('thanks-box.tooltip.text');
    }

    const handleClickAway = (): void => { props.onClose(); }

    return (
        <ClickAwayListener
            touchEvent={false}
            onClickAway={handleClickAway}>
            <div className={`thanks-tooltip ${isOpen ? 'thanks-tooltip--open' : ''}`}>
                <div className="thanks-tooltip__content">
                    <p className="thanks-tooltip__text">{tooltipText}</p>
                </div>
                {clicked > 2 ?
                    (<ul className="thanks-tooltip__share">
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
                    </ul>)
                    :
                    null
                }
            </div>
        </ClickAwayListener>
    )
};
