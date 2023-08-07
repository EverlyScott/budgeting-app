import { DeepPartial } from "../types";

const setPartialState = <T>(
  initialState: T,
  setState: React.Dispatch<React.SetStateAction<T>>,
  partialState: DeepPartial<T>
) => {
  // if (typeof initialState === typeof partialState) {
  switch (typeof partialState) {
    case "object": {
      setState({
        ...initialState,
        ...partialState,
      });
      break;
    }
    default: {
      throw `Not implemented for type ${typeof partialState}!`;
    }
  }
  // } else {
  //   throw "initialState and partialState do not have matching types!";
  // }
};

export default setPartialState;
