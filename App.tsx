import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Todo from './Todo';

type item = {
  id: number;
  todo: string
};

type itemList = item[]


export default function App() {
  const [list, setList] = useState<itemList>([]);
  const [todo, setTodo] = useState('');
  const [id, setId] = useState(1);

  const onChangeInput = (text: string) => {
    setTodo(text);
  };

  const onPressAdd = () => {
    if(todo){
      const newArr = [ ...list, { id, todo } ]
      setList(newArr);
      setTodo('');
      setId(id + 1);
    }
  }

  const onPressRemove = (key: number) => {
    setList(list.filter(el => el.id !== key))
  }

  return (
    <View style={styles.container}>
      <View style={[styles.flexRow, {height: 100}]}>
        <View style={[styles.flexCenter, {flex: 1, backgroundColor: 'pink'}]}>
          <Text style={styles.todolistText}>To Do List</Text>
        </View>
      </View>
      <View style={[styles.flexRow, {marginTop: 50}]}>
        <TextInput onChangeText={onChangeInput} value={todo} style={styles.inputStyle}/>
        <TouchableOpacity onPress={onPressAdd} 
        style={[styles.flexCenter, styles.btnAdd, {marginLeft: 20}]}>
          <Text style={styles.btnAddText}>추가</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30}}>
        {list.map((el: item) => <Todo key={el.id} todo={el.todo} onPressRemove={onPressRemove} id={el.id} />)}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flexCenter: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexRow: {
    flexDirection: 'row'
  },
  todolistText: {
    fontSize: 30, 
    fontWeight: "bold", 
    color:'white', 
    textAlign:'center'
  },
  inputStyle: {
    width: 300, 
    borderBottomColor: 'pink', 
    borderBottomWidth: 1
  },
  btnAdd: {
    width: 70, 
    height: 40, 
    backgroundColor: 'pink'
  },
  btnAddText: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 30
  }
});
