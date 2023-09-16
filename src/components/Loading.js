import { View, ActivityIndicator } from 'react-native'

export default function Loading(props) {
	return (
		<View style={{
			alignItems: 'center',
			flex: 1,
			justifyContent: 'center'
		}}>
		  <ActivityIndicator {...props} />
		</View>
	)
}