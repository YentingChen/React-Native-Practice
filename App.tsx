// In App.js in a new project

import React, { useContext, useState } from 'react';
import Navigator from './src/components/Navigator';
import { Provider } from './src/contexts/UserContext';

const App = () => {
  return (
    <Provider>
      <Navigator/>
    </Provider>
  )
};

export default App;
