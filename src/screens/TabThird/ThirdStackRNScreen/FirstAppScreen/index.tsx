import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';

const FirstAppScreen = () => {

    const getFullName = (firstName: string, secondName: string, thirdName: string) => {
        return firstName + " " + secondName + " " + thirdName;
    }

    return (<ScrollView>
        <Text>Some text {getFullName("Rum", "Tum", "Tugger")} 함수를 쓸수 있다리</Text>
        <View>
            <Text>Some more text</Text>
            <Image source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }} style={{ width: 200, height: 200 }} />
        </View>
        <TextInput
            style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1
            }}
            defaultValue="You can type in me"
        />
        <Cat name='cat'></Cat>



    </ScrollView>);
}

/** custom component */
interface CatProps {
    name: string
}
const Cat = ({ name }: CatProps) => {

    const [isHungry, setIsHungry] = useState(true); //state
    const [text, setText] = useState('');

    return (
        <View>
            <Text>I am a custom cat!</Text>


            <View>
                <Text>I am a props : {name}</Text>
            </View>

            <View>
                <Text>I am {name}, and I am {isHungry ? "hungry" : "full"}!</Text>

                <Button
                    onPress={() => {
                        setIsHungry(false);
                    }}
                    disabled={!isHungry}
                    title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
                />
            </View>


            
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type here to translate!"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                <Text style={{ padding: 10, fontSize: 42 }}>
                    {text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>

        </View>
    );
}

export default FirstAppScreen


/*
리엑트 네이티브 구조

react componets
{
    react native components
    {

        core components // react native 기본제공 컴포넌트
        {

        }

        community components    
        {

        }

        custom native componets
        {

        }
    }
}




*/