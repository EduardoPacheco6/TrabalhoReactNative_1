import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles2";

const App = () => {

	return (
		<View style={[styles.container, { alignItems: 'center' }]}>
			<Text style={styles.logo}> facebook </Text>
			<View style={[styles.login, { alignItems: 'center' }]}>
				<Text>Entrar no Facebook</Text>
				<TextInput style={styles.input} placeholder="Email ou telefone" />
				<TextInput style={styles.input} placeholder="Senha" />
				<TouchableOpacity
					style={styles.button}
					onPress={() => { }}
				>
					<Text style={styles.buttonText}>Entrar</Text>
				</TouchableOpacity>
				<Text style={styles.senha} onPress={() => {

				}}>Esqueceu a conta?</Text>
				<TouchableOpacity
					style={styles.buttonNovaConta}
					onPress={() => { }}
				>
					<Text style={styles.buttonNovaContaText}>Criar nova conta</Text>
				</TouchableOpacity>


			</View>
		</View>
	)
};

export default App;