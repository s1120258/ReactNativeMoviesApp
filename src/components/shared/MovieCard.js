import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Button, ButtonText } from "@gluestack-ui/themed";
const { width } = Dimensions.get("window");

const Movies = (props) => {
  return (
    <View style={styles.movieContainer}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${props.item.poster_path}`,
        }}
        style={styles.poster}
      />
      <View style={{ width: width / 2 }}>
        <Text style={styles.title}>
          {props.item.title ? props.item.title : props.item.name}
        </Text>
        <Text>Popularity: {props.item.popularity}</Text>
        <Text>Release Date: {props.item.release_date}</Text>
        <Button
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("MovieDetails", { item: props.item });
          }}
        >
          <ButtonText>More Details</ButtonText>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
    marginBottom: 20,
    alignItems: "center",
  },
  poster: {
    width: width / 4,
    height: width / 4,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    width: width / 2,
    padding: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#1CBAE2",
    borderRadius: 10,
  },
});

export default Movies;
