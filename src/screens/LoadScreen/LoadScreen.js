import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';

export default function Loading(props) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
        <Text style={styles.text}>{ props.loadingMSG }</Text>
      </View>
    );
}