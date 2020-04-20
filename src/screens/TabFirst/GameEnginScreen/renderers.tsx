import React, { PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

const RADIUS = 40;

class Finger extends PureComponent<any> {
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    return (
      <View style={[styles.finger, { left: x, top: y }]} >
            <Text style={{}}>1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  finger: {
    borderColor: "#CCC",
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: "pink",
    position: "absolute"
  }
});

export { Finger };