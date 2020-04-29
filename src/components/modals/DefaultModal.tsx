import Modal from 'react-native-modal';
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'native-base';
import { Dimensions, Platform, StyleSheet, Alert } from 'react-native';

interface Props {
    isModalVisible: boolean
    title?: string
    msg: string
    cancelText?: string
    confirmText?: string
    confirmClick?: () => void
    cancelClick: (reqData?: string) => void
}

const DefaultModal = ({ isModalVisible, title, msg, cancelText, confirmText, confirmClick, cancelClick }: Props) => {

    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Platform.OS === "ios"
        ? Dimensions.get("window").height
        : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");

    return (
        <View>
            <Modal
                isVisible={isModalVisible}
                deviceWidth={deviceWidth}
                deviceHeight={deviceHeight}
                onBackdropPress={() => { console.log('onBackdropPress') }}
                swipeDirection="left"
                useNativeDriver={true}>

                <View style={styles.content}>

                    {title === undefined ? <View />:
                        <View><Text style={styles.contentTitle}>{title}</Text></View>}

                    {msg === undefined ? <View /> :
                        <View style={{ marginTop: 20, height: deviceHeight / 3 }}>
                            <Text>{msg}</Text>
                        </View>}


                    <View style={{ backgroundColor: '#eaeaea', height: 2, marginTop: 20, marginBottom: 20 }}></View>

                    <View style={{ flexDirection: 'row' }}>
                        <Button style={{ paddingLeft: 20, paddingRight: 20 }} onPress={() => { cancelClick(); }}>
                            <Text>{cancelText === undefined ? '취소' : cancelText}</Text>
                        </Button>

                        <View style={{ flex: 1 }}></View>

                        <Button success style={{ paddingLeft: 20, paddingRight: 20 }} onPress={() => { confirmClick === undefined ? cancelClick() : confirmClick() }}>
                            <Text>{confirmText === undefined ? '확인' : confirmText}</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 20,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        fontSize: 20,
    },
});

export default DefaultModal