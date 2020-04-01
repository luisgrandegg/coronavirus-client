import React from 'react'
import { useTranslation } from 'react-i18next';

export interface IList {
    listName: string,
    numItems: number,
    itemsText: string,
    ordered?: boolean,
}

export const List = ({ listName, numItems, itemsText, ordered = true }: IList): JSX.Element => {
    const { t } = useTranslation();
    const ListType = ordered ? 'ol' : 'ul';

    return (
        <ListType className={`${listName}__list`}>
            {[...Array(numItems)].map((x, key) =>
                <li
                    key={key}
                    className={`${listName}__list-item`}
                    dangerouslySetInnerHTML={{ __html: t(`${itemsText}.list-item-${key + 1}`) }} />
            )}
        </ListType>
    )
};
