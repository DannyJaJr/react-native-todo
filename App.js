
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Today tasks */}
      <View style={styles.taskwrapper}>
        <Text style={styles.sectionTitle}>Today's task for</Text>

        <View styles={styles.items}>
          {/* This is where the task will go */}
          <Task />
        </View>


      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  taskwrapper: {
    paddingTop:80,
    paddingHorizontal: 20, 
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {},
  
});
