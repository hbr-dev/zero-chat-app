import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import EntitiesScreens from "./EntitiesScreen/EntitiesScreens";
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import GroupScreen from '../screens/GroupScreen/GroupScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';





const Tab = createBottomTabNavigator();

export default function Home(props) {

    const userData = props.extraData

    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#F3F8FE',
                    borderBottomWidth: 1
                },
                headerTitleStyle: {
                    color: '#3d4785'
                },
                tabBarStyle: {
                    position: "absolute",
                    bottom: 10,
                    left: 30,
                    right: 30,
                    elevation: 0,
                    backgroundColor: "white",
                    borderRadius: 15,
                    height: 80,
                    paddingTop: 10,
                    paddingBottom: 10,
                    ...styles.shadow,
                },
            }}
        >
            <Tab.Screen
                name="Entities"
                component={EntitiesScreens}
                initialParams={{ userData }}
                options={{
                    tabBarIcon: () => (
                        <Ionicons
                            name="newspaper"
                            size={30}
                            color="#3d4785"
                        ></Ionicons>
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarIcon: () => (
                        <Ionicons
                            name="chatbubbles-sharp"
                            size={30}
                            color="#3d4785"
                        ></Ionicons>
                    ),
                }}
            />
            <Tab.Screen
                name="Groups"
                component={GroupScreen}
                options={{
                    tabBarIcon: () => (
                        <Ionicons
                            name="md-people-circle-sharp"
                            size={30}
                            color="#3d4785"
                        ></Ionicons>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: () => (
                        <Ionicons
                            name="person"
                            size={30}
                            color="#3d4785"
                        ></Ionicons>
                    ),
                }}
            />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#3d4785",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});
