import { StyleSheet, View, FlatList, Text, SectionList, Alert } from "react-native";
import React, { useEffect } from "react";
import { Container, Card } from "native-base";

const items = {
    sn_seq: 20,
    itemData: [
        { key: 'Devin' , title:'test' },
        { key: 'Dan' , title:'test'},
        { key: 'Dominic' , title:'test'},
        { key: 'Jackson' , title:'test'},
        { key: 'James' , title:'test'},
        { key: 'Joel' , title:'test'},
        { key: 'John', title:'test' },
        { key: 'Jillian' , title:'test'},
        { key: 'Jimmy' , title:'test'},
        { key: 'Julie' , title:'test'},
    ]
}



const ListViewScreen = () => {
    return (
        <Container>
            <View style={styles.container}>
               <CustomFlatList></CustomFlatList>
            </View>
            <View style={styles.container}>
                <CustomSectionList></CustomSectionList>
            </View>
        </Container>
    );
}

const CustomFlatList = ()=>
{
    return (<FlatList
        data={items.itemData}
        renderItem={({ item }) =>  <FlatListItem listItem={item}></FlatListItem>}
    />)
}

interface FlatListItemProps {
    listItem:{key:string,title:string}
}

const FlatListItem = ({ listItem }: FlatListItemProps) => {
    return (<Card><Text style={styles.item} onPress={()=>{Alert.alert(listItem.key)}}>{listItem.key} : {listItem.title}</Text></Card>)
}

/**
 * 
 */

const CustomSectionList = ()=>
{
    return ( <SectionList
        sections={[
            { title: 'D', data: [{name:'Devin',phone:'01012345678'}, 
                                 {name:'Dan',phone:'01012345678'},
                                 {name:'Dominic',phone:'01012345678'}]},
            { title: 'J', data: [{name:'Jackson',phone:'01012345678'}, 
                                 {name:'James',phone:'01012345678'},
                                 {name:'Jillian',phone:'01012345678'},
                                 {name:'Jimmy',phone:'01012345678'},
                                 {name:'Joel',phone:'01012345678'},
                                 {name:'John',phone:'01012345678'},
                                 {name:'Julie',phone:'01012345678'}]},
        ]}
        renderItem={({ item }) => <Text style={styles.item} onPress={()=>{Alert.alert(item.name)}}>{item.name} : {item.phone} </Text>}
        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => item.name}
    />)
}



export default ListViewScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
     
        padding: 10,
        fontSize: 15,
       
    },
})
