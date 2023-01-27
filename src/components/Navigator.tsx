import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShoppingCartScreen from './ShoppingCart/screens/ShoppingCartScreen';
import CoffeeListScreen from './CoffeeList/CoffeeListScreen';
import SignInScreens from './SignInNavigator';

const Navigator = () => {

    const Tab = createBottomTabNavigator<TabParamList>();

    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="SignIn" component={SignInScreens} />
          <Tab.Screen name="ShoppingCart" component={ShoppingCartScreen} />
          <Tab.Screen name="CoffeeList" component={CoffeeListScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
  
    );
};

export type TabParamList = {
  SignIn: undefined;
  ShoppingCart: undefined;
  CoffeeList: undefined;
};

export default Navigator;

//reference: https://javascript.plainenglish.io/react-navigation-v6-with-typescript-5c9c065d45a5