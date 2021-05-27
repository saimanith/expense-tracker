import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import ListItem from "../components/ListItem";
import { TodayItems } from '../Data/data';
import {MonthItems} from "../Data/data";



export default class Home extends React.Component {
  state = {
    todaySelected: true,
  };
  onTabPressed = () => {
    this.setState({ todaySelected: !this.state.todaySelected });
  };
  static navigationOptions = {
    title: "Home",
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ paddingTop: 50 }}>
            <View style={styles.topnav}>
              <Icon name="menu-fold" size={40} color="#00192D" />
              <TouchableOpacity
                onPress={() => navigate("Chart", { name: "Chart" })}
              >
                <Icon name="linechart" size={40} color="#00192D" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ padding: 20 }}>
            <Text style={styles.budgettitle}>My Budget</Text>
            <Text style={styles.budgetmoney}>$ 521,436</Text>
          </View>

          <View style={styles.bottomcontainer}>
            <View>
              <View
                style={{ flexDirection: "row", paddingTop: 20, padding: 30 }}
              >
                <TouchableOpacity
                  onPress={this.onTabPressed}
                  style={[
                    styles.todaycontainer,
                    {
                      borderBottomColor: this.state.todaySelected
                        ? "#00192d"
                        : "#fff",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.today,
                      {
                        color: this.state.todaySelected ? "#00192D" : "#8e9aaf",
                      },
                    ]}
                  >
                    TODAY
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={this.onTabPressed}
                  style={[
                    styles.monthcontainer,
                    {
                      borderBottomColor: this.state.todaySelected
                        ? "#fff"
                        : "#00192d",
                      color: this.state.todaySelected ? "#8e9aaf" : "#00192d",
                    },
                  ]}
                >
                  <Text style={[styles.month, {}]}>MONTH</Text>
                </TouchableOpacity>
              </View>

              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 15,
                  }}
                >
                  <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                    {this.state.todaySelected ? "16th Nov 2020" : "Nov 2020"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: "bold",
                      color: "#e76f51",
                    }}
                  >
                    {this.state.todaySelected ? "$ 50" : "$ 900"}
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomWidth: 2,
                    width: "90%",
                    marginLeft: 20,
                    marginTop: 20,
                    opacity: 0.3,
                  }}
                ></View>
                {this.state.todaySelected ? (
                  <View style={{ width: "100%" }}>
                    <ScrollView>
                      {TodayItems.map((data) => {
                        return <ListItem item={data} />;
                      })}
                    </ScrollView>
                  </View>
                ) : (
                  <View style={{ width: "100%" }}>
                    <ScrollView>
                      {MonthItems.map((data) => {
                        return <ListItem item={data} />;
                      })}
                    </ScrollView>
                  </View>
                )}
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigate("AddItems", { name: "AddItems" })}
                style={{
                  height: 50,
                  width: 50,
                  bottom: 10,
                  backgroundColor: "#00192d",
                  borderRadius: 60,
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="plus" size={30} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22ce99",
  },
  topnav: {
    flexDirection: "row",
    marginHorizontal: 30,
    justifyContent: "space-between",
  },
  budgetmoney: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 50,
  },
  budgettitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 30,
  },
  bottomcontainer: {
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 20,
    shadowColor: "black",
    shadowRadius: 60,
    shadowOpacity: 0.5,
    
    justifyContent: "center",
    borderRadius: 50,
  },
  todaycontainer: {
    paddingVertical: 6,
    borderBottomWidth: 4,
  },
  today: {
    fontWeight: "bold",
    fontSize: 21,
  },
  monthcontainer: {
    marginLeft: 20,
    borderBottomWidth: 4,
    paddingVertical: 6,
  },
  month: {
    fontWeight: "bold",
    fontSize: 21,
    opacity: 0.5,
  },
});
