import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.userData}>
          <Image style={styles.avatar} source={require("../assets/cat1.png")} />
          <View>
            <Text style={styles.userName}>Donets Yuliya</Text>
            <Text style={styles.userEmail}>donecjuli@gmail.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  userData: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  userName: {
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "bold",
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto",
    fontSize: 11,
    fontWeight: "400",
    color: "rgba(33, 33, 33, 0.8)",
  },
  avatar: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "rgba(132, 129, 129, 0.8)",
  },
});
export default PostsScreen;
