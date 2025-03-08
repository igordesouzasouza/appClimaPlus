import "../../app/global.css";
import tw from "twrnc";
import React, { useEffect, useState } from "react";
import { theme } from "../../theme/index";
import {
  Image,
  StatusBar,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1,2,3]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        blurRadius={65}
        source={require("../../assets/images/bg.png")}
        style={styles.backgroundImage}
      />
      <SafeAreaView style={tw`flex flex-1`}>
        <View style={tw`relative mx-4 z-50 mt-6`}>
          <View
            style={[
              tw`flex-row justify-end items-center rounded-full`,
              {
                backgroundColor: showSearch
                  ? theme.bgWhite(0.2)
                  : "transparent",
              },
            ]}
          >
            {showSearch ? (
              <TextInput
                placeholder="Search your City or State"
                placeholderTextColor={"lightgray"}
                style={tw`pl-6 pb-1 h-10 flex-1 text-base text-white font-medium`}
              />
            ) : null
            }

            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={[
                tw`rounded-full p-3 m-1`,
                { backgroundColor: theme.bgWhite(0.3) },
              ]}
            >
              <Ionicons name="search" color="white" size={25} />
            </TouchableOpacity>
          </View>
          {
            locations.length>0 &&  showSearch? (
                <View style={tw`absolute w-full bg-gray-400 top-16 rounded-3xl`}>{
                    locations.map((loc, index)=>{
                        return(
                            <TouchableOpacity
                            key={index}
                            style={tw`flex-row items-center border-0 p-3 px-4 mb-1 border-bg-gray-400`}>

                                <Text style={tw`text-black text-base font-semibold`}>
                                    London, united kingdom
                                </Text>
                            </TouchableOpacity>
                        )   
                    })
                } </View>
            ):null
          }
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
});
