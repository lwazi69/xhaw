import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empowering the Nation</Text>
      <Text style={styles.subtitle}>
        Upskilling domestic workers and gardeners since 2018.
      </Text>
      <Button
        title="View Courses"
        onPress={() => navigation.navigate('Courses Summary')}
      />
      <Button
        title="Contact Us"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 16, marginVertical: 10 },
});
