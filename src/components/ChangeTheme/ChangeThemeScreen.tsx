import React, { useEffect, useMemo, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const ChangeThemeScreen = () => {
    const [number, setNumber] = useState(0);
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);

    const [dark, setDark] = useState(false);
    const themeStyles = useMemo(()=>{
        return {
            backgroundColor: dark ? 'grey' : 'white',
            color: dark ? 'white' : 'grey'
        }
    }, [dark])

    // const themeStyles = {
    //     backgroundColor: dark ? 'grey' : 'white',
    //     color: dark ? 'white' : 'grey'
    // }

    useEffect(()=>{
        console.log("theme changed")
    }, [themeStyles])


    function buttonPressed() {
        setDark(preColor => !preColor)
        console.log(dark)
    }

    function slowFunction(num: number): number {
        for (let i=0; i<=1000000000; i++) {}
        return num*2
    }
    
    return (
        <SafeAreaView>
            <View>
                <TextInput style={{
                borderWidth: 1,
                padding: 16,
                margin: 16
                }} placeholder={"number"} onChangeText={(text) => 
                     setNumber(Number(text))
                }></TextInput>

                <TouchableOpacity style={{
                    backgroundColor: "salmon",
                    margin: 16, 
                    padding: 10
                }} onPress={buttonPressed}>
                    <Text style={{
                        color: "white",
                        textAlign: "center"
                    }}>Change Theme</Text>
                </TouchableOpacity>
                <View style={[{
                    padding: 10
                }, themeStyles]}>
                    <Text style={{
                        fontSize: 25,
                        textAlign:"center"}}>{doubleNumber}</Text>
                </View>
                
            </View>
        </SafeAreaView>
        
    )
}

export default ChangeThemeScreen