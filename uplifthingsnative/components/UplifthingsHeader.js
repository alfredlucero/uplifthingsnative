import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { rootStyles } from "../styles/index";

const UplifthingsHeader = () => {
  return (
    <View style={styles.container}>
      {/* TODO: add an animation to it going up from uplifthings */}
      <View style={styles.uplifthingsIcon}></View>
      <Text style={[rootStyles.headerText, styles.header]}>Uplifthings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    marginBottom: 15,
  },
  uplifthingsIcon: {
    borderRadius: 40,
    width: 80,
    height: 80,
    backgroundColor: "#95d5b2",
    top: 10,
    left: 45,
    position: "absolute",
  },
  header: {
    paddingLeft: 15,
  },
});

export default UplifthingsHeader;
