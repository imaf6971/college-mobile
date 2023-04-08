import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';
// import { useAuth } from '../../context/auth'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Index() {
  // const { signOut } = useAuth();
  const insets = useSafeAreaInsets();

  const today = new Date();
  const currentMonth = Intl.DateTimeFormat(undefined, {
    month: 'long'
  }).format(today);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }} >
      <Text className="ml-4 text-neutral-700 mt-4 font-semibold text-2xl">
        Добро пожаловать!
      </Text>
      <View className="items-center my-4 mx-4 bg-white rounded-lg">
        <View className="items-center py-4 w-full border-b border-neutral-300">
          <Text className="font-medium text-xl text-neutral-700">
            Ближайшие мероприятия
          </Text>
        </View>
        <View className='w-full py-4 flex-row justify-around items-center'>
          <Feather name='chevron-left' size={24} color="#404040" />
          <Text className='font-semibold text-neutral-700 text-lg'>{capitalize(currentMonth)}</Text>
          <Feather name='chevron-right' size={24} color="#404040" />
        </View>
      </View>
    </View >
  )
}
