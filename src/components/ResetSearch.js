import React from 'react';
import { useAppState } from '../providers/app-state';

export const ResetSearch = () => {
  const { searchValue, setSearchValue } = useAppState();

  if (!searchValue) {
    return null;
  }

  return (
    <button className='reset-search' onClick={() => setSearchValue('')}>
      очистить
    </button>
  );
};
