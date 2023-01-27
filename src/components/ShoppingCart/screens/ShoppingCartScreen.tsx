import React, { useContext, useState } from "react"
import {View, SafeAreaView, Text, Touchable, TouchableOpacity} from "react-native"
import { FlatList, TextInput } from "react-native-gesture-handler"
// import { onChange } from "react-native-reanimated"
import ShoppingContext, { ShoppingProvider } from "../contexts/ShoppingContext"

const ShoppingCartScreen = () => {

    const shoppingContext = useContext(ShoppingContext)
    const [itemName, setItemName] = useState("")
    const [itemQt, setIitemQt] = useState("")

    type ItemProps = {
        title: string,
        subTitle: string
    }

    const Item = ({title, subTitle}: ItemProps) => {
        return (
            <View style={{paddingHorizontal: 50, flex: 1, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <Text style={{margin:5, fontSize: 28}}>{title}</Text>
                <Text style={{margin:5, fontSize: 20}}>{subTitle}</Text>
            </View>
        )
    }

    function buttonTapped() {
        shoppingContext.setItems({
            name: itemName,
            quantity: itemQt
        })

        setItemName("")
        setIitemQt("")
    }

    return (
        <ShoppingProvider>
        <SafeAreaView>
            <View>
                <Text style={{ margin: 16, fontSize: 25, textAlign: "center"}}>Add Shopping Item</Text>
                <TextInput style={{ borderWidth: 1, margin: 16, padding: 10, fontSize: 25}} placeholder={"Enter Item"} value={itemName} onChangeText={setItemName}></TextInput>
                <TextInput style={{ borderWidth: 1, margin: 16, padding: 10, fontSize: 25}} placeholder={"Enter Quantity"} value={itemQt} onChangeText={setIitemQt}></TextInput>
                <TouchableOpacity 
                    style={{backgroundColor:"salmon", margin: 16}}
                    onPress={() => {
                        buttonTapped()
                    }}>
                    <Text style={{color: "white", textAlign:"center", fontSize: 25, margin: 16}}>Add Item</Text>
                </TouchableOpacity>
                <FlatList
                    keyExtractor={(item, index) => `${item}-${index}`}
                    data={shoppingContext.items}
                    renderItem={({item}) => <Item title={item.name} subTitle={item.quantity}></Item>}                    
                ></FlatList>
            </View>
        </SafeAreaView>
        </ShoppingProvider>
    )

}

export default ShoppingCartScreen

//https://blog.logrocket.com/using-typescript-with-react-native/