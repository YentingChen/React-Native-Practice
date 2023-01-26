import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ProfileScreen from './SignIn/screens/ProfileScreen';
import SignInScreen from './SignIn/screens/SignInScreen'
import ShoppingCartScreen from './ShoppingCart/ShoppingCartScreen';

const Navigator = () => {
    const Stack = createNativeStackNavigator<SignInStackParamList>();
    const Tab = createBottomTabNavigator<TabParamList>();

    const SignInScreens = () => {
      return (
        <Stack.Navigator screenOptions={{
          headerStyle :{
            backgroundColor: 'purple'
          }}}>
          <Stack.Screen name='SignIn' component={SignInScreen}/>
          <Stack.Screen name='Profile' component={ProfileScreen}/>
        </Stack.Navigator>
      )
    }

    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="SignIn" component={SignInScreens} />
          <Tab.Screen name="ShoppingCart" component={ShoppingCartScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  
    );
};

export type SignInStackParamList = {
    SignIn: undefined;
    Profile: undefined;
};

export type TabParamList = {
  SignIn: undefined;
  ShoppingCart: undefined;
};

export default Navigator;

//reference: https://javascript.plainenglish.io/react-navigation-v6-with-typescript-5c9c065d45a5