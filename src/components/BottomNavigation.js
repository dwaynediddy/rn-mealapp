import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, Text, View } from 'react-native'

import CatagoriesScreen from "../screens/CatagoriesScreen"
import MealDetailScreen from "../screens/MealDetailScreen"

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Meals" component={CatagoriesScreen} />
            <Tab.Screen name="Details" component={MealDetailScreen} />
        </Tab.Navigator>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})
