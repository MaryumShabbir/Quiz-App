// screens/UserProfile.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import styles from './UserProfileScreen.style';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigation = useNavigation();

  // Function to handle the submission of the profile
  const handleSubmit = () => {
    // Check if the name and age are not empty
    if (!name.trim() || !age.trim()) {
      Alert.alert('Error', 'Please fill out all the fields.');
      return;
    }

    // Check if the age is a number
    if (isNaN(age)) {
      Alert.alert('Error', 'Age must be a number.');
      return;
    }

    // Navigate to the Starter screen with the user's name and age
    navigation.navigate('Starter', { userName: name, userAge: age });
  };

  return (
    <ImageBackground
      source={require('../../assets/images/Magic.jpg')} // Replace with the correct path to your image
      style={styles.backgroundImage}
    >

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          value={age}
          keyboardType="numeric" // Ensure the keyboard is numeric for age input
          onChangeText={setAge}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default UserProfile;
