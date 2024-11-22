import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const courses = [
  { name: 'First Aid', fee: 1500 },
  { name: 'Sewing', fee: 1500 },
  { name: 'Landscaping', fee: 1500 },
  { name: 'Life Skills', fee: 1500 },
  { name: 'Child Minding', fee: 750 },
  { name: 'Cooking', fee: 750 },
  { name: 'Garden Maintenance', fee: 750 },
];

export default function CoursesSummaryScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {courses.map((course, index) => (
        <View key={index} style={styles.course}>
          <Text style={styles.courseText}>{course.name} - R{course.fee}</Text>
          <Button
            title="View Details"
            onPress={() => navigation.navigate('Course Details', { course })}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  course: { marginBottom: 10 },
  courseText: { fontSize: 18 },
});
