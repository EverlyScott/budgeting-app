import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamList } from "./router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, View } from "react-native";

const SetupIntro: React.FC<NativeStackScreenProps<ParamList, "SetupIntro">> = ({ navigation }) => {
  const handleContinue = () => {
    navigation.navigate("Setup1");
  };

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 40, marginBottom: 8, textAlign: "center" }}>Welcome!</Text>
        <Text style={{ textAlign: "center" }}>Lets get everything setup for you.</Text>
      </View>
      <View style={{ justifyContent: "flex-end" }}>
        <Button title="Continue" onPress={handleContinue} />
      </View>
    </SafeAreaView>
  );
};

export default SetupIntro;

export const options: NativeStackNavigationOptions = {
  headerShown: false,
};
