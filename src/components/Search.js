import React, { useRef, useEffect } from 'react';
import { useAppState } from '../providers/app-state';

export const Search = () => {
  const inputRef = useRef();
  const { searchValue, setSearchValue } = useAppState();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <header>
      <input
        type='text'
        placeholder='Поиск имени ...'
        ref={inputRef}
        value={searchValue}
        onChange={handleChange}
      />
    </header>
  );
};
