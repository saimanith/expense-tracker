import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

export default function ListItem (props){
    
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: 15,
              paddingTop: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 80,
                  backgroundColor: "#00192d",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                    >
                        
                <Image
                  resizeMode="contain"
                  style={{ height: 30, width: 30 }}
                  source={props.item.image}
                />
              </View>
              <Text
                style={{
                  fontSize: 21,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
{props.item.title}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#e76f51",
              }}
            >
              {props.item.price}
            </Text>
          </View>
        );
    
}
