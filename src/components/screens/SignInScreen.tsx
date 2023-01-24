import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, {useContext, useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import Context from "../../contexts/UserContext";
import { RootStackParamList } from "../Navigator";

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignInScreen = ({route, navigation}: SignInProps) => {

    const user = useContext(Context)
  
    const [text, setText] = useState("");
  
    function signIn(name: string) {
      user.setUsername(name)
      navigation.navigate('Home')
    }
  
    return (
      <View style={{
        flex: 1
      }}>
        <Text style={{
          fontSize: 18,
          textAlign: "center",
          margin: 16
        }}>Sign In</Text>
        <TextInput 
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 16,
        }} placeholder={"user name"} onChangeText={setText} value={text} ></TextInput>
        <TextInput style={{
          borderWidth: 1,
          padding: 10,
          margin: 16,
        }} placeholder={"password"}></TextInput>
        <TouchableOpacity style={{
          backgroundColor: "purple",
          padding: 10, 
          margin: 16}}>
            <Text style={{
              color: "white",
              textAlign: "center"
            }} onPress={ () => {signIn(text)} }>Confirm</Text>
          </TouchableOpacity>
         
      </View>
    )
  }
export default SignInScreen;