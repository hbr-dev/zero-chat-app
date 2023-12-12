import { Dimensions, StyleSheet } from 'react-native'


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
    // ############## Profile Container Style ############## //
    profile_container: {
        backgroundColor: 'white',
        height: dimWH,
        width: dimWH,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
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
    profile_img_container: {
        position: 'relative',
    },
    profile_img: {
        height: 100,
        width: 100,
        borderRadius: 100,
    },
    modify_img_btn: {
        position: 'absolute',
        left: 32.5,
        top: 75,
        height: 35,
        width: 35,
        backgroundColor: '#3d4785',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modify_img_btn_txt: {
        color: "white",
        fontSize: 25,
    },
    user_data_container: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    user_name: {
        color: '#3d4785',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 2,
        marginBottom: 5,
        marginTop: 5,
    },
    account_creation: {
        color: '#91969C',
        fontSize: 14,
        letterSpacing: 2,
        marginBottom: 5,
        marginTop: 5,
    },
    save_chages: {
        backgroundColor: "#3d4785",
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // ################## ############### ################## //
    // ################ Over-view Container ################ //
    overview_container: {
        // backgroundColor: 'green',
        width: dimWH,
        marginTop: 30,
    },
    overview_title_container: {},
    overview_title: {
        color: '#3d4785',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },
    overview_item_container: {
        backgroundColor: 'white', 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        borderRadius: 20,
        // Shadow effect
        shadowColor: "#3d4785",
        shadowOffset: {
            width: 0,
            height: 30,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        marginTop: 10,
        marginBottom: 10,
    },
    overview_item_icon: {
        backgroundColor: "#E7EAFB",
        height: 50,
        width: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    overview_item_info: {
        marginLeft: 10,
        marginRight: 10,
    },
    info_title: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
    },
    info_info: {
       color: '#91969C',
       fontSize: 12,
       letterSpacing: 2, 
    },
    // ################## ############### ################## //
})