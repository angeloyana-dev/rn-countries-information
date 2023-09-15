import { StyleSheet, View, Text } from 'react-native'

export default function InfoScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Info Screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	}
})