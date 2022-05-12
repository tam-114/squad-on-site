//import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from "react";

function HomeScreen({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("./images/new-silhouette-red-darkblue-teal-transparent.png")} resizeMode="center" style={styles.logo}>
        </Image>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}>
            <Text 
            style={styles.buttonStyle}>
              Login
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text 
            style={[styles.buttonStyle, {marginTop: 20}]}>
              Sign Up
            </Text>
        </TouchableOpacity>
      </View>

    
    </>
  );
}

function Games () {
  return (
    <>
    </>
  );
}

function Teams () {
  return (
    <>
    </>
  );
}

function Events () {
  return (
    <>
    </>
  );
}

function Profile () {
  return (
    <>
    </>
  );
}

function Settings () {
  return (
    <>
    </>
  );
}

function LoginScreen ({navigation}) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let formData = [
  {
    placeholder: "Username", 
    id: "1"
  },
  {
    placeholder: "Password", 
    id: "2"
  },
  ]
  return (
    <>
    <View style={styles.container}>
      <Image source={require("./images/new-silhouette-red-darkblue-teal-transparent.png")} resizeMode="center" style={styles.logo}>
      </Image>
      <Text style={styles.bodyText}>Sign into your Squad on Site Account</Text>

      <TextInput
        placeholder={formData[0].placeholder}
        style={styles.input}
        value={username}
        onChangeText={setUsername}>
      </TextInput>

      <TextInput
        placeholder={formData[1].placeholder}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}>
      </TextInput>

      <TouchableOpacity
        onPress={() => navigation.navigate("LoggedIn")}>
          <Text 
            style={styles.buttonStyle}>
              Login
          </Text>
      </TouchableOpacity>
      
      <Text style={{marginTop: 20, textDecorationLine: "underline"}}>Forgot Password?</Text>
    </View>
    </>
  );
}

function LoggedIn ({navigation}) {
  return (
    <>
    <Tab.Navigator>
      <Tab.Screen name="Games" component={Games} />
      <Tab.Screen name="Teams" component={Teams} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
    </>
  );
}
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: '#7CB6A9' }
        }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="LoggedIn" component={LoggedIn} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBG: {
    backgroundColor: "#7CB6A9",
  },
  logo: {
    width: 400,
    height: 350,
  },
  buttonStyle: {
    backgroundColor: "#FB3939",
    color: "#fff",
    padding: "10px",
    width: 200,
    borderRadius: 20,
    textAlign: "center",
    fontSize: 18,
    // borderWidth: 2,
    border: '2px solid #fff',
  },
  input: {
    height: 40,
    margin: 24,
    borderWidth: 1,
    padding: 20,
    // width: "100%",
    color: "#000",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  bodyText: {
    fontSize: 17,
  }
});

// Resources:
// https://stackoverflow.com/questions/50619693/change-app-background-color-in-react-native
// https://stackoverflow.com/questions/43585297/react-native-button-style-not-work
// https://reactnavigation.org/docs/nesting-navigators/
// https://reactnavigation.org/docs/bottom-tab-navigator/#tabbarbadge
// https://reactnavigation.org/docs/tab-based-navigation/