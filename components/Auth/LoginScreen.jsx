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
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState({ ...initialState });
  const [visibility, setVisibility] = useState({ hide: true, text: "To show" });

  const toggleVisibility = () => {
    if (visibility.hide === true) {
      return setVisibility({ hide: false, text: "To hide" });
    }
    return setVisibility({ hide: true, text: "To show" });
  };

  const onLogin = () => {
    console.log(
      "Credentials",
      `Email: ${state.email}, Password: ${state.password}`
    );
    setState({ ...initialState });
    setVisibility({ hide: true, text: "To show" });
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgBg}
          source={require("../../assets/photo-bg.jpg")}
        >
          <View style={styles.form}>
            <Text style={styles.formTitle}>Sing in</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                value={state.email}
                onChangeText={(text) => setState({ ...state, email: text })}
                placeholder="Email address"
                style={styles.input}
              />
              <View style={styles.checkboxWrapper}>
                <Text style={styles.checkbox} onPress={toggleVisibility}>
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
              <Text style={styles.btnText}>SING IN</Text>
            </TouchableOpacity>
            <Text style={styles.link}>
              No account?{" "}
              <Text onPress={() => navigation.navigate("Register")}>
                To register
              </Text>
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
  formTitle: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    color: "#212121",
    marginTop: 32,
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

export default LoginScreen;
