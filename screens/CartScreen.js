import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function CartScreen({ route, navigation }) {
  const { selectedCourses } = route.params;
  const total = selectedCourses.reduce((sum, course) => sum + course.fee, 0);

  // Calculate discount based on number of selected courses
  const discount = selectedCourses.length === 2 ? 0.05 : 
                   selectedCourses.length === 3 ? 0.10 : 
                   selectedCourses.length > 3 ? 0.15 : 0;
  const discountedTotal = total - total * discount;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {/* Display each selected course */}
      {selectedCourses.map((course, index) => (
        <View key={index} style={styles.courseItem}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.courseFee}>R{course.fee.toFixed(2)}</Text>
        </View>
      ))}

      {/* Display total and discounted total */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>R{total.toFixed(2)}</Text>
      </View>
      
      {discount > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Discounted Total:</Text>
          <Text style={styles.discountedAmount}>R{discountedTotal.toFixed(2)}</Text>
        </View>
      )}

      {/* Proceed to Payment Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payment')}>
        <Text style={styles.buttonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7', // Soft gray background
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#005f99', // Deep blue for the title
    marginBottom: 30,
    textAlign: 'center',
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff', // White background for course item
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333', // Dark gray text for course title
  },
  courseFee: {
    fontSize: 18,
    color: '#666', // Medium gray for fee
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#005f99',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
  },
  discountedAmount: {
    fontSize: 20,
    fontWeight: '500',
    color: '#1e90ff', // Blue for discounted total
  },
  button: {
    backgroundColor: '#005f99', // Blue button
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
