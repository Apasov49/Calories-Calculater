// src/CalorieCalculator.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';

const CalorieCalculator = () => {
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('1.3');
  const [calories, setCalories] = useState('');

  const calculateCalories = () => {
    if (!weight) {
      setCalories('');
      return;
    }

    const m = parseFloat(weight);
    const k = parseFloat(activityLevel);

    let E = 0;

    if (gender === 'male') {
      E = (879 + 10.2 * m) * k;
    } else if (gender === 'female') {
      E = (795 + 7.18 * m) * k;
    }

    setCalories(E.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Gender:</Text>
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

      <Text style={styles.label}>Enter Weight (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => {
          setWeight(text);
        }}
        value={weight}
      />

      <Text style={styles.label}>Select Activity Level:</Text>
      <Picker
        selectedValue={activityLevel}
        onValueChange={(itemValue) => setActivityLevel(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Light" value="1.3" />
        <Picker.Item label="Usual" value="1.5" />
        <Picker.Item label="Moderate" value="1.7" />
        <Picker.Item label="Hard" value="2.0" />
        <Picker.Item label="Very Hard" value="2.2" />
      </Picker>

      <Button title="Calculate Calories" onPress={calculateCalories} />

      {calories !== '' && (
        <Text style={styles.result}>
          Calorie Consumption: {calories} calories per day
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: 200,
    marginBottom: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default CalorieCalculator;;
