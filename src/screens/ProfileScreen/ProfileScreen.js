import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import styles from './styles'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import firebase from "../../firebase/config"
import { serverTimestamp } from 'firebase/firestore'




export default function ProfileScreen() {

  const [user, setUser] = useState()
  const [editingMode, setEditingMode] = useState(false)
  const [iconName, setIconName] = useState('edit')
  const authUser = firebase.auth().currentUser;



  useEffect(() => {
    fetchUserProfile(authUser.uid);
  }, [])



  const fetchUserProfile = async (userId) => {
    try {
      const snapshot = await firebase.firestore().collection('users').doc(userId).get()
      if (snapshot.exists) {
        setUser(snapshot.data())
      } else {
        alert("No profile found for this user.");
      }
    } catch (error) {
      alert("An error occurred while fetching the user profile")
      console.error("Error fetching profile:", error)
    }
  }



  const handleActions = () => {
    switch (iconName) {
      case 'edit':
        setIconName('save')
        setEditingMode(true)
        break;
      case 'save':
        uploadImg()
        setIconName('edit')
        setEditingMode(false)
        break;
      default:
        break;
    }
  }



  const uploadImg = async () => {
    try {
      const blob = await convertToblob(user?.imageURL);
      const storageRef = firebase.storage().ref().child(`images/${Date.now()}`);
      const uploadTask = storageRef.put(blob);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // handle progress
        },
        (error) => {
          // handle error
          console.log(error);
        },
        () => {
          // handle successful upload
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            // Save the URL to the Realtime Database
            setUser({ ...user, imageURL: downloadURL })
            updateProfile()
          }).catch((error) => {
            console.log(error)
          })
        }
      );
    } catch (error) {
      console.error(error)
    }
  }



  const convertToblob = async(uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onload = function () {
        resolve(xhr.response)
      }
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      }
      xhr.responseType = "blob"; //bufferArray
      xhr.open("GET", uri, true);
      xhr.send(null)
    })
    return blob
  }



  const updateProfile = async () => {
    const userRef = firebase.firestore().collection('users').doc(authUser.uid);
    const timestamp = serverTimestamp()
    await userRef.update({
      email: user.email,
      phoneNBR: user.phoneNBR,
      fullName: user.fullName,
      imageURL: user.imageURL,
      modifiedAt: timestamp
    });
    alert('User updated successfully');
  }



  const pickImage = async () => {
    // Request permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (!permissionResult.granted) {
      alert('Permission to access gallery is required!')
      return
    }

    // Launch the image picker
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.canceled) {
      return
    }
    if (pickerResult.assets && pickerResult.assets.length > 0) {
      setUser({ ...user, imageURL: pickerResult.assets[0].uri })
    }

  }



  const formattedStringDate = (date) => {
    return date.toLocaleString('default', {
      weekday: 'short',
      day: 'numeric',
      year: 'numeric',
      month: 'short',
    });
  }





  return (
    <View style={styles.container}>
      {/* #################################### */}
      <View style={styles.profile_container}>
        <View style={styles.profile_img_container}>
          <Image style={styles.profile_img} source={user?.imageURL ? { uri: user?.imageURL } : require('../../../assets/user.png')}></Image>
          <TouchableOpacity
            style={styles.modify_img_btn}
            onPress={pickImage}
          >
            <Text style={styles.modify_img_btn_txt}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.user_data_container}>
          {editingMode ? (
            <TextInput
              onChangeText={(text) => setUser({ ...user, fullName: text })}
              value={user.fullName}
              placeholder="Your full name..."
            />
          ) : (
            <Text style={styles.user_name}>{user?.fullName}</Text>
          )}
          <Text style={styles.account_creation}>Memeber from: {user?.createdAt ? formattedStringDate(user?.createdAt.toDate()) : 'Feb 12, 2023'}</Text>
        </View>
        <TouchableOpacity style={styles.save_chages} onPress={handleActions}>
          <MaterialIcons name={iconName} size={25} color="white" />
        </TouchableOpacity>
      </View>
      {/* #################################### */}
      <ScrollView>
        <View style={styles.overview_container}>
          {/* Overview title */}
          <View style={styles.overview_title_container}>
            <Text style={styles.overview_title}>Overview</Text>
          </View>
          {/* -------------- */}
          {/* Over-view item */}
          <View style={styles.overview_item_container}>
            <View style={styles.overview_item_icon}>
              <MaterialIcons name="email" size={25} color="black" />
            </View>
            <View style={styles.overview_item_info}>
              <Text style={styles.info_title}>E-mail</Text>
              {editingMode ? (
                <TextInput
                  onChangeText={(text) => setUser({ ...user, fullName: text })}
                  value={user.email}
                  placeholder="e-mail..."
                />
              ) : (
                <Text style={styles.info_info}>{user?.email ? user?.email : 'user.email@domain.com'}</Text>
              )}
            </View>
          </View>
          {/* -------------- */}
          {/* Over-view item */}
          <View style={styles.overview_item_container}>
            <View style={styles.overview_item_icon}>
              <MaterialIcons name="phone" size={25} color="black" />
            </View>
            <View style={styles.overview_item_info}>
              <Text style={styles.info_title}>Phone</Text>
              {editingMode ? (
                <TextInput
                  keyboardType='phone-pad'
                  onChangeText={(text) => setUser({ ...user, phoneNBR: text })}
                  value={user.phoneNBR?user.phoneNBR:'00 000 000'}
                  placeholder="Your phone number..."
                />
              ) : (
                <Text style={styles.info_info}>{user?.phoneNBR ? user?.phoneNBR : '+216 00-000-000'}</Text>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      {/* #################################### */}
    </View>
  );
}