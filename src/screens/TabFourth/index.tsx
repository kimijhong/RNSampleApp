import React, { Component } from 'react';
import {
    FlatList
} from 'react-native';
import { Container, Content} from 'native-base';
import NaviNames from '../NaviNames';
import MenuListItem from '~/components/listitem/MenuListItem';

const response = { 
    code : 20,
    data : [
      //  {title: 'Devin',screen:NaviNames.ComponetsScreen},
    ] 
}

interface Props{
    navigation:any
}

const TabFourth = ({navigation}:Props) => {
    return (
        <Container>
            <Content style={{ padding: 10 }}>
            <FlatList
                    data={response.data}
                    renderItem={({ item }) => <MenuListItem title={item.title} navigate={{rootScreen:NaviNames.FourthStack , nextScreen:item.screen}} navigation={navigation}></MenuListItem>}
                />
            </Content>
        </Container>);
}

export default TabFourth
