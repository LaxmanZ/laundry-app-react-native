import { View, Text } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderScreen = () => {
  // console.log('OrderScreen component rendered');
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 40 }}>
      <LottieView
        source={require('../assets/thumbs.json')}
        style={{
          width: 300,
          height: 360,
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 40,
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <Text
        style={{
          fontSize: 20,
          color: 'orange',
          fontWeight: '600',
          textAlign: 'center',
        }}
      >
        Your Order Has been Placed
      </Text>

      <LottieView
        source={require('../assets/sparkle.json')}
        style={{
          height: 300,
          position: 'absolute',
          top: 50,
          width: 300,
          alignSelf: 'center',
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <Pressable
        onPress={() => navigation.replace('Home')}
        style={{
          marginTop: 25,
          backgroundColor: '#5d8cae',
          width: 120,
          justifyContent: 'center',
          alignSelf: 'center',
          paddingVertical: 10,
          borderRadius: 7,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            textAlign: 'center',
            color: 'white',
          }}
        >
          Home Page
        </Text>
      </Pressable>
    </View>
  );
};

export default OrderScreen;
