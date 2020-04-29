import React from 'react';
import {
    FlatList, Platform
} from 'react-native';
import { Container, Content,Text } from 'native-base';
import NaviNames from '~/screens/NaviNames';
import MenuListItem from '~/components/listitem/MenuListItem';
import Config from '~/Config'


const response = {
    code: 20,
    data: [
        { title: "FirstAppScreen", screen: "FirstAppScreen" },
        { title: "ListViewScreen", screen: "ListViewScreen" },
        {title: 'RNDesignScreen',screen:NaviNames.RNDesignScreen},
        { title: NaviNames.ComponetsScreen, screen: NaviNames.ComponetsScreen },
      
    ]
}

interface Props {
    navigation: any
}

const ThirdStackRNScreen = ({ navigation }: Props) => {
    return (
        <Container style={{padding:15}}>
            <Text>Platform : {Config.isAndroid? 'android':'ios'}</Text>
            <Text>Platform : {JSON.stringify(Config.version)}</Text>
            <Content style={{ marginTop:10 }}>
                <FlatList
                    data={response.data}
                    renderItem={({ item }) => <MenuListItem title={item.title} navigate={{ rootScreen: NaviNames.ThirdStackRN, nextScreen: item.screen }} navigation={navigation}></MenuListItem>}
                />
            </Content>
        </Container>);
}

export default ThirdStackRNScreen

