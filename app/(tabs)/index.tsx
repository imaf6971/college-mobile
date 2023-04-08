import { View, Text } from 'react-native'
// import { useAuth } from '../../context/auth'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Index() {
  // const { signOut } = useAuth();
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }}>
      <Text className="ml-4 text-neutral-700 mt-4 font-semibold text-2xl">
        Добро пожаловать!
      </Text>
      <View className="items-center my-4 mx-4 bg-white rounded-lg">
        <View className="items-center py-4 w-full border-b border-neutral-300">
          <Text className="font-medium text-xl text-neutral-700">
            Ближайшие мероприятия
          </Text>
        </View>
      </View>
    </View>
  )
}
