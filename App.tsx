// In App.js in a new project

import React, { useContext, useState } from 'react';
import Navigator from './src/components/Navigator';
import { ShoppingProvider } from './src/contexts/ShoppingContext';
import { Provider } from './src/contexts/UserContext';

const App = () => {
  return (
    <Provider>
     <ShoppingProvider>
      <Navigator/>
      </ShoppingProvider>
      
    </Provider>
  )
};

export default App;
