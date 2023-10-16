import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const HomeScreen = () => {
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

  return (
    <SafeAreaView style={{ marginTop: 30 }}>
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
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
