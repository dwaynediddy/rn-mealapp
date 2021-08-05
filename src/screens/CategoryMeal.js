import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { CATEGORIES } from '../data/Dummy-Data'


const CategoryMeal = ({ route, navigation }) => {
    
    return (
        <View style={styles.screen}>
            <Text>{route.params.title}</Text>
                <Button
                    title='Details'
                    onPress={() => navigation.navigate('Details',{
                        categoryId: route.params.catagory
                    })}
                />
        </View>
        
    )
}

export default CategoryMeal

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})