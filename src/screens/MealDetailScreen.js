import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { CATEGORIES } from '../data/Dummy-Data'

const MealDetailScreen = ({ route }) => {

    const renderTitleItem = itemData => {
        return (
            <View style={styles.screen}>
                    <Text>{itemData.item.title}</Text>   
            </View>
            )
    }
    return (
        <FlatList 
        data={CATEGORIES} 
        renderItem={renderTitleItem} 
        // numColumns={2} 
        />
    )
}


export default MealDetailScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
