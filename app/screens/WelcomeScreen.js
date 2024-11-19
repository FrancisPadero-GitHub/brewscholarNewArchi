import { StyleSheet, View, Image } from "react-native";
import React from "react";
import CustomFont from "../../components/CustomFont";
import SignInUp from "../../components/SignInUp";
import LinkButton from "../../components/LinkButton";

const WelcomeScreen = ({ navigation }) => {
  // Navigators
  const navTo = () => {
    navigation.navigate("Login Screen");
  };
  const navToSignUp = () => {
    navigation.navigate("Registration Screen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.blackCont}>
        <SignInUp
          name="Sign Up"
          onPress={navToSignUp}
          style={{
            width: "65%",
            height: "15%",
            marginTop: 90,
            marginBottom: 20,
          }}
        />
        <LinkButton name="Already have an account? Login" onPress={navTo} />
      </View>

      <CustomFont style={[styles.commonQuote, styles.heading]} fontType="Bold">
        Let's Get Started!
      </CustomFont>

      <CustomFont style={[styles.commonQuote, styles.quote1]} fontType="Bold">
        Pour over opportunities
      </CustomFont>

      <CustomFont style={[styles.commonQuote, styles.quote2]} fontType="Bold">
        and brew up your brightest future with
      </CustomFont>

      {/* The logo will overlap the black container because of the hierarchy so this needs to be at the bottom here */}
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/img/BrewScholar.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "white",
    alignItems: "center",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "white",
    width: "50%",
    height: "25%",
    // Position
    position: "absolute",
    top: "40%",
  },
  img: {
    aspectRatio: 0.6,
  },
  commonQuote: {
    color: "#1e1e1e",
    fontSize: 15,
    letterSpacing: 2,
    textAlign: "center",
    position: "absolute",
  },
  quote1: {
    top: "33%",
  },
  quote2: {
    top: "36%",
  },
  heading: {
    fontSize: 30,
    letterSpacing: 1.5,
    top: "15%",
  },

  blackCont: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    width: "100%",
    height: "45%",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
});
