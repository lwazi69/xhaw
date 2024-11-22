import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CoursesSummaryScreen from '../screens/CoursesSummaryScreen';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Courses Summary" component={CoursesSummaryScreen} />
      <Stack.Screen name="Course Details" component={CourseDetailsScreen} />
      <Stack.Screen name="Calculator" component={CalculatorScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}
