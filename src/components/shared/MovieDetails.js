import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const MovieDetails = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View style={styles.movieContainer}>
      <Button
        title="< Back to List"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        }}
        style={styles.poster}
      />
      <Text style={styles.description}>{item.overview}</Text>
      <Text>
        Popularity: {item.popularity} | Release Date: {item.release_date}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  backButton: {
    alignItems: "left",
  },
  description: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
});

export default MovieDetails;
