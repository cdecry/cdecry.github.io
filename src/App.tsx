import React from 'react';
import '@mantine/core/styles.css';
import './App.css';

import Profile from './components/Profile';
import Container from './components/Container';
import { Stack, Switch } from '@mantine/core';

const App = () => {
  return (
    <div className="App">
        <Stack>
            <Profile />
        </Stack>
        <Container/>
    </div>
  );
}

export default App;
