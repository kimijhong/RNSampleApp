import * as AxiosApi from '~/api/AxiosApi'


// Actions types
export const SHOPLIST = "SHOPLIST";

// Action Functions
export const getShopList = (onSuccess:Function)  => async (dispatch:Function,getState:any)  => {
    const {data}:any =  await AxiosApi.loginPromise('a', 'b');
    dispatch({type: SHOPLIST , payload:data})
    onSuccess();
}