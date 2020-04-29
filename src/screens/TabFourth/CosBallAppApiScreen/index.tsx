import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet, Alert, ScrollView, Button
} from 'react-native';
import * as Apis from '~/api/Api'
import { Spinner, Container, Header, View, Text, Content } from 'native-base';
import Loading from '~/components/Loading';
import axios from 'axios'

const CosBallAppApiScreen = () => {

    const [isLoading, setIsLoading] = useState(false)

    /**
    *  local func
    */
    const showResponsAlert = (data: any) => {
        console.log(data)
        
        if (data != null) {
            try {
                Alert.alert('response', JSON.stringify(data));
            } catch (error) {
                Alert.alert(error);
            }
        } else {
            Alert.alert('FAIL');
        }
    }

    const showLoading = () => {
        setIsLoading(true)
    }

    const hideLoading = () => {
        setIsLoading(false)
    }

    /** api func */

    const login = async () => {
        const { data }: any = await Apis.L001('sigle13', 'wlghd13');
        showResponsAlert(data);
    }
    const login2 = async () => {
        const { data }: any = await Apis.L002('sigle13', 'wlghd13');
        showResponsAlert(data);
    }
        

    const getWather = async () => {
        const data = await Apis.getWatherInfo("37.83", "126.34");
        showResponsAlert(data);
    }
    
    /** view */
    return (<Container>
        <Content>
            <ScrollView>
                <View style={[styles.content]}>
                    <Button title="L001" onPress={() => login()}> </Button>
                    <Button title="L002" onPress={() => login2()}> </Button>
                    <Button title="getWather" onPress={() => getWather()}> </Button>
                </View>
            </ScrollView>
        </Content>
        <Loading isLoading={isLoading}></Loading>

    </Container>
    );
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
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    spinner: {
        position: 'absolute', flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'
    }
})

export default CosBallAppApiScreen