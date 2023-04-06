import { useState } from "react";
import { Feather } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../context/auth";
import { Stack } from "expo-router";

export default function SignIn() {
  const { signIn } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (

    <View className="justify-between bg-blue-400">
      {/* <Text onPress={() => signIn()}>Sign In</Text> */}
      <Stack.Screen options={{ headerShown: false }} />
      <View className="pb-10 items-center justify-end h-1/2">
        <Text className="text-3xl text-white">Войти в аккаунт</Text>
      </View>
      <View className="h-1/2 pt-16 bg-white rounded-tl-[40px]">
        <View className="mx-6">
          <Text className="font-semibold text-gray-300">Имя пользователя</Text>
          <View className="justify-between flex-row p-3 mt-1 border-2 rounded-md border-gray-300">
            <TextInput
              className="flex-1 font-semibold text-lg text-gray-400"
              textContentType="username"
              value={username}
              onChangeText={s => setUsername(s)}
            />
            <Feather name="user" size={24} color="#CCC" />
          </View>
        </View>
        <View className="mx-6 mt-4">
          <Text className="font-semibold text-gray-300">Пароль</Text>
          <View className="justify-between flex-row p-3 mt-1 border-2 rounded-md border-gray-300">
            <TextInput
              className="flex-1 font-semibold text-lg transition text-gray-400"
              value={password}
              onChangeText={s => setPassword(s)}
              secureTextEntry
            />
            <Feather name="lock" size={24} color="#CCC" />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => signIn()}
          className="py-5 mx-6 mt-4 items-center bg-blue-400 active:bg-blue-500 rounded-md"
          activeOpacity={2}
        >
          <Text className="text-lg text-white">Войти</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
