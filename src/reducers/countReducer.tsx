import * as AxiosApi from '~/api/AxiosApi'

// Default State
const initialState = {
    count: 0,
    name:'',
    user: null,
    responseData:null
};

// Actions types
export const INCREMENT = "Increment";
export const DECREMENT = "Decrement";
export const SETNAME = "Setname";
export const LOGIN = "Login";

// Action Functions
export const  increment =() => {
  return {
    type: INCREMENT
  };
}
export function decrement() {
  return {
    type: DECREMENT
  };
}

export function setName(name:string){
  return {
    type: SETNAME , payload:name
  };
}

export const login = (id:string,pass:string,onSuccess:Function)  => async (dispatch:Function,getState:any)  => {
    const {data}:any =  await AxiosApi.loginPromise(id, pass);
    dispatch({type: LOGIN , payload:data})
    onSuccess();

}

// Reducer
function reducer(state = initialState, action: any) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case SETNAME:
      return {
        ...state, name: action.payload
      }
    case LOGIN:
      return {
        ...state, responseData: action.payload
      }
  }
  return state;
}

// Exports Default
export default reducer;