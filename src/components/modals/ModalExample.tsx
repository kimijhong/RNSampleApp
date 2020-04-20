import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, SafeAreaView} from 'react-native';

interface Props{}
interface State{modalVisible:boolean}


class ModalExample extends Component<Props,State> {

    constructor(props:Props)
    {
        super(props);
        this.state = {
            modalVisible: false,
          };
    }

  setModalVisible(visible:boolean) {
    this.setState({modalVisible:visible});
  }

  render() {

    const {modalVisible} = this.state;

    return (
      <SafeAreaView style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <SafeAreaView style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </SafeAreaView>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

export default ModalExample;