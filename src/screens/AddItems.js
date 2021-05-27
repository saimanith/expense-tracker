import React ,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import RecordItem from "../components/RecordItem";
import { RecordItems } from "../Data/data";
//import { RecordItems } from "../Data/data";



export default function AddItems({navigation})  {
   
        
    
   const navigationOptions = {
    title: "Home",
    };
    function handleChange(value) {
          console.log(`Check ${value}`)
        setNumber(value);
      }

    function handleAdd() {
    const newList = list.concat({
        image: require("../images/food.png"),
        title: "food & Drinks",
        price: `$ -${number}.00`,
    });
        setList(newList);
    }
       const { navigate } = navigation;
      const RecordItems = [
         {
           image: require("../images/electricity.png"),
           title: "Electricity",
           price: "$ -23.00",
         },
         {
           image: require("../images/taxi.png"),
           title: "Taxi",
           price: "$ -39.00",
         },
         {
           image: require("../images/food.png"),
           title: "Food & Drinks",
           price: "$ -40.00",
         },
         {
           image: require("../images/train.png"),
           title: "Train",
           price: "$ -20.00",
         },
      ];
  
     
      const [list, setList] = React.useState(RecordItems);
      const [number, setNumber] = React.useState(null);

      
          
        
      
    return (
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            marginTop: 100,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View
            style={{ flexDirection: "row", padding: 20, alignItems: "center" }}
          >
            <TouchableOpacity
              onPress={() => navigate("Home", { name: "Home" })}
            >
              <Icon name="close" size={40} color="#00192D" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "700",
                marginLeft: 50,
              }}
            >
              Add Transaction
            </Text>
          </View>

          <View style={{ flexDirection: "row", padding: 30 }}>
            <View style={styles.usd}>
              <Text style={styles.usdtext}>USD</Text>
            </View>
            <TextInput
              placeholder="amount spent"
              keyboardType="numeric"
              value={number}
              onChangeText={handleChange}
              style={styles.textinput}
            ></TextInput>
          </View>

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
                  height: 70,
                  width: 70,
                  borderRadius: 100,
                  backgroundColor: "#00192d",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ height: 50, width: 50 }}
                  source={require("../images/food.png")}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  Food & Drinks
                </Text>
                <View
                  style={{
                    borderBottomWidth: 2,
                    width: "120%",
                    marginTop: 20,
                    marginLeft: 20,
                    opacity: 0.4,
                  }}
                ></View>
              </View>
            </View>
            <Icon name="down" size={40} color="#00192D" />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: 30,
              paddingTop: 30,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 100,
                  backgroundColor: "#00192d",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="filetext1" size={40} color="#ffffff" />
              </View>
              <View>
                <TextInput
                  placeholder="Note"
                  keyboardType="numeric"
                  style={styles.noteinput}
                ></TextInput>
              </View>
            </View>
            <View>
              <Icon.Button
                name="rightcircleo"
                color="black"
                            backgroundColor="white"
                            size={50}
                onPress={() => handleAdd()}
              ></Icon.Button>
            </View>
          </View>

          <View style={styles.recordscontainer}>
            <Text style={{ padding: 20, fontSize: 25, fontWeight: "500" }}>
              Last Records
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                width: "90%",
                opacity: 0.5,
                marginLeft: 20,
              }}
            ></View>
            {list.map((item) => {
              return <RecordItem data={item} />;
            })}
          </View>
        </View>
      </View>
    );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22ce99",
  },
  recordscontainer: {
    bottom: 20,
    width: "90%",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 30,
    marginTop: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 8,
  },
  usd: {
    height: 50,
    width: 100,
    backgroundColor: "#22ce99",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  usdtext: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
  },
  textinput: {
    fontSize: 30,
    marginLeft: 10,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  noteinput: {
    fontSize: 30,
    marginLeft: 10,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
});
