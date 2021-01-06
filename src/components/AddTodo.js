import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Keyboard, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {THEME} from "../theme";

export const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {

    if(value.trim()){
      onSubmit(value);
      setValue('');
      Keyboard.dismiss();
    }else{
      Alert.alert('Название не может быть пустым');
    }

  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue(text)}
        autocorrect={false}
        value={value}
        placeholder="Введите название дела"
      />
      {/*<Button title="Добавить" onPress={pressHandler} />*/}
      <AntDesign.Button onPress={pressHandler} name="plus">
        Добавить
      </AntDesign.Button>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR
  }
});