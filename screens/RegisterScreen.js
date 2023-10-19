import {
  View,
  Text,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons,Ionicons,Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
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
            Register
          </Text>
          <Text style={{ fontSize: 19, marginTop: 8, fontWeight: '600' }}>
            Create a New Account
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
                marginVertical: 20,
              }}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="phone" size={30} color="black" />
            <TextInput
              placeholder="Phone Number"
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholderTextColor="black"
              style={{
                borderBottomWidth: 1,
                fontSize: phone ? 18 : 18,
                borderBottomColor: 'gray',
                marginLeft: 13,
                width: 300,
                marginVertical: 10,
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
              Register
            </Text>
          </Pressable>

          <Pressable
            style={{ marginTop: 15 }}
            onPress={() => navigation.goBack()}
          >
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                fontWeight: '500',
                color: 'gray',
              }}
            >
              Already have a account? Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;
