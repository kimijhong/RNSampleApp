import { Button ,Text} from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, Alert } from "react-native";

interface ItemProps{
    title:string
    rootscreen:string
    param?:any
    navigation:any
    navigate:{}
}

const MenuListItem = (props:ItemProps) =>
{
    const {title,rootscreen,navigate,navigation} = props;
    

    const colorCode = '#' + Math.round(Math.random() * 0xff0000).toString(16);

    return <Button style={[styles.button, {backgroundColor:colorCode}]} onPress={()=>{
        
        
       // navigation.navigate(itemData.rootScreen,{screen:itemData.screen,params:itemData.param});
      // navigation.navigate('TabSecond',{screen:'TabSecond',params:{screen:itemData.screen}});
      navigation.navigate(rootscreen,navigate);
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