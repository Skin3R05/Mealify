import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

type CategoryItem = {
  id: string;
  label: string;
  icon: string;
  bg?: string;
  textColor?: string;
  iconColor?: string;
  activeBg?: string;
  activeText?: string;
  activeIconColor?: string;
};

type CategoryCardProps = {
    item: CategoryItem;
    active: boolean;
    onPress: (id: string) => void
}

// ===========================
// Main code
// ===========================


const CategoryCard: React.FC<CategoryCardProps> = ({ item, active, onPress }) => {
    const containerStyle = [
        styles.card,
        { backgroundColor: active ? item.activeBg || '#2B5E3D' : item.bg || '#FFF'},
        active ? styles.cardActive : styles.cardInactive
    ];
    const textStyle = [
        styles.label,
        { color: active ? (item.activeText || '#fff') : (item.textColor || '#333') },
    ];
    const iconColor = active ? (item.activeIconColor || '#fff') : (item.iconColor || '#555');

  return (
    <TouchableOpacity
        accessibilityRole='button'
        accessibilityLabel={`Category ${item.label}`}
        onPress = {() => onPress(item.id)}
        style = {containerStyle}
        activeOpacity={0.85}
    >
        <View style = {styles.iconWrapper}>
            <Ionicons name = {item.icon as any} size = {30} color = {iconColor} />
        </View>
        <Text style = {textStyle} numberOfLines={1}>
            {item.label}
        </Text>
    </TouchableOpacity>
  )
};

export default CategoryCard


// ===========================
// Styles
// ===========================

const styles = StyleSheet.create ({
    card: {
        width: 90,
        height: 90,
        borderRadius: 16,
        marginRight: 12,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
        marginBottom: 50,
    },
    cardActive: {
    },
    cardInactive: {
    },
    iconWrapper: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
    },
})