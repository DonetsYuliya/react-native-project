import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity } from "react-native";
import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const HomeTab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  const [createInFocused, setFocused] = useState(false);

  const LogOutButton = () => {
    return (
      <TouchableOpacity
        style={{ position: "absolute", bottom: 15, right: 10 }}
        onPress={() => navigation.navigate("Login")}
      >
        <MaterialIcons name={"logout"} size={24} color={"#525151"} />
      </TouchableOpacity>
    );
  };
  const GoBackArrow = () => {
    return (
      <TouchableOpacity
        style={{ position: "absolute", bottom: 9, left: 16 }}
        onPress={() => navigation.navigate("Posts")}
      >
        <MaterialIcons name={"arrow-back"} size={24} color={"#525151"} />
      </TouchableOpacity>
    );
  };

  return (
    <HomeTab.Navigator
      initialRouteName="Posts"
      screenListeners={({ navigation }) => ({
        state: (e) => {
          const { state } = e.data;
          if (state.index == 1) return setFocused(true);
          setFocused(false);
        },
      })}
      screenOptions={({ route, navigation }) => ({
        headerStyle: styles.header,
        headerTitleAlign: "center",
        headerTitleStyle: styles.headerTitle,
        tabBarShowLabel: false,
        tabBarStyle: createInFocused ? { display: "none" } : styles.footer,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "CreatePosts") {
            iconName = "plus";
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("CreatePosts")}
                style={styles.btn}
              >
                <Feather name={iconName} size={13} color={"#FFFFFF"} />
              </TouchableOpacity>
            );
          }
          if (route.name === "Posts") {
            iconName = "grid";
          } else if (route.name === "Profile") {
            iconName = focused ? "plus" : "user";
          }
          return <Feather name={iconName} size={24} color={"#525151"} />;
        },
      })}
    >
      <HomeTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerTitle: "Publications",
          headerRight: () => {
            return <LogOutButton />;
          },
        }}
      />
      <HomeTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          headerTitle: "Create post",
          headerLeft: () => {
            return <GoBackArrow />;
          },
        }}
      />
      <HomeTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: "Profile",
        }}
      />
    </HomeTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: 0, height: 0.5 },
    shadowRadius: 27,
  },
  headerTitle: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 17,
    textAlign: "center",
    letterSpacing: 0.41,
    color: "#212121",
  },
  footer: {
    height: 83,
    paddingTop: 10,
    paddingBottom: 22,
    shadowOffset: { width: 0, height: -0.5 },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 27.18,
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 29,
    paddingVertical: 13,
    backgroundColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#FF6C00",
  },
});

export default Home;
