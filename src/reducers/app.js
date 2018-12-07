import { dialects, features} from "../constants";

const initialState = {
  dialect: dialects.mysql,
  feature: features.formatter
};

function dialect(state = dialects.mysql, action) {
  switch (action.type) {
    case 'SET_DIALECT':
      return action.dialect
    default:
      return state
  }
}

function feature(state = features.formatter, action) {
  switch (action.type) {
    case 'SET_FEATURE':
      return action.feature;
    default:
      return state;
  }
}

function uuid(state = null, action) {
  switch (action.type) {
    case 'SET_UUID':
      return action.uuid;
    default:
      return state;
  }
}
export { initialState, dialect, feature, uuid };
