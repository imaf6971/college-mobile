import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Calendar, CalendarList, LocaleConfig } from 'react-native-calendars'
import { Entypo } from '@expo/vector-icons';

LocaleConfig.locales['ru'] = {
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Maй',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  monthNamesShort: ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль.', 'Авг.', 'Сент.', 'Окт.', 'Ноя.', 'Дек.'],
  dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  dayNamesShort: ['Пн', 'Вт', 'Cр', 'Чт', 'Пт', 'Cб', 'Вс'],
  today: "Сегодня"
}

LocaleConfig.defaultLocale = 'ru'

export default function Index() {
  // const {signOut} = useAuth();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top + 18,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left + 20,
        paddingRight: insets.right + 20,
      }}>
      <Text className="font-inter font-bold color-neutral-700 text-3xl">
        Добро пожаловать!
      </Text>
      <View className="bg-neutral-50 rounded-lg">
        <View className="py-4 border-b border-neutral-300">
          <Text className="font-inter-md color-neutral-700 text-xl text-center">Ближайшие мероприятия</Text>
        </View>
        <Calendar
          theme={{
            textMonthFontFamily: "Inter-SemiBold",
            textMonthFontSize: 20,
            textDayFontFamily: "Inter-SemiBold",
            textDayFontSize: 14,
            textDayHeaderFontFamily: "Inter-SemiBold",
          }}
          renderArrow={(dir) => {
            if (dir === 'left') {
              return <Entypo name="chevron-thin-left" size={18} />
            }
            if (dir === 'right') {
              return <Entypo name="chevron-thin-right" size={18} />
            }
          }}
        />
      </View>

    </View >
  )
}
