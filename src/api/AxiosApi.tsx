import axios from 'axios';

const mUrl: string = 'http://192.168.0.130/api/v1/'


const post = (path: string, params = {}, success: any) =>{
    axios.post(mUrl+path, params)
    .then((response) => {
        console.log(response.request._response);
        
        success(response.request._response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    });
    ;
}
/**
 *  Promise 의 상태
 *  Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
    Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
    Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태
 */
const postPromise = (path: string, params = {}) => 
    
    new Promise(async (resolve, reject) => {

    const url = mUrl + path;

    console.log(url);

    try {

        const { data } = await axios.post(url,params);
       
        console.log(data);

        resolve(data); //Fulfilled(이행)

    } catch (error) {
        //Config.logNetworkErrors && console.log(error);
        reject(error); //Rejected(실패)
    }
})

const get = (path: string, params = {}, success: any) =>{
    axios.get(mUrl, params)
        .then((response) => {
            console.log(response.request._response);
            success(response.request._response);
        })
        .catch(function (error) {
            console.log(error);
        });
}


export const login = (email:string,password:string, success: any) => { 
    post('login.csb',{
        api_code: 'L001',
        email: email,
        password: password,
    },success)
}

export const loginPromise = async (email:string,password:string) => { 

    
    const params = new URLSearchParams();
    params.append('api_code', 'L001');
    params.append('email', email);
    params.append('password', password);

    return postPromise('login.csb',{
        api_code: 'L001',
        email: email,
        password: password,
    });
}

/*
export const  multipleConcurrentRequests = () =>
{
    axios.all([processAxioxGet(), processAxioxPost()])
  .then(axios.spread(function (acct, perms) {
    // Both requests are now complete
  }));
}*/









