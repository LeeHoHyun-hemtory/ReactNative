import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App(props: any) {
  const { id, todo, onPressRemove } = props;
  const [done, setDone] = useState<boolean>(false);

  const onPressToggle = () => {
    setDone(!done);
  }

  return (
    <View key={id} style={ styles.todo }>
      <TouchableOpacity onPress={onPressToggle}>
        <Text style={[styles.list, done && styles.finish]}>{todo}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressRemove(id)} style={[styles.flexCenter, styles.btnRemove]}>
        <Text style={styles.RemoveFont}>삭제</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  flexCenter: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
  },
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: 350, 
    height: 50, 
    backgroundColor: 'pink', 
    marginTop: 20
  },
  finish: {
    textDecorationLine: 'line-through',
    textDecorationColor: 'pink',
    color: '#888'
  },
  list: {
    fontSize: 40, 
    fontWeight: 'bold', 
    color: 'white', 
    marginLeft: 10
  },
  btnRemove: {
    width: 60, 
    height: 40, 
    borderWidth: 1, 
    borderColor: 'white', 
    padding: 3, 
    marginRight: 5
  },
  RemoveFont: {
    fontSize: 25, 
    color: 'white'
  }
});
