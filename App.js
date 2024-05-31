import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import Header from "./src/components/layout/Header";
import Movies from "./src/components/screens/Movies";
import SearchResults from "./src/components/screens/SearchResults";
import TVShows from "./src/components/screens/TVShows";

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { textTransform: "none" },
          }}
        >
          <Tab.Screen name="Movies" component={Movies} />
          <Tab.Screen name="Search Results" component={SearchResults} />
          <Tab.Screen name="TV Shows" component={TVShows} />
        </Tab.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
