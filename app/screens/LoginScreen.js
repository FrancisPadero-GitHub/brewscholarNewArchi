import {
  StyleSheet,
  View,
  Image,
  Keyboard,
  Alert,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import CustomFont from "../../components/CustomFont";
import SignInUp from "../../components/SignInUp";
import LinkButton from "../../components/LinkButton";
import Ionicons from "react-native-vector-icons/Ionicons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // Functions
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
    Keyboard.dismiss();
  };

  const handleLogin = () => {
    Keyboard.dismiss();
    const validEmail = "test";
    const validPassword = "test";

    if (email === validEmail && password === validPassword) {
      navigation.navigate("Dashboard");
      Alert.alert("Login Successful", "Welcome Back!");
      setErrorMessage("");
    } else if ((email === "") | (password === "")) {
      setErrorMessage("Try typing first ok??");
    } else {
      setErrorMessage("Incorrect email or password. Please try again");
    }

    return;
  };

  // Navigations
  const navToSignUp = () => {
    navigation.navigate("Registration Screen");
  };

  const nav2 = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.blackCont}>
        <View style={styles.textInputsContainer}>
          {errorMessage ? (
            <CustomFont style={styles.errorMsg} fontType="Regular">
              {errorMessage}
            </CustomFont>
          ) : null}

          <TextInput
            style={styles.emailInput}
            value={email}
            placeholder="Email"
            placeholderTextColor="#1e1e1e"
            onChangeText={setEmail}
            keyboardType="default"
            autoComplete="email"
          ></TextInput>

          <View style={styles.form}>
            <TextInput
              style={styles.passInput}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#1e1e1e"
              keyboardType="default"
              autoComplete="password"
              secureTextEntry={!isPasswordVisible}
            />

            <TouchableOpacity
              onPress={togglePasswordVisibility}
              activeOpacity="100%"
            >
              <Ionicons
                style={styles.eyeIcon}
                name={isPasswordVisible ? "eye" : "eye-off"}
                size={20}
                color="#1e1e1e"
              />
            </TouchableOpacity>
          </View>

          <SignInUp name="Login" onPress={handleLogin} />
        </View>

        <LinkButton
          name="Don't have an account? Sign up"
          onPress={navToSignUp}
        />

        <CustomFont style={[styles.orTxt]} fontType="Regular">
          Or
        </CustomFont>

        <TouchableOpacity style={styles.buttonGoogle} onPress={nav2}>
          <Image
            style={styles.googleSignLogo}
            source={require("../../assets/img/GoogleSignIn.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <LinkButton name="Forgot Password?" />
      </View>

      {/* The logo will overlap the black container because of the hierarchy so this needs to be at the bottom here */}
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/img/BrewScholar.png")}
          resizeMode="contain"
        />
      </View>
      <CustomFont style={[styles.commonQuote, styles.quote1]} fontType="Bold">
        Pour over opportunities
      </CustomFont>

      <CustomFont style={[styles.commonQuote, styles.quote2]} fontType="Bold">
        and brew up your brightest future with
      </CustomFont>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
  },

  blackCont: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    width: "100%",
    height: "80%",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },

  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "white",
    aspectRatio: 1,
    height: "25%",
    // Position to overlap
    position: "absolute",
    top: "7%",
  },
  img: {
    width: "100%",
    height: "100%",
    aspectRatio: 0.75,
    resizeMode: "contain",
  },
  commonQuote: {
    color: "#1e1e1e",
    fontSize: 15,
    letterSpacing: 2,
    textAlign: "center",
    position: "absolute",
  },
  quote1: {
    top: 1,
  },
  quote2: {
    top: 22,
  },

  errorMsg: {
    fontSize: 12,
    color: "tomato",
  },

  orTxt: {
    textAlign: "center",
    color: "#999999",
    marginTop: 25,
    marginBottom: 25,
  },

  buttonGoogle: {
    width: 200,
    height: 50,
    marginBottom: "10%",
    // backgroundColor: 'white'
  },

  googleSignLogo: {
    width: "100%",
    height: "100%",
  },

  // Text input
  textInputsContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 100,
    width: "85%",
    height: 200,
    margin: 10,
  },

  form: {
    // This is the container of the pass and eye show pass
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderColor: "#1e1e1e",
    width: "90%",
    height: "25%",
    borderWidth: 2,
    borderRadius: 10,
  },

  passInput: {
    width: "90%",
    height: "100%",
    padding: 10,
    borderRadius: 15,
  },

  emailInput: {
    backgroundColor: "#f5f5f5",
    borderColor: "#1e1e1e",
    width: "90%",
    height: "25%",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
});
