import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ParamList } from "./router";
import { Button, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { appConfigAtom } from "../src/atoms";
import setPartialState from "../src/utils/setPartialState";
import DatePicker from "react-native-date-picker";

const Setup2: React.FC<NativeStackScreenProps<ParamList, "Setup2">> = ({ navigation }) => {
  const [appConfig, setAppConfig] = useRecoilState(appConfigAtom);
  const [firstPayCheckDate, setFirstPayCheckDate] = useState<Date>(new Date());

  useEffect(() => {
    if (appConfig.firstPayCheckDate) {
      navigateNext();
    }
  }, [appConfig]);

  const handleContinue = () => {
    setPartialState(appConfig, setAppConfig, {
      firstPayCheckDate: firstPayCheckDate.toISOString(),
    });
    // navigateNext();
  };

  const navigateNext = () => {
    navigation.navigate("Setup3", { firstPayCheckDate: firstPayCheckDate.toISOString() });
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 16, marginBottom: 8, textAlign: "center" }}>
        When did you get your last paycheck?
      </Text>
      <DatePicker date={firstPayCheckDate} onDateChange={setFirstPayCheckDate} mode="date" />
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};

export default Setup2;

export const options: NativeStackNavigationOptions = {
  headerTitle: "Setup",
  headerBackTitle: "Back",
};
