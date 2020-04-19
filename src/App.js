// React
import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import { NamePicker } from './components/NamePicker';
import { Search } from './components/Search';
import { ShortList } from './components/ShortList';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <HelmetComponent />
      <Search />
      <NamesContainer />
      <Footer />
    </>
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

function HelmetComponent() {
  const title = 'Baby Name Picker - удобный поиск и подбор имени для ребёнка';
  const description = `Здесь можно выбрать имя для ребёнка. ТОП 100 самых популярных мужских и женских имён в ${new Date().getFullYear()} году.`;
  const keywords =
    'имя для мальчика, имя для девочки, выбор имени, популряные имена';
  const url = 'https://pickname.online/';
  const siteName =
    'Baby Name Picker - удобный поиск и подбор имени для ребёнка';
  const ogTitle = `Baby Name Picker - здесь можно выбрать имя для ребёнка. ТОП 100 самых популярных мужских и женских имён в ${new Date().getFullYear()} году.`;
  const ogDescription =
    'Еще не выбрали имя для первенца? Удобный поиск подходящего имени';
  const ogImage = 'https://i.ibb.co/bgDWfXx/baby-name-picker-og.jpg';

  return (
    <div className='application'>
      <Helmet>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={description}></meta>
        <meta name='keywords' content={keywords} />

        <meta property='og:url' content={url} />
        <meta property='og:type' content='article' />
        <meta property='og:site_name' content={siteName} />

        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        <meta property='og:title' content={ogTitle} />
        <meta property='og:description' content={ogDescription} />
        <meta property='og:image' content={ogImage} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content={ogTitle} />
        <meta property='twitter:description' content={ogDescription} />
        <meta property='twitter:image' content={ogImage} />

        <title>{title}</title>
      </Helmet>
    </div>
  );
}
