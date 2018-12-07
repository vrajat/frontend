import { v4 } from 'node-uuid';
import { Mixpanel } from './MixPanel';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('dblintio');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState= (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('dblintio', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

export const getUuid= (store) => {
  let localState = loadState();
  let curUuid = null;
  if (localState == null) {
    curUuid = v4();
    saveState({
      uuid: curUuid
    })
  } else {
    curUuid = localState.uuid;
  }
  store.dispatch({
    type: 'SET_UUID',
    uuid: curUuid
  });
  Mixpanel.identify(curUuid);
};


