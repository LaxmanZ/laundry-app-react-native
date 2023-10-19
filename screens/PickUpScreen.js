import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const PickUpScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState([]);
  const [dalevary, setDalevary] = useState([]);
  const navigation = useNavigation();
  const deliveryTime = [
    {
      id: '0',
      name: '2-3 Days',
    },
    {
      id: '1',
      name: '3-4 Days',
    },
    {
      id: '2',
      name: '4-5 Days',
    },
    {
      id: '3',
      name: '5-6 Days',
    },
    {
      id: '4',
      name: 'Tommorrow',
    },
  ];

  const times = [
    {
      id: '0',
      time: '11:00 PM',
    },
    {
      id: '1',
      time: '12:00 PM',
    },
    {
      id: '2',
      time: '1:00 PM',
    },
    {
      id: '2',
      time: '2:00 PM',
    },
    {
      id: '4',
      time: '3:00 PM',
    },
    {
      id: '5',
      time: '4:00 PM',
    },
  ];

  const proceedToCart = () => {
    if (!selectedDate || !selectedTime || !dalevary) {
      Alert.alert(
        'Empty or Invalid',
        'Please Select all the Fields',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancle Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('Ok Pressed') },
        ],
        { cancelable: false }
      );
    }

    if (selectedDate && selectedTime && dalevary) {
      navigation.replace('Cart', {
        pickUpDate: selectedDate,
        selectedTime: selectedTime,
        no_Of_days: dalevary,
      });
    }
  };

  return (
    <>
      <SafeAreaView style={{ marginTop: 40 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: 8,
          }}
        >
          <Text
            style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}
          >
            Enter Address
          </Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="#fd5c63" />
          </Pressable>
        </View>
        <TextInput
          style={{
            padding: 40,
            borderColor: 'gray',
            borderWidth: 0.7,
            paddingVertical: 50,
            borderRadius: 8,
            margin: 10,
          }}
        />
        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>
          Pick Up Date
        </Text>

        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date('2023-02-21')}
          endDate={new Date('2023-02-28')}
          initialSelectedDate={new Date('2020-08-22')}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />

        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>
          Select Time
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
              style={
                selectedTime.includes(item.time)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 12,
                      borderColor: 'red',
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 12,
                      borderColor: 'gray',
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>
          Delivery Date
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime.map((item, i) => (
            <Pressable
              key={i}
              onPress={() => setDalevary(item.name)}
              style={
                dalevary.includes(item.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 12,
                      borderColor: 'red',
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 12,
                      borderColor: 'gray',
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </SafeAreaView>

      {total === 0 ? null : (
        <Pressable
          style={{
            marginTop: 'auto',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#088f8f',
            padding: 10,
            // marginBottom: 10,
            margin: 15,
            borderRadius: 7,
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>
              {cart.length} items | total $ {total}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: 'white',
                marginVertical: 6,
              }}
            >
              Extra charges might Apply
            </Text>
          </View>

          <Pressable onPress={proceedToCart}>
            <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>
              Proceed To Cart
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default PickUpScreen;

const styles = StyleSheet.create({});
