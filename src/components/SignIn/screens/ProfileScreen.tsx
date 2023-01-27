import React, {useContext, useState} from "react";
import {View, Text} from "react-native"

import Context from "../contexts/UserContext";

const ProfileScreen = () => {
    const userContext = useContext(Context)
    return (
      <View style={{ flex: 1 }}>
        <Text>Welcom {userContext.name?.name}</Text>
      </View>
    )
}

export default ProfileScreen;