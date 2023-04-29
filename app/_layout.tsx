import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { Provider } from "../context/auth";

export default function Root() {
  const [isLoaded] = useFonts({
    "Inter": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  })

  return (
    <>
      {!isLoaded ? (<SplashScreen />) : (
        <Provider>
          <Stack screenOptions={{
            animation: 'slide_from_bottom',
            headerShown: false
          }} />
        </Provider>
      )}
    </>
  );
}
