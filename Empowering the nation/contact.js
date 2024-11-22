import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text>Phone: +27 11 123 4567</Text>
      <Text>Email: info@empoweringthenation.co.za</Text>
      <Text>Address: Sandton, Johannesburg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
