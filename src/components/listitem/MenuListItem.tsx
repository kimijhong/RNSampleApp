import { Button ,Text} from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, Alert } from "react-native";

interface ItemProps{
    title:string
    navigate:{rootScreen:string,nextScreen:string}
    navigation:any
    param?:any
}

const MenuListItem = (props:ItemProps) =>
{
    const {title,navigate,navigation} = props;
    const colorCode = '#' + Math.round(Math.random() * 0xff0000).toString(16);
    return <Button style={[styles.button, {backgroundColor:colorCode}]} onPress={()=>{
        navigation.navigate(navigate.rootScreen,{screen:navigate.nextScreen});
    }}><Text style={styles.buttonText}>{title}</Text></Button>
}

const styles = StyleSheet.create({
    button: {
        color: "#fff",
        marginTop: 10,
        alignContent: "center",
        justifyContent:'flex-start'
    },
    buttonText: {
        fontWeight:'900'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
});

export default MenuListItem;

/**
 * navigation.navigate('Root');
 * navigation.navigate('Root', { screen: 'Settings' });
 * navigation.navigate('Root', { screen: 'Settings', params: { user: 'jane' },});
 * navigation.navigate('Root', { screen: 'Settings', params: { screen: 'Sound', params: { screen: 'Media',},},});
 */