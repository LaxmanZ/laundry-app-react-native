import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import DressItem from '../components/DressItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../ProductReducer';

const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    'We are Loading Your Location'
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        'Location Services not Enabled',
        'Please Enable the Location Services',
        [
          {
            text: 'cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('Ok Pressed') },
        ],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission Denied',
        'Allow the App to use the Location Services',
        [
          {
            text: 'cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('Ok Pressed') },
        ],
        { cancelable: false }
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();
    // console.log(coords);

    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      //   console.log(response);
      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };

  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product.length > 0) return;

    const fetchProducts = () => {
      services.map((service) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);
  // console.log(product);

  const services = [
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/4643/4643574.png',
      name: 'Shirt',
      quantity: 0,
      price: 10,
    },
    {
      id: '11',
      image: 'https://cdn-icons-png.flaticon.com/128/892/892458.png',
      name: 'T-shirt',
      quantity: 0,
      price: 10,
    },
    {
      id: '12',
      image: 'https://cdn-icons-png.flaticon.com/128/9609/9609161.png',
      name: 'Dresses',
      quantity: 0,
      price: 10,
    },
    {
      id: '13',
      image: 'https://cdn-icons-png.flaticon.com/128/599/599388.png',
      name: 'Jeans',
      quantity: 0,
      price: 10,
    },
    {
      id: '14',
      image: 'https://cdn-icons-png.flaticon.com/128/9431/9431166.png',
      name: 'Sweater',
      quantity: 0,
      price: 10,
    },
    {
      id: '15',
      image: 'https://cdn-icons-png.flaticon.com/128/3345/3345397.png',
      name: 'Shorts',
      quantity: 0,
      price: 10,
    },
    {
      id: '16',
      image: 'https://cdn-icons-png.flaticon.com/128/293/293241.png',
      name: 'Sleeveless',
      quantity: 0,
      price: 10,
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: '#F0F0F0', flex: 1, marginTop: 35 }}>
      {/* Location and Profile  */}
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <MaterialIcons name="location-on" size={30} color="#fd5c63" />
        <View>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Home</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>

        <Pressable style={{ marginLeft: 'auto', marginRight: 8 }}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            resizeMode="contain"
            source={{
              uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d093e1a-2a6e-4be7-906d-bf94a43b4b41/df9vv8k-9886f892-c6fa-4381-851c-f08f90c024f8.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_profile_pic_by_allsundayjelly_df9vv8k-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI1MiIsInBhdGgiOiJcL2ZcLzhkMDkzZTFhLTJhNmUtNGJlNy05MDZkLWJmOTRhNDNiNGI0MVwvZGY5dnY4ay05ODg2Zjg5Mi1jNmZhLTQzODEtODUxYy1mMDhmOTBjMDI0ZjguanBnIiwid2lkdGgiOiI8PTEyNTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-QNsH87cAORlO_3LUV0XT32pyp5zMWT4ZgTeoLt_qnk',
            }}
          />
        </Pressable>
      </View>

      {/* Search Bar  */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 8,
          margin: 10,
          borderWidth: 0.8,
          borderColor: '#C0C0C0',
          borderRadius: 7,
        }}
      >
        <TextInput placeholder="Search For Items" />
        <Feather name="search" size={24} color="#fd5c63" />
      </View>

      {/* Image Carousel  */}
      <Carousel />

      {/* Services  */}
      <Services />

      {/* Rendering All The Products   */}
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            paddingHorizontal: 10,
            marginBottom: 7,
          }}
        >
          Products Available
        </Text>

        {product.map((item, index) => (
          <DressItem item={item} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
