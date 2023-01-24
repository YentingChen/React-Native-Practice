import React, {useContext, useState} from "react";
import {View, Text} from "react-native"

import Context from "../../contexts/UserContext";

const HomeScreen = () => {
    const user = useContext(Context)
    return (
      <View style={{ flex: 1 }}>
        <Text>Welcom {user.name}</Text>
      </View>
    )
}

export default HomeScreen;