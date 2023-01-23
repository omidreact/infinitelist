import { Component } from "react";
import { StyleSheet,Text, View, TextInput } from "react-native";

class App extends Component {
  state = {
    teest: "این یه تسته"
  };

  changee = () => {
    this.setState({ teest: "" });
  };

  render() {
    const name = "امید";

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 9,
            backgroundColor: "pink",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ textAlign: "center" }}>این یه تست اپلیکیشن</Text>
          <TextInput
            style={{ margin: 2, backgroundColor: "white", width: "50%" }}
          />
          <TextInput
            onFocus={this.changee}
            style={{ margin: 2, backgroundColor: "white", width: "50%" }}
          >
            {this.state.teest}
          </TextInput>
          <TextInput
            autoFocus
            style={{ margin: 2, backgroundColor: "white", width: "50%" }}
          />
          <TextInput
            scrollEnabled
            style={{ margin: 2, backgroundColor: "white", width: "50%" }}
          />
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "lightblue",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              height: "100%",
              marginTop: 20,
            }}
            onPress={() => this.changee()}
          >
            {name}
          </Text>
        </View>
      </View>
    );
  }
}
export default App;
