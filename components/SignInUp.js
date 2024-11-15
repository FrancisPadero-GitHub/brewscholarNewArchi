import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomFont from "./CustomFont";

// For the Sign up / in Button
const SignInUp = ({ name, onPress, style }) => {
  // State management for the button and change the color if it's pressed or not
  const [setPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableOpacity
      style={[
        styles.signinButton,
        setPressed ? styles.buttonPressed : styles.buttonNormal,
        style, // so that some screens can override this style without affecting the original
      ]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <CustomFont
        style={[setPressed ? styles.pressedFont : styles.normalFont]}
        fontType="Bold"
      >
        {name}
      </CustomFont>
    </TouchableOpacity>
  );
};

export default SignInUp;

const styles = StyleSheet.create({
  // Default button with its default value
  signinButton: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "20%",
    borderRadius: 10,

    // Adds shadow effect
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonNormal: {
    backgroundColor: "#FFD700",
  },
  buttonPressed: {
    backgroundColor: "#1e1e1e",
  },
  // Normal font style
  normalFont: {
    color: "#1e1e1e",
    fontSize: 17,
  },
  // Pressed font style
  pressedFont: {
    color: "#ffffff",
    fontSize: 17,
  },
});
