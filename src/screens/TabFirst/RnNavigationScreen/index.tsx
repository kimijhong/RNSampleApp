import { Container, Content, Header, Left, Icon, Body, Button, View, Text, Title, Right, } from "native-base"
import React, { useEffect, useLayoutEffect } from "react"
import { Alert } from "react-native";
import HeaderBack from "~/components/HeaderBack";

interface Props {
  navigation: any
  route: {
    key: string
    params: { post: string }
  }
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
    <Header>
      <Left>
        <Button transparent onPress={() => { navigation.goBack() }}>
          <Icon name='arrow-back' />
          <Text>뒤로</Text>
        </Button >
      </Left>
      <Body>
        <Title>{route.key}</Title>
      </Body>
      <Right>
        <Text onPress={() => {
          setCount(c => c + 1)
        }}>Update count</Text>
      </Right>
    </Header>

    <Content>
      <Body>
        <Button
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate('DetailsScreen', {
            itemId: 86,
            otherParam: 'anything you want here',
          })}>
          <Text>Go to Details : navigate</Text>
        </Button>

        <Button
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate('CreatePostScreen')}>
          <Text>Create post</Text>
        </Button>

        <Button
          style={{ marginTop: 10 }}
          onPress={() => navigation.setOptions({ title: 'Updated!' })}>
          <Text>Update the title</Text>
        </Button>
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
        <Text style={{ margin: 10 }}>count: {count}</Text>
      </Body>
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