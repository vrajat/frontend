import { dialects, features} from "../constants";

const initialState = {
  dialect: dialects.mysql,
  feature: features.formatter
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
