import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Left, Body, Right, Button,Icon, Title,Text } from 'native-base';

import NaviNames from '~/screens/NaviNames'


import SplashScreen from '~/screens/SplashScreen'

/** tab */
import TabFirst from '~/screens/TabFirst';
import TabSecond from '~/screens/TabSecond';
import TabThird from '~/screens/TabThird';
import TabFourth from '~/screens/TabFourth';

/** tab 1 */
import ComponetsScreen from '~/screens/TabFirst/ComponetsScreen'
import NetWorkingScreen from '~/screens/TabFirst/NetWorkScreen'
import LottoGameScreen from '~/screens/TabFirst/GameEnginScreen'
import AnimatableScreen from '~/screens/TabFirst/AnimatableScreen'
import JavaScriptScreen from '~/screens/TabFirst/JavaScriptScreen'
import ReduxScreen from '~/screens/TabFirst/ReduxScreen'
import NativeBridgeScreen from '~/screens/TabFirst/NativeBridgeScreen'
import ReactNativeScreen from '~/screens/TabFirst/ReactNativeScreen';
import ScanScreen from '~/screens/ScanScreen/index.android';
import ModalTestScreen from './TabFirst/ModalTestScreen';
import SqlLightScreen from './TabFirst/SqlLightScreen';
import MapScreen from '~/screens/TabFirst/MapScreen';
import RnNavigationScreen from './TabFirst/RnNavigationScreen';
import DetailsScreen from './TabFirst/RnNavigationScreen/DetailsScreen';
import CreatePostScreen from './TabFirst/RnNavigationScreen/CreatePostScreen';

/** tab2 */
import PinNumberTestScreen from './TabSecond/PinNumberTestScreen';

import { Image, Alert, View } from 'react-native';

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

const HeaderBackOptions = ({navigation}:Props)=> {
    return{
    headerLeft: () => (
             <Button transparent onPress={()=>{navigation.goBack()}}>
              <Icon name='arrow-back'/>
             
            </Button>
    )}
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

const FourthTabStack = () => {
    return (
        <MaterailTopTab.Navigator>
            <Stack.Screen name={NaviNames.TabFourth} component={FourthStack} />
            <Stack.Screen name={NaviNames.MapScreen} component={MapScreen} />
        </MaterailTopTab.Navigator>
    )
}

const MainBottomTabStack = () => {
    return (<MaterialBottomTab.Navigator>
        <MaterialBottomTab.Screen
            name="TabFirst"
            component={TabFirst}
            options={{
                tabBarColor: '#281b39',
                tabBarLabel: 'React Component',
                tabBarIcon: ({ color }) => <Icons name="home" color={color} size={26} />,
            }}
        />
        <MaterialBottomTab.Screen
            name="TabSecond"
            component={TabSecond}
            options={{
                tabBarColor: '#f00',
                tabBarLabel: 'Custom Modlue',
                tabBarIcon: ({ color }) => <Icons name="people" color={color} size={26} />,
            }}
        />
        <MaterialBottomTab.Screen
            name="TabThird"
            component={TabThird}
            options={{
                tabBarColor: '#E64A19',
                tabBarLabel: 'Third',
                tabBarIcon: ({ color }) => <Icons name="message" color={color} size={26} />,
            }}
        />
        <MaterialBottomTab.Screen
            name="TabFourth"
            component={FourthTabStack}
            options={{
                tabBarColor: '#524365',
                tabBarLabel: 'Fourth',
                tabBarIcon: ({ color }) => <Icons name="settings" color={color} size={26} />,
            }}
        />
    </MaterialBottomTab.Navigator>);
}

const FirstStack = ({navigation}:Props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={NaviNames.ReduxScreen} component={ReduxScreen} options={HeaderBackOptions} />
            <Stack.Screen name={NaviNames.ComponetsScreen} component={ComponetsScreen}  options={HeaderBackOptions}/>
            <Stack.Screen name={NaviNames.NetWorkingScreen} component={NetWorkingScreen}  options={HeaderBackOptions}/>
            <Stack.Screen name={NaviNames.LottoGameScreen} component={LottoGameScreen}  options={HeaderBackOptions}/>
            <Stack.Screen name={NaviNames.AnimatableScreen} component={AnimatableScreen}  options={HeaderBackOptions}/>
            <Stack.Screen name={NaviNames.JavaScriptScreen} component={JavaScriptScreen}  options={HeaderBackOptions}/>
            <Stack.Screen name={NaviNames.NativeBridgeScreen} component={NativeBridgeScreen}  options={HeaderBackOptions}/>
            <Stack.Screen name={NaviNames.ReactNativeScreen} component={ReactNativeScreen}  options={HeaderBackOptions}/>
            <Stack.Screen name={NaviNames.ScanScreen} component={ScanScreen} options={HeaderBackOptions} />
            <Stack.Screen name={NaviNames.ModalTestScreen} component={ModalTestScreen}  options={HeaderBackOptions}/>
            <Stack.Screen name={NaviNames.SqlLightScreen} component={SqlLightScreen}  options={HeaderBackOptions}/>
            <Stack.Screen name={NaviNames.MapScreen} component={MapScreen}  options={HeaderBackOptions}/>
            <Stack.Screen name={NaviNames.RnNavigationScreen} component={RnNavigationScreen}/>
            <Stack.Screen name={'DetailsScreen'} component={DetailsScreen} initialParams={{ itemId: 0 }} options={({ route }: Props) => ({ title: route.params.name })} />
            <Stack.Screen name={'CreatePostScreen'} component={CreatePostScreen} initialParams={{ itemId: 0 }} options={{
               title: 'My home',
               headerStyle: {
                   backgroundColor: '#f4511e',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                   fontWeight: 'bold',
               },
            
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

const SecondStack = ({navigation}:Props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={NaviNames.PinNumberTestScreen} component={PinNumberTestScreen} options={HeaderBackOptions}/>
        </Stack.Navigator>
    )
}

const ThirdStack = ({navigation}:Props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={NaviNames.PinNumberTestScreen} component={PinNumberTestScreen} options={HeaderBackOptions} />
        </Stack.Navigator>
    )
}

const FourthStack = ({navigation}:Props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={NaviNames.TabFourth} component={TabFourth}  options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}


const RootStack = () => {
    return (
        <Stack.Navigator
            screenOptions={HeaderscreenOptions}>
            <Stack.Screen
                name={NaviNames.MainBottomTabStack}
                component={MainBottomTabStack}/>
            <Stack.Screen
                name={NaviNames.FirstStack}
                component={FirstStack}
                options={{headerShown:false}}
                />
            <Stack.Screen
                name={NaviNames.SecondStack}
                component={SecondStack}
                options={{ headerShown:false }}
            />
             <Stack.Screen
                name={NaviNames.ThirdStack}
                component={ThirdStack}
                options={{ headerShown:false }}
            />
             <Stack.Screen
                name={NaviNames.FourthStack}
                component={FourthStack}
                options={{ headerShown:false }}
            />
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
        {isLoading ? <SplashStack></SplashStack> : <RootStack></RootStack>}
    </NavigationContainer>);
}


export default Navigator