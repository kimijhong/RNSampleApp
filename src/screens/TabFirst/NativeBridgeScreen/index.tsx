
import React, { Component } from "react";
import { Content, Button, Text } from "native-base";
import { StyleSheet, StatusBar, Dimensions, View, Platform, NativeModules, Alert } from "react-native";
import { Linking } from "react-native"

export interface Props { };
export interface State { };

export interface Base {

    init(): any;

}


export default class NativeBridgeScreen extends Component<Props, State> implements Base {


    constructor(props: Props) {
        super(props);
    }

    init() {

    }

    render() {
        return (<Content style={{ padding: 10 }}>

            <Button style={styled.button} onPress={() => {
                openService();
            }}><Text>네이티브 모듈 호출 </Text></Button>

            <Button style={styled.button} onPress={() => {
                reqMethHod();
            }}><Text>네이티브 함수 호출 </Text></Button>

            <Button style={styled.button} onPress={() => {
                reqCallback();
            }}><Text>네이티브 콜백 호출 </Text></Button>

            <Button style={styled.button} onPress={() => {
                reqPromises();
            }}><Text>네이티브 Promises 호출 </Text></Button>


        </Content>);
    }
}

const openService = () => {

    if (Platform.OS === "android") {


    }
    else {

        //console.log(NativeModules.RNCounter);  //RCT_EXTERN_REMAP_MODULE
        console.log(NativeModules.Counter);  //RCT_EXTERN_MODULE

        /*
        Alert.alert(
          "iOS는 아직 앱 연결이 안되요",
          `설치 페이지로 이동하실래요?`,
          [
            {
              text: "아뇨",
              onPress: () => console.log("canceled"),
              style: "cancel"
            },
            { text: "네", onPress: () =>   Linking.openURL('https://www.naver.com') }
          ]
        );*/

    }
}

const reqMethHod = () => {

    if (Platform.OS === "android") {

        //리턴 값으로 값을 받을수 없다 그래서 리턴 값을 받으려면 콜백 으로 만드어야 한다.
        let repMsg = NativeModules.ToastModule.show("네이티브 모듈을 호출한다!", 1000);  //getName 에서 설정한 이름 , 함수 이름
        Alert.alert('rep', repMsg);
        //NativeModules.ToastModule.show1("네이티브 모듈을 호출한다!",1000);
        //NativeModules.AlertTest.showAlert("네이티브 얼럿을 호출!");
    }
    else {
        let count = NativeModules.Counter.increment();
        console.log(count);
    }
}

const reqCallback = () => {

    if (Platform.OS === "android") {
        NativeModules.ToastModule.callClaaBack("리턴은 콜백으로", 1000,
            (errorCallback: string) => {

                console.log(errorCallback);

            },
            (msg: string, code: number) => {

                console.log(msg + ' : ' + code);

                Alert.alert('title', msg + " " + 100);

            });
    }
    else {

        NativeModules.Counter.getCount((value: number) => {
            console.log("count is " + value)
        })

        NativeModules.Counter.getMultipleArg((first: number, ...others: any) => {
            console.log("count is " + first)
        })



    }
}


const reqPromises = async () => {

    if (Platform.OS === "android") {


        try {

            var { _string, _int, _double } = await NativeModules.ToastModule.callPromise("리턴은 romise로", 1000);


            Alert.alert(_string, _int + " " + _double);

        } catch (e) {
            console.log(e);
        }

    }
    else {


    }
}

const styled = StyleSheet.create({
    button: {
        marginTop: 5
    }

})






