import React, { useEffect, useState } from "react";
import { View, Text } from "react-native"
import axios, {AxiosResponse} from "axios";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


interface Coffee {
    title:       string;
    description: string;
    ingredients: string[];
    image:       string;
    id:          number;
}

const CoffeeListScreen = () => {
    useEffect( () => {
        fetchData()
    }, [])

    const [coffees, setCoffees] = useState(Array<Coffee>())

    // const response: AxiosResponse<Coffee[]> = await axios.get("https://api.sampleapis.com/coffee/hot");

    const fetchData = () => {
        const baseURL = "https://api.sampleapis.com/coffee";
        axios.get<Coffee[]>(`${baseURL}/hot`).then((response) => {
            setCoffees(response.data)
        })
        
    }

    return (
        <SafeAreaView>
            <View>
                <FlatList 
                data={coffees}
                renderItem={({item}) => <ListItem title={item.title}></ListItem>}></FlatList>
            </View>
        </SafeAreaView>)
};

const ListItem = ({title}: ListItemProps) => {
    return (
        <View style={{paddingHorizontal: 50, flex: 1, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
            <Text style={{margin:5, fontSize: 28}}>{title}</Text>
        </View>
    )
}

type ListItemProps = {
    title: string
}

export default CoffeeListScreen;

//https://blog.logrocket.com/data-fetching-react-native/#fetching-axios