import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, Text, View } from 'react-native'

import CatagoriesScreen from "../screens/CatagoriesScreen"
import MealDetailScreen from "../screens/MealDetailScreen"

import DrawNavigation from './DrawNavigation'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Meals" component={CatagoriesScreen} />
                <Tab.Screen name="Details" component={MealDetailScreen} />
            </Tab.Navigator>
        </NavigationContainer>
        
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})
