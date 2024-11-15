import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView, // This one is to avoid the notch screen on the IOS
} from "react-native";
import CustomFont from "../../../components/CustomFont";

const ProfileScreen = ({ navigation }) => {
  const nav = () => {
    navigation.navigate("Welcome Screen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.imgContainer}
        activeOpacity={0.5}
        onPress={nav}
      >
        <Image
          style={styles.mainLogo}
          source={require("../../../assets/img/BrewScholar.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.blackCont}>
        <CustomFont style={{ color: "white" }} fontType="Bold">
          PROFILE AREA
        </CustomFont>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "white",
    position: "relative",
  },
  blackCont: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    width: "100%",
    height: "80%",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    position: "absolute",
    bottom: 0,
    overflow: "hidden", // disables horizontal ??
  },

  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "white",
    height: "8%",
    aspectRatio: 1,
  },
  mainLogo: {
    width: "100%",
    height: "100%",
    aspectRatio: 0.75,
    resizeMode: "contain",
  },
});
