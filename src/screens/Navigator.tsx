import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';

import NaviNames from '~/screens/NaviNames'


import SplashScreen from '~/screens/SplashScreen'

import TabFirst from '~/screens/TabFirst';

import ComponetsScreen from '~/screens/TabFirst/ComponetsScreen'
import NetWorkingScreen from '~/screens/TabFirst/NetWorkScreen'
import LottoGameScreen from '~/screens/TabFirst/GameEnginScreen'
import AnimatableScreen from '~/screens/TabFirst/AnimatableScreen'
import JavaScriptScreen from '~/screens/TabFirst/JavaScriptScreen'
import ReduxScreen from '~/screens/TabFirst/ReduxScreen'
import NativeBridgeScreen from '~/screens/TabFirst/NativeBridgeScreen'
import ReactNativeScreen from '~/screens/TabFirst/ReactNativeScreen';
import ScanScreen from '~/screens/ScanScreen/index.android';


import TabSecond from '~/screens/TabSecond';
import TabThird from '~/screens/TabThird';
import TabFourth from '~/screens/TabFourth';
import ModalTestScreen from './TabFirst/ModalTestScreen';
import PinNumberTestScreen from './TabSecond/PinNumberTestScreen';
import SqlLightScreen from './TabFirst/SqlLightScreen';
import MapScreen from '~/screens/TabFirst/MapScreen';
import RnNavigationScreen from './TabFirst/RnNavigationScreen';
import DetailsScreen from './TabFirst/RnNavigationScreen/DetailsScreen';
import CreatePostScreen from './TabFirst/RnNavigationScreen/CreatePostScreen';
import { Image, Button, Alert, View } from 'react-native';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const MaterailTopTab = createMaterialTopTabNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();

interface Props {
    navigation: any
    route: any
    title:string
}

const HeaderscreenOptions = {
    headerStyle: {
        backgroundColor: '#BDBDBD',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },

    headerBackTitle: '뒤로'
}

const SplashStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={NaviNames.SplashScreen} component={SplashScreen} options={{ headerShown: false }} />
        </Stack.Navigator>);
}

/** custom header */
function LogoTitle() {
    return (
        <Image
            style={{ width: 30, height: 30 }}
            source={require('~/assets/image/ic_menu.png')}
        />
    );
}



const FirstTabStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={NaviNames.TabFirst} component={TabFirst}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}


const SecondTabStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={NaviNames.TabSecond} component={TabSecond}
                options={{ headerShown: false }}
            />
            <Stack.Screen name={NaviNames.PinNumberTestScreen} component={PinNumberTestScreen} />
        </Stack.Navigator>
    );
}

const ThirdTabStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={NaviNames.TabThird} component={TabThird}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

const FourthTabStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'FourthStack'} component={FourtTopStack} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}


const FourtTopStack = () => {
    return (
        <MaterailTopTab.Navigator>
            <Stack.Screen name={NaviNames.TabFourth} component={TabFourth} />
            <Stack.Screen name={NaviNames.MapScreen} component={MapScreen} />
        </MaterailTopTab.Navigator>
    )
}

const MainBottomTabStack = () => {
    return (<MaterialBottomTab.Navigator>
        <MaterialBottomTab.Screen
            name="TabFirst"
            component={FirstTabStack}
            options={{
                tabBarColor: '#281b39',
                tabBarLabel: 'React Component',
                tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} />,
            }}
        />
        <MaterialBottomTab.Screen
            name="TabSecond"
            component={SecondTabStack}
            options={{
                tabBarColor: '#f00',
                tabBarLabel: 'Custom Modlue',
                tabBarIcon: ({ color }) => <Icon name="people" color={color} size={26} />,
            }}
        />
        <MaterialBottomTab.Screen
            name="TabThird"
            component={ThirdTabStack}
            options={{
                tabBarColor: '#E64A19',
                tabBarLabel: 'Third',
                tabBarIcon: ({ color }) => <Icon name="message" color={color} size={26} />,
            }}
        />
        <MaterialBottomTab.Screen
            name="TabFourth"
            component={FourthTabStack}
            options={{
                tabBarColor: '#524365',
                tabBarLabel: 'Fourth',
                tabBarIcon: ({ color }) => <Icon name="settings" color={color} size={26} />,
            }}
        />
    </MaterialBottomTab.Navigator>);
}


const FirstStack = ({navigation}:Props) => {
    return (
        <Stack.Navigator
        screenOptions={{headerShown:false}}>

            <Stack.Screen name={NaviNames.ReduxScreen} component={ReduxScreen} />
            <Stack.Screen name={NaviNames.ComponetsScreen} component={ComponetsScreen}/>
            <Stack.Screen name={NaviNames.NetWorkingScreen} component={NetWorkingScreen} />
            <Stack.Screen name={NaviNames.LottoGameScreen} component={LottoGameScreen} />
            <Stack.Screen name={NaviNames.AnimatableScreen} component={AnimatableScreen} />
            <Stack.Screen name={NaviNames.JavaScriptScreen} component={JavaScriptScreen} />
            <Stack.Screen name={NaviNames.NativeBridgeScreen} component={NativeBridgeScreen} />
            <Stack.Screen name={NaviNames.ReactNativeScreen} component={ReactNativeScreen} />
            <Stack.Screen name={NaviNames.ScanScreen} component={ScanScreen} />
            <Stack.Screen name={NaviNames.ModalTestScreen} component={ModalTestScreen} />
            <Stack.Screen name={NaviNames.SqlLightScreen} component={SqlLightScreen} />
            <Stack.Screen name={NaviNames.MapScreen} component={MapScreen} />
            <Stack.Screen name={NaviNames.RnNavigationScreen} component={RnNavigationScreen}
                options={{
                    title: 'My home',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerShown:false
                }} />
            <Stack.Screen name={'DetailsScreen'} component={DetailsScreen} initialParams={{ itemId: 0 }} options={({ route }: Props) => ({ title: route.params.name })} />
            <Stack.Screen name={'CreatePostScreen'} component={CreatePostScreen} initialParams={{ itemId: 0 }} options={{
                headerTitle: ({ navigation, route }: Props) => <LogoTitle />,
                headerRight: () => (
                    <Button
                        title="Info"
                        color="#000"
                        onPress={() => Alert.alert('This is a button!')}
                    />
                ),
            
                
            }} />
        </Stack.Navigator>
    )
}


const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={HeaderscreenOptions}>
            <Stack.Screen
                name={'MainBottomTabStack'}
                component={MainBottomTabStack}/>

            <Stack.Screen
                name={'FirstStack'}
                component={FirstStack}
                options={{
                    title: 'My home',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight:() => {
                        return( true ?<Button
                        title="메뉴"
                        color="#000"
                        onPress={() => Alert.alert('This is a button!')}/> : <View></View> )
                    },
                   
                }} />

        </Stack.Navigator>
    )
};



const Navigator = () => {
    let mTimeOutId: number;
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        mTimeOutId = setTimeout(() => {
            setisLoading(false)
        }, 1000);
        return () => {
            clearTimeout(mTimeOutId);
        }
    }, [])

    return (<NavigationContainer
        onStateChange={state => console.log('New state is', state)}>
        {isLoading ? <SplashStack></SplashStack> : <MainStack></MainStack>}
    </NavigationContainer>);
}


export default Navigator