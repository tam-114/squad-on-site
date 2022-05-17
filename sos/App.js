//import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
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

// function Games ({navigation}) {
//   let gamesList = [
//     {
//       id: "1",
//       gameName: "Minecraft",
//       url: "https://i.imgur.com/0XDOOWv.png",
//     },
//     {
//       id: "2",
//       gameName: "Call of Duty: Warzone",
//       url: "https://i.imgur.com/QFVKbBl.jpg",
//     },
//     {
//       id: "3",
//       gameName: "Super Smash Bros",
//       url: "https://i.imgur.com/fVUAtzj.jpg",
//     },
//     {
//       id: "4",
//       gameName: "Apex Legends",
//       url: "https://i.imgur.com/GboA3ih.jpg",
//     },
//   ]
//   return (
//     <>
//     <View styles={{backgroundColor: "#7CB6A9"}}>
//       <Text style={styles.headerText}>Games</Text>
//     </View>
//     <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
//       <FlatList
//       data={gamesList}
//       numColumns={2}
//       keyExtractor={item => item.id.toString()}
//       renderItem={({item}) => (
//         <>
//         <TouchableOpacity
//           onPress={() => navigation.navigate({
//             name: "Teams",
//             params: {gameName: item.gameName},
//             merge: true,
//           })}>
//           <View>
//             <Image
//             source={{uri: item.url}}
//             resizeMode="contain"
//             style={{width: 200, height: 330, margin: 10}}>
//             </Image>
//           </View>
//           <Text style={{textAlign: "center"}}>{item.gameName}</Text>
//         </TouchableOpacity>
//         </>
//       )} >

//       </FlatList>
//     </SafeAreaView>
    
//     </>
//   );
// }

