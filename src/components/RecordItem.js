import React, { Component } from 'react'


import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

export default class RecordItem extends Component {
    render() {
        return (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 30,
                paddingTop: 30,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 100,
                    backgroundColor: "#00192d",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{ height: 30, width: 30 }}
                    source={this.props.data.image}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  {this.props.data.title}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#e76f51",
                }}
              >
                {this.props.data.price}
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                width: "85%",
                opacity: 0.3,
                marginLeft: 20,
                marginTop: 20,
              }}
            ></View>
          </View>
        );
    }
}
