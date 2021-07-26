import 'react-native-gesture-handler'

import React, { useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';


import RNBootSplash from "react-native-bootsplash"

import BottomNavigation from "./src/components/BottomNavigation"

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  })
    
  return (
        <NavigationContainer>
          <BottomNavigation />
        </NavigationContainer>
  )
}

export default App;
