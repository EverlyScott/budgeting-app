import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ParamList } from "./router";
import { Button, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { appConfigAtom } from "../src/atoms";
import setPartialState from "../src/utils/setPartialState";

const Setup1: React.FC<NativeStackScreenProps<ParamList, "Setup1">> = ({ navigation }) => {
  const [appConfig, setAppConfig] = useRecoilState(appConfigAtom);
  const [interval, setInterval] = useState(appConfig?.payDuration?.interval || 2);
  const [timePeriod, setTimePeriod] = useState(appConfig?.payDuration?.timePeriod || "weeks");

  useEffect(() => {
    if (appConfig?.payDuration?.interval && appConfig?.payDuration?.timePeriod) {
      navigateNext();
    }
  }, [appConfig]);

  const handleContinue = () => {
    setPartialState(appConfig, setAppConfig, {
      payDuration: {
        interval,
        timePeriod,
      },
    });
    // navigateNext();
  };

  const navigateNext = () => {
    navigation.navigate("Setup2");
  };

  const intervalResults = {
    days: (
      <Picker
        selectedValue={interval}
        onValueChange={(value) => {
          setInterval(value);
        }}
      >
        <Picker.Item key={1} label="1" value={1} />
        <Picker.Item key={2} label="2" value={2} />
        <Picker.Item key={3} label="3" value={3} />
        <Picker.Item key={4} label="4" value={4} />
        <Picker.Item key={5} label="5" value={5} />
        <Picker.Item key={6} label="6" value={6} />
        <Picker.Item key={7} label="7" value={7} />
        <Picker.Item key={8} label="8" value={8} />
        <Picker.Item key={9} label="9" value={9} />
        <Picker.Item key={10} label="10" value={10} />
        <Picker.Item key={11} label="11" value={11} />
        <Picker.Item key={12} label="12" value={12} />
        <Picker.Item key={13} label="13" value={13} />
        <Picker.Item key={14} label="14" value={14} />
        <Picker.Item key={15} label="15" value={15} />
        <Picker.Item key={16} label="16" value={16} />
        <Picker.Item key={17} label="17" value={17} />
        <Picker.Item key={18} label="18" value={18} />
        <Picker.Item key={19} label="19" value={19} />
        <Picker.Item key={20} label="20" value={20} />
        <Picker.Item key={21} label="21" value={21} />
        <Picker.Item key={22} label="22" value={22} />
        <Picker.Item key={23} label="23" value={23} />
        <Picker.Item key={24} label="24" value={24} />
        <Picker.Item key={25} label="25" value={25} />
        <Picker.Item key={26} label="26" value={26} />
        <Picker.Item key={27} label="27" value={27} />
        <Picker.Item key={28} label="28" value={28} />
        <Picker.Item key={29} label="29" value={29} />
        <Picker.Item key={30} label="30" value={30} />
        <Picker.Item key={31} label="31" value={31} />
      </Picker>
    ),
    weeks: (
      <Picker
        selectedValue={interval}
        onValueChange={(value) => {
          setInterval(value);
        }}
      >
        <Picker.Item key={1} label="1" value={1} />
        <Picker.Item key={2} label="2" value={2} />
        <Picker.Item key={3} label="3" value={3} />
        <Picker.Item key={4} label="4" value={4} />
      </Picker>
    ),
    months: (
      <Picker
        selectedValue={interval}
        onValueChange={(value) => {
          setInterval(value);
        }}
      >
        <Picker.Item key={1} label="1" value={1} />
        <Picker.Item key={2} label="2" value={2} />
        <Picker.Item key={3} label="3" value={3} />
        <Picker.Item key={4} label="4" value={4} />
        <Picker.Item key={5} label="5" value={5} />
        <Picker.Item key={6} label="6" value={6} />
        <Picker.Item key={7} label="7" value={7} />
        <Picker.Item key={8} label="8" value={8} />
        <Picker.Item key={9} label="9" value={9} />
        <Picker.Item key={10} label="10" value={10} />
        <Picker.Item key={11} label="11" value={11} />
        <Picker.Item key={12} label="12" value={12} />
      </Picker>
    ),
    years: (
      <Picker
        selectedValue={interval}
        onValueChange={(value) => {
          setInterval(value);
        }}
      >
        <Picker.Item key={1} label="1" value={1} />
        <Picker.Item key={2} label="2" value={2} />
        <Picker.Item key={3} label="3" value={3} />
        <Picker.Item key={4} label="4" value={4} />
        <Picker.Item key={5} label="5" value={5} />
        <Picker.Item key={6} label="6" value={6} />
        <Picker.Item key={7} label="7" value={7} />
        <Picker.Item key={8} label="8" value={8} />
        <Picker.Item key={9} label="9" value={9} />
        <Picker.Item key={10} label="10" value={10} />
      </Picker>
    ),
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 16 }}>
        How often do you get paid?
      </Text>
      <View style={{ display: "flex", flexDirection: "column" }}>
        {intervalResults[timePeriod]}
        {/* <Picker
          selectedValue={interval}
          onValueChange={(value) => {
            setInterval(value);
          }}
        >
          {intervalResults[timePeriod]}
        </Picker> */}
        <Picker
          selectedValue={timePeriod}
          onValueChange={(value) => {
            if (value === "weeks" && interval > 4) {
              setInterval(4);
            } else if (value === "months" && interval > 12) {
              setInterval(12);
            } else if (value === "years" && interval > 10) {
              setInterval(10);
            }
            setTimePeriod(value);
          }}
        >
          <Picker.Item key="days" label={`Day${interval === 1 ? "" : "s"}`} value="days" />
          <Picker.Item key="weeks" label={`Week${interval === 1 ? "" : "s"}`} value="weeks" />
          <Picker.Item key="months" label={`Month${interval === 1 ? "" : "s"}`} value="months" />
          <Picker.Item key="years" label={`Year${interval === 1 ? "" : "s"}`} value="years" />
        </Picker>
      </View>
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};

export default Setup1;

export const options: NativeStackNavigationOptions = {
  headerTitle: "Setup",
  headerBackTitle: "Back",
};
