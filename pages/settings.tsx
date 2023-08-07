import { Button, FlatList, ScrollView, View, Text, TouchableHighlight, Alert, ListRenderItemInfo } from "react-native";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { ParamList } from "./router";
import { useState } from "react";
import ListItem, { ListItemSettings } from "../components/list-item";
import resetConfig from "../src/utils/resetConfig";
import { useRecoilState } from "recoil";
import { appConfigAtom, dbAtom } from "../src/atoms";

let navigationProp: NativeStackNavigationProp<ParamList, "Settings", undefined>;

const Settings: React.FC<NativeStackScreenProps<ParamList, "Settings">> = ({ navigation }) => {
  navigationProp = navigation;

  const [, setAppConfig] = useRecoilState(appConfigAtom);
  const [, setDB] = useRecoilState(dbAtom);

  return (
    <ScrollView contentContainerStyle={{ margin: 16 }}>
      <FlatList
        data={
          [
            {
              title: "Reset Config",
              type: "button",
              warningText: true,
              handleBtnPress: () => {
                Alert.alert("Are you sure?", "This will remove all settings defined during app setup.", [
                  { text: "Cancel", style: "cancel" },
                  {
                    text: "Yes",
                    style: "destructive",
                    onPress: () => {
                      resetConfig(setAppConfig, setDB);
                    },
                  },
                ]);
              },
            },
          ] as ListItemSettings<"toggle" | "button" | "page" | unknown>[]
        }
        renderItem={(rowData: ListRenderItemInfo<ListItemSettings<"toggle" | "button" | "page">>) => {
          return <ListItem rowData={rowData} key={rowData.index} />;
        }}
      />
    </ScrollView>
  );
};

export default Settings;

export const options: NativeStackNavigationOptions = {
  headerRight: () => {
    return (
      <Button
        title="Close"
        onPress={() => {
          if (navigationProp) {
            navigationProp.pop();
          } else {
            alert("Failed to navigate! Slide down to exit.");
          }
        }}
      />
    );
  },
};
