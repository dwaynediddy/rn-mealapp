import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import CatagoriesScreen from '../screens/CatagoriesScreen'
import CatagoryMeal from '../screens/CatagoryMeal'
import MealDetailScreen from '../screens/MealDetailScreen'

const Stack = createStackNavigator()

const MealsNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Catagories"
                    component={CatagoriesScreen}
                    options={{ title: 'Catagories' }}
                    />
                <Stack.Screen
                    name="Catagory"
                    component={CatagoryMeal}
                    initialParams={{ title: 'me' }}
                    />
                <Stack.Screen
                    name="Meals"
                    component={MealDetailScreen}
                    initialParams={{ title: 'Meal Details' }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MealsNavigation