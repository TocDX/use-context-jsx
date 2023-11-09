import React, { useState } from 'react';
import './App.css';
import Page from './components/Page';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

const isDarkState = atom({
  key: 'isDarkState',
  default: false,
});

const isDarkButton = selector({
  key: 'isDarkButton',
  get: ({ get }) => get(isDarkState),
  set: ({ set }) => set(isDarkState, (prev) => !prev),
});

function App() {
  return (
    <RecoilRoot>
      <RecoilApp />
    </RecoilRoot>
  );
}

function RecoilApp() {
  const isDark = useRecoilValue(isDarkState);
  const setIsDark = useSetRecoilState(isDarkButton);

  return (
    <Page isDark={isDark} toggleThema={() => setIsDark((prev) => !prev)} />
  );
}

export default App;
