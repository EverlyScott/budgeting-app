import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ParamList } from "./router";
import { Button, ScrollView, Text, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { appConfigAtom, dbAtom } from "../src/atoms";
import setPartialState from "../src/utils/setPartialState";

const Setup3: React.FC<NativeStackScreenProps<ParamList, "Setup3">> = ({ navigation, route }) => {
  const [db, setDb] = useRecoilState(dbAtom);
  const [payCheckAmount, setPayCheckAmount] = useState<string>();

  useEffect(() => {
    if (db?.transactions?.length > 0) {
      navigateNext();
    }
  }, [db]);

  const handleContinue = () => {
    setPartialState(db, setDb, {
      transactions: [
        ...db.transactions,
        {
          isPayCheck: true,
          name: "Paycheck",
          amount: parseFloat(payCheckAmount.replace("$", "")),
          date: route.params.firstPayCheckDate,
        },
      ],
    });
    // navigateNext();
  };

  const navigateNext = () => {
    navigation.popToTop();
  };

  const handleAmountChange = (value: string) => {
    if (value === "$") {
      setPayCheckAmount("");
    } else if (value !== "" && !value.startsWith("$")) {
      setPayCheckAmount("$" + value);
    } else {
      setPayCheckAmount(value);
    }
  };

  return (
    <ScrollView keyboardDismissMode="interactive" contentContainerStyle={{ alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 16, marginBottom: 8, textAlign: "center" }}>
        How much money do you currently have in your account?
      </Text>
      <TextInput
        value={payCheckAmount}
        onChangeText={handleAmountChange}
        keyboardType="decimal-pad"
        placeholder="$123.45"
        style={{
          textAlign: "center",
          padding: 4,
          height: 40,
          minWidth: 80,
          borderRadius: 10,
          backgroundColor: "#ffffff",
        }}
      />
      <Button title="Continue" onPress={handleContinue} />
    </ScrollView>
  );
};

export default Setup3;

export const options: NativeStackNavigationOptions = {
  headerTitle: "Setup",
  headerBackTitle: "Back",
};
