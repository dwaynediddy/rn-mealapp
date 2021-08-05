import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMeal from '../screens/CategoryMeal'
import MealDetailScreen from '../screens/MealDetailScreen'

const Stack = createStackNavigator()

const MealsNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                    options={{ title: 'Categories' }}
                    />
                <Stack.Screen
                    name="Category"
                    component={CategoryMeal}
                    />
                <Stack.Screen
                    name="Details"
                    component={MealDetailScreen}
                    // initialParams={{ title: 'Meal Details' }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MealsNavigation