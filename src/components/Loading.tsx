import React from "react";
import { Spinner, View } from "native-base";
import { StyleSheet } from "react-native";


interface Props{
    isLoading:boolean
}

const Loading = ({isLoading} : Props)=>
{
    return(isLoading ?<Spinner color='#000' style={styles.spinner} /> : <View/>);
}

const styles = StyleSheet.create({
    
    spinner: {
        position: 'absolute', flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'
    }
})


export default Loading;