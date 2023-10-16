import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DressItem = ({ item }) => {
  return (
    <View>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f8f8f8',
          borderRadius: 8,
          padding: 10,
          margin: 14,
        }}
      >
        <View>
          <Image
            source={{ uri: item.image }}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text
            style={{
              width: 83,
              fontSize: 17,
              fontWeight: '500',
              marginBottom: 5,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ fontSize: 15, color: 'gray', width: 60 }}>
            ${item.price}
          </Text>
        </View>
        <Pressable style={{ width: 70 }}>
          <Text
            style={{
              borderColor: 'grey',
              borderWidth: 0.8,
              borderRadius: 5,
              marginVertical: 10,
              color: '#088f8f',
              textAlign: 'center',
              padding: 5,
              fontSize: 17,
              fontWeight: 'bold',
            }}
          >
            Add
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default DressItem;

const styles = StyleSheet.create({});
