import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { colors } from '../styles/stylesVariables.js'

export default function ({ message, onPress }) {
	return (
		<View style={styles.container}>
			<Text style={styles.message}>{message}}</Text>
		  <TouchableOpacity
		  	onPress={onPress}
		  	style={styles.btn}
		  >
		    <Text style={styles.btnText}>Try Again</Text>
		  </TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	},
	btn: {
		borderRadius: 7,
		backgroundColor: colors.blue,
		padding: 10
	},
	message: {
		color: colors.gray,
		fontFamily: 'Open Sans',
		fontSize: 16,
		marginBottom: 10
	},
	btnText: {
		color: colors.white,
		fontFamily: 'Open Sans'
	}
})