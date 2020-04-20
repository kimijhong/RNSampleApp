import React from 'react';
import { Container ,Text} from 'native-base';
import {connect} from 'react-redux'

interface Props {
  
}

const SplashScreen = (props:Props) => {
    return (
        <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{  }}>{JSON.stringify(props)}</Text>
        </Container>
    );
}

const map = (state:any) =>{
    return state;
}

export default connect(map,null)(SplashScreen);