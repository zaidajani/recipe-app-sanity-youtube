import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'expo-vector-icons';
import { Container } from './src/screens/style/styles.style';
import { HomeNavigator } from "./src/infrasture/home.navigator";
import { CardComp } from './src/components/card.component';
import { HomeScreen } from "./src/screens/home.screen";

const Tab = createBottomTabNavigator();


const SavedScreen = () => {
  return (
    <View>
      <SafeAreaView>
        <Container>
          <CardComp imageUrl="https://i.ytimg.com/vi/C4Vf8KGsf88/maxresdefault.jpg" title="Quick dal fry" />
        </Container>
      </SafeAreaView>
    </View>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size}) => {
              let iconName;

              if(route.name == "Home") {
                iconName = "md-home";
              }
              else if (route.name == "Saved") {
                iconName = "md-heart";
              }

              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
          tabBarOptions={{
            activeTintColor: "#FC5252",
            inactiveTintColor: "#898989"
          }}
        >
          <Tab.Screen name="Home" component={HomeNavigator} options={{ headerShown: false }} />
          <Tab.Screen name="Saved" component={SavedScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
}


