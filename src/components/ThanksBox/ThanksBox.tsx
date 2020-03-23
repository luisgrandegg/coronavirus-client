import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';

import { ThanksCounter } from './ThanksCounter';
import { ThanksTooltip } from './ThanksTooltip';
import { sdk } from '../../sdk';
import { Stat } from '../../entities/Stat';

export const ThanksBox: React.FunctionComponent = (): JSX.Element => {
    const [claps, setClaps] = useState<Stat|null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const { t } = useTranslation();

    const tooltipToogle = (): void => {
        clap();
        setOpen(!open);
    };

    const getClaps = (): void => { sdk.getClaps().then((claps: Stat) => setClaps(claps)); };

    const clap = (): void => { sdk.clap().then((claps: Stat) => setClaps(claps)); };

    useEffect((): void => {
        getClaps();
    }, []);

    const Content = (): JSX.Element => (
        <div className="thanks-box__content">
            <div className="thanks-box__text">
                <p>{t('thanks-box.text')}</p>
                {claps && <ThanksCounter count={claps.count} text={t('thanks-box.quantity-type')} />}
            </div>
            <div className="thanks-box__button">
                <Button
                    onClick={tooltipToogle}
                    type="button"
                >
                    <span role="img" aria-label="clap">👏</span>
                </Button>
            </div>
            <ThanksTooltip isOpen={open} />
        </div>
    );

    return (
        <div className="thanks-box">
            <div className="thanks-box__container">
                <div className="container">
                    <Content />
                </div>
            </div>
        </div>
    )
};
