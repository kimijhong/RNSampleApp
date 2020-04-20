
/*
const url: string = 'http://192.168.0.130/api/v1/'
const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

const option = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
        property_one: '',
        property_two: ''
    })
}

const httpProcess = (path:string,params: string)=>{
    fetch(url+path, {
        method: 'POST',
        headers: header,
        body: params
    }).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
}

export const login = (email: string, password: string ,responseCallBack:any) => {
    var params = JSON.stringify({
        api_code: 'L001',
        email: email,
        password: password,
    });
    const result = httpProcess('login.csb',params);
    responseCallBack(result);
}*/


/*
export default class HttpPostApi{

    

    private httpProcess(params: string) {
        fetch(url, {
            method: 'POST',
            headers: header,
            body: params
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    
    public APILogin(email: string, password: string, callBack:any) {
        var params = JSON.stringify({
            api_code: 'L001',
            email: email,
            password: password,
        });
    
        const result = this.httpProcess(params);
        callBack(result);
    }
}*/



export const testFunc = (userName:string) =>({
    

    
    
    

});
  

