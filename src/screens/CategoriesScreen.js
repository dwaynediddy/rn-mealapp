import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'

import CATEGORIES from '../data/Dummy-Data'


const CategoriesScreen = ({ navigation }) => {
    const renderGridItem = itemData => {
        return (
            <TouchableOpacity 
                style={styles.gridItem}
                onPress={() => {
                    navigation.navigate('Category', {
                        categoryId: itemData.item.id,
                        title: itemData.item.title,
                    })
      }}
            >
                <View style={styles.gridItem}>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
            )
    }
    return (
        <FlatList 
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2} />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    }
})
