import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { CodePushSelector } from '~modules/setting/settingStore';
import { Splash, Auth, Main } from '~view';
import { navigationRef } from '~core/helper/navigate';
import { TokenSelector } from '~modules/authentication/profileStore';
const Stack = createNativeStackNavigator();

const privateScreen: any[] = [Main];
const publicScreen = [Auth];

const MainRouter = () => {
  const { splash } = useSelector(CodePushSelector);
  const { token } = useSelector(TokenSelector);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!splash ? (
          <Stack.Screen name="SplashScreen" component={Splash} />
        ) : token ? (
          privateScreen.map((res: any) => {
            return <Stack.Screen name={`${res}`} component={res} />;
          })
        ) : (
          publicScreen.map((res: any) => {
            return <Stack.Screen name={`${res}`} component={res} />;
          })
        )}
        <Stack.Screen name="MainScreen" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default React.memo(MainRouter);
