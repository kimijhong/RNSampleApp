import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Header, Body, Title, Footer, FooterTab, Button, Text, Spinner, View, } from 'native-base';
import { Alert } from 'react-native';


interface Props { title: string };
interface State {isLoading:boolean};

export default class JavaScriptScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            isLoading:false
        }
    }

    public setLoading(loading:boolean)
    {
       
        if(loading)
        {
            this.setState({
                isLoading:false
            })
        }
        else{
            this.setState({
                isLoading:true
            })
        }
        
    }

    componentWillMount() {
        //funcPromise();
    }

    render() {
        return (
            <Container>
                <Body style={{ padding: 10, }}>
                    <ScrollView>
                        <Button onPress={() => { funcPromise() }}>
                            <Text>djd</Text>
                        </Button>
                        <Button onPress={() => { funcAsyncAwait() }}>
                            <Text>비동기 처리</Text>
                        </Button>
                    </ScrollView>
                </Body>
                <FooterTab>
                </FooterTab>
                {this.state.isLoading ? <Spinner></Spinner> : <View/>}
            </Container>
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

}


/*
    local func
*/


const funcPromise = () => {
    /** 결과값을 순차적으로 여러개 처리하는 것이 가능하다 */
    new Promise(async function (resolve, reject) {
        await setTimeout(function () {
            resolve(1);
        }, 2000);
    })
        .then(function (result) {
            console.log(result); // 1
            return result + 10;
        })
        .then((result) => {
            console.log(result); // 11
            return result + 20;
        })
        .then((result) => {
            console.log(result); // 31
        })
        .catch(error => {

        });
}


//* async await
const funcAsyncAwait = async () => {
    /*
    async function 함수명() {
         await 비동기_처리_메서드_명();
    }
    */
   //setLoading(false);
    try {
        var user = await fetchUser();
        if (user.id === 1) {
            var todo = await fetchTodo();
            console.log(todo.title); // delectus aut autem
        }
    } catch (error) {
        console.log(error);
    }

}

function fetchUser() {
    var url = 'https://jsonplaceholder.typicode.com/users/1'
    return fetch(url).then(function (response) {
        return response.json();
    });
}

function fetchTodo() {
    var url = 'https://jsonplaceholder.typicode.com/todos/1';
    return fetch(url).then(function (response) {
        return response.json();
    });
}

