import React from 'react';
import '@mantine/core/styles.css';
import './App.css';

import Profile from './components/main/Profile';
import Container from './components/main/Container';
import { Space, Stack, Switch } from '@mantine/core';
import CherryBlossomGame from './components/main/CherryBlossomGame';

const App = () => {
  return (
    <div className="App">
        <Stack>
            <Profile />
            <CherryBlossomGame />
        </Stack>
        <Container/>
    </div>
  );
}

export default App;