function Teams () {
  return (
    <>
    <View style={{flex: 1, backgroundColor: "#7CB6A9", alignContent: "center", justifyContent: "center"}}>
      <View style={{height: 200, flexDirection: "row" }}>
        <View style={{flex: 1, alignContent: "center", justifyContent: "center", marginLeft: 50,alignItems: "center"}}>
          <Image
            source={require("./images/souls-team-logo.jpg")}
            resizeMode="contain"
            style={{
              height: 100,
              width: 100,
              borderRadius: 200
            }}
          ></Image>
          <Text style={{fontSize: 20, color: "#fff"}}>Harvester Souls</Text>
        </View>
        <View style={{flex: 2, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            10 Online
            <Image
              source={require("./images/user-30.png")}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                marginLeft: 5
              }}
            ></Image>
          </Text>
          <Text style={{fontSize: 20}}>
            8 Offline
            <Image
              source={require("./images/member-30.png")}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                marginLeft: 5
              }}
            ></Image></Text>
          
        </View>
        <View style={{flex: 3, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
          <Text style={{textAlign: "center", marginLeft: 15, color: "#fff"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac magna ac erat scelerisque finibus vel sed ipsum.</Text>
          <TouchableOpacity
            style={[styles.buttonStyle, {marginTop: 15}]}>
              <Text style={{color: "#fff"}}>Join the Team</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor: "#5DA595", height: 200, flexDirection: "row"}}>
      <View style={{flex: 1, alignContent: "center", justifyContent: "center", marginLeft: 50, alignItems: "center"}}>
          <Image
            source={require("./images/dragon-team-logo.jpg")}
            resizeMode="contain"
            style={{
              height: 100,
              width: 100,
              borderRadius: 200
            }}
          ></Image>
          <Text style={{fontSize: 20, color: "#fff"}}>Dragon Team</Text>
        </View>
        <View style={{flex: 2, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            8 Online
            <Image
              source={require("./images/user-30.png")}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                marginLeft: 5
              }}
            ></Image>
          </Text>
          <Text style={{fontSize: 20}}>
            6 Offline
            <Image
              source={require("./images/member-30.png")}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                marginLeft: 5
              }}
            ></Image></Text>
          
        </View>
        <View style={{flex: 3, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
          <Text style={{textAlign: "center", marginLeft: 15, color: "#fff"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac magna ac erat scelerisque finibus vel sed ipsum.</Text>
          <TouchableOpacity
            style={[styles.buttonStyle, {marginTop: 15}]}>
              <Text style={{color: "#fff"}}>Join the Team</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor: "#4B8E7F", height: 200, flexDirection: "row"}}>
      <View style={{flex: 1, alignContent: "center", justifyContent: "center", marginLeft: 50, alignItems: "center"}}>
          <Image
            source={require("./images/squirrel-team-logo.jpg")}
            resizeMode="contain"
            style={{
              height: 100,
              width: 100,
              borderRadius: 200
            }}
          ></Image>
          <Text style={{fontSize: 20, color: "#fff"}}>Squirrel Team</Text>
        </View>
        
        <View style={{flex: 2, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            6 Online
            <Image
              source={require("./images/user-30.png")}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                marginLeft: 5
              }}
            ></Image>
          </Text>
          <Text style={{fontSize: 20}}>
            4 Offline
            <Image
              source={require("./images/member-30.png")}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                marginLeft: 5
              }}
            ></Image></Text>
          
        </View>
        <View style={{flex: 3, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
          <Text style={{textAlign: "center", marginLeft: 15, color: "#fff"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac magna ac erat scelerisque finibus vel sed ipsum.</Text>
          <TouchableOpacity
            style={[styles.buttonStyle, {marginTop: 15}]}>
              <Text style={{color: "#fff"}}>Join the Team</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor: "#337465", height: 200, flexDirection: "row"}}>
      <View style={{flex: 1, alignContent: "center", justifyContent: "center", marginLeft: 50, alignItems: "center"}}>
          <Image
            source={require("./images/battlestar-team-logo.jpg")}
            resizeMode="contain"
            style={{
              height: 100,
              width: 100,
              borderRadius: 200
            }}
          ></Image>
          <Text style={{fontSize: 20, color: "#fff"}}>Battlestar Team</Text>
        </View>
        <View style={{flex: 2, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            10 Online
            <Image
              source={require("./images/user-30.png")}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                marginLeft: 5
              }}
            ></Image>
          </Text>
          <Text style={{fontSize: 20}}>
            8 Offline
            <Image
              source={require("./images/member-30.png")}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                marginLeft: 5
              }}
            ></Image></Text>
        </View>
        <View style={{flex: 3, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
          <Text style={{textAlign: "center", marginLeft: 15, color: "#fff"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac magna ac erat scelerisque finibus vel sed ipsum.</Text>
          <TouchableOpacity
            style={[styles.buttonStyle, {marginTop: 15}]}>
              <Text style={{color: "#fff"}}>Join the Team</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </>
  );
}

function Events () {
  return (
    <>
    <View style={styles.appBG}>
      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Image
        source={require("./images/ea_header2.jpg")}
        resizeMode="cover"
        style= {{
          height: 550,
          width: 600,
          position: "relative"
        }}
        ></Image>
        <View style={{
          backgroundColor: "#68AA9A", 
          width: 600
        }}>
          <Text style={{fontSize: 20, paddingBottom: 10, paddingTop: 10, fontWeight: "bold", marginLeft: 15, marginRight: 15, color: "#fff"}}>EA Announces New Lord Of The Rings Mobile RPG</Text>

          <Text style={{fontSize: 18, paddingBottom: 15, marginLeft: 15, marginRight: 15, color: "#fff"}}>Electronic Arts has announced that it has partnered with Middle-earth Enterprises to develop a new free-to-play mobile game based on The Lord of the Rings. Titled The Lord of the Rings: Heroes of Middle-Earth, this game is a collectible role-playing game that brings the fantasy of Tolkien’s Lord of the Rings to a “strategic, social-competitive experience” on mobile devices. EA says... </Text>

          <View style={{display: "inline", marginBottom: 10}}>
            <Text style={{padding: 20, color: "white"}}>
              <Image
                source={require("./images/worldwide.png")}
                resizeMode="contain"
                style={{
                  height: 15,
                  width: 15,
                  marginRight: 5
                }}></Image>

              GameInformer.com
              </Text>

              <Text style={{padding: 20, color: "white"}}>
                <Image
                  source={require("./images/clock.png")}
                  resizeMode="contain"
                  style={{
                    height: 15,
                    width: 15,
                    marginRight: 5
                  }}></Image>

              May 9th, 8:00AM
            </Text>
          </View>
        </View>
      </View>
      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Image
          source={require("./images/modern_warfare_header.jpg")}
          resizeMode="cover"
          style= {{
            height: 550,
            width: 600
          }}></Image>
        <View style={{
          backgroundColor: "#68AA9A", 
          width: 600
          }}>
          <Text style={{fontSize: 20, paddingBottom: 10, paddingTop: 10, fontWeight: "bold", marginLeft: 15, color: "#fff"}}>Call Of Duty: Modern Warfare 2 Officially Confirmed</Text>
          <Text style={{fontSize: 18, paddingBottom: 15, marginLeft: 15, color: "#fff"}}>Activision Blizzard has announced that Call of Duty: Modern Warfare II is the next title in the franchise. Surprising nobody, especially considering that the company had previously revealed that this year’s Call of Duty would be a sequel to 2019’s Call of Duty Modern Warfare reboot, a new teaser dropped on Twitter today revealed not just the title, but the logo for this sequel, too...</Text>

          <View style={{display: "inline", marginBottom: 10}}>
            <Text style={{padding: 20, color: "#fff"}}>
              <Image
                source={require("./images/worldwide.png")}
                resizeMode="contain"
                style={{
                  height: 15,
                  width: 15,
                  marginRight: 5
                }}></Image>

              GameInformer.com
              </Text>

              <Text style={{padding: 20}}>
                <Image
                  source={require("./images/clock.png")}
                  resizeMode="contain"
                  style={{
                    height: 15,
                    width: 15,
                    marginRight: 5
                  }}
                ></Image>

              Apr 28th, 12:25PM
            </Text>
          </View>
        </View>
      </View>
    </View>
    </>
  );
}

function Settings ({navigation}) {
let profileButtons = [
  {
    id: "1",
    btnName: "Edit Profile"
  },
  {
    id: "2",
    btnName: "Team Options"
  },
  {
    id: "3",
    btnName: "Link Platform"
  },
  {
    id: "4",
    btnName: "Personality Test"
  },
  {
    id: "5",
    btnName: "Delete Account"
  }
]
  return (
    <>
    <View style={[{justifyContent: 'center', alignItems: 'center'}, styles.appBG]}>
      <Image source={require("./images/new-silhouette-red-darkblue-teal-transparent.png")} resizeMode="contain" 
      style={[styles.profSize, {border: "1px solid black", borderRadius: 200}]}>
      </Image>
    </View>
    <View style={{backgroundColor: "#7CB6A9", alignItems: 'center', flex: 1, justifyContent: 'flex-start'}}>
      <SafeAreaView>
        <FlatList
        data={profileButtons}
        numColumns={1}
        keyExtractor={item  => item.id.toString()}
        renderItem={({item}) => (
          <>
          {/* <TouchableOpacity> */}
          <Text 
            style={[
              styles.buttonStyle, 
              {
                marginBottom: 20, 
              }
              ]}>
                {item.btnName}
          </Text>
          {/* </TouchableOpacity> */}
          </>
        )}>

        </FlatList>
      </SafeAreaView>
    </View>
    </>
  );
}

function Profile () {
  return (
    <>
    <View style={styles.appBG}>
      
    </View>
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

const Tab = createBottomTabNavigator();

function LoggedIn ({navigation}) {
  return (
    <>
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "rgb(242, 242, 242)"
        }
      }}>
      {/* <Tab.Screen name="Games" component={Games} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
            <Image
              source={require("./images/console.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}>
            </Image>
            <Text>Games</Text>
          </View>
        )
        }}/> */}
      <Tab.Screen name="Teams" component={Teams} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
            <Image
              source={require("./images/team.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}>
            </Image>
            <Text>Teams</Text>
          </View>
        )
        }}/>
      <Tab.Screen name="Events" component={Events} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
            <Image
              source={require("./images/events.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}>
            </Image>
            <Text>Events</Text>
          </View>
        )
        }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
            <Image
              source={require("./images/user.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}>
            </Image>
            <Text>Profile</Text>
          </View>
        )
        }}/>
      <Tab.Screen name="Settings" component={Settings} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
            <Image
              source={require("./images/settings.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}>
            </Image>
            <Text>Settings</Text>
          </View>
        )
        }}/>
    </Tab.Navigator>
    </>
  );
}
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: '#7CB6A9' },
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
    flex: 1,
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
  },
  headerText: {
    fontSize: 40,
    color: "#fff",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  profSize: {
    width: 200,
    height: 200
  }
});

// Resources:
// https://stackoverflow.com/questions/50619693/change-app-background-color-in-react-native
// https://stackoverflow.com/questions/43585297/react-native-button-style-not-work
// https://reactnavigation.org/docs/nesting-navigators/
// https://reactnavigation.org/docs/bottom-tab-navigator/#tabbarbadge
// https://reactnavigation.org/docs/tab-based-navigation/
// https://stackoverflow.com/questions/71707913/how-to-use-grid-for-image-and-text-react-native
// https://reactnavigation.org/docs/themes/
// https://reactnavigation.org/docs/material-bottom-tab-navigator/
// https://stackoverflow.com/questions/58824285/react-native-inline-image-with-text
// Game News:
// https://www.gameinformer.com/2022/04/28/call-of-duty-modern-warfare-2-officially-confirmed
// https://www.gameinformer.com/2022/05/09/ea-announces-new-lord-of-the-rings-mobile-rpg