import { View, Text } from 'react-native';
import React from 'react';
import { Pressable } from 'react-native';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('Login');
      })
      .catch((err) => console.log(err));
  };
  return (
    <View
      style={{
        marginTop: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Pressable style={{ marginVertical: 10 }}>
        <Text>Welcome {user.email}</Text>
      </Pressable>
      <Pressable onPress={signOutUser}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
