import { View, Button,Text } from "native-base";
import React, { useState, useEffect } from "react";
import DefaultModal from "~/components/modals/DefaultModal";
import ScrollableModal from "~/components/modals/ScrollableModal";

const ModalTestScreen =()=>
{
    const [isScrollModalVisible, setIsScrollModalVisible] = useState(false)
    const [isDefaultModalVisible, setIsDefalutModalVisible] = useState(false)

    const toggleScrollModal=()=>{
        setIsScrollModalVisible(!isScrollModalVisible);
    }

    const toggleDefModal=()=>{
        setIsDefalutModalVisible(!isDefaultModalVisible);
    }

    return (<View style={{flex:1}}>
        
   
        <ScrollableModal 
        isModalVisible={isScrollModalVisible} 
        close={(reqData)=>{
            toggleScrollModal();
        }}
        ></ScrollableModal>

        <DefaultModal 
        isModalVisible={isDefaultModalVisible} 
        cancelClick={(reqData)=>{
            toggleDefModal();
        }}
        title={'보안인증을 설정해 주세요'}
        msg={'볼페이를 이용하려면 비밀번호(PIN)와 구글 OTP를 설청해야 합니다. 토큰 보내기 결제 교환할 경우 보안 인증을'}
        ></DefaultModal>


        <View style={{flex:1 , padding:10}}>
            <Button onPress={()=>{
                toggleScrollModal();
            }}><Text>show ScrollableModal</Text></Button>
            <Button style={{marginTop:10}} onPress={()=>{
                toggleDefModal();
            }}><Text>show DefaultModal</Text></Button>
          
        </View>
    </View>);
}
/*
<BasicModal 
isModalVisible={isModalVisible} 
cancelClick={(reqData)=>{
    toggleModal();
}}
title={'보안인증을 설정해 주세요'}
msg={'볼페이를 이용하려면 비밀번호(PIN)와 구글 OTP를 설청해야 합니다. 토큰 보내기 결제 교환할 경우 보안 인증을'}
></BasicModal>



        <SwipeableModal 
        isModalVisible={isModalVisible} 
        cancelClick={(reqData)=>{
            toggleModal();
        }}
        title={'보안인증을 설정해 주세요'}
        msg={'볼페이를 이용하려면 비밀번호(PIN)와 구글 OTP를 설청해야 합니다. 토큰 보내기 결제 교환할 경우 보안 인증을'}
        ></SwipeableModal>

*/

export default ModalTestScreen
