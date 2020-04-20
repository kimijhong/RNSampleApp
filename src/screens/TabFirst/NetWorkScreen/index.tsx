import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet, Alert
} from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import axios from 'axios';

import * as FatchApi from '~/api/FetchApi'
import * as AxiosApi from '~/api/AxiosApi'
import { Spinner, Container, Header, View, Button, Text, Content } from 'native-base';

//import ModalExample from '~/components/modals/ModalExample'
//import ModelResult  from '~/components/modals/ModelResult'


interface Props {}
interface IState {
    isLoading: boolean
    showResultModel: boolean
    dataSource?: any
    resultString?: string
}

function Separator() {
    return <View style={styles.separator} />;
}

const url: string = 'http://192.168.0.130/api/v1/login.csb'
const header = {
     Accept: 'application/json',
    'Content-Type': 'application/json'
}

const NetWorkingScreen = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [showResultModel, setShowResultModel] = useState(false)
    const [ items, setItems] = useState<IState>({isLoading:false,showResultModel:false})

    useEffect(() => {
        console.log(isLoading + " " + showResultModel)
        console.log(items.isLoading + " " + items.showResultModel)
        return () => {
          
        };
    })

    /** Fetch */
    const httpProcess = (params: string, resultback: any) => {
        fetch(url, {
            method: 'POST',
            headers: header,
            body: params
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                resultback(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const APILogin = (email: string, password: string, callback: any) => {
        var params = JSON.stringify({
            api_code: 'L001',
            email: email,
            password: password,
        });

        httpProcess(params, (response: any) => {
            callback(response);
        });
    }

    const getMoviesFromApiAsync = () => {
        return fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const  getMoviesFromApi =  async () => {

        /*
        try {
            let response = await fetch('https://reactnative.dev/movies.json');
            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson.movies;
        } catch (error) {
            console.error(error);
        }*/

        let url = 'https://reactnative.dev/movies.json';
        let options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };
        let response = await fetch(url, options);
        let responseOK = response && response.ok;
        if (responseOK) {
            let data = await response.json();
            
            console.log(data);

            return data;
        }

    }

    /* Axios */
    const axiosGet =()=> {
        showLoading();
        axios.get('https://reactnative.dev/movies.json')
            .then((response) => {
                console.log(response);
                showResponsAlert(JSON.stringify(response));
                hideLoading();
            })
            .catch((error) => {
                console.log(error);
                hideLoading();
            })
            .then(() => {
                //this.showResponsAlert('aaa');
            });
    }

    const  axiosPost = async () =>{
        showLoading();
        axios.post(url, {
            api_code: 'L001',
            email: 'sigle13',
            password: 'test',
        })
            .then((response) => {
                hideLoading();
                console.log(response.request._response);
                showResponsAlert(response.request._response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const get =()=> {

    }

    const  post = (path: string, params = {}, success: any) => {
        showLoading();
        axios.post(url, params)
            .then((response) => {
                console.log(response.request._response);
                hideLoading();
                success(response.request._response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const axiosApipos = (email: string, pass: string) =>{
        post('ttt', {
            api_code: 'L001',
            email: email,
            password: pass,
        }, (response: any) => {
            showResponsAlert(response);
        });
    }

    const axiosModlueApi =()=> {
        showLoading();

        AxiosApi.loginPromise('sigle13', 'test')
            .then((response) => { // resolve() 값 출력
                showResponsAlert(JSON.stringify(response));
                hideLoading();
            })
            .catch((errer) => {   // reject() 값 출력
                hideLoading(); 
            })

    }

     /**
     *  local func
     */
    const showResponsAlert = (responseString: string) => {
        Alert.alert('response', responseString);
    }

    const showLoading = () => {
        setIsLoading(true)
    }

    const hideLoading = () => {
        setIsLoading(false)
    }

    const showModal = () => {
        setShowResultModel(true);
    }

    const showText = () =>{
        let result

        if(items.showResultModel)
        {
            result = <Text>dddd</Text>
        }
        else{
            result = <Text>ccccc</Text>
        }
        return result
    }

    return( <Container>
        <Header />
        <Content>
            <ScrollView>
                <View style={[styles.content]}>
                    <Button
                        color="#f194ff"
                        onPress={() => {
                            setItems({
                                isLoading:true,
                                showResultModel:true,
                            })
                            APILogin("sigle13", "1234", (result: any) => {

                                let resultString: string = '';

                                for (let i = 0; i < result.data.length; i++) {
                                    resultString += result.data[i].ds_account + "\n"
                                }

                                Alert.alert("결과값", String(result.code) + " : " + resultString);

                                setItems({
                                    isLoading:false,
                                    showResultModel:false,
                                })



                               
                            });
                        }}>
                        <Text>APILogin</Text>
                    </Button>

                    {
                        showText()
                       // items.showResultModel ? <Text>dddd</Text> : <Text>ccccc</Text>
                    }

                    <Separator />

                    <Button
                        color="#f194ff"
                        onPress={() => { getMoviesFromApiAsync(); }}>
                        <Text>getMoviesFromApiAsync</Text>
                    </Button>
                    <Separator />

                    <Button
                        color="#f194ff"
                        onPress={() => { getMoviesFromApi(); }}>
                        <Text>getMoviesFromApi</Text>
                    </Button>

                    <Separator />

                    <Button
                        color="#f194ff"
                        onPress={() => { axiosGet(); }}>
                        <Text>Axios get</Text>
                    </Button>

                    <Separator />

                    <Button
                        color="#f194ff"
                        onPress={() => { axiosPost(); }}>
                        <Text>Axios post</Text>
                    </Button>

                    <Separator />

                    <Button
                        color="#f194ff"
                        onPress={() => { axiosApipos('sigle13', 'test') }}>
                        <Text>axiosApipos</Text>
                    </Button>

                    <Separator />

                    <Button
                        color="#f194ff"
                        onPress={() => {
                            AxiosApi.login('sigle13', 'test', () => {


                            })
                        }}>
                        <Text>axiosModlueApi1</Text>
                    </Button>

                    <Separator/>

                    <Button
                        color="#f194ff"
                        onPress={() => { axiosModlueApi() }}>
                        <Text>axiosModlueApi2</Text>
                    </Button>

                    <Separator/>

                    <Button
                        color="#000"
                        onPress={() => { showModal(); }}>
                        <Text>click modal</Text>
                    </Button>
                </View>
            </ScrollView>
        </Content>
        {isLoading ? <Spinner color='#000' style={styles.spinner} /> : <View />}

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

export default NetWorkingScreen