import React, { useState } from 'react';
import './App.css';
import Page from './components/Page';
import { atom, useAtom, Provider } from 'jotai';

const isDarkState = atom(false);

function App() {
  return (
    <Provider>
      <RecoilApp />
    </Provider>
  );
}

function RecoilApp() {
  const [isDark, setIsDark] = useAtom(isDarkState);

  return (
    <Page isDark={isDark} toggleThema={() => setIsDark((prev) => !prev)} />
  );
}

export default App;
