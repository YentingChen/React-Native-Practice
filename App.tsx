// In App.js in a new project

import React, { useContext, useState } from 'react';
import Navigator from './src/components/Navigator';
import { ShoppingProvider } from './src/components/ShoppingCart/contexts/ShoppingContext';
import { Provider } from './src/components/SignIn/contexts/UserContext';

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
