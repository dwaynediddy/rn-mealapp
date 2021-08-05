import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import CategoriesScreen from "../screens/CategoriesScreen"
import MealDetailScreen from "../screens/MealDetailScreen"

const Drawer = createDrawerNavigator()

const DrawNavigation = () => {
    // navigation.toggleDrawer()
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Meals" component={CategoriesScreen} />
                <Drawer.Screen name="Details" component={MealDetailScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawNavigation

const styles = StyleSheet.create({})
