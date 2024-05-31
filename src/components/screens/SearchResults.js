import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Button,
  ButtonIcon,
  ButtonText,
  FormControl,
  FormControlLabelText,
  HStack,
  Icon,
  Input,
  InputField,
  InputIcon,
  SearchIcon,
  VStack,
} from "@gluestack-ui/themed";

import { searchContents } from "../../services/api";
import DropdownMenu from "../shared/DropdownMenu";
import MovieCard from "../shared/MovieCard";
import MovieDetails from "../shared/MovieDetails";

const SearchResults = () => {
  const [contents, setContents] = useState();
  const [category, setCategory] = useState("multi");
  const [categories, setCategories] = useState([
    { label: "multi", value: "multi" },
    { label: "movie", value: "movie" },
    { label: "tv", value: "tv" },
  ]);
  let keyword;

  const fetchContents = async () => {
    const contentsData = await searchContents(
      category,
      keyword ? keyword.toLowerCase() : keyword
    );
    setContents(contentsData);
  };

  const SearchResultsScreen = ({ navigation }) => {
    return (
      <View style={styles.screen}>
        <VStack space={2} width="100%" p={5} my={10}>
          <FormControl isRequired>
            <FormControl.Label fontSize="sm">
              <FormControlLabelText>
                Search Movie/TV Show Name
              </FormControlLabelText>
            </FormControl.Label>
            <HStack width="100%" space={2}>
              <Input style={styles.inputStyles} mr={10} px={5}>
                <InputIcon>
                  <Icon as={SearchIcon} size="sm" />
                </InputIcon>
                <InputField
                  onChangeText={(value) => {
                    keyword = value;
                  }}
                  placeholder="i.e. James Bond"
                />
              </Input>
              <Button
                onPress={() => {
                  fetchContents();
                }}
              >
                <ButtonIcon as={SearchIcon} mr="$2" />
                <ButtonText>Search</ButtonText>
              </Button>
            </HStack>
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label fontSize="sm">
              <FormControlLabelText>Choose Search Type</FormControlLabelText>
            </FormControl.Label>
            <HStack width="100%" space={2}>
              <DropdownMenu
                value={category}
                setValue={setCategory}
                items={categories}
                setItems={setCategories}
              />
            </HStack>
          </FormControl>
        </VStack>

        <FlatList
          data={contents}
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
      initialRouteName="SearchResultsScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SearchResultsScreen"
        component={SearchResultsScreen}
      />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  inputStyles: {
    flex: 1,
    alignItems: "center",
  },
});

export default SearchResults;
