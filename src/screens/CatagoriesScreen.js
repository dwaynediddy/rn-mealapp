import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'

import { CATEGORIES } from '../data/Dummy-Data'

const renderGridItem = itemData => {
    return <View style={styles.screen}><Text>{itemData.item.title}</Text></View>
}

const CatagoriesScreen = () => {
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
    }
})
