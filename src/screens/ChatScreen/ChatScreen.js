import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, FlatList, Image } from 'react-native'
import firebase from '../../firebase/config'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'





export default function ChatScreen() {

  const currentUser = firebase.auth().currentUser
  const usersRef = firebase.firestore().collection('users')
  const [users, setUsers] = useState([])
  // const database = firebase.database(
  //   "https://tp-mobile-whats-default-rtdb.firebaseio.com/"
  // );



  useEffect(() => {
    // setLoading(true)
    usersRef
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        querySnapshot => {
          const availableUsers = []
          querySnapshot.forEach(doc => {
            const availableUser = doc.data()
            availableUser.id = doc.id
            availableUsers.push(availableUser)
          });
          setUsers(availableUsers)
        },
        error => {
          console.log(error)
        }
      )
    // setLoading(false)
  }, [])



  const renderUser = ({ item }) => {
    return (
      <View style={styles.user_item_container}>
        <Image style={styles.user_item_img} source={{ uri: item.imageURL }} />
        {
          currentUser?.uid != item.id && (
            <Text style={styles.user_item_fullname}>
              {item.fullName}
            </Text>
          )
        }
      </View>
    )
  }



  return (
    <View style={styles.container}>
      {/* ################################### */}
      <View style={styles.search_container}>
        <TextInput
          placeholder='Type to search...'
          style={styles.search_input}
        />
        <Ionicons name="search" size={24} color="black" />
      </View>
      {/* ################################### */}
      {users && (
        <View style={styles.users_list_container}>
          <FlatList
            data={users}
            renderItem={renderUser}
            horizontal
            showsHorizontalScrollIndicator={false}
            // keyExtractor={(item) => item.id}
            removeClippedSubviews={true}
          />
        </View>
      )}
      {/* ################################### */}
      <View style={styles.messages_container}>
        <View style={styles.message_title_container}>
          <Text style={styles.message_title}>Messages</Text>
          <FlatList
            data={users}
            renderItem={renderUser}
            horizontal
            showsHorizontalScrollIndicator={false}
            // keyExtractor={(item) => item.id}
            removeClippedSubviews={true}
          />
        </View>
      </View>
      {/* ################################### */}
    </View>
  );
}