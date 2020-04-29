import React, { Component } from 'react';
import {
    FlatList
} from 'react-native';
import { Container, Content} from 'native-base';
import NaviNames from '~/screens/NaviNames';
import MenuListItem from '~/components/listitem/MenuListItem';

const response = { 
    code : 20,
    data : [
        {title: "RnNavigationScreen",screen:"RnNavigationScreen"},
       ] 
}

interface Props{
    navigation:any
}

const ThirdStackNavigationScreen = ({navigation}:Props) => {
    return (
        <Container>
            <Content style={{ padding: 10 }}>
            <FlatList
                    data={response.data}
                    renderItem={({ item }) => <MenuListItem title={item.title} navigate={{rootScreen:NaviNames.ThirdStackNavigation , nextScreen:item.screen}} navigation={navigation}></MenuListItem>}
                />
            </Content>
        </Container>);
}

export default ThirdStackNavigationScreen
