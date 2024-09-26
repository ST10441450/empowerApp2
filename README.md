# empowerApp2

# EmpowerApp

The Logic

npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context


IN App.js INSERT THE FOLLOWING
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CoursesScreen from './screens/CoursesScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


NOW WHAT YOU’RE GOING TO DO IS CREATE Homescreen.js in a new Folder titled Screens

Homescreen logic

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empowering the Nation</Text>
      <Text style={styles.text}>
        Established in 2018, we offer courses to domestic workers and gardeners to enhance their skills in Johannesburg.
      </Text>
      <Button
        title="View Courses"
        onPress={() => navigation.navigate('Courses')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, textAlign: 'center' },
});

export default HomeScreen;

Course Screen Logic

Create another file in screen folder for this screen
INSERT THE FOLLOWING

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CoursesScreen = ({ navigation }) => {
  const courses = [
    { name: 'First Aid', fee: 'R1500', duration: '6 months' },
    { name: 'Sewing', fee: 'R1500', duration: '6 months' },
    { name: 'Landscaping', fee: 'R1500', duration: '6 months' },
    { name: 'Life Skills', fee: 'R1500', duration: '6 months' },
    { name: 'Child Minding', fee: 'R1500', duration: '6 weeks' },
    { name: 'Cooking', fee: 'R1500', duration: '6 weeks' },
    { name: 'Garden Maintenance', fee: 'R1500', duration: '6 weeks' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courses Offered</Text>
      {courses.map((course, index) => (
        <Button
          key={index}
          title={`${course.name} - ${course.duration}`}
          onPress={() => navigation.navigate('CourseDetails', { course })}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
});

export default CoursesScreen;

CREATE ANOTHER SCREEN FOR DETAILS
INSERT THE FOLLOWING

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseDetailScreen = ({ route }) => {
  const { course } = route.params;

  // Updated course details to include 6-week short courses
  const courseDetails = {
    'First Aid (6-month)': {
      fees: 'R1500',
      content: [
        'Wounds and bleeding',
        'Burns and fractures',
        'Emergency scene management',
        'Cardio-Pulmonary Resuscitation (CPR)',
        'Respiratory distress e.g., Choking, blocked airway',
      ],
    },
    'Sewing (6-month)': {
      fees: 'R1500',
      content: [
        'Types of stitches',
        'Threading a sewing machine',
        'Sewing buttons, zips, hems and seams',
      ],
    },
    'Landscaping (6-month)': {
      fees: 'R1500',
      content: [
        'Indigenous and exotic plants and trees',
        'Fixed structures (fountains, statues, benches, tables, built-in braai)',
        'Balancing of plants and trees in a garden',
        'Aesthetics of plant shapes and colours',
        'Garden layout',
      ],
    },
    'Life Skills (6-month)': {
      fees: 'R1500',
      content: [
        'Opening a bank account',
        'Basic labour law (know your rights)',
        'Basic reading and writing literacy',
        'Basic numeric literacy',
      ],
    },
    'Child Minding (6-week)': {
      fees: 'R750',
      content: [
        'Health and safety standards for child care',
        'Effective communication with children',
        'Activities for child development',
        'Basic first aid for children',
      ],
    },
    'Cooking (6-week)': {
      fees: 'R750',
      content: [
        'Meal planning and preparation',
        'Food safety and hygiene',
        'Basic cooking techniques',
        'Healthy meal options',
      ],
    },
    'Garden Maintenance (6-week)': {
      fees: 'R750',
      content: [
        'Pruning and trimming',
        'Lawn maintenance and care',
        'Watering techniques',
        'Weed and pest control',
      ],
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.fees}>Fees: {courseDetails[course.name].fees}</Text>
      <Text style={styles.summary}>Summary: {course.summary}</Text>
      <Text style={styles.contentTitle}>Content Covered:</Text>
      {courseDetails[course.name].content.map((item, index) => (
        <Text key={index} style={styles.contentItem}>
          • {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold' },
  text: { fontSize: 16, marginVertical: 5 },
  subtitle: { fontSize: 18, marginTop: 10, fontWeight: 'bold' },
});

export default CourseDetailsScreen;

Homescreen design

import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Changing lives, only a click away</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        New here?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Click here
        </Text>{' '}
        to sign up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#3B82F6',
    padding: 15,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonSecondary: {
    backgroundColor: '#1D4ED8',
    padding: 15,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signupText: {
    color: '#fff',
    marginTop: 20,
  },
  link: {
    color: '#60A5FA',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;


Signing Up Design & Logic

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  // Basic email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to handle form submission
  const handleSignUp = () => {
    if (!name || !surname || !email || !number) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    // Simulate sign-up success (you can replace this with an API call)
    Alert.alert('Success', 'Sign-up completed successfully!');

    // Clear form fields after successful sign-up
    setName('');
    setSurname('');
    setEmail('');
    setNumber('');

Design
import React from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ALMOST THERE!</Text>
      <TextInput placeholder="Name" style={styles.input} placeholderTextColor="#ccc" />
      <TextInput placeholder="Surname" style={styles.input} placeholderTextColor="#ccc" />
      <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#ccc" />
      <TextInput placeholder="Number" style={styles.input} placeholderTextColor="#ccc" />
      <Button title="Continue" color="#1D4ED8" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#1A1A1A',
    color: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
});

export default SignUp;

Welcome page design
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empowering the Nation</Text>
      <Text style={styles.description}>
        Empowering the Nation is a training initiative founded in 2018 by Precious Radebe to provide essential skills training for domestic workers and gardeners...
      </Text>
      <Button title="Select Courses" color="#3B82F6" onPress={() => navigation.navigate('Courses')} />
      <Button title="Discounts Available" color="#1D4ED8" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  description: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default WelcomePage;

Course Selection Design
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, CheckBox } from 'react-native';

const Courses = () => {
  const [firstAid, setFirstAid] = useState(false);
  const [sewing, setSewing] = useState(false);
  const [landscaping, setLandscaping] = useState(false);
  const [lifeSkills, setLifeSkills] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six Month Courses</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox value={firstAid} onValueChange={setFirstAid} />
        <Text style={styles.label}>First Aid</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={sewing} onValueChange={setSewing} />
        <Text style={styles.label}>Sewing</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={landscaping} onValueChange={setLandscaping} />
        <Text style={styles.label}>Landscaping</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={lifeSkills} onValueChange={setLifeSkills} />
        <Text style={styles.label}>Life Skills</Text>
      </View>
      <Button title="Next" color="#1D4ED8" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
  },
});

export default Courses;

Discount logic & design
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const DiscountScreen = ({ selectedCourses }) => {
  const calculateDiscount = () => {
    const courseCount = selectedCourses.length;
    
    if (courseCount === 1) {
      return "No discount is applied for 1 course.";
    } else if (courseCount === 2) {
      return "You get a 5% discount for choosing 2 courses!";
    } else if (courseCount === 3) {
      return "You get a 10% discount for choosing 3 courses!";
    } else if (courseCount > 3) {
      return "You get a 15% discount for choosing more than 3 courses!";
    } else {
      return "Please select at least one course to see discount details.";
    }
  };

  const discountMessage = calculateDiscount();

  const proceedToPayment = () => {
    if (selectedCourses.length > 0) {
      // Navigate to payment screen or process payment
      Alert.alert("Proceeding to payment", `Selected courses: ${selectedCourses.join(", ")}`);
    } else {
      Alert.alert("Error", "You must select at least one course.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Discount</Text>
      <Text style={styles.discountInfo}>{discountMessage}</Text>

      <Button title="Proceed to Payment" color="#3B82F6" onPress={proceedToPayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
  },
  discountInfo: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
});
export default DiscountScreen;


Payment logic & design
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const handlePayment = () => {
    if (cardNumber && expiryDate && cvv && cardholderName) {
      Alert.alert("Success", "Your payment was successful!");
      // Navigate to confirmation or dashboard
      navigation.navigate('Courses');
    } else {
      Alert.alert("Error", "Please fill all the fields correctly");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Cardholder Name"
        placeholderTextColor="#aaa"
        value={cardholderName}
        onChangeText={setCardholderName}
      />

      <TextInput
        style={styles.input}
        placeholder="Card Number"
        placeholderTextColor="#aaa"
        keyboardType="number-pad"
        value={cardNumber}
        onChangeText={setCardNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        placeholderTextColor="#aaa"
        keyboardType="number-pad"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />

      <TextInput
        style={styles.input}
        placeholder="CVV"
        placeholderTextColor="#aaa"
        keyboardType="number-pad"
        value={cvv}
        onChangeText={setCVV}
        secureTextEntry={true}
      />

      <Button title="Pay Now" color="#3B82F6" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#1A1A1A',
    color: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
});

export default PaymentScreen;


Contact us logic & Design
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const ContactUsScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (name && email && message) {
      // Simulate sending a message
      Alert.alert("Thank You", "Your message has been sent successfully!");
      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
    } else {
      Alert.alert("Error", "Please fill all the fields");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      
      {/* Contact Information */}
      <View style={styles.contactInfo}>
        <Text style={styles.contactText}>Email: empowerPro@rsa.org</Text>
        <Text style={styles.contactText}>Telephone: +27 10 219 3456</Text>
        <Text style={styles.contactText}>Address line 1: Parktown Office, 16 Victoria Avenue, Parktown, Johannesburg, 2193</Text>
        
        <Text style={styles.contactText}>Telephone: +27 10 343 6787</Text>
        <Text style={styles.contactText}>Address line 2: Kensington Office, 63 Roberts Avenue, Kensington, Johannesburg, 2101</Text>
        
        <Text style={styles.contactText}>Telephone: +27 10 266 9809</Text>
        <Text style={styles.contactText}>Address line 3: Mayfair Office, 102 Central Road, Mayfair, Johannesburg, 2108</Text>
      </View>

      {/* Contact Form */}
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={[styles.input, { height: 120 }]}
        placeholder="Your Message"
        placeholderTextColor="#aaa"
        value={message}
        onChangeText={setMessage}
        multiline={true}
      />

      <Button title="Submit" color="#3B82F6" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
  },
  contactInfo: {
    backgroundColor: '#1A1A1A',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  contactText: {

