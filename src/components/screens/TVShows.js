import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { getTVShows } from "../../services/api";
import DropdownMenu from "../shared/DropdownMenu";
import MovieCard from "../shared/MovieCard";
import MovieDetails from "../shared/MovieDetails";

const TVShows = () => {
  const [tvShows, setTVShows] = useState();
  const [category, setCategory] = useState("popular");
  const [categories, setCategories] = useState([
    { label: "airing_today", value: "airing_today" },
    { label: "on_the_air", value: "on_the_air" },
    { label: "popular", value: "popular" },
    { label: "top_rated", value: "top_rated" },
  ]);

  const fetchTVShows = async () => {
    const tvShowsData = await getTVShows(category);
    setTVShows(tvShowsData);
  };

  useEffect(() => {
    fetchTVShows();
  }, [category]);

  const TVShowsScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <DropdownMenu
          value={category}
          setValue={setCategory}
          items={categories}
          setItems={setCategories}
        />
        <FlatList
          data={tvShows}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieCard item={item} navigation={navigation} />
          )}
          contentContainerStyle={styles.list}
        />
      </View>
    );
  };

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="TVShowsScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TVShowsScreen" component={TVShowsScreen} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
  list: {
    padding: 10,
  },
});

export default TVShows;
