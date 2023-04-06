import { View, Text } from 'react-native'
import { useAuth } from '../context/auth'

export default function Index() {
  const { signOut } = useAuth();

  return (
    <View className="flex-1 items-center justify-center">
      <Text onPress={() => signOut()}>Sign Out</Text>
    </View>
  )
}
