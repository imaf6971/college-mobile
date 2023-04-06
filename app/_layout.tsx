import { Slot, Stack } from "expo-router";
import { Provider } from "../context/auth";

export default function Root() {
  return (
    <Provider>
      <Stack screenOptions={{ animation: 'slide_from_bottom' }} />
    </Provider>
  );
}
