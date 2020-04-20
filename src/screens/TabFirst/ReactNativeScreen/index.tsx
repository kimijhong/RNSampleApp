import React, { Fragment, useState, useEffect } from "react";
import { Container, Content, Text, View } from "native-base";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


interface PropsSampleView {
    propsVal: string
    children: string
}

const PropsSampleView = ({ children, propsVal }: PropsSampleView) => {
    let showIngTextInter: number
    const [isShowingText, setShowingText] = useState(true);


    useEffect(() => {
        showIngTextInter = setInterval(() => {
            isShowingText ? setShowingText(false) : setShowingText(true)
        }, 1000);
        return () => {
            clearInterval(showIngTextInter);
        }
    }, [])

    return (
        <ScrollView>
            <View>
                <View >
                    <Text style={styles.textBigBlue}>{children}</Text>
                    <Text style={styles.textBigRed}>{propsVal}</Text>
                    <Text>{isShowingText ? 'true' : 'flase'}</Text>
                </View>
                <View style={{ flexDirection: 'row' }} >
                    <Text>Fixed</Text>
                    <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                    <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
                    <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
                </View>
                <View style={{ height: 500 }}>
                    <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
                    <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
                    <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
                </View>

                <View style={{ height: 500, backgroundColor: '#EAEA' }}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'powderblue', alignSelf: 'center' }} />
                    <View style={{ height: 50, backgroundColor: 'skyblue', alignContent: 'center' }} >
                        <Text>Text</Text>
                    </View>


                    <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
                </View>


                <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                       style={{width: 400, height: 400}} />

                <Image
                    source={{
                        uri: 'https://reactjs.org/logo-og.png',
                        method: 'POST',
                        headers: {
                            Pragma: 'no-cache',
                        },
                        body: 'Your Body goes here',
                    }}
                    style={{ width: 400, height: 400 }}
                />


<View accessible={false}>
  <Text>text one</Text>
  <Text>text two</Text>
</View>

<TouchableOpacity
  accessible={true}
  accessibilityLabel="Tap me!"
  onPress={()=>{}}>
  <View style={styles.button}>
    <Text style={styles.buttonText}>Press me!</Text>
  </View>
</TouchableOpacity>

            </View>
        </ScrollView>
    );
}


const ReactNativeScreen = () => {
    return (<Container>
        <Content >
            <PropsSampleView propsVal='props'>children</PropsSampleView>
        </Content>
    </Container>);
}

const styles = StyleSheet.create(
    {
        textBigBlue: {
            color: 'blue',
            fontWeight: '900',
            fontSize: 30,
        },
        textBigRed: {
            marginTop: 30,
            color: 'red',
            fontWeight: 'bold',
            fontSize: 30,
        },
        container: {
            paddingTop: 60,
            alignItems: 'center'
          },
          button: {
            marginBottom: 30,
            width: 260,
            alignItems: 'center',
            backgroundColor: '#2196F3'
          },
          buttonText: {
            textAlign: 'center',
            padding: 20,
            color: 'white'
          }
    }
)

export default ReactNativeScreen;

