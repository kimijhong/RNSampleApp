import { Container, Content } from "native-base"
import React, { useEffect, useLayoutEffect } from "react"
import { Button, View, Text, Alert } from "react-native";
import HeaderBack from "~/components/HeaderBack";

interface Props {
    navigation: any
    route: { params: { post: string } }
}

const RnNavigationScreen = ({ navigation, route }: Props) => {

    const [count, setCount] = React.useState(0);

    

    useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
        }
    }, [route.params?.post]);       // 결과 값을 돌려 받을때 

  
    /*
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button onPress={() => setCount(c => c + 1)} title="Update count" />
          ),
          headerLeft: () => (
            <Button
                title="뒤로가기"
                color="#fff"
                onPress={()=>{{navigation.goBack()}}}
            />
        )
        });
    }, [navigation, setCount]);*/

    return <Container>
      <HeaderBack navigation={navigation} route={route} title='reactn'></HeaderBack>
        <Content>
          
            <Button
                title="Go to Details : navigate"
                onPress={() => navigation.navigate('DetailsScreen', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                })}
            />

            <Button
                title="Create post"
                onPress={() => navigation.navigate('CreatePostScreen')}
            />

            <Button
                title="Update the title"
                onPress={() => navigation.setOptions({ title: 'Updated!' })} //옵션으로 제어할수 있다./.
            />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
            <Text style={{ margin: 10 }}>count: {count}</Text>
        </Content>
    </Container>

}

/*
navigation.navigate('Root');

navigation.navigate('Root', {
  screen: 'Settings',
  params: { user: 'jane' },
});

navigation.navigate('Root', {
  screen: 'Settings',
  params: {
    screen: 'Sound',
    params: {
      screen: 'Media',
    },
  },
});

*/



export default RnNavigationScreen;