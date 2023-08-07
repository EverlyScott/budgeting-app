import ReactNativeRecoilPersist from "react-native-recoil-persist-zod";
import { AtomEffect, atom } from "recoil";
import { z } from "zod";
import { AppConfig, DB } from "./types";

export const appConfigPersist = new ReactNativeRecoilPersist(AppConfig, "app-config");

export const appConfigAtom = atom<z.infer<typeof AppConfig>>({
  key: "app-config",
  default: undefined,
  effects: [appConfigPersist.persistAtom],
});

export const dbPersist = new ReactNativeRecoilPersist(DB, "db");

export const dbAtom = atom<z.infer<typeof DB>>({
  key: "db",
  default: {
    transactions: [],
    categories: [
      {
        id: "64e8f8be-4e1a-4aeb-8be5-609ec4301fbc",
        name: "Paychecks",
        hex: "#233861",
      },
      {
        id: "a27a2b97-6af2-4ee5-bb26-d4dd1b216f3f",
        name: "Refunds",
        hex: "#2195b6",
      },
      {
        id: "47ab5af1-0f02-4311-b552-c3f87a499bc5",
        name: "Monthy Subscriptions",
        hex: "#749137",
      },
      {
        id: "bd9518aa-b0ba-4129-b775-8109c79a95a9",
        name: "Food",
        hex: "#de3211",
      },
    ],
  },
  effects: [dbPersist.persistAtom],
});
