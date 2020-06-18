import React from 'react';

import Box from './Box';

import './style/index.less';

interface IApp {
  title: string;
}

const App: React.FC<IApp> = ({ title }) => {
  return <Box />;
};

export default App;
