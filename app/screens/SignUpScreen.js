import {
  StyleSheet,
  View,
  TextInput,
  Keyboard,
  Alert,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomFont from "../../components/CustomFont";
import LinkButton from "../../components/LinkButton";
import SignInUp from "../../components/SignInUp";

const SignUpScreen = ({ navigation }) => {
  //being used in users inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // see password
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
    Keyboard.dismiss();
  };

  const checkPass = () => {
    if (password !== confirmPass) {
      Alert.alert("The password confirmation does not match");
    }
  };
  // Navigations
  const navTo = () => {
    navigation.navigate("Login Screen");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.blackCont}>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Your Name"
            placeholderTextColor="#1e1e1e"
            style={styles.nameInput}
            value={name}
            onChangeText={setName}
          ></TextInput>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#1e1e1e"
            style={styles.emailInput}
            value={email}
            onChangeText={setEmail}
          ></TextInput>

          <View style={styles.passConts}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#1e1e1e"
              style={styles.passInputs}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
            ></TextInput>

            <TouchableOpacity
              onPress={togglePasswordVisibility}
              activeOpacity="100%"
            >
              <Ionicons
                style={styles.eyeIcon}
                onPress={togglePasswordVisibility}
                name={isPasswordVisible ? "eye" : "eye-off"}
                size={20}
                color="#1e1e1e"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.passConts}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#1e1e1e"
              style={styles.passInputs}
              value={confirmPass}
              onChangeText={setConfirmPass}
              secureTextEntry={!isPasswordVisible}
            ></TextInput>

            <TouchableOpacity
              onPress={togglePasswordVisibility}
              activeOpacity="100%"
            >
            </TouchableOpacity>
          </View>
          <SignInUp
            name="Register"
            onPress={checkPass}
            style={{
              width: "90%",
              height: "13%",
            }}
          />
        </View>
        <CustomFont style={[styles.orTxt]} fontType="Regular">
          Or
        </CustomFont>

        <TouchableOpacity style={styles.buttonGoogle}>
          <Image
            style={styles.googleSignLogo}
            source={require("../../assets/img/GoogleSignIn.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <LinkButton onPress={navTo} name="Already have an account? Login" />
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

export default SignUpScreen;

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
  // Form container and design
  formContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    width: "85%",
    height: 290,
    marginTop: "26%",
  },
  nameInput: {
    backgroundColor: "#f5f5f5",
    borderColor: "#1e1e1e",
    width: "89%",
    height: "15%",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },

  emailInput: {
    backgroundColor: "#f5f5f5",
    borderColor: "#1e1e1e",
    width: "89%",
    height: "15%",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },

  passConts: {
    // Also includes the confirm password text input
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    width: "89%",
    height: "15%",
    borderWidth: 2,
    borderRadius: 10,
  },
  passInputs: {
    width: "90%",
    height: "100%",
    padding: 10,
  },

  orTxt: {
    textAlign: "center",
    color: "#999999",
    marginTop: 15,
    marginBottom: 15,
  },

  buttonGoogle: {
    width: 200,
    height: 50,
    marginBottom: "6%",
  },

  googleSignLogo: {
    width: "100%",
    height: "100%",
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
    color: "tomato",
  },
});
