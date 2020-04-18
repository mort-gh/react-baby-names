import React, { useRef, useEffect } from 'react';
import { useAppState } from '../providers/app-state';
import { ResetSearch } from './ResetSearch';

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
      {/* <p className='short-list-text'>Для выбора, нажмите на имя</p> */}

      <Logo />

      <input
        type='text'
        placeholder='Поиск имени ...'
        ref={inputRef}
        value={searchValue}
        onChange={handleChange}
        className='search_input'
        autoComplete='off'
      />
      <ResetSearch />
    </header>
  );
};

function Logo() {
  const logotype = require('../assets/logo.png');

  return (
    <div className='logo_block'>
      <a href='/'>
        <img src={logotype} alt='Baby name picker' width='100' />
      </a>
      <h1 className='logo_text'>
        Baby name
        <br />
        picker
      </h1>
    </div>
  );
}
