// React
import React from 'react';
// import { Helmet } from 'react-helmet';

// Components
import { NamePicker } from './components/NamePicker';
import { Search } from './components/Search';
import { ShortList } from './components/ShortList';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div>
      <Search />
      <NamesContainer />
      <Footer />
    </div>
  );
}

function NamesContainer() {
  return (
    <main>
      <NamePicker />
      <ShortList />
    </main>
  );
}
