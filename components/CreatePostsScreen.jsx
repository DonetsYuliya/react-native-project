import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

const postSource = require("../assets/post-1.jpg");

const initialState = {
  title: "",
  location: "",
};

const CreatePostsScreen = () => {
  const [post, setPost] = useState(false);
  const [bgCamera, setBgCamera] = useState(false);
  const [settingPost, setSettingPost] = useState(false);
  const [state, setState] = useState({ ...initialState });
  const addPost = () => {
    setPost((previousState) => !previousState);
    setBgCamera((previousState) => !previousState);
    setSettingPost((previousState) => !previousState);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.postsContainer}>
            <ImageBackground
              style={styles.post}
              source={post ? postSource : null}
            >
              <TouchableOpacity
                style={[
                  styles.cameraIcon,
                  bgCamera
                    ? { backgroundColor: "rgba(255, 255, 255, 0.3)" }
                    : { backgroundColor: "#FFFFFF" },
                ]}
                onPress={addPost}
              >
                <Image
                  source={require("../assets/camera.png")}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </ImageBackground>

            <Text style={styles.settingPost}>
              {settingPost ? "edit foto" : "upload foto"}
            </Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : null}
            >
              <View style={styles.inputWrapper}>
                <TextInput
                  value={state.title}
                  onChangeText={(text) => setState({ ...state, title: text })}
                  placeholder="Title"
                  style={[styles.input, { fontWeight: "500" }]}
                />
              </View>

              <View style={styles.inputWrapper}>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/map-pin.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TextInput
                  value={state.location}
                  onChangeText={(text) =>
                    setState({ ...state, location: text })
                  }
                  placeholder="Location"
                  style={[styles.input, { fontWeight: "400" }]}
                />
              </View>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Publish</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.btnTrash}>
            <Feather name={"trash-2"} size={24} color={"#525151"} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  icon: {
    width: 24,
    height: 24,
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
    marginBottom: 32,
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
  post: {
    height: 240,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 50,
  },
  settingPost: {
    marginTop: 8,
    marginBottom: 30,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    color: "#BDBDBD",
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  input: {
    fontFamily: "Roboto",
    fontSize: 16,
    flex: 1,
  },
  btn: {
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#FF6C00",
    marginTop: 32,
  },
  btnText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  btnTrash: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 22,
    paddingHorizontal: 23,
    paddingVertical: 8,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#F6F6F6",
  },
});

export default CreatePostsScreen;
