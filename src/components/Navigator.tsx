import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen'

const Navigator = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
     
    return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle :{
              backgroundColor: 'purple'
            }}}>
            <Stack.Screen name='SignIn' component={SignInScreen}/>
            <Stack.Screen name='Home' component={HomeScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
  
    );
};

export type RootStackParamList = {
    Home: undefined;
    SignIn: undefined;
};

export default Navigator;