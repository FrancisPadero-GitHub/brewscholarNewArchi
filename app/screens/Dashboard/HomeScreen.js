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
import Ionicons from "react-native-vector-icons/Ionicons";

// Dummy Data for visualization
const scholarships = [
  {
    id: "1",
    title: "DOST - SEI S&T",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "October 13, 2024 - November 22, 2024",
  },
  {
    id: "2",
    title: "SM COLLEGE",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "February 1 - March 31, 2024",
  },
  {
    id: "3",
    title: "CHED - K to 12",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "April 15, 2024 - June 30, 2024",
  },
  {
    id: "4",
    title: "Ateneo de Manila University",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "May 1, 2024 - July 15, 2024",
  },
  {
    id: "5",
    title: "UP College Admission Test",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "August 1, 2024 - September 30, 2024",
  },
  {
    id: "6",
    title: "San Beda University",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "January 10, 2024 - February 28, 2024",
  },
  {
    id: "7",
    title: "Mapúa University",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "March 1, 2024 - April 30, 2024",
  },
  {
    id: "8",
    title: "Lyceum of the Philippines University",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "June 1, 2024 - July 15, 2024",
  },
  {
    id: "9",
    title: "Cebu Institute of Technology",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "October 1, 2024 - November 30, 2024",
  },
  {
    id: "10",
    title: "University of Santo Tomas",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "November 1, 2024 - December 31, 2024",
  },
  {
    id: "11",
    title: "University of the Philippines Scholarship",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "June 1, 2024 - July 31, 2024",
  },
  {
    id: "12",
    title: "De La Salle University Scholarship",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "April 1, 2024 - May 31, 2024",
  },
  {
    id: "13",
    title: "Philippine Science High School",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "July 1, 2024 - August 31, 2024",
  },
  {
    id: "14",
    title: "Technological University of the Philippines",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "August 15, 2024 - September 15, 2024",
  },
  {
    id: "15",
    title: "Adamson University Scholarship",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "September 1, 2024 - October 31, 2024",
  },
  {
    id: "16",
    title: "Miriam College Foundation Scholarship",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "October 10, 2024 - November 25, 2024",
  },
  {
    id: "17",
    title: "FEU President’s Scholarship Program",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "May 1, 2024 - June 30, 2024",
  },
  {
    id: "18",
    title: "University of Asia and the Pacific",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "June 15, 2024 - July 31, 2024",
  },
  {
    id: "19",
    title: "CEU Malolos Scholarship Program",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "July 1, 2024 - August 15, 2024",
  },
  {
    id: "20",
    title: "Nueva Ecija University of Science and Technology",
    subtitle: "UNDERGRADUATE SCHOLARSHIP",
    date: "August 1, 2024 - September 30, 2024",
  },
];

// This will be changed after backend will be implemented
const ScholarshipItem = ({ item }) => (
  <TouchableOpacity style={styles.scholarshipCard} activeOpacity={0.7}>
    <Ionicons name="school-outline" style={styles.scholarshipLogo} size={35} />
    <View style={styles.scholarshipTextContainer}>
      <Text style={styles.scholarshipTitle}>{item.title}</Text>
      <Text style={styles.scholarshipSubtitle}>{item.subtitle}</Text>
      <Text style={styles.scholarshipDate}>{item.date}</Text>
    </View>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const nav = () => {
    navigation.navigate("Home Screen");
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

      <View style={styles.searchBarContainer}>
        <TouchableOpacity>
          <Ionicons name="filter" size={30} color="#1e1e1e" />
        </TouchableOpacity>

        <View style={styles.searchWithIcon}>
          <TextInput
            placeholder="Search for available scholarships"
            placeholderTextColor="#1e1e1e"
          />

          <TouchableOpacity>
            <Ionicons name="search-outline" size={30} color="#1e1e1e" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.blackCont}>
        <FlatList
          data={scholarships}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ScholarshipItem item={item} />}
          contentContainerStyle={styles.scholarshipList}
          showsVerticalScrollIndicator={true}
          indicatorStyle="white"
          horizontal={false}
          style={styles.flatList} // Add this style
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "white",
    position: "relative",
  },

  blackCont: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    width: "100%",
    height: "84%",
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

  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "gray",
    width: "100%",
    height: "6%",
    paddingLeft: "3%",
    paddingRight: "3%",
  },
  searchWithIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 50,
    width: "85%",
    height: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "#FFD700",

    // Adds shadow effect
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },

  // Styling might change upon implementation of the database backend

  flatList: {
    width: "100%", // Ensures the FlatList takes the full width of the container
    paddingTop: "5%",
  },
  scholarshipList: {
    width: "100%",
    paddingHorizontal: 23,
  },

  scholarshipCard: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scholarshipLogo: {
    // width: 50,
    // height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  scholarshipTextContainer: {
    flex: 1,
  },
  scholarshipTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scholarshipSubtitle: {
    fontSize: 14,
    color: "#ff9900",
    fontWeight: "bold",
    paddingVertical: 2,
  },
  scholarshipDate: {
    fontSize: 12,
    color: "#888",
  },
});
