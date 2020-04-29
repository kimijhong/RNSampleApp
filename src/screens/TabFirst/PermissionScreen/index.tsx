import { Content, Container, Button,Text} from "native-base"
import React, { useEffect } from "react"

import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import { Alert } from "react-native";

const PermissionScreen = ()=>
{
    
    useEffect(() => {
        checkPermission()
        return () => {
            
        }
    }, [])

    const checkPermission = () => {
        
        check(PERMISSIONS.IOS.LOCATION_ALWAYS)
            .then(result => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        Alert.alert('This feature is not available (on this device / in this context)');
                        break;
                    case RESULTS.DENIED:
                       // askPermission();
                        Alert.alert('The permission has not been requested / is denied but requestable')
                        break;
                    case RESULTS.GRANTED:
                        Alert.alert('The permission is granted')
                        break;
                    case RESULTS.BLOCKED:
                        Alert.alert('The permission is denied and not requestable anymore')
                        break;
                }
            })
            .catch(error => {
                // …
            });
          
           // check(PERMISSIONS.IOS.CAMERA).then()

           async function requestAll() {
            const cameraStatus = await request(PERMISSIONS.IOS.CAMERA);
            const contactsStatus = await request(PERMISSIONS.IOS.CONTACTS);
            return {cameraStatus, contactsStatus};
          }
          
          requestAll().then(statuses => console.log(statuses));
    }

    const askPermission = async () => {
        try {
          const result = await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
          if (result === RESULTS.GRANTED) {
                Alert.alert('ddd')
          }
        } catch (error) {
          console.log('askPermission', error);
        }
      };


    


    return(<Container>
        <Content>
            <Button onPress={checkPermission}><Text>권한체크</Text></Button>
        </Content>
    </Container>)
}

export default PermissionScreen;