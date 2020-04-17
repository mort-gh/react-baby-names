import React from 'react';
import { useNames } from '../providers/names';
import { useAppState } from '../providers/app-state';
import { NameList } from './NameList';

export const NamePicker = () => {
  const names = useNames();
  const { searchValue, shortList, setShortList } = useAppState();

  const filteredNames = names
    .filter((entry) =>
      entry.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((entry) => !shortList.includes(entry.id));

  const addToShortList = (id) => {
    setShortList([...shortList, id]);
  };

  return <NameList nameList={filteredNames} onItemClick={addToShortList} />;
};
