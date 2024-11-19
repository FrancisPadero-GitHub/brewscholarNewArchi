import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import LoginScreen from "./app/screens/LoginScreen";

// Dashboard Tabs
import HomeScreen from "./app/screens/Dashboard/HomeScreen";
import TrackingScreen from "./app/screens/Dashboard/TrackingScreen";
import NotificationScreen from "./app/screens/Dashboard/NotificationScreen";
import ProfileScreen from "./app/screens/Dashboard/ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: "#FFD700",
          tabBarInactiveTintColor: "#ffffff",
        }}
      >
        <Tab.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Tracking Screen"
          component={TrackingScreen}
          options={{
            tabBarLabel: "Applications",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="document-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification Screen"
          component={NotificationScreen}
          options={{
            tabBarLabel: "Notifications",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="notifications-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile Screen"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Me",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person-circle-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome Screen"
            component={WelcomeScreen}
            options={{
              headerShown: true,
              title: "",
              headerStyle: {
                shadowOpacity: 0,
              },
            }}
          />
          <Stack.Screen
            name="Registration Screen"
            component={SignUpScreen}
            options={{
              headerShown: true,
              title: "Registration",
              headerStyle: {
                shadowOpacity: 0,
              },
            }}
          />
          <Stack.Screen
            name="Login Screen"
            component={LoginScreen}
            options={{
              title: "Authentication",
              headerStyle: {
                shadowOpacity: 0,
              },
            }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#1e1e1e",
    borderTopColor: "transparent",
    borderTopWidth: 0,
  },
});
