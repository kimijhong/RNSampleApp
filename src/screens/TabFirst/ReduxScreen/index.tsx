import React, { Component, useEffect, useState } from 'react';
import {
    Text, View, Button, Alert
} from 'react-native';
import { Container} from 'native-base';
import Counter from '~/screens/TabFirst/ReduxScreen/Counter'
import HeaderBack from '~/components/HeaderBack';

interface Props{
    navigation:any
    route:any
}

const ReduxScreen = (props:Props)=>{
    const {navigation,route} = props
    const [isLoading, setisLoading] = useState(false)
    const [title, settitle] = useState('reduxScreen')
    useEffect(() => {
        Alert.alert(JSON.stringify(route))
        console.log(props)
        return () => {
           
        }
    }, [])


   
        return (
            <Container>
                 <HeaderBack navigation={navigation} title='reactn'></HeaderBack>
                <Counter/>
            </Container>
        );
    
}

export default ReduxScreen