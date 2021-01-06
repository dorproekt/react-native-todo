import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal, Alert} from 'react-native';
import {THEME} from "../theme";
import {AppButton} from "./ui/AppButton";

export const EditModal = ({visible, onCancel, value, onSave}) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if(title.trim().length < 3){
       Alert.alert('Ошибка!', `Минимальная длинна текста 3 символа`);
    }else{
      onSave(title);
    }
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.buttons}>
          {/*<Button title="Отменить" onPress={onCancel} color={THEME.DANGER_COLOR}/>*/}
          <AppButton onPress={onCancel} color={THEME.DANGER_COLOR} >Назад</AppButton>
          <AppButton onPress={saveHandler} color={THEME.MAIN_COLOR} >Сохранить</AppButton>
          {/*<Button title="Сохранить" onPress={saveHandler}/>*/}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%'
  },
  buttons:{
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});