import { Dimensions, StyleSheet } from 'react-native';





dimWH = (Dimensions.get('window').width) - 60;

export default StyleSheet.create({
    // ################## Container Style ################## //
    container: {
        backgroundColor: '#F3F8FE',
        flex: 1,
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 50,
    },
    // ################## ############### ################## //
    // ################### Sea_rch Style ################### //
    search_container: {
        backgroundColor: 'white',
        width: dimWH,
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 30,
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
    search_input: {
        fontSize: 14,
        color: '#91969C',
    },
    // ################## ############### ################## //
    // ##################   Use_rs list   ################## //
    users_list_container: {
        // backgroundColor: 'yellow',
        width: dimWH,
        marginTop: 25,
        marginBottom: 10,
        height: 100,
    },
    user_item_container: {
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    user_item_img: {
        height: 70,
        width: 70,
        borderWidth: .5,
        borderColor: 'black',
        borderRadius: 70,
        marginBottom: 5,
    },
    user_item_fullname: {
        fontSize: 16,
        color: '#91969C',
        fontWeight: 'bold',
        marginTop: 5,
    },
    // ################## ############### ################## //
    // ##################  Mesages style  ################## //
    messages_container: {
        paddingBottom: 10,
    },
    message_title_container: {
        width: dimWH
    },
    message_title: {
        color: '#3d4785',
        fontSize: 18,
        letterSpacing: 2,
    }
    // ################## ############### ################## //
});