import { View, Button,Text } from "native-base";
import React, { useState, useEffect } from "react";
import PinNumberModal from "./PinNumberModal";

const PinNumberTestScreen =()=>
{
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [pinType, setPinType] = useState(0)

    const toggleModal=()=>{
        setIsModalVisible(!isModalVisible);
    }

    return (<View style={{flex:1}}>
        
        <PinNumberModal 
        viewType={pinType}
        isModalVisible={isModalVisible} 
        close={()=>{toggleModal();}}
        ></PinNumberModal>

        <View style={{ flex: 1, padding: 10 }}>
            <Button style={{ marginTop: 10 }} onPress={() => {
                setPinType(0)
                toggleModal();

            }}><Text>핀번호 저장</Text></Button>

            <Button style={{ marginTop: 10 }} onPress={() => {
                setPinType(1)
                toggleModal();
            }}><Text>핀번호 재설정</Text></Button>

            <Button style={{ marginTop: 10 }} onPress={() => {
                setPinType(2)
                toggleModal();
            }}><Text>핀번호 입력</Text></Button>

            <Button style={{ marginTop: 10 }} onPress={() => {
                setPinType(3)
                toggleModal();
            }}><Text>에라상황~</Text></Button>

        </View>

      


        
    </View>);
}

export default PinNumberTestScreen
