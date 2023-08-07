import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Pages
import Home, { options as homeOptions } from "./home";
import Settings, { options as settingsOptions } from "./settings";
import SetupIntro, { options as SetupIntroOptions } from "./setup-intro";
import Setup1, { options as setup1Options } from "./setup-1";
import Setup2, { options as setup2Options } from "./setup-2";
import Setup3, { options as setup3Options } from "./setup-3";

export type ParamList = {
  Home: undefined;
  Settings: undefined;
  SetupIntro: undefined;
  Setup1: undefined;
  Setup2: undefined;
  Setup3: { firstPayCheckDate: string };
};

export const Stack = createNativeStackNavigator<ParamList>();

const Router: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} options={homeOptions} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="SetupIntro" component={SetupIntro} options={SetupIntroOptions} />
        <Stack.Screen name="Setup1" component={Setup1} options={setup1Options} />
        <Stack.Screen name="Setup2" component={Setup2} options={setup2Options} />
        <Stack.Screen name="Setup3" component={Setup3} options={setup3Options} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Settings" component={Settings} options={settingsOptions} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Router;
