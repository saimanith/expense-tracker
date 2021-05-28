import React ,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Picker,
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
          // console.log(`Check ${value}`)
        setNumber(value);
      }

  function handleAdd() {
    console.log(icon);
    
    const newList = list.concat({
        image: pic,
        title: selectedValue,
        price: `$ -${number}.00`,
    });
        setList(newList);
    }
       const { navigate } = navigation;
      // const RecordItems = [
      //    {
      //      image: require("../images/electricity.png"),
      //      title: "Electricity",
      //      price: "$ -23.00",
      //    },
      //    {
      //      image: require("../images/taxi.png"),
      //      title: "Taxi",
      //      price: "$ -39.00",
      //    },
      //    {
      //      image: require("../images/food.png"),
      //      title: "Food & Drinks",
      //      price: "$ -40.00",
      //    },
      //    {
      //      image: require("../images/train.png"),
      //      title: "Train",
      //      price: "$ -20.00",
      //    },
      // ];
  
     
      const [list, setList] = React.useState(RecordItems);
      const [number, setNumber] = React.useState(null);

  const [selectedValue, setSelectedValue] = React.useState("java");
  const [icon, setIcon] = React.useState("food");
           const [pic, setPic] = React.useState(require('../images/food.png'));
          
        
      
    return (
      <ScrollView>
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
              style={{
                flexDirection: "row",
                padding: 20,
                alignItems: "center",
                justifyContent: "space-between",
              }}
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

            <View
              style={{
                flexDirection: "row",
                padding: 20,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
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

                marginHorizontal: 20,
                paddingTop: 20,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 100,
                    backgroundColor: "#00192d",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{ height: 30, width: 30 }}
                    source={pic}
                  />
                </View>
                <View>
                  <Picker
                    selectedValue={selectedValue}
                    style={{
                      fontSize: 25,
                      height: 60,
                      width: 300,
                      alignItems: "center",
                      marginLeft: 10,
                    }}
                    onValueChange={(itemValue, itemIndex) => {
                      
                      if (itemValue === "Food & Drinks") {
                        setPic(require("../images/food.png"));
                      }
                      else if (itemValue === "Train") {
                        setPic(require("../images/train.png"));
                      }
                      else if (itemValue === "Taxi") {
                        setPic(require("../images/taxi.png"));
                      }
                      else if (itemValue === "Electricity") {
                        setPic(require("../images/electricity.png"));
                          }else{  setPic(require("../images/food.png"));}
                         
                      
                      setSelectedValue(itemValue);
                      setIcon(itemValue);
                    }
                  }
                  >
                    <Picker.Item
                      
                      label="Food & Drink"
                      value="Food & Drink"
                    />
                    <Picker.Item label="Electricity" value="Electricity" />
                    <Picker.Item label="Taxi" value="Taxi" />
                    <Picker.Item label="Train" value="Train" />
                  </Picker>
                  {/* <Text
                    style={{
                      fontSize: 21,
                      fontWeight: "bold",
                      marginLeft: 20,
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
                  ></View> */}
                </View>
              </View>
              {/* <Icon name="down" size={35} color="#00192D" /> */}
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
                paddingTop: 20,
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
                    height: 50,
                    width: 50,
                    borderRadius: 100,
                    backgroundColor: "#00192d",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name="filetext1" size={30} color="#ffffff" />
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
                  size={35}
                  onPress={() => handleAdd()}
                ></Icon.Button>
              </View>
            </View>

            <View style={styles.recordscontainer}>
              <Text style={{ padding: 20, fontSize: 23, fontWeight: "700" }}>
                Last Records
              </Text>
              <View
                style={{
                  borderBottomWidth: 2,
                  width: "95%",
                  opacity: 0.5,
                  marginLeft: 10,
                }}
              ></View>
              {list.map((item) => {
                return <RecordItem data={item} />;
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22ce99",
  },
    recordscontainer: {
        
        justifyContent: 'space-between',
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
    fontSize: 21,
    marginLeft: 10,
    padding: 10,
    width: "120%",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
});
