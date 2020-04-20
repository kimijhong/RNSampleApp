import React, { PureComponent } from "react";
import { StyleSheet, StatusBar, Dimensions, View } from "react-native";
import { GameEngine, GameLoop } from "react-native-game-engine";
import { Finger } from "./renderers";
import { MoveFinger } from "./systems"

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

export default class BestGameEver extends PureComponent {
  constructor(props:any) {
    super(props);
    this.state = {
        x: WIDTH / 2 - RADIUS,
        y: HEIGHT / 2 - RADIUS
      };
  }

  updateHandler = ({ touches, screen, layout, time }) => {
    let move = touches.find(x => x.type === "move");
    if (move) {
      this.setState({
        x: this.state.x + move.delta.pageX,
        y: this.state.y + move.delta.pageY
      });
    }
  };

  render() {

    return(<GameLoop style={styles.container} onUpdate={this.updateHandler}>

        <View style={[styles.player, { left: this.state.x, top: this.state.y }]} />

      </GameLoop>);
    /*
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={{
          1: { position: [40,  200], renderer: <Finger />}, //-- Notice that each entity has a unique id (required)
          2: { position: [100, 200], renderer: <Finger />}, //-- and a renderer property (optional). If no renderer
          3: { position: [160, 200], renderer: <Finger />}, //-- is supplied with the entity - it won't get displayed.
          4: { position: [220, 200], renderer: <Finger />},
          5: { position: [280, 200], renderer: <Finger />}
        }}>

        <StatusBar hidden={true} />

      </GameEngine>
    );*/
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  player: {
    position: "absolute",
    backgroundColor: "pink",
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS * 2
  }
});



//AppRegistry.registerComponent("BestGameEver", () => BestGameEver);