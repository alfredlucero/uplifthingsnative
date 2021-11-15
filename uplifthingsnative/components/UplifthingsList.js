import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { rootStyles } from "../styles/index";

const UplifthingsList = ({ uplifthings }) => {
  const renderItem = ({ item, index }) => (
    <UplifthingsListItem uplifthing={item} index={index} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={uplifthings}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const UplifthingsListItem = ({ uplifthing, index }) => {
  return (
    <View style={styles.listItem}>
      <Text style={rootStyles.baseText}>
        {index + 1}. {uplifthing.thing}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  subheader: {
    paddingBottom: 30,
  },
  list: {},
  listItem: {
    paddingVertical: 5,
  },
});

export default UplifthingsList;
