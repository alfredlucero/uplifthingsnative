import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import uuid from "react-native-uuid";
import UplifthingsHeader from "./components/UplifthingsHeader";
import UplifthingsList from "./components/UplifthingsList";
import { rootStyles } from "./styles/index";

export default function App() {
  const [uplifthings, setUplifthings] = useState(() => {
    const initialUplifthings = [];

    return initialUplifthings;
  });
  const [uplifthingInput, onChangeUplifthingInput] = useState("");
  const onPressAddUplifthing = () => {
    setUplifthings([
      ...uplifthings,
      {
        thing: uplifthingInput,
        id: uuid.v4(),
      },
    ]);
  };
  const onPressClearUplifthing = () => {
    onChangeUplifthingInput("");
  };
  const onPressClearAllUplifthings = () => {
    setUplifthings([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <UplifthingsHeader />
      <Text style={[rootStyles.subheaderText, styles.subheader]}>
        things to uplift your soul
      </Text>
      <View style={styles.uplifthingInputContainer}>
        <Text style={rootStyles.labelText}>What uplifted me today?</Text>
        <TextInput
          style={[rootStyles.baseInput, styles.uplifthingInput]}
          onChangeText={onChangeUplifthingInput}
          value={uplifthingInput}
          placeholder="I'm thankful for..."
        />
        <View style={styles.uplifthingInputButtonGroup}>
          <TouchableOpacity
            style={styles.uplifthingClearButton}
            onPress={onPressClearUplifthing}
            disabled={uplifthingInput === ""}
          >
            <View style={rootStyles.buttonSecondary}>
              <Text style={rootStyles.buttonSecondaryText}>Clear</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.uplifthingAddButton}
            onPress={onPressAddUplifthing}
            disabled={uplifthingInput === ""}
          >
            <View style={rootStyles.buttonPrimary}>
              <Text style={rootStyles.buttonPrimaryText}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <UplifthingsList uplifthings={uplifthings} />
      {uplifthings.length > 0 && (
        <View style={styles.uplifthingBottomContainer}>
          <TouchableOpacity onPress={onPressClearAllUplifthings}>
            <View style={rootStyles.buttonSecondary}>
              <Text style={rootStyles.buttonSecondaryText}>Clear All</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: StatusBar.marginTop || 0,
  },
  subheader: {
    paddingLeft: 15,
    paddingBottom: 30,
  },
  uplifthingInputContainer: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  uplifthingInput: {
    marginBottom: 10,
  },
  uplifthingInputButtonGroup: {
    flexDirection: "row",
  },
  uplifthingClearButton: {
    flex: 1,
    marginRight: 5,
  },
  uplifthingAddButton: {
    flex: 1,
  },
  uplifthingBottomContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
