import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import firebase from '../../firebase/config'
import LoadScreen from '../LoadScreen/LoadScreen';




export default function EntitiesScreens({ route }) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])
    const [loading, setLoading] = useState(false)

    const entityRef = firebase.firestore().collection('entities')
    const userID = route.params.userData.id

    useEffect(() => {
        setLoading(true)
        entityRef
            .where("isAvailable", "==", true)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
        setLoading(false)
    }, [])

    const onAddButtonPress = () => {
        if (entityText && entityText.length > 0) {
            setLoading(true);
            const timestamp = new Date()
            const data = {
                text: entityText,
                media: null,
                isAvailable: true,
                authorID: userID,
                createdAt: timestamp,
            };
            entityRef
                .add(data)
                .then(_doc => {
                    setLoading(false)
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    setLoading(false)
                    alert(error)
                });
        }
    }

    const renderEntity = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {index}. {item.text}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add new entity'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
            {loading && <LoadScreen loadingMSG="Please wait..."/>}
        </View>
    )
}