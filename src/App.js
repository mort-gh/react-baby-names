import React from 'react';
import { NamePicker } from './components/NamePicker';
import { Search } from './components/Search';
import { ShortList } from './components/ShortList';
import { ResetSearch } from './components/ResetSearch';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Search />
      <NamesContainer />
      <Footer />
    </>
  );
}

function NamesContainer() {
  return (
    <main>
      <ShortList />
      <NamePicker />
      <ResetSearch />
    </main>
  );
}
