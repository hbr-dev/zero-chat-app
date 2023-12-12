import { Dimensions, StyleSheet } from 'react-native';


const postWH = (Dimensions.get('window').width) - 60;

export default StyleSheet.create({
    container: {
        backgroundColor: '#F3F8FE',
        flex: 1,
        alignItems: 'center',
        position: 'relative',
    },
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5,
        // Shadow effect
        shadowColor: "#3d4785",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 10,
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#3d4785',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        backgroundColor: "white",
        width: postWH,
        marginTop: 16,
        padding: 16,
        borderRadius: 5,
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    }
})