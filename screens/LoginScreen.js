import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 40,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 130,
          }}
        >
          <Text style={{ fontSize: 22, color: '#662d91', fontWeight: 'bold' }}>
            Sign In
          </Text>
          <Text style={{ fontSize: 19, marginTop: 8, fontWeight: '600' }}>
            Sign In to Your Account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={30}
              color="black"
            />
            <TextInput
              placeholder="Enter Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor="black"
              style={{
                borderBottomWidth: 1,
                fontSize: email ? 18 : 18,
                borderBottomColor: 'gray',
                marginLeft: 13,
                width: 300,
                marginVertical: 10,
              }}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="key-outline" size={30} color="black" />
            <TextInput
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="black"
              style={{
                borderBottomWidth: 1,
                fontSize: password ? 18 : 18,
                borderBottomColor: 'gray',
                marginLeft: 13,
                width: 300,
                marginVertical: 23,
              }}
            />
          </View>

          <Pressable
            style={{
              width: 150,
              backgroundColor: '#318ce7',
              padding: 12,
              borderRadius: 7,
              marginTop: 40,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Text style={{ fontSize: 19, color: 'white', textAlign: 'center' }}>
              Login{' '}
            </Text>
          </Pressable>

          <Pressable
            style={{ marginTop: 15 }}
            onPress={() => navigation.navigate('Register')}
          >
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                fontWeight: '500',
                color: 'gray',
              }}
            >
              Don't have an account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
