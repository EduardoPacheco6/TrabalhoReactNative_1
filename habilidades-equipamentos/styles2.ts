import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
    logo: {
        fontSize: 28,
        flex: 1,
        color: '#3b5998'
    },
    login: {
        flex: 1.5,
        backgroundColor: '#fff',
        borderColor:'#fff',
        borderWidth: 4,
        borderRadius: 5,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{translateX: -164.5}, {translateY: -200}]
    },
    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        padding: 10
    },
    button: {
        width: 300,
        height: 40,
        backgroundColor: '#3b5998',
        borderRadius: 5,
        alignSelf: 'center',
        margin: 10
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    senha:{
        fontSize: 10,
        color: '#3b5998',
        textAlign: 'center',
    },
    buttonNovaConta:{
        width: 150,
        height: 40,
        backgroundColor: '#2ecc71',
        borderRadius: 5,
        alignSelf: 'center',
        margin: 10
    },
    buttonNovaContaText:{
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});