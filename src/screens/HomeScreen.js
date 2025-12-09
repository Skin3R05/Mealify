import { 
  View, 
  Text, 
  StyleSheet, 
  Image,
} from 'react-native'
import SearchBar from '../components/SearchBar.js';
import CategoryCard from '../components/CategoryCard.js';
import React, { useMemo, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import RestaurantCard from '../components/RestaurantCard.js';


// ===========================
// Main code
// ===========================

const CATEGORIES = [
  { id: '1', label: 'Pizza', icon: 'pizza', bg: '#FFF6F6', textColor: '#B1392A', iconColor: '#B1392A', activeBg: '#B1392A', activeText: '#fff', activeIconColor: '#fff' },
  { id: '2', label: 'Burgers', icon: 'fast-food', bg: '#FFF8E6', textColor: '#B36B00', iconColor: '#B36B00', activeBg: '#B36B00', activeText: '#fff', activeIconColor: '#fff' },
  { id: '3', label: 'Vegan', icon: 'leaf', bg: '#EFFCF1', textColor: '#1A7A3A', iconColor: '#1A7A3A', activeBg: '#1A7A3A', activeText: '#fff', activeIconColor: '#fff' },
  { id: '4', label: 'Desserts', icon: 'ice-cream', bg: '#F8F0FF', textColor: '#8A41B3', iconColor: '#8A41B3', activeBg: '#8A41B3', activeText: '#fff', activeIconColor: '#fff' },
  { id: '5', label: 'Sushi', icon: 'fish', bg: '#EEF8FF', textColor: '#006B9C', iconColor: '#006B9C', activeBg: '#006B9C', activeText: '#fff', activeIconColor: '#fff' },
];
const RESTAURANTS = [
  {
    id: '1',
    name: 'Pizza Palace',
    tags: 'Italian, Fast Food',
    stars: '⭐ 4.8',
    time: '25 min',
    image: require('../assets/images/restaurant1.webp'),
  },
  {
    id: '2',
    name: 'Burger House',
    tags: 'American, Burgers',
    stars: '⭐ 4.6',
    time: '30 min',
    image: require('../assets/images/restaurant3.webp'),
  },
  {
    id: '3',
    name: 'Falafel Bistro',
    tags: 'Vegan, Mediterranean',
    stars: '⭐ 4.9',
    time: '20 min',
    image: require('../assets/images/restaurant2.webp'),
  },
];

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState ('1');
  const onSelectCategory = (id) => {
    setActiveCategory(id);
    // TODO: filter restaurants based on selected category
  }
  const renderCategory = ({ item }) => (
    <CategoryCard item = {item} active = {item.id === activeCategory} onPress = {onSelectCategory} />
  )
  const [query, setQuery] = useState(''); // for Search Bar
  const filteredRestaurants = useMemo(() => {
    const lowerQuery = query.toLowerCase();

    return RESTAURANTS.filter((restaurant) => {
      const nameMatch = restaurant.name.toLowerCase().includes(lowerQuery);
      const tagsMatch = restaurant.tags.toLowerCase().includes(lowerQuery);
      return nameMatch || tagsMatch;
    });
  }, [query]);

  return (
    <View style = {styles.container}>
  
      <View style = {styles.header}>
        <View>
          <Text style = {styles.greeting}>Hi, Saba  👋</Text>
          <Text style = {styles.subtitle}>Find your favorite meal</Text>
        </View>
        <Image source={require('../assets/images/avatar.jpg')} style = {styles.avatar}></Image>        
      </View>

      {/* Search Bar */}
      <SearchBar placeholder = {'Search'} onChangeText={setQuery} value={query} />

      <View style = {styles.categories}>
        <Text style = {styles.categoriesTitle}>Categories</Text>
      </View>
      <FlatList
        data = {CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem = {renderCategory}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesList}
        snapToAlignment="start"
        decelerationRate="fast"
      />

      <View style = {styles.categories}>
        <Text style = {styles.categoriesTitle}>Restaurants</Text>
      </View>
      <FlatList
        data = {filteredRestaurants}
        keyExtractor={(item) => item.id}
        renderItem = {({ item }) => (
          <RestaurantCard item = {item}/>
        )}
        vertical
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
      />



    </View>
  )
};



// ===========================
// Styles
// ===========================

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E2F9E0',
        paddingHorizontal: 25,
        paddingTop: 80,
    },

    // Header section
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    greeting: {
        fontSize: 34,
        fontWeight: '600',
        color: '#1A482F',
    },
    subtitle: {
        fontSize: 16,
        color: '#2B5E3D',
        marginTop: 5,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: '#2B5E3D',
    },

    // Categories section
    categories: {
      width: 'auto',
      height: 'auto',
      marginTop: 10,
    },
    categoriesTitle: {
      fontSize: 22,
      fontWeight: '500',
      color: '#1A482F',
      marginBottom: 15,
    },
});

export default HomeScreen