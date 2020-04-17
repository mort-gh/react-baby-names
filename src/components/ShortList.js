import React from 'react';
import { useNames } from '../providers/names';
import { useAppState } from '../providers/app-state';
import { NameList } from './NameList';

export const ShortList = () => {
  const names = useNames();
  const { shortList, setShortList } = useAppState();

  const shortListedNames = names.filter((entry) =>
    shortList.includes(entry.id)
  );

  const removeFromShortList = (id) => {
    setShortList(shortList.filter((i) => i !== id));
  };

  const hasNames = shortListedNames.length > 0;

  return (
    <div className='short-list'>
      <h2>{hasNames ? 'Выбранные имена' : 'Нажмите на имя чтобы выбрать'}</h2>

      {hasNames && (
        <>
          <NameList
            nameList={shortListedNames}
            onItemClick={removeFromShortList}
          />

          <hr />
        </>
      )}
    </div>
  );
};
