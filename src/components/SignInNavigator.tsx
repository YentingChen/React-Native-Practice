import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from './SignIn/screens/ProfileScreen';
import SignInScreen from './SignIn/screens/SignInScreen'

const SignInScreens = () => {

    const Stack = createNativeStackNavigator<SignInStackParamList>();
    
    return (
      <Stack.Navigator screenOptions={{
        headerStyle :{
          backgroundColor: 'purple'
        }}}>
        <Stack.Screen name='SignIn' component={SignInScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
      </Stack.Navigator>
    )
};

export type SignInStackParamList = {
    SignIn: undefined;
    Profile: undefined;
};

export default SignInScreens;