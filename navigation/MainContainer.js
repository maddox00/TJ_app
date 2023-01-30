import * as React from 'react';
import {View, Text} from 'react-native';

import{getFocusedRouteNameFromRoute, NavigationContainer, navigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'


import HomeScreen from './screens/HomeScreen'
import VideoScreen from './screens/VideoScreen'
import SurveyScreen from './screens/SurveyScreen'
import MedicineScreen from './screens/MedicineScreen'




const homeName = 'Home';
const videoName = 'Videos';
const surveyName = 'Surveys';
const medicineName = 'Medicine';


const Tab = createBottomTabNavigator();


export default function MainContainer(){
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName){
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === videoName){
              iconName = focused ? 'videocam' : 'videocam-outline';
            } else if (rn === surveyName){
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } else if (rn === medicineName){
              iconName = focused ? 'medkit' : 'medkit-outline';
            }

return <Ionicons name={iconName} size={size} color={color}/>

          },
        })}
        
       
        
        
        >

<Tab.Screen name={homeName} component={HomeScreen}/>
<Tab.Screen name={videoName} component={VideoScreen}/>
<Tab.Screen name={surveyName} component={SurveyScreen}/>
<Tab.Screen name={medicineName} component={MedicineScreen}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}