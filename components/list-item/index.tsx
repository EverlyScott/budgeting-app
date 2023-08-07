import { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  ListRenderItem,
  ListRenderItemInfo,
  GestureResponderEvent,
  Switch,
} from "react-native";
import { SFSymbol } from "react-native-sfsymbols";

interface IProps {
  rowData: ListRenderItemInfo<ListItemSettings<"toggle" | "button" | "page">>;
}

export interface ListItemSettings<T extends "toggle" | "button" | "page" | unknown> {
  title: string;
  info?: string;
  type: T;
  warningText?: boolean;
  switchState: T extends "toggle" ? boolean : undefined;
  setSwitchState: T extends "toggle" ? React.Dispatch<React.SetStateAction<boolean>> : undefined;
  handleBtnPress: T extends "button" ? (evt: GestureResponderEvent) => any : undefined;
  pageName: T extends "page" ? string : undefined;
}

const ListItem: React.FC<IProps> = ({ rowData }) => {
  const [pressedDown, setPressedDown] = useState(false);

  const item = rowData.item;

  const handlePressIn = (evt: GestureResponderEvent) => {
    setPressedDown(true);
  };

  const handlePressOut = (evt: GestureResponderEvent) => {
    setPressedDown(false);
  };

  const handlePress = (evt: GestureResponderEvent) => {
    if (item.type === "button") {
      item.handleBtnPress(evt);
    }
  };

  return (
    <TouchableWithoutFeedback
      style={{ flexGrow: 1 }}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
    >
      <View
        style={{
          flexGrow: 1,
          backgroundColor: pressedDown ? "#E5E5EA" : "#ffffff",
          borderRadius: 15,
          height: 44,
          paddingVertical: 8,
          paddingHorizontal: 20,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ color: item.warningText ? "#ff0000" : undefined }}>{item.title}</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {item.type === "page" && <SFSymbol name="chevron.right" size={15} color="#C5C5C7" weight="semibold" />}
          {item.type === "toggle" && <Switch />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItem;
