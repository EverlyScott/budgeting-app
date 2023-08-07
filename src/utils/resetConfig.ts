import { AppConfig, DB } from "../types";
import { z } from "zod";

const resetConfig = (
  setAppConfig: React.Dispatch<React.SetStateAction<z.infer<typeof AppConfig>>>,
  setDB: React.Dispatch<React.SetStateAction<z.infer<typeof DB>>>
) => {
  setAppConfig(undefined);
  setDB(undefined);
};

export default resetConfig;
