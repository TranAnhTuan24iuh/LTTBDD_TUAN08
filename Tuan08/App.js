import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Layout1 from './component/layout1/Layout1';
import Layout2 from './component/layout2/Layout2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext, useContext, useState } from 'react';
const Stack = createNativeStackNavigator();
export const Context = createContext();

export default function App() {
  return (

    // <Layout1/>
    <Layout2/>
    // <Text>adsadsa</Text>
  );
}

