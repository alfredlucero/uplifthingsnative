import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import UplifthingsHeader from "./components/UplifthingsHeader";
import UplifthingsList from "./components/UplifthingsList";

const initialUplifthings = [
  {
    id: 1,
    thing: "I am thankful for...",
  },
];

export default function App() {
  const [uplifthings, setUplifthings] = useState(initialUplifthings);

  return (
    <SafeAreaView style={styles.container}>
      <UplifthingsHeader />
      <UplifthingsList uplifthings={uplifthings} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: StatusBar.marginTop || 0,
  },
});
