import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CatagoriesScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Meal Catagories</Text>
        </View>
    )
}

export default CatagoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
