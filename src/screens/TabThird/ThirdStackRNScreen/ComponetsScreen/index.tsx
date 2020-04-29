import React, { Component } from 'react';
import {
     StyleSheet, ActivityIndicator, Alert
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Button, Text } from 'native-base';


export default class ComponentsScreen extends Component {

    componentDidMount()
    {
        console.log('componentDidMount : ComponentsScreen')
    }

    componentWillUnmount()
    {
        console.log('componentWillUnmount : ComponentsScreen')
    }

    render() {
        return (<View style={[styles.container]}>
            <ScrollView>
                <View style={[styles.content,styles.horizontal]}>
                    <ActivityIndicator size="large" color="#0000ff" animating={false} />
                    <ActivityIndicator size="small" color="#00ff00" />
                    <ActivityIndicator size="large" color="#0000ff" hidesWhenStopped={false} />
                    <ActivityIndicator size="small" color="#00ff00" />
                </View>
                <View style={[styles.content]}>
                   <Button onPress={()=>{buttonClick('경고','경고내용 헐헐',{title:'aaa',msg:'sss'})}}>
                       <Text>버튼</Text>
                   </Button>
                </View>
            </ScrollView>
        </View>);
    }
}


const buttonClick = (title:string,msg:string,req:{title:string,msg:string}) =>{
    Alert.alert(title,msg);
    Alert.alert(req.title,req.msg);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 10
    }
    ,
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})
