import React, { useState, useEffect } from 'react';
import { useNames } from '../providers/names';
import { useAppState } from '../providers/app-state';
import { FullName } from './FullName';
import { FullNameList } from './FullNameList';

export const ShortList = () => {
  const names = useNames();
  const { shortList, setShortList } = useAppState();
  const [babyName, setBabyName] = useState('');
  const [babySurname, setBabySurname] = useState('');

  useEffect(() => {
    checkLocalStorage('babySurname', setBabyName);
    checkLocalStorage('babyPatronymic', setBabySurname);
    // checkLocalStorage('shortList', setShortList);
    localStorage.hasOwnProperty('shortList') &&
      setShortList(JSON.parse(localStorage.getItem('shortList')));
  }, [setShortList]);

  const checkLocalStorage = (key, stateFunction) => {
    localStorage.hasOwnProperty(key) &&
      stateFunction(localStorage.getItem(key));
  };

  const shortListedNames = names.filter((entry) =>
    shortList.includes(entry.id)
  );

  const removeFromShortList = (id) => {
    setShortList(shortList.filter((i) => i !== id));
  };

  const hasNames = shortListedNames.length > 0;

  return (
    <div className='short-list'>
      <FullName
        babyName={babyName}
        setBabyName={setBabyName}
        babySurname={babySurname}
        setBabySurname={setBabySurname}
      />

      {hasNames && (
        <>
          <FullNameList
            nameList={shortListedNames}
            onItemClick={removeFromShortList}
            babyName={babyName}
            babySurname={babySurname}
          />

          <p className='short-list-subtitle'>
            Нажмите на имя, чтобы удалить из списка
          </p>

          <hr />
        </>
      )}
    </div>
  );
};
