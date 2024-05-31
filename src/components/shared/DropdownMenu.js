import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
const { width } = Dimensions.get("window");

const DropdownMenu = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      value={props.value}
      items={props.items}
      defaultValue={props.value}
      setOpen={setOpen}
      setValue={props.setValue}
      setItems={props.setItems}
      style={styles.dropdown}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    width: (width * 3) / 4,
    alignItems: "center",
    marginLeft: width / 8,
    marginBottom: 10,
  },
});

export default DropdownMenu;
