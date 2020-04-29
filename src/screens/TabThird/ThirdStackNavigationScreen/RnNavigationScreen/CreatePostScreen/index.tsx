import { TextInput } from "react-native-gesture-handler";
import React from "react";
import { Button } from "react-native";

interface Props{
    navigation:any
    route :any
}

function CreatePostScreen({ navigation, route } : Props) {
    const [postText, setPostText] = React.useState('');
   
  
    return (
      <>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{ height: 200, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="Done"
          onPress={() => {
            // Pass params back to home screen
            navigation.navigate('RnNavigationScreen', { post: postText });  //값을 돌려 받을때
          }}
        />
      </>
    );
  }

  export default CreatePostScreen