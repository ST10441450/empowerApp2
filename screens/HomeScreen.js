import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/Screenshot 2024-10-15 170118 - Copy.png')} // Placeholder for logo
        style={styles.logo}
      />
      
      {/* Title */}
      <Text style={styles.title}>Empowering The Nation</Text>

      {/* Button for Six-Week Courses */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('SixWeekCourses')}
      >
        <Text style={styles.buttonText}>Six-Week Courses</Text>
      </TouchableOpacity>

      {/* Button for Six-Month Courses */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('SixMonthCourses')}
      >
        <Text style={styles.buttonText}>Six-Month Courses</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7', // Soft gray background
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
    borderRadius: 60, // Make the logo circular
    borderWidth: 2,
    borderColor: '#005f99',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#005f99', // Deep blue for the title
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#005f99', // Blue button color
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
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
    fontWeight: '500',
  },
});

