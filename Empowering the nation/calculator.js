import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';

export default function CalculatorScreen() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const VAT_RATE = 0.15;

  const calculateTotal = () => {
    let total = selectedCourses.reduce((sum, course) => sum + course.fee, 0);
    let discount = selectedCourses.length > 3 ? 0.15 : 0.05;
    total -= total * discount;
    total += total * VAT_RATE;
    Alert.alert(`Total Fee: R${total.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Button title="Calculate Fees" onPress={calculateTotal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
