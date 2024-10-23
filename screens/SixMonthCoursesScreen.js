import React, { useState } from 'react';
import { View, Text, Button, CheckBox, StyleSheet } from 'react-native';

const courses = [
  { id: 1, title: 'Life Skills', fee: 1500 },
  { id: 2, title: 'First Aid', fee: 1500 },
  { id: 3, title: 'Landscaping & Garden Design', fee: 1500 },
];

export default function SixMonthCoursesScreen({ navigation }) {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const toggleCourseSelection = (course) => {
    setSelectedCourses((prevSelected) =>
      prevSelected.includes(course)
        ? prevSelected.filter((c) => c !== course)
        : [...prevSelected, course]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six-Month Courses</Text>
      {courses.map((course) => (
        <View key={course.id} style={styles.courseItem}>
          <CheckBox
            value={selectedCourses.includes(course)}
            onValueChange={() => toggleCourseSelection(course)}
          />
          <Text>{course.title} (R{course.fee})</Text>
        </View>
      ))}
      <Button
        title="View Cart"
        onPress={() => navigation.navigate('Cart', { selectedCourses })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  courseItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
});