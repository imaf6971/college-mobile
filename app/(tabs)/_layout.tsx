import { Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons';

const iconMap = {
  'index': 'home',
  'profile': 'user',
}

export default function TabsLayout() {
  return <Tabs screenOptions={({ route }) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#60A5FA',
    tabBarIcon: ({ color, size }) => {
      const iconName = iconMap[route.name];
      return <AntDesign name={iconName} color={color} size={size} />
    }
  })} />
}
