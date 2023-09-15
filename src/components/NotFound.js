import { StyleSheet, View, Text } from 'react-native'
import { colors } from '../styles/stylesVariables.js'

export default function NotFound({ message }) {
	return (
		<View style ={styles.container}>
		  <Text style={styles.message}>{message}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		paddingTop: 30
	},
	message: {
		color: colors.gray,
		fontSize: 17
	}
})