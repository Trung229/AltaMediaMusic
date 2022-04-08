import {combineReducers} from '@reduxjs/toolkit';
import {createWhitelistFilter} from 'redux-persist-transform-filter';

import profileStore from './authentication/profileStore';
import mgwStore from './mgw/mgwStore';
import settingStore from './setting/settingStore';
import schedulesStore from './schedules/schedulesStore';

import appStore from './app/appStore';

const appReducer = combineReducers({
  appStore: appStore.reducer,
  profileStore: profileStore.reducer,
  settingStore: settingStore.reducer,
  mgwStore: mgwStore.reducer,
  schedulesStore: schedulesStore.reducer,
});
const profile = createWhitelistFilter('profileStore', ['token', 'user']);
const setting = createWhitelistFilter('settingStore', [
  'language',
  'splash',
  'mode',
]);
const mgw = createWhitelistFilter('mgwStore', ['groups', 'active', 'medias']);
const app = createWhitelistFilter('appStore', ['mode', 'clientId', 'rect']);

export const transforms = [profile, setting, mgw, app];
export type RootState = ReturnType<typeof appReducer>;
export default appReducer;
