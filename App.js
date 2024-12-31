import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    // Handle the 'Continue' button press
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Đăng Nhập</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nhập số điện thoại</Text>
        <Text style={styles.infoText}>
          Dùng số điện thoại để đăng nhập hoặc đăng kí tài khoản tại OneHousing Pro
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Số điện thoại"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

      </View>

      <View style={styles.buttonContainer}>
        <Button title="Tiếp Tục" onPress={handleContinue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'stretch',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 20,
    marginBottom: 8,
    borderTopWidth: 1, borderTopColor: 'gray', paddingTop: 60
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,

  },
  infoContainer: {
    marginBottom: 30,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonContainer: {
    alignItems: 'center',
    borderWidth: 1, borderBottomColor: 'gray',
    backgroundColor: 'lightgray'
  },
});
