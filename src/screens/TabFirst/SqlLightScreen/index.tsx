import Styled from 'styled-components/native';
import SQLite from 'react-native-sqlite-storage';
import React , { useEffect, useState } from 'react';
import {isSpliteDouble,numberWithCommas} from '~/utils/TextUtil'

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;
const UserContainer = Styled.View`
  flex-direction: row;
`;
const UserInfo = Styled.Text`
  padding: 8px;
`;

interface Props {}
interface State {
  db: SQLite.SQLiteDatabase;
  users: Array<IUser>;
}


const SqlLightScreen = (props : Props)=>{
    const [users, setUsers] = useState<Array<IUser>>([{sn_seq:0 , email:'',age:0 , name:''}]);
    let db : SQLite.SQLiteDatabase;

    useEffect(() => {
        console.log(db);
        init();
        getUserList();
        return () => {
            console.log('close');
            closeDB()
            console.log(db);
        }
    }, [])

    const closeDB = async ()=>
    {
// console.log(db);
await db.close();
       
console.log(db);
    }

    const init =()=>{
        db = SQLite.openDatabase(
            {
              name: 'TestDB.db',
              location: 'default',
              createFromLocation: '~www/TestDB.db',
            },
            () => {},
            error => {
              console.log(error);
            }
          );
    }

    const getUserList = ()=>
    {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM tb_tset;', [], (tx, results) => {
              const rows = results.rows;
              let lusers = [];
      
              for (let i = 0; i < rows.length; i++) {
                  lusers.push({
                  ...rows.item(i),
                });
              }
              
              setUsers(lusers);
            });
          });
    }

    const insertUser =()=>
    {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM tb_tset;', [], (tx, results) => {
              const rows = results.rows;
              let lusers = [];
      
              for (let i = 0; i < rows.length; i++) {
                  lusers.push({
                  ...rows.item(i),
                });
              }
              
              setUsers(lusers);
            });
          });
    }
   
    return (<Container>
        {users.map((user: IUser, index: number) => (
          <UserContainer key={`user-info${index}`}>
            <UserInfo>{user.sn_seq}</UserInfo>
            <UserInfo>{user.name}</UserInfo>
            <UserInfo>{user.age}</UserInfo>
            <UserInfo>{user.email}</UserInfo>
            <UserInfo>{numberWithCommas('22222.000000000000')}</UserInfo>
          </UserContainer>
        ))}
        
      </Container>);
}

export default SqlLightScreen