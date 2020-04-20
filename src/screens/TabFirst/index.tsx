import React, { Component, useEffect } from 'react';
import {
    FlatList, Alert,Text
} from 'react-native';
import { Container, Content, Button} from 'native-base';
import NaviNames from '../NaviNames';
import MenuListItem from '~/components/listitem/MenuListItem';
import { FormattedMessage } from 'react-intl'
import I18n from "~/utils/I18n";

interface Props{
    navigation:any
    route:any
}

interface Item{
    title:string,
    screen:string,
    rootScreen:string
    param?:{}
}

interface IMenuItem{
    code:number
    data:Array<Item>
}

const response:IMenuItem = { 
    code : 20,
    data : [
        {title: 'RnNavigationScreen',rootScreen:'FirstStack',screen:'RnNavigationScreen'},
        {title: 'ReduxScreen',rootScreen:'FirstStack',screen:NaviNames.ReduxScreen,param:{itemId:10,otherParam:'hihi'}},
        {title: 'AnimatableScreen',rootScreen:'FirstStack',screen:NaviNames.AnimatableScreen},
        {title: 'ComponetsScreen',rootScreen:'FirstStack',screen:NaviNames.ComponetsScreen},
        {title: 'LottoGameScreen',rootScreen:'FirstStack',screen:NaviNames.LottoGameScreen},
        {title: 'JavaScriptScreen',rootScreen:'FirstStack',screen:NaviNames.JavaScriptScreen},
        {title: 'NativeBridgeScreen',rootScreen:'FirstStack',screen:NaviNames.NativeBridgeScreen},
        {title: 'NetWorkingScreen',rootScreen:'FirstStack',screen:NaviNames.NetWorkingScreen},
        {title: 'ReactNativeScreen',rootScreen:'FirstStack',screen:NaviNames.ReactNativeScreen},
       
        {title: NaviNames.ScanScreen,rootScreen:'FirstStack',screen:NaviNames.ScanScreen},
        {title: NaviNames.ModalTestScreen,rootScreen:'FirstStack',screen:NaviNames.ModalTestScreen},
        {title: NaviNames.SqlLightScreen,rootScreen:'FirstStack',screen:NaviNames.SqlLightScreen},
        {title: NaviNames.MapScreen,rootScreen:'FirstStack',screen:NaviNames.MapScreen},
    ] 
}


const TabFirst = (props:Props) => {

    const {navigation} =  props;
    console.log("ddd : " + props)

    return (
        <Container>
            <Content style={{ padding: 10 }}>
            <Text>{I18n.t("hello")}</Text>
            <Text>{JSON.stringify(props)}</Text>
                <FlatList
                    data={response.data}
                    renderItem={({ item }) => <MenuListItem title={item.title} rootscreen='FirstStack' navigate={{screen:item.screen}}  navigation={navigation}></MenuListItem>}
                />
            </Content>
        </Container>);
}

export default TabFirst


//레노버 탭 E10 WiFi 16G