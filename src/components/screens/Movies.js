import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { getMovies } from "../../services/api";
import DropdownMenu from "../shared/DropdownMenu";
import MovieCard from "../shared/MovieCard";
import MovieDetails from "../shared/MovieDetails";

const Movies = () => {
  const [movies, setMovies] = useState();
  const [category, setCategory] = useState("popular");
  const [categories, setCategories] = useState([
    { label: "now_playing", value: "now_playing" },
    { label: "popular", value: "popular" },
    { label: "top_rated", value: "top_rated" },
    { label: "upcoming", value: "upcoming" },
  ]);

  const fetchMovies = async () => {
    const moviesData = await getMovies(category);
    setMovies(moviesData);
  };

  useEffect(() => {
    fetchMovies();
  }, [category]);

  const MoviesScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <DropdownMenu
          value={category}
          setValue={setCategory}
          items={categories}
          setItems={setCategories}
        />
        <FlatList
          data={movies}
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
      initialRouteName="MoviesScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
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

export default Movies;
