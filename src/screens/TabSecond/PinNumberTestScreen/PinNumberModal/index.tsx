import React, { useState, useEffect } from 'react';
import { View, Text, Button, Container, Header, Left, Icon, Right, Title, Grid, Row, Col, Footer } from 'native-base';
import { Dimensions, Platform, StyleSheet, Alert, Modal, TouchableOpacity } from 'react-native';

interface Props {
    isModalVisible: boolean
    viewType: number
    fail?: string
    sucess?: (reqData?: string) => void
    close: (reqData?: string) => void
}

const PinNumberModal = ({ isModalVisible, viewType, fail, sucess, close }: Props) => {

    const [headerTitle, setHeaderTitle] = useState<string>('')
    
    let [message, setMessage] = useState<string>('')
    let [errerMessage, setErrorMessage] = useState<string>('')
    let [inputPinNumber, setInputPinNumber] = useState<string>('')

    const [confirmPinNumer, setConfirmPinNumer] = useState<string>('')
    const [isConfirmPinNumer, setIsConfirmPinNumer] = useState<boolean>(false)

    const [isOldPassCheck, setisOldPassCheck] = useState<boolean>(false)


    useEffect(() => {
        init();
        return () => {
            clear();
        }
    }, [isModalVisible])

    const init = () => {
        console.log('init!')
        if (viewType == 0) //핀번호 저장
        {
            setHeaderTitle('비밀번호(PIN)설정')
            setMessage('새로운 비밀번호')
        }
        else if (viewType == 1) //핀번호 재설정
        {
            setHeaderTitle('비밀번호(PIN)재설정')
            setMessage('이전 비밀번호')
        }
        else if (viewType == 2) //핀번호 입력
        {
            setHeaderTitle('비밀번호(PIN)입력')
            setMessage('비밀번호')
        }
    }

    const onClickPinButton = (num: number) => {

        if (num >= 0 && num <= 9) {
            setInputPinNumber(inputPinNumber += num.toString())
        }
        else if (num == 10) { //reflash
            setInputPinNumber('')
        }
        else {                  //remove
            setInputPinNumber(inputPinNumber.substring(0, inputPinNumber.length - 1))
        }

        checkPinNumber();
    }

    const checkPinNumber = () => {
        if (inputPinNumber.length >= 6) {
            switch (viewType) {
                case 0: //저장
                    save();
                    break;
                case 1: //재설정 
                    update();
                    break;
                case 2: //입력
                    input();
                    break;
            }
        }
    }

    const save = () => {
        if (isConfirmPinNumer) {
            if (inputPinNumber === confirmPinNumer) {
                //sucess();
                /**
                 * 핀번호 저장 프로세스~~
                 */
                close();
            }
            else {
                setErrorMessage('핀번호가 다릅니다. 다시입력하세요')
                setInputPinNumber('');
            }
        }
        else {
            setMessage('비밀번호 확인')
            setConfirmPinNumer(inputPinNumber);
            setIsConfirmPinNumer(true);
            setInputPinNumber('');
        }

    }

    const update = () => {
         const oldPassword = '111111'

         if(isOldPassCheck)
         {
             //**비밀번호 재설정 저장*/
            close();
            return;
         }

         if(oldPassword === inputPinNumber)
         {
            setMessage('새로운 비밀번호')
            setErrorMessage('')
            setInputPinNumber('');
            setisOldPassCheck(true);
         }
         else{
            setErrorMessage('비밀번호가 올바르지 않습니다. 다시확인해 주세요.')
            setInputPinNumber('');
         }

    }

    const input = () => {
        const savePass = '111111'

        if(savePass === inputPinNumber)
         {
             close();
         }
         else{
            setErrorMessage('비밀번호가 올바르지 않습니다. 다시확인해 주세요.')
            setInputPinNumber('');
         }
    }

    const clear = () => {
        console.log('Check Pin clear')
        setInputPinNumber('')
        setHeaderTitle('');
        setMessage('')
        setErrorMessage('')
        setConfirmPinNumer('')
        setIsConfirmPinNumer(false);
        setisOldPassCheck(false)
    }

    const BtnPinNumber = ({num,text}: any) => {
        return (
            <Col style={styles.btnPinNumberLayout}>
                <TouchableOpacity style={styles.btnPinNumber} onPress={() => { onClickPinButton(num) }}>
                    <Text style={styles.textPinNumber}>{num}</Text>
                    <Text style={{fontSize:10}}>{text}</Text>
                </TouchableOpacity>
            </Col>)
    }

    const BtnPinRemove = ({ num }: any) => {
        return (
            <Col style={styles.btnPinOptionLayout}>
                <TouchableOpacity style={styles.btnPinNumber} onPress={() => { onClickPinButton(num) }}>
                    <Icon name='arrow-back' />
                </TouchableOpacity>
            </Col>)
    }

    const BtnReflash = ({ num }: any) => {
        return (
            <Col style={styles.btnPinOptionLayout}>
                <TouchableOpacity style={styles.btnPinNumber} onPress={() => { onClickPinButton(num) }}>
                    <Icon name='arrow' />
                </TouchableOpacity>
            </Col>)
    }

    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={isModalVisible}
            presentationStyle='fullScreen'
            onRequestClose={() => {
                console.log('close');
            }}>
            <Container>
            
                    <Header style={{ alignItems: 'center' }}>
                        <Left>
                            <Button transparent onPress={() => {
                                close();
                            }}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Title >{headerTitle}</Title>
                        <Right />
                    </Header>
                    <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20 }}>{message}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
                            <Icon style={styles.iconPin} name={inputPinNumber.length >= 1 ? 'wifi' : 'del'}></Icon>
                            <Icon style={styles.iconPin} name={inputPinNumber.length >= 2 ? 'wifi' : 'del'}></Icon>
                            <Icon style={styles.iconPin} name={inputPinNumber.length >= 3 ? 'wifi' : 'del'}></Icon>
                            <Icon style={styles.iconPin} name={inputPinNumber.length >= 4 ? 'wifi' : 'del'}></Icon>
                            <Icon style={styles.iconPin} name={inputPinNumber.length >= 5 ? 'wifi' : 'del'}></Icon>
                            <Icon style={styles.iconPin} name={inputPinNumber.length >= 6 ? 'wifi' : 'del'}></Icon>
                        </View>
                        <Text style={{ color: '#f00' }}>{errerMessage}</Text>
                    </View>
                    <Grid style={{ flex: 1, }}>
                            <Row>
                                <BtnPinNumber num={1}></BtnPinNumber>
                                <BtnPinNumber num={2} text={'ABC'}></BtnPinNumber>
                                <BtnPinNumber num={3} text={'DEF'}></BtnPinNumber>
                            </Row>
                            <Row>
                                <BtnPinNumber num={4} text={'GHI'}></BtnPinNumber>
                                <BtnPinNumber num={5} text={'JKL'}></BtnPinNumber>
                                <BtnPinNumber num={6} text={'MNO'}></BtnPinNumber>
                            </Row>
                            <Row>
                                <BtnPinNumber num={7} text={'PQRS'}></BtnPinNumber>
                                <BtnPinNumber num={8} text={'TUV'}></BtnPinNumber>
                                <BtnPinNumber num={9} text={'WXYZ'}></BtnPinNumber>
                            </Row>
                            <Row>
                                <BtnReflash   num={10}></BtnReflash>
                                <BtnPinNumber num={0}></BtnPinNumber>
                                <BtnPinRemove num={11}></BtnPinRemove>
                            </Row>
                    </Grid>
                    <Footer/>
            </Container>
        </Modal>
    );
};

const styles = StyleSheet.create({
    btnPinNumberLayout: {
        backgroundColor: '#EAEAEA', borderColor: '#F3F3F3', borderWidth: 1
    },
    btnPinOptionLayout: {
        backgroundColor: '#E1E1E1', borderColor: '#F3F3F3', borderWidth: 1
    },
    btnPinNumber: {
        width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'
    },

    textPinNumber: {
        fontSize: 30
    },

    iconPin: {
        marginRight: 10
    }
})



export default PinNumberModal;