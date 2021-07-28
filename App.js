import 'react-native-gesture-handler'

import React, { useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import RNBootSplash from "react-native-bootsplash"

import BottomNavigation from "./src/components/BottomNavigation"
import MealsNavigation from './src/components/MealsNavigation'
import DrawNavigation from "./src/components/DrawNavigation"


const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  })
    
  return ( 
      <>
          {/* <DrawNavigation /> */}
          <MealsNavigation />
          {/* <BottomNavigation /> */}
      </>
  )
}

export default App;
