import React from "react";
import { View, Text, Button } from "react-native";

interface Props {
    navigation: any
    route:{params:{itemId:number,otherParam:string}}
}

function DetailsScreen({ navigation , route}: Props) {
    const { itemId } = route.params;
    const { otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Text>otherParam: {JSON.stringify(route)}</Text>

            <Button
                title="Go to Details : navigate"
                onPress={() => navigation.navigate('DetailsScreen')}
            />

            <Button
                title="Go to Details... again : push"
                onPress={() => navigation.push('DetailsScreen')}
            />

            <Button title="Go to Home" onPress={() => navigation.navigate('RnNavigationScreen')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

export default DetailsScreen;