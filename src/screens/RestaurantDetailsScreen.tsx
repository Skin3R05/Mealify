import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ListRenderItem,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

type RestaurantDetailsParamList = {
  RestaurantDetailsScreen: {
    restaurant: {
      id: string;
      name: string;
      tags: string;
      stars: string;
      time: string;
      image: any;
    };
  };
};

const MENU_ITEMS = [
  {
    id: '1',
    name: 'Margherita Pizza',
    price: '$12.99',
    image: require('../assets/images/pizza.webp'),
    desc: 'Classic cheese & tomato with basil.',
  },
  {
    id: '2',
    name: 'Pepperoni Feast',
    price: '$14.99',
    image: require('../assets/images/falafel.webp'),
    desc: 'Loaded with double pepperoni & cheese.',
  },
  {
    id: '3',
    name: 'Veggie Delight',
    price: '$11.49',
    image: require('../assets/images/burger.webp'),
    desc: 'Fresh veggies with mozzarella & herbs.',
  },
];

const RestaurantDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RestaurantDetailsParamList, 'RestaurantDetailsScreen'>>();
  const { restaurant } = route.params;

  const renderMenuItem: ListRenderItem<typeof MENU_ITEMS[0]> = ({ item }) => (
    <View style={styles.menuCard}>
      <Image source={item.image} style={styles.menuImage} />
      <View style={styles.menuInfo}>
        <Text style={styles.menuName}>{item.name}</Text>
        <Text style={styles.menuDesc}>{item.desc}</Text>
        <View style={styles.menuBottom}>
          <Text style={styles.menuPrice}>{item.price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Banner Image */}
      <View style={styles.bannerContainer}>
        <Image source={restaurant.image} style={styles.bannerImage} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Restaurant Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.tags}>{restaurant.tags}</Text>

        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>{restaurant.stars}</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="time" size={16} color="#2B5E3D" />
            <Text style={styles.detailText}>{restaurant.time}</Text>
          </View>
        </View>
      </View>

      {/* Menu List */}
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={renderMenuItem}
        contentContainerStyle={styles.menuList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;

// ===========================
// Styles
// ===========================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2F9E0',
  },
  bannerContainer: {
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 220,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    padding: 6,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1A482F',
  },
  tags: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  detailsRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  detailText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#2B5E3D',
  },
  menuList: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  menuCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  menuImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
  },
  menuInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  menuName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A482F',
  },
  menuDesc: {
    fontSize: 13,
    color: '#666',
    marginVertical: 4,
  },
  menuBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuPrice: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2B5E3D',
  },
  addButton: {
    backgroundColor: '#2B5E3D',
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  addText: {
    color: '#fff',
    fontWeight: '600',
  },
});
