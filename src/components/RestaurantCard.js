import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'


// ===========================
// Main code
// ===========================

const RestaurantCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
        accessibilityRole='button'
        accessibilityLabel={`Restaurant ${item.name}`}
        onPress={() => onPress(item.id)}
        style = {styles.card}
        activeOpacity={0.9}
    >
        <Image source={item.image} style = {styles.img}/>
        <View style = {styles.info}>
            <Text style = {styles.name}>{item.name}</Text>
            <Text style = {styles.tags}>{item.tags}</Text>
            <View style = {styles.details}>
                <Text style = {styles.stars}>{item.stars}</Text>
                <Text style = {styles.time}>{item.time}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard



// ===========================
// Styles
// ===========================

const styles = StyleSheet.create ({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 14,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: '0.08',
        shadowRadius: 6,
        elevation: 3,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 12,
        marginRight: 15,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#2B5E3D',
    },
    info: {},
    name: {
        fontSize: 24,
        fontWeight: '400',
        color: '#15432aff',
        marginBottom: 6,
        marginTop: 2,
    },
    tags: {
        color: '#444',
        marginBottom: 22,
        fontSize: 15,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    stars: {
        color: '#444',
    },
    time: {
        marginLeft: 115,
        color: '#444',
    },
})