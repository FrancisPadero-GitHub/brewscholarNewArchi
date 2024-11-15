// LinkButton.js
import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomFont from "./CustomFont";

// For the already have account link buttons
const LinkButton = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.linkButton} onPress={onPress}>
      <CustomFont style={[styles.textLink]} fontType="Bold">
        {name}
      </CustomFont>
    </TouchableOpacity>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  // Link button
  linkButton: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textLink: {
    textDecorationLine: "underline",
    fontSize: 14,
    color: "#999999",
    letterSpacing: 1,
  },
});
