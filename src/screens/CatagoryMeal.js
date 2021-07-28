import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CatagoryMeal = ({ navigation }) => {
    return (
        
        <View style={styles.screen}>
                <Text>'Catagory' Meals</Text>
                    <Button
                        title='Details'
                        onPress={() => navigation.navigate('Details')}
                    />
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
