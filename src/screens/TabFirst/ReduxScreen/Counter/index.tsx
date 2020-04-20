import React, { useEffect } from 'react';

import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement, setName, login } from '~/reducers/countReducer';
import { getShopList } from '~/action/ShopAction';
import { Alert } from 'react-native';

interface Props {
  countState: { count: number, name: string, responseData: any }
  testState: { shopList: any }

  increment: Function
  decrement: Function
  setName: Function
  login: Function

  getShopList: Function
}


const Counter = (props: Props) => {

  const { countState, increment, decrement, setName, login, testState, getShopList } = props;

  useEffect(() => {
   
    return () => {

    }
  }, [])


  return (
    <Container>
      <Content padder>
        <Card>
          <CardItem>
            <Text>
              {countState.count}
            </Text>
          </CardItem>
          <CardItem>
            <Text>
              {countState.name}
            </Text>
          </CardItem>
          <CardItem>
            <Text>
              {countState.responseData == null ? 'no data' : JSON.stringify(countState.responseData)}
            </Text>
          </CardItem>
          <CardItem>
            <Text>
              {testState.shopList == null ? 'no data' : JSON.stringify(testState.shopList)}
            </Text>
          </CardItem>
        </Card>
        <Button full onPress={() => increment()} style={{ marginVertical: 10 }}>
          <Text>Increment</Text>
        </Button>
        <Button full dark bordered onPress={() => decrement()}>
          <Text>Decrement</Text>
        </Button>
        <Button full dark bordered style={{ marginVertical: 10 }} onPress={() => setName('홍길동')} >
          <Text>new text</Text>
        </Button>
        <Button full dark bordered style={{ marginVertical: 10 }} onPress={() => login('sigle13', '1234', () => {
          Alert.alert('action -> thunk-> reducer -> render');
        })} >
          <Text>login</Text>
        </Button>

        <Button full dark bordered style={{ marginVertical: 10 }} onPress={() => getShopList(() => { })} >
          <Text>getShopList</Text>
        </Button>

      </Content>
    </Container>
  );

}

// Reducer 데이터를 props로 변환
const mapStateToProps = (state: any) => {
  return {
    countState: state.countReducer,
    testState: state.ShopReducer
  };
}

// Actions을 props로 변환
const matchDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    increment: increment,
    decrement: decrement,
    setName: setName,
    login: login,
    getShopList: getShopList
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Counter);