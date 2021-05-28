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

export default function RecordItem(props) {
   
        return (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 10,
                paddingTop: 20,
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
                    source={props.data.image}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 21,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  {props.data.title}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#e76f51",
                }}
              >
                {props.data.price}
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                width: "95%",
                opacity: 0.3,
                marginLeft: 10,
                marginTop: 10,
              }}
            ></View>
          </View>
        );
    
}
