import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CatagoryMeal = () => {
    return (
        <View style={styles.screen}>
            <Text>'Catagory" Meals</Text>
        </View>
    )
}

export default CatagoryMeal

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
