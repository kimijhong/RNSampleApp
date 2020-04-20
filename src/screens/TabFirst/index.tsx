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
    param?:{}
}

interface IMenuItem{
    code:number
    data:Array<Item>
}

const response:IMenuItem = { 
    code : 20,
    data : [
        {title: 'RnNavigationScreen',screen:'RnNavigationScreen'},
        {title: 'ReduxScreen',screen:NaviNames.ReduxScreen,param:{itemId:10,otherParam:'hihi'}},
        {title: 'AnimatableScreen',screen:NaviNames.AnimatableScreen},
        {title: 'ComponetsScreen',screen:NaviNames.ComponetsScreen},
        {title: 'LottoGameScreen',screen:NaviNames.LottoGameScreen},
        {title: 'JavaScriptScreen',screen:NaviNames.JavaScriptScreen},
        {title: 'NativeBridgeScreen',screen:NaviNames.NativeBridgeScreen},
        {title: 'NetWorkingScreen',screen:NaviNames.NetWorkingScreen},
        {title: 'ReactNativeScreen',screen:NaviNames.ReactNativeScreen},
        {title: NaviNames.ScanScreen,screen:NaviNames.ScanScreen},
        {title: NaviNames.ModalTestScreen,screen:NaviNames.ModalTestScreen},
        {title: NaviNames.SqlLightScreen,screen:NaviNames.SqlLightScreen},
        {title: NaviNames.MapScreen,screen:NaviNames.MapScreen},
    ] 
}


const TabFirst = (props:Props) => {
    const {navigation} =  props;
    return (
        <Container>
            <Content style={{ padding: 10 }}>
                <FlatList
                    data={response.data}
                    renderItem={({ item }) => <MenuListItem title={item.title} navigate={{rootScreen:NaviNames.FirstStack , nextScreen:item.screen}} navigation={navigation}></MenuListItem>}
                />
            </Content>
        </Container>);
}

export default TabFirst


//레노버 탭 E10 WiFi 16G