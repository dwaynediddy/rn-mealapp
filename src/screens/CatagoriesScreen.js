import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'

import { CATEGORIES } from '../data/Dummy-Data'


const CatagoriesScreen = ({ route, navigation }) => {
    const renderGridItem = itemData => {
        return (
            <TouchableOpacity 
            onPress={() => navigation.navigate('Catagory')}
            >
                <View style={styles.gridItem}>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
            )
    }
    return (
        <FlatList 
        // keyExtract={(item, index ) => id} needed in older versions of RN
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2} />
    )
}

export default CatagoriesScreen

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
