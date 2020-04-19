// React
import React from 'react';
import ReactDOM from 'react-dom';

// Google Analytics
import ReactGA from 'react-ga';

// Styles
import 'normalize-css';
import './css/style.css';
import './css/fonts.css';

// Components
import { App } from './App';
import { NamesProvider } from './providers/names';
import { AppStateProvider } from './providers/app-state';

ReactGA.initialize('UA-156511211-3');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <NamesProvider>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </NamesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
