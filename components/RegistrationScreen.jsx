import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
  const [state, setState] = useState({ ...initialState });
  const [visibility, setVisibility] = useState({ hide: true, text: "To show" });
  const [showAvatar, setShowAvatar] = useState(false);

  const addAvatar = () => {
    setShowAvatar((previousState) => !previousState);
  };

  const toggleVisibilityPassword = () => {
    if (visibility.hide === true) {
      return setVisibility({ hide: false, text: "To hide" });
    }
    return setVisibility({ hide: true, text: "To show" });
  };

  const onLogin = () => {
    console.log(
      "Credentials",
      `Name: ${state.name}, Email: ${state.email}, Password: ${state.password}`
    );
    setState({ ...initialState });
    setVisibility({ hide: true, text: "To show" });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgBg}
          source={require("../assets/photo-bg.jpg")}
        >
          <View style={styles.form}>
            <View style={styles.avatar}>
              <Image
                style={[
                  styles.imgAvatar,
                  { display: showAvatar ? "flex" : "none" },
                ]}
                source={require("../assets/cat1.png")}
              />
              <TouchableOpacity
                style={[
                  styles.addAvatar,
                  { borderColor: showAvatar ? "#BDBDBD" : "#FF6C00" },
                ]}
                onPress={addAvatar}
              >
                <Text style={{ color: showAvatar ? "#BDBDBD" : "#FF6C00" }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.formTitle}>Registration</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : null}
            >
              <TextInput
                value={state.name}
                onChangeText={(text) => setState({ ...state, name: text })}
                placeholder="Username"
                style={styles.input}
              />
              <TextInput
                value={state.email}
                onChangeText={(text) => setState({ ...state, email: text })}
                placeholder="Email address"
                style={styles.input}
              />
              <View style={styles.checkboxWrapper}>
                <Text
                  style={styles.checkbox}
                  onPress={toggleVisibilityPassword}
                >
                  {visibility.text}
                </Text>
                <TextInput
                  value={state.password}
                  onChangeText={(text) =>
                    setState({ ...state, password: text })
                  }
                  placeholder="Password"
                  secureTextEntry={visibility.hide}
                  style={styles.input}
                />
              </View>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.btn} onPress={onLogin}>
              <Text style={styles.btnText}>REGISTER</Text>
            </TouchableOpacity>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Login")}
            >
              Already have an account? Sign in
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  imgBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
  },
  avatar: {
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#F6F6F6",
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: -60 }, { translateY: -60 }],
  },
  addAvatar: {
    height: 25,
    width: 25,
    position: "absolute",
    bottom: 6,
    right: 0,
    transform: [{ translateX: 12 }],
    borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  imgAvatar: {
    height: 120,
    width: 120,
    borderRadius: 25,
  },
  formTitle: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    color: "#212121",
    marginTop: 92,
    marginBottom: 33,
  },
  input: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    color: "#BDBDBD",
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  checkboxWrapper: {
    position: "relative",
  },
  checkbox: {
    position: "absolute",
    right: 0,
    top: 0,
    transform: [{ translateX: -40 }, { translateY: 20 }],
    zIndex: 10,
  },
  btn: {
    padding: 16,
    backgroundColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#FF6C00",
    marginHorizontal: 16,
    marginTop: 27,
  },
  btnText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  link: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    color: "#1B4371",
    marginTop: 16,
    marginBottom: 66,
    textAlign: "center",
  },
});

export default RegistrationScreen;
