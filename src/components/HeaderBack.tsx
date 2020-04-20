import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Text } from 'native-base';

interface Props{
    navigation:any
    route?:any
    title?:string
}

const HeaderBack =(props:Props)=>
{

    const {route,navigation,title} = props;
    //const navigationOptions = scene ? scene.descriptor.options : {};
    //const { title, headerLeft, headerRight } = navigationOptions;
    //const routeName = navigation ? navigation.state.routeName : '';
    //const routeIndex = scene ? scene.index : 0;
    return (<Header>
          <Left>
            <Button transparent onPress={()=>{navigation.goBack()}}>
              <Icon name='arrow-back' />
              <Text>뒤로</Text>
            </Button >
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>
    )
}

export default HeaderBack