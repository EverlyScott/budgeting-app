import { NavigationContainer } from "@react-navigation/native";
import Router from "./pages/router";
import { RecoilRoot } from "recoil";
import { ReactNativeRecoilPersistGate } from "react-native-recoil-persist-zod";
import { appConfigPersist, dbPersist } from "./src/atoms";

export default function App() {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <ReactNativeRecoilPersistGate stores={[appConfigPersist, dbPersist]}>
          <Router />
        </ReactNativeRecoilPersistGate>
      </RecoilRoot>
    </NavigationContainer>
  );
}
