import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navbar: {
        backgroundColor: '#4786E5',
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    flattext: {
        marginLeft: 5,
        color: '#000  ',
        fontSize: 22,
        fontWeight: 'bold',
    },
    image: {
        width: 50,
        height: 50
    },
    flatlist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        textAlign: 'right'
    },
    flat: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    footer: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
    },
    TextFooter:{
        alignItems: 'center',
    }
});