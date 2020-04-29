import axios from 'axios';

import {ROOT_URL,getOpenWeatherUrl} from '~/api/Urls'
import Config from '~/Config'
import { Alert } from 'react-native';

/**
 *  Promise 의 상태
 *  Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
    Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
    Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태
 */
const post = (path: string, reqParams = {}) => 
    new Promise(async (resolve, reject) => {
    const url = ROOT_URL + path;
    console.log(url);
    try {
        const { data } = await axios.post(url,reqParams);
        console.log(data);
        resolve(data); //Fulfilled(이행)
    } catch (error) {
        Config.logNetworkErrors && console.log(error);
        Alert.alert('네트워크 문제로 접속이 원활하지 않습니다. 연결 상태를 확인 후 다시 시도해 주세요.',error)
        reject(error); //Rejected(실패)
    }
})

const get = (path: string, reqParams = {}) => 
    new Promise(async (resolve, reject) => {
    const url = ROOT_URL + path;
    console.log(url);
    try {
        const { data } = await axios.get(url,reqParams);
        console.log(data);
        resolve(data); //Fulfilled(이행)
    } catch (error) {
        Config.logNetworkErrors && console.log(error.response);
        Alert.alert('네트워크 문제로 접속이 원활하지 않습니다. 연결 상태를 확인 후 다시 시도해 주세요.',error)
        reject(error); //Rejected(실패)
    }
})

export const getOpenWeather = (reqParams = {}) =>
  new Promise(async (resolve, reject) => {
    const url = getOpenWeatherUrl();
    try {
      const { data } = await axios.get(url, {params:reqParams});
      resolve(data);
    } catch (error) {
      Config.logNetworkErrors && console.log(error);
      Alert.alert('네트워크 문제로 접속이 원활하지 않습니다. 연결 상태를 확인 후 다시 시도해 주세요.',error)
      reject(error);
    }
});

 //login
export const L001 = (email:string,password:string) => {     
    return post('login.csb',{
        api_code: 'L001',
        email: email,
        password: password,
    });
}

//join
export const L002 = (email:string,password:string) => {     
    const params = new URLSearchParams();
    params.append('api_code', 'L001');
    params.append('email', email);
    params.append('password', password);
    return post('login.csb',params);
}

export const getWatherInfo = (lat:string,lon:string) => {     
    return getOpenWeather({lat:lat,lon:lon});
}