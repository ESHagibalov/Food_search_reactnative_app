import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import yelp from "../api/yelp";
import DetailsOfBusiness from "../components/DetailsOfBusiness";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResults(id);
  }, []);

  if (!result) {
    return null;
  }

  console.log(`res:--------------------------------\n${result}`);
  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (<DetailsOfBusiness photos={item} />);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ResultsShowScreen;
