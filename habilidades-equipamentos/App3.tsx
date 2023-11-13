import React from 'react';
import { styles } from './styles';
import { FlatList, Text, View, Image } from 'react-native';
import { AntDesign, MaterialIcons, Ionicons, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from "./image/user.jpg";

const App = () => {

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <AntDesign name="bars" size={24} color="white" />
                <Text style={{ color: 'white' }}> Authenticator </Text>
                <AntDesign name="search1" size={24} color="white" />
                <AntDesign name="plus" size={24} color="white" />
            </View>

            <FlatList
                data={['Microsoft', 'Facebook', 'Instagram', 'NVIDIA']}
                keyExtractor={item => item}
                renderItem={({ item }) => {
                    return <View style={styles.flatlist}>
                        <View style={styles.flat}><Image source={Icon} style={styles.image} />
                            <Text style={styles.flattext}>{item}</Text>
                        </View>
                        <View><AntDesign name="right" size={24} color="black" />
                        </View>
                    </View>

                }}
            />

            <View style={styles.footer}>
                <View style={styles.TextFooter}>
                    <MaterialIcons name="home-filled" size={24} color="blue" />
                    <Text style={{ textAlign: 'center', fontSize: 10 }}>Authenticator</Text>
                </View>

                <View style={styles.TextFooter}>
                    <Ionicons name="key-outline" size={24} color="grey" />
                    <Text style={{ textAlign: 'center', fontSize: 10 }}>Senhas</Text>
                </View>

                <View style={styles.TextFooter}>
                    <EvilIcons name="location" size={24} color="grey" />
                    <Text style={{ textAlign: 'center', fontSize: 10 }}>Endereços</Text>
                </View>

                <View style={styles.TextFooter}>
                    <MaterialCommunityIcons name="certificate-outline" size={24} color="grey" />
                    <Text style={{ textAlign: 'center', fontSize: 10 }}>IDs Verificadas</Text>
                </View>

            </View >
        </View >


    )
}

export default App

