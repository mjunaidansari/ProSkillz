import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image source={item.img} alt='category img' style={{ marginVertical: 10, width: 65, height: 65 }} />
            <Text style={styles.txt}>{item.name}</Text>
        </View>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    container: {
        width: "48%",
        backgroundColor: "#F2F2F2",
        marginVertical: "2%",
        height: 150,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    txt: {
        fontSize: 15
    },

})