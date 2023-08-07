import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Button, Text } from "react-native";
import { ParamList } from "./router";
import { useRecoilState } from "recoil";
import { appConfigAtom, dbAtom } from "../src/atoms";
import { useEffect } from "react";

let navigationProp: NativeStackNavigationProp<ParamList, "Home", undefined>;

const Home: React.FC<NativeStackScreenProps<ParamList, "Home">> = ({ navigation }) => {
  navigationProp = navigation;

  const [appConfig, setAppConfig] = useRecoilState(appConfigAtom);
  const [db, setDb] = useRecoilState(dbAtom);

  useEffect(() => {
    console.log(appConfig);
    console.log(db);
    if (!appConfig?.payDuration?.interval || !appConfig?.payDuration?.timePeriod) {
      navigation.navigate("SetupIntro");
    }
  }, [appConfig]);

  return <></>;
};

export default Home;

export const options: NativeStackNavigationOptions = {
  headerRight: () => {
    return (
      <Button
        title="Settings"
        onPress={() => {
          if (navigationProp) {
            navigationProp.navigate("Settings");
          } else {
            alert("Failed to navigate! Please try again.");
          }
        }}
      />
    );
  },
};
